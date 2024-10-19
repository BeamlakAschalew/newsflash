"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsers = void 0;
const utils_1 = require("../utils");
const parseBBC = (result, source) => {
    const items = result.rss.channel[0].item;
    return items.map((item) => {
        var _a, _b, _c, _d;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: ((_b = item.pubDate) === null || _b === void 0 ? void 0 : _b[0]) || null,
            description: ((_c = item.description) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: item["media:thumbnail"] ? item["media:thumbnail"][0].$.url : null,
            link: ((_d = item.link) === null || _d === void 0 ? void 0 : _d[0]) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseCNN = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e, _f, _g;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            image: ((_f = (_e = (_d = (_c = item["media:group"]) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d["media:content"]) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.$.url) || null,
            link: ((_g = item.link) === null || _g === void 0 ? void 0 : _g[0]) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseAlJazeera = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            image: null,
            link: ((_b = item.link) === null || _b === void 0 ? void 0 : _b[0]) || null,
            description: ((_c = item.description) === null || _c === void 0 ? void 0 : _c[0]) || null,
            pubDate: item.pubDate ? new Date(item.pubDate[0]) : null,
            category: source.category_id,
            source: source.source_id,
        });
    });
};
const parseMicrosoft = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            image: null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            category: source.category_id,
            source: source.source_id,
        });
    });
};
const parseNYTimes = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            image: ((_d = (_c = item["media:content"]) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.$.url) || null,
            link: ((_e = item.link) === null || _e === void 0 ? void 0 : _e[0]) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseGuardian = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            image: ((_d = (_c = item["media:content"]) === null || _c === void 0 ? void 0 : _c.find((content) => content.$.width === "460")) === null || _d === void 0 ? void 0 : _d.$.url) || null,
            link: ((_e = item.link) === null || _e === void 0 ? void 0 : _e[0]) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseFoxNews = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e, _f;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            content: ((_c = item["content:encoded"]) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: ((_e = (_d = item["media:content"]) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.$.url) || null,
            link: ((_f = item.link) === null || _f === void 0 ? void 0 : _f[0]) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseNYPost = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_c = (_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c["#cdata-section"]) ||
                ((_d = item.description) === null || _d === void 0 ? void 0 : _d[0]) ||
                null,
            image: ((_f = (_e = item["media:content"]) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.$.url) ||
                ((_h = (_g = item["media:thumbnail"]) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.$.url) ||
                null,
            link: ((_j = item.link) === null || _j === void 0 ? void 0 : _j[0]) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseDailyMail = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: ((_e = (_d = item["media:content"]) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.$.url) ||
                ((_g = (_f = item["media:thumbnail"]) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.$.url) ||
                ((_j = (_h = item["enclosure"]) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.$.url) ||
                null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
exports.parsers = {
    "bbci.co.uk": parseBBC,
    "rss.cnn.com": parseCNN,
    "aljazeera.com": parseAlJazeera,
    "news.microsoft.com": parseMicrosoft,
    "rss.nytimes.com": parseNYTimes,
    "theguardian.com": parseGuardian,
    "moxie.foxnews.com": parseFoxNews,
    "nypost.com": parseNYPost,
    "dailymail.co.uk": parseDailyMail,
};
