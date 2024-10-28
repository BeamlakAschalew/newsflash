import express from "express";
import cron from "node-cron";
import { saveArticles } from "./insertAtricle";
import { fetchAll } from "./fetchers/fetchRssFeed";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("RSS Feed Fetcher is running!");
});

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Cron ready to run");
  cron.schedule("*/10 * * * *", async () => {
    console.log("Running scheduled task to fetch articles...");
    try {
      const articles = await fetchAll();
      console.log(`Fetched a total of ${articles.length} articles`);
      const batchSize = 250;

      function partitionArray<T>(array: T[], size: number): T[][] {
        const result: T[][] = [];
        for (let i = 0; i < array.length; i += size) {
          result.push(array.slice(i, i + size));
        }
        return result;
      }

      const articleBatches = partitionArray(articles, batchSize);

      for (const batch of articleBatches) {
        await saveArticles(batch);
        console.log(`Inserted batch of ${batch.length} articles.`);
      }

      console.log("All articles have been saved.");
    } catch (error) {
      console.error(`Error fetching articles ${error}:`);
    }
  });
});
