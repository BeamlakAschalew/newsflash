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

export const parsers: Record<
  string,
  (result: any, source: SourceCategory) => Article[]
> = {
  "bbci.co.uk": parseBBC,
  "rss.cnn.com": parseCNN,
  "aljazeera.com": parseAlJazeera,
  "news.microsoft.com": parseMicrosoft,
};

export { parseBBC, parseCNN };
