import { Article, SourceCategory } from "../types";
import { parseDate } from "../utils";

const parseBBC = (result: any, source: SourceCategory): Article[] => {
  const items = result.rss.channel[0].item;
  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate?.[0] || null,
    description: item.description?.[0] || null,
    image: item["media:thumbnail"] ? item["media:thumbnail"][0].$.url : null,
    link: item.link?.[0] || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseCNN = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    image: item["media:group"]?.[0]?.["media:content"]?.[0]?.$.url || null,
    link: item.link?.[0] || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseAlJazeera = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    image: null,
    link: item.link?.[0] || null,
    description: item.description?.[0] || null,
    pubDate: item.pubDate ? new Date(item.pubDate[0]) : null,
    category: source.category_id,
    source: source.source_id,
  }));
};

const parseMicrosoft = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    image: null,
    link: item.link?.[0] || null,
    category: source.category_id,
    source: source.source_id,
  }));
};

const parseNYTimes = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    image: item["media:content"]?.[0]?.$.url || null,
    link: item.link?.[0] || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseGuardian = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    image:
      item["media:content"]?.find((content: any) => content.$.width === "460")
        ?.$.url || null,
    link: item.link?.[0] || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseFoxNews = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    content: item["content:encoded"]?.[0] || null,
    image: item["media:content"]?.[0]?.$.url || null,
    link: item.link?.[0] || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseNYPost = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description:
      item.description?.[0]?.["#cdata-section"] ||
      item.description?.[0] ||
      null,
    image:
      item["media:content"]?.[0]?.$.url ||
      item["media:thumbnail"]?.[0]?.$.url ||
      null,
    link: item.link?.[0] || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseDailyMail = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image:
      item["media:content"]?.[0]?.$.url ||
      item["media:thumbnail"]?.[0]?.$.url ||
      item["enclosure"]?.[0]?.$.url ||
      null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseArsTechnica = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image:
      item["media:content"]?.[0]?.$.url ||
      item["media:thumbnail"]?.[0]?.$.url ||
      item["enclosure"]?.[0]?.$.url ||
      null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseBuzzFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item["media:thumbnail"]?.[0]?.$.url || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseCBC = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0]?.replace(/<img.*?>/, "") || null,
    link: item.link?.[0] || null,
    image: item.description?.[0]?.match(/<img src='(.*?)'/)?.[1] || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseCBS = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0]?.replace(/<[^>]+>/g, "") || null,
    link: item.link?.[0] || null,
    image: item.image?.[0] || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseCBSSports = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0]?.replace(/<[^>]+>/g, "") || null,
    link: item.link?.[0] || null,
    image: item.enclosure?.[0]?.$.url || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseEngadget = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;
  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0]?.["_"].replace(/<[^>]+>/g, "") || null,
    image: item["media:content"]?.[0]?.$.url || null,
    link: item.link?.[0] || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseETOnline = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item["media:content"]?.[0]?.$.url || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseESPNFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item.image?.[0] || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseFinancialPost = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item["media:content"]?.[0]?.$.url || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseFootItalia = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item.image?.[0]?.url || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseFortuneFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item || [];

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item["media:content"]?.[0]?.$.url || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseFourFourTwoFeed = (
  result: any,
  source: SourceCategory
): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item["media:content"]?.[0]?.$.url || null, // Adjusting for media content URL
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseFoxSportsFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item["media:content"]?.[0]?.$.url || null, // Using media content URL for image
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseHackerNewsFeed = (
  result: any,
  source: SourceCategory
): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseIGNFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image:
      item["media:thumbnail"]?.[0] ||
      item["media:thumbnail"]?.[0]?.$.url ||
      null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseIndependentFeed = (
  result: any,
  source: SourceCategory
): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item["media:content"]?.[0]?.$.url || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseMashableFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => {
    let image = null;
    const contentEncoded = item["content:encoded"]?.[0] || "";
    const imgTagMatch = contentEncoded.match(/<img[^>]+src="([^"]+)"/);
    if (imgTagMatch) {
      image = imgTagMatch[1];
    }

    return {
      title: item.title?.[0] || null,
      pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
      description: item.description?.[0] || null,
      link: item.link?.[0] || null,
      image,
      source: source.source_id,
      category: source.category_id,
    };
  });
};

const parseCNBCFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseNBCFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item["media:content"]?.[0]?.$.url || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

export const parsers: Record<
  string,
  (result: any, source: SourceCategory) => Article[]
> = {
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
  "mashable.com": parseMashableFeed,
  "cnbc.com": parseCNBCFeed,
  "nbcnews.com": parseNBCFeed,
};
