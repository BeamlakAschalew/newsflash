"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveArticles = saveArticles;
const database_1 = require("./database");
const utils_1 = require("./utils");
function insertArticles(articles) {
    return __awaiter(this, void 0, void 0, function* () {
        if (articles.length === 0)
            return;
        const values = articles.map((article) => [
            (0, utils_1.removeHtmlTags)(article.title),
            (0, utils_1.removeHtmlTags)(article.description),
            article.image,
            article.link,
            new Date(article.pubDate),
            article.source,
            article.category,
        ]);
        const query = `
    INSERT IGNORE INTO articles (title, description, image_url, article_url, published_at, source_id, category_id)
    VALUES ?
  `;
        return new Promise((resolve, reject) => {
            database_1.database.query(query, [values], (err, results) => {
                if (err) {
                    return reject(err.errno);
                }
                const r = results;
                console.log(`Inserted ${r.affectedRows} articles.`);
                resolve();
            });
        });
    });
}
function saveArticles(articles) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield insertArticles(articles);
        }
        catch (error) {
            console.error("Error inserting article:", error);
        }
    });
}
