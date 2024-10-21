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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fetchers_1 = require("./fetchers");
const fetchRssFeed_1 = require("./fetchers/fetchRssFeed");
const insertAtricle_1 = require("./insertAtricle");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("RSS Feed Fetcher is running!");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("Cron ready to run");
    // cron.schedule("*/10 * * * *", () => {
    console.log("Running scheduled task to fetch articles...");
    fetchers_1.sourceCategories.forEach((source) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Fetching feed from ${source.url}, Category: ${source.category_id}, Source: ${source.source_id}`);
        try {
            const articles = yield (0, fetchRssFeed_1.fetchRssFeed)(source);
            console.log(`Fetched ${articles.length} articles from ${source.url}`);
            yield (0, insertAtricle_1.saveArticles)(articles);
        }
        catch (error) {
            console.error(`Error fetching articles from ${source.url}:`, error);
        }
    }));
    // });
});
