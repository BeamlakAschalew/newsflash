import { database } from "./database";
import { Article } from "./types";
import { removeHtmlTags } from "./utils";

async function insertArticles(articles: Article[]): Promise<void> {
  if (articles.length === 0) return;

  const values = articles.map((article) => [
    removeHtmlTags(article.title),
    removeHtmlTags(article.description),
    article.image,
    article.link.trim(),
    new Date(article.pubDate),
    article.source,
    article.category,
  ]);

  const query = `INSERT IGNORE INTO articles (title, description, image_url, article_url, published_at, source_id, category_id) VALUES ?`;

  return new Promise((resolve, reject) => {
    database.query(query, [values], (err, results) => {
      if (err) {
        return reject(err.code);
      }
      const r = results as any;
      console.log(`Inserted ${r.affectedRows} articles.`);
      resolve();
    });
  });
}

export async function saveArticles(articles: Article[]): Promise<void> {
  try {
    await insertArticles(articles);
  } catch (error) {
    console.error("Error inserting article:", error);
  }
}
