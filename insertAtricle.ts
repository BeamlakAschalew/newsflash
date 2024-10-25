import { database } from "./database";
import { Article } from "./types";
import { removeHtmlTags } from "./utils";

async function insertArticles(articles: Article[]): Promise<void> {
  if (articles.length === 0) return;

  const values = articles.map((article) => [
    removeHtmlTags(article.title),
    removeHtmlTags(article.description),
    article.image,
    article.link,
    new Date(article.pubDate),
    article.source,
    article.category,
  ]);

  const query = `
    INSERT INTO articles (title, description, image_url, article_url, published_at, source_id, category_id)
    VALUES ?
    ON DUPLICATE KEY UPDATE
      description = VALUES(description),
      image_url = VALUES(image_url),
      article_url = VALUES(article_url),
      published_at = VALUES(published_at),
      source_id = VALUES(source_id),
      category_id = VALUES(category_id)
  `;

  return new Promise((resolve, reject) => {
    database.query(query, [values], (err, results) => {
      if (err) {
        return reject(err.errno);
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
