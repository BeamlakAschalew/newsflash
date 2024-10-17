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
        if (r[0][0].status === 200)
          console.log("Article inserted successfully");
        else if (r[0][0].status === 500)
          console.log("Duplicate article, not added");
        resolve();
      }
    );
  });
}

export async function saveArticles(articles: Article[]): Promise<void> {
  for (const article of articles) {
    try {
      await insertArticle(article);
    } catch (error) {
      console.error("Error inserting article:", error);
    }
  }
}
