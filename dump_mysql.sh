#!/bin/bash

# Usage: ./dump_mysql.sh <database_name> <mysql_user> <mysql_password> <drop_tables> <no_data>
# Example: ./dump_mysql.sh my_database root my_password true true

DB_NAME=$1
DB_USER=$2
DB_PASSWORD=$3
DROP_TABLES=$4
NO_DATA=$5

# Check if the correct number of arguments is provided
if [ "$#" -ne 5 ]; then
    echo "Usage: $0 <database_name> <mysql_user> <mysql_password> <drop_tables> <no_data>"
    exit 1
fi

# File names for dump
SCHEMA_FILE="schema.sql"
DATA_FILE="data.sql"
TRIGGERS_FILE="triggers.sql"
FINAL_DUMP_FILE="${DB_NAME}_dump.sql"

# Step 1: Export the schema with or without DROP TABLE IF EXISTS
echo "Exporting schema..."
if [ "$DROP_TABLES" == "true" ]; then
    echo "Exporting schema with DROP TABLE IF EXISTS..."
    mysqldump -u"$DB_USER" -p"$DB_PASSWORD" --no-data --add-drop-table --skip-comments "$DB_NAME" > $SCHEMA_FILE
else
    echo "Exporting schema with CREATE TABLE IF NOT EXISTS..."
    mysqldump -u"$DB_USER" -p"$DB_PASSWORD" --no-data --skip-comments --skip-add-drop-table --create-options "$DB_NAME" | sed 's/CREATE TABLE `/CREATE TABLE IF NOT EXISTS `/g' > $SCHEMA_FILE
fi

# Step 2: Export data (only if NO_DATA is not "true")
if [ "$NO_DATA" == "true" ]; then
    echo "Skipping data export as 'no_data' option is enabled."
else
    echo "Exporting data..."
    mysqldump -u"$DB_USER" -p"$DB_PASSWORD" --no-create-info "$DB_NAME" > $DATA_FILE
fi

# Step 3: Export triggers, functions, and procedures (independent of data export)
echo "Exporting triggers, functions, and procedures..."
mysqldump -u"$DB_USER" -p"$DB_PASSWORD" --routines --triggers --no-data --skip-comments "$DB_NAME" > $TRIGGERS_FILE

# Modify the triggers file to add `IF NOT EXISTS` to procedures
echo "Modifying triggers/functions/procedures for 'IF NOT EXISTS'..."
sed -i 's/CREATE PROCEDURE `/CREATE PROCEDURE IF NOT EXISTS `/g' $TRIGGERS_FILE
sed -i 's/DEFINER=`root`@`localhost` //g' $TRIGGERS_FILE

# Step 4: Combine schema, data (if exported), and triggers/functions into one dump file
echo "Combining schema, data, and triggers/functions into one dump file..."

# Add foreign key disable command at the beginning of the final dump
echo "SET FOREIGN_KEY_CHECKS = 0;" > $FINAL_DUMP_FILE

# Append schema to the final dump
cat $SCHEMA_FILE >> $FINAL_DUMP_FILE

# Append data to the final dump if NO_DATA is not "true"
if [ "$NO_DATA" != "true" ]; then
    echo "Appending data to final dump..."
    cat $DATA_FILE >> $FINAL_DUMP_FILE
else
    echo "Data was skipped, so not appending to final dump."
fi

# Append triggers, functions, and procedures to the final dump (always included)
cat $TRIGGERS_FILE >> $FINAL_DUMP_FILE

# Add foreign key re-enable command at the end of the final dump
echo "SET FOREIGN_KEY_CHECKS = 1;" >> $FINAL_DUMP_FILE

# Clean up intermediate files
rm $SCHEMA_FILE
rm $TRIGGERS_FILE
if [ "$NO_DATA" != "true" ]; then
    rm $DATA_FILE
fi

# Change collation from utf8mb4_0900_ai_ci to utf8mb4_unicode_ci in schema
echo "Changing collation in schema..."
sed -i 's/utf8mb4_0900_ai_ci/utf8mb4_unicode_ci/g' $FINAL_DUMP_FILE

# Print completion message with the final dump file name
echo "Dump complete! Final dump file: $FINAL_DUMP_FILE"
