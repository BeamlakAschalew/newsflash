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
exports.fetchRssFeed = fetchRssFeed;
const axios_1 = __importDefault(require("axios"));
const xml2js_1 = require("xml2js");
const parsers_1 = require("../parsers");
function fetchRssFeed(source) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(source.url, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    Accept: "application/rss+xml, application/xml, text/xml",
                    "Accept-Language": "en-US,en;q=0.9",
                    "Cache-Control": "no-cache",
                },
            });
            const xmlData = response.data;
            const result = yield (0, xml2js_1.parseStringPromise)(xmlData);
            const parserKey = Object.keys(parsers_1.parsers).find((key) => source.url.includes(key));
            const parse = parserKey ? parsers_1.parsers[parserKey] : null;
            if (parse) {
                const articles = parse(result, source);
                return articles;
            }
            else {
                throw new Error("No parser found for this URL");
            }
        }
        catch (error) {
            console.log("Error fetching or parsing the RSS feed:", error);
            return [];
        }
    });
}
