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

const parseNewScientistFeed = (
  result: any,
  source: SourceCategory
): Article[] => {
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

const parseNYMagFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => {
    const description = item.description?.[0] || null;
    const imageMatch = description?.match(/<img src="(.*?)"/);
    const imageUrl = imageMatch ? imageMatch[1] : null;

    return {
      title: item.title?.[0] || null,
      pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
      description,
      link: item.link?.[0] || null,
      image: imageUrl,
      source: source.source_id,
      category: source.category_id,
    };
  });
};

const parseNextBigFutureFeed = (
  result: any,
  source: SourceCategory
): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => {
    const description = item.description?.[0] || null;
    const imageMatch = description?.match(/<img src="(.*?)"/);
    const imageUrl = imageMatch ? imageMatch[1] : null;

    return {
      title: item.title?.[0] || null,
      pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
      description,
      link: item.link?.[0] || null,
      image: imageUrl,
      source: source.source_id,
      category: source.category_id,
    };
  });
};

const parseVoxFeed = (result: any, source: SourceCategory): Article[] => {
  const entries = result?.feed?.entry;

  return entries.map((entry: any) => {
    const contentHtml = entry.content?.[0]?._ || "";
    const imageMatch = contentHtml.match(/<img[^>]+src="([^">]+)"/);
    const imageUrl = imageMatch ? imageMatch[1] : null;

    return {
      title: entry.title?.[0]?._ || null,
      pubDate: entry.published ? parseDate(entry.published[0]) : null,
      description: entry.summary?.[0]?._ || null,
      link:
        entry.link?.find((link: any) => link.$.rel === "alternate")?.$.href ||
        null,
      image: imageUrl,
      source: source.source_id,
      category: source.category_id,
    };
  });
};

const parseReutersFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item || [];

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image:
      item["content:encoded"]?.[0]?.match(/<img[^>]+src="([^">]+)"/)?.[1] ||
      null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseTechCrunchFeed = (
  result: any,
  source: SourceCategory
): Article[] => {
  const items = result?.rss?.channel?.[0]?.item || [];

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    image: null,
    link: item.link?.[0] || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseTechRadarFeed = (result: any, source: SourceCategory): Article[] => {
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

const parseNextWebFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item.enclosure?.[0]?.$.url || null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseTheVergeFeed = (result: any, source: SourceCategory): Article[] => {
  function parseContent(content: any): {
    imageUrl: string | null;
    truncatedContent: string;
  } {
    const imageUrlMatch = content.match(/<img[^>]*src="([^"]+)"/);
    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;

    const textContent = content.replace(/<[^>]+>/g, "");

    const sentences = textContent.match(/[^.!?]+[.!?]/g) || [];

    const truncatedContent = sentences.slice(0, 2).join(" ");

    return { imageUrl, truncatedContent };
  }

  const entries = result?.feed?.entry || [];

  return entries.map((entry: any) => {
    return {
      title: entry.title?.[0] || null,
      pubDate: entry.published ? parseDate(entry.published[0]) : null,
      description: parseContent(entry.content?.[0]._).truncatedContent || null,
      link: entry.link?.[0]?.$.href || null,
      image: parseContent(entry.content?.[0]._).imageUrl,
      source: source.source_id,
      category: source.category_id,
    };
  });
};

const parseWSJFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item || [];

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item["media:content"]?.[0]?.$.url || null, // Access the media content URL
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseWashingtonPosrFeed = (
  result: any,
  source: SourceCategory
): Article[] => {
  const items = result?.rss?.channel?.[0]?.item || [];

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

const parseWashingtonTimesFeed = (
  result: any,
  source: SourceCategory
): Article[] => {
  const items = result?.rss?.channel?.[0]?.item || [];

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item["media:content"]?.[0]?.$.url || null, // Use media:content URL for image
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseSkySportsFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item;

  return items.map((item: any) => ({
    title: item.title?.[0] || null,
    pubDate: item.pubDate ? parseDate(item.pubDate[0]) : null,
    description: item.description?.[0] || null,
    link: item.link?.[0] || null,
    image: item.enclosure ? item.enclosure[0]?.$.url : null,
    source: source.source_id,
    category: source.category_id,
  }));
};

const parseWiredFeed = (result: any, source: SourceCategory): Article[] => {
  const items = result?.rss?.channel?.[0]?.item || [];

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
  "newscientist.com": parseNewScientistFeed,
  "nymag.com": parseNYMagFeed,
  "nextbigfuture.com": parseNextBigFutureFeed,
  "vox.com": parseVoxFeed,
  "reutersagency.com": parseReutersFeed,
  "techcrunch.com": parseTechCrunchFeed,
  "techradar.com": parseTechRadarFeed,
  "thenextweb.com": parseNextWebFeed,
  // TODO: not working
  "theverge.com": parseTheVergeFeed,
  "dowjones.io": parseWSJFeed,
  "washingtonpost.com": parseWashingtonPosrFeed,
  "washingtontimes.com": parseWashingtonTimesFeed,
  "skysports.com": parseSkySportsFeed,
  "wired.com": parseWiredFeed,
};
