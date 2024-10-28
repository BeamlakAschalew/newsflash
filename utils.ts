export const parseDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toISOString();
};

export const removeHtmlTags = (
  input: string | null | undefined
): string | null => {
  if (input == null) return null;
  return input.replace(/<[^>]*>/g, "").trim();
};
