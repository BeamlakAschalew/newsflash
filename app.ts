import cron from "node-cron";
import { sourceCategories } from "./fetchers";
import { fetchRssFeed } from "./fetchers/fetchRssFeed";
import { saveArticles } from "./insertAtricle";

cron.schedule("*/10 * * * *", async () => {
  console.log("Running cron job to fetch BBC RSS feed...");
  sourceCategories.forEach((source) => {
    console.log(
      `Fetching feed from ${source.url}, Category: ${source.category_id}, Source: ${source.source_id}`
    );

    fetchRssFeed(source).then((articles) => {
      console.log(`Fetched ${articles.length} articles from ${source.url}`);
      saveArticles(articles);
    });
  });
});
