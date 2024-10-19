import { database } from "./database";
import { Article } from "./types";

async function insertArticle(article: Article): Promise<void> {
  const query = `
      CALL insert_article(?,?,?,?,?,?,?);
    `;

  return new Promise((resolve, reject) => {
    database.execute(
      query,
      [
        article.title,
        article.description,
        article.image,
        article.link,
        new Date(article.pubDate),
        article.source,
        article.category,
      ],
      (err, results) => {
        if (err) {
          console.error("Failed to insert article:", err);
          return reject(err);
        }
        const r = results as any;

        console.log(r[0][0].status);

        resolve();
      }
    );
  });
}

export async function saveArticles(articles: Article[]): Promise<void> {
  for (const article of articles) {
    try {
      if (article.title && article.link) {
        await insertArticle(article);
      }
    } catch (error) {
      console.error("Error inserting article:", error);
    }
  }
}
