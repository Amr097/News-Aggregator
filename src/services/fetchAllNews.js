import fetchTheGaurdianApi from "./fetchTheGaurdianApi";
import fetchNewsApi from "./fetchNewsApi";
import { normalizeArticles } from "@/helpers/normalizeNewsPost";

/**
 * Fetches articles from both The Guardian API and NewsAPI,
 * merges and normalizes them into a common format.
 * @param {string} searchQuery - Optional search query to filter news.
 * @returns {Array} An array of normalized news articles.
 */

export const fetchAllNews = async (searchQuery) => {
  try {
    const gaurdianEndpoint = "/search";
    const newsApiEndpoint = "/top-headlines";

    const guardianParams = {
      ...(searchQuery && { q: searchQuery }),
      "show-fields": "all",
    };

    const newsApiParams = {
      ...(searchQuery && { q: searchQuery }),
      country: "us",
    };

    // Run both requests concurrently
    const [guardianResult, newsResult] = await Promise.allSettled([
      fetchTheGaurdianApi(gaurdianEndpoint, guardianParams),
      fetchNewsApi(newsApiEndpoint, newsApiParams),
    ]);

    // Extract results only if fulfilled
    const guardianArticles =
      guardianResult.status === "fulfilled"
        ? guardianResult.value.data.response.results
        : [];

    const newsArticles =
      newsResult.status === "fulfilled" ? newsResult.value.data.articles : [];

    // Combine and normalize
    return normalizeArticles([...newsArticles, ...guardianArticles]);
  } catch (err) {
    const error = new Error(`fetch failed: ${err.message || "Unknown error"}`);
    error.statusCode = err.response?.status || err.statusCode || 503;
    error.statusText = err.response?.statusText || "Service Unavailable";
    error.data = err.response?.data || null;
    throw error;
  }
};
