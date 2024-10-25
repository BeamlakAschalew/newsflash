import axios from "axios";
import { parseStringPromise } from "xml2js";
import { parsers } from "../parsers";
import { Article, SourceCategory } from "../types";

export async function fetchRssFeed(source: SourceCategory): Promise<Article[]> {
  try {
    const response = await axios.get(source.url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "application/rss+xml, application/xml, text/xml",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
      },
    });
    const xmlData = response.data;

    const result = await parseStringPromise(xmlData);

    const parserKey = Object.keys(parsers).find((key) =>
      source.url.includes(key)
    );
    const parse = parserKey ? parsers[parserKey] : null;

    if (parse) {
      const articles = parse(result, source);
      return articles;
    } else {
      throw new Error("No parser found for this URL");
    }
  } catch (error) {
    console.log("Error fetching or parsing the RSS feed:", error);
    return [];
  }
}
