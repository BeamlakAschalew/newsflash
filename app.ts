import cron from "node-cron";
import { sourceCategories } from "./fetchers";
import { fetchRssFeed } from "./fetchers/fetchRssFeed";
import { saveArticles } from "./insertAtricle";

sourceCategories.forEach(async (source) => {
  console.log(
    `Fetching feed from ${source.url}, Category: ${source.category_id}, Source: ${source.source_id}`
  );

  const articles = await fetchRssFeed(source);
  console.log(`Fetched ${articles.length} articles from ${source.url}`);
  await saveArticles(articles);
});
