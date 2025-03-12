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
const node_cron_1 = __importDefault(require("node-cron"));
const insertAtricle_1 = require("./insertAtricle");
const fetchRssFeed_1 = require("./fetchers/fetchRssFeed");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("RSS Feed Fetcher is running!");
});
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("Cron ready to run");
    node_cron_1.default.schedule("*/30 * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Running scheduled task to fetch articles...");
        try {
            const articles = yield (0, fetchRssFeed_1.fetchAll)();
            console.log(`Fetched a total of ${articles.length} articles`);
            const batchSize = 250;
            function partitionArray(array, size) {
                const result = [];
                for (let i = 0; i < array.length; i += size) {
                    result.push(array.slice(i, i + size));
                }
                return result;
            }
            const articleBatches = partitionArray(articles, batchSize);
            for (const batch of articleBatches) {
                yield (0, insertAtricle_1.saveArticles)(batch);
                console.log(`Inserted batch of ${batch.length} articles.`);
            }
            console.log("All articles have been saved.");
        }
        catch (error) {
            console.error(`Error fetching articles ${error}:`);
        }
    }));
}));
