import { Article, SourceCategory } from "../types";

const parseBBC = (result: any, source: SourceCategory): Article[] => {
  const items = result.rss.channel[0].item;
  return items.map((item: any) => ({
    title: item.title[0],
    pubDate: item.pubDate[0],
    description: item.description[0],
    image: item["media:thumbnail"] ? item["media:thumbnail"][0].$.url : null,
    link: item.link[0],
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseCNN = (result: any, source: SourceCategory): Article[] => {
  return [];
};

export const parsers: Record<
  string,
  (result: any, source: SourceCategory) => Article[]
> = {
  "bbci.co.uk": parseBBC,
  "cnn.com": parseCNN,
};

export { parseBBC, parseCNN };
