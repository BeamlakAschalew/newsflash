import express from "express";
import cron from "node-cron";
import { sourceCategories } from "./fetchers";
import { fetchRssFeed } from "./fetchers/fetchRssFeed";
import { saveArticles } from "./insertAtricle";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (optional, e.g., for JSON parsing)
app.use(express.json());

// Basic route for testing
app.get("/", (req, res) => {
  res.send("RSS Feed Fetcher is running!");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // Cron job to fetch articles every 10 minutes
  console.log("Cron ready to run");
  cron.schedule("*/10 * * * *", () => {
    console.log("Running scheduled task to fetch articles...");
    sourceCategories.forEach(async (source) => {
      console.log(
        `Fetching feed from ${source.url}, Category: ${source.category_id}, Source: ${source.source_id}`
      );

      try {
        const articles = await fetchRssFeed(source);
        console.log(`Fetched ${articles.length} articles from ${source.url}`);
        await saveArticles(articles);
      } catch (error) {
        console.error(`Error fetching articles from ${source.url}:`, error);
      }
    });
  });
});
