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
const parseArsTechnica = (result, source) => {
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
const parseBuzzFeed = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: ((_e = (_d = item["media:thumbnail"]) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.$.url) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseCBC = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e, _f, _g;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_c = (_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.replace(/<img.*?>/, "")) || null,
            link: ((_d = item.link) === null || _d === void 0 ? void 0 : _d[0]) || null,
            image: ((_g = (_f = (_e = item.description) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.match(/<img src='(.*?)'/)) === null || _g === void 0 ? void 0 : _g[1]) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseCBS = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_c = (_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.replace(/<[^>]+>/g, "")) || null,
            link: ((_d = item.link) === null || _d === void 0 ? void 0 : _d[0]) || null,
            image: ((_e = item.image) === null || _e === void 0 ? void 0 : _e[0]) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseCBSSports = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e, _f;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_c = (_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.replace(/<[^>]+>/g, "")) || null,
            link: ((_d = item.link) === null || _d === void 0 ? void 0 : _d[0]) || null,
            image: ((_f = (_e = item.enclosure) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.$.url) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseEngadget = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e, _f;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_c = (_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c["_"].replace(/<[^>]+>/g, "")) || null,
            image: ((_e = (_d = item["media:content"]) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.$.url) || null,
            link: ((_f = item.link) === null || _f === void 0 ? void 0 : _f[0]) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseETOnline = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: ((_e = (_d = item["media:content"]) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.$.url) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseESPNFeed = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: ((_d = item.image) === null || _d === void 0 ? void 0 : _d[0]) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseFinancialPost = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: ((_e = (_d = item["media:content"]) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.$.url) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseFootItalia = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: ((_e = (_d = item.image) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.url) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseFortuneFeed = (result, source) => {
    var _a, _b, _c;
    const items = ((_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item) || [];
    return items.map((item) => {
        var _a, _b, _c, _d, _e;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: ((_e = (_d = item["media:content"]) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.$.url) || null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseFourFourTwoFeed = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: ((_e = (_d = item["media:content"]) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.$.url) || null, // Adjusting for media content URL
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseFoxSportsFeed = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: ((_e = (_d = item["media:content"]) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.$.url) || null, // Using media content URL for image
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseHackerNewsFeed = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseIGNFeed = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e, _f;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: ((_d = item["media:thumbnail"]) === null || _d === void 0 ? void 0 : _d[0]) ||
                ((_f = (_e = item["media:thumbnail"]) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.$.url) ||
                null,
            source: source.source_id,
            category: source.category_id,
        });
    });
};
const parseIndependentFeed = (result, source) => {
    var _a, _b, _c;
    const items = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.rss) === null || _a === void 0 ? void 0 : _a.channel) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.item;
    return items.map((item) => {
        var _a, _b, _c, _d, _e;
        return ({
            title: ((_a = item.title) === null || _a === void 0 ? void 0 : _a[0]) || null,
            pubDate: item.pubDate ? (0, utils_1.parseDate)(item.pubDate[0]) : null,
            description: ((_b = item.description) === null || _b === void 0 ? void 0 : _b[0]) || null,
            link: ((_c = item.link) === null || _c === void 0 ? void 0 : _c[0]) || null,
            image: ((_e = (_d = item["media:content"]) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.$.url) || null,
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
    "arstechnica.com": parseArsTechnica,
    "buzzfeed.com": parseBuzzFeed,
    "cbc.ca": parseCBC,
    "cbsnews.com": parseCBS,
    "cbssports.com": parseCBSSports,
    "engadget.com": parseEngadget,
    "etonline.com": parseETOnline,
    "espn.com": parseESPNFeed,
    "financialpost.com": parseFinancialPost,
    "footitalia.com": parseFootItalia,
    "fortune.com": parseFortuneFeed,
    "fourfourtwo.com": parseFourFourTwoFeed,
    "foxsports.com": parseFoxSportsFeed,
    "news.ycombinator.com": parseHackerNewsFeed,
    "feeds.feedburner.com/": parseIGNFeed,
    "independent.co.uk": parseIndependentFeed,
};
