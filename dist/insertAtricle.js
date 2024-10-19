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
function insertArticle(article) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `
      CALL insert_article(?,?,?,?,?,?,?);
    `;
        return new Promise((resolve, reject) => {
            database_1.database.execute(query, [
                article.title,
                article.description,
                article.image,
                article.link,
                new Date(article.pubDate),
                article.source,
                article.category,
            ], (err, results) => {
                if (err) {
                    console.error("Failed to insert article:", err);
                    return reject(err);
                }
                const r = results;
                console.log(r[0][0].status);
                resolve();
            });
        });
    });
}
function saveArticles(articles) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const article of articles) {
            try {
                if (article.title && article.link) {
                    yield insertArticle(article);
                }
            }
            catch (error) {
                console.error("Error inserting article:", error);
            }
        }
    });
}
