import fetchTheGaurdianApi from "./fetchTheGaurdianApi";
import fetchNewsApi from "./fetchNewsApi";
import { normalizeArticles } from "@/helpers/normalizeNewsPost";

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

    const gaurdian = await fetchTheGaurdianApi(
      gaurdianEndpoint,
      guardianParams
    ).then((res) => res.data.response.results);

    const news = await fetchNewsApi(newsApiEndpoint, newsApiParams).then(
      (res) => res.data.articles
    );
    return normalizeArticles([...news, ...gaurdian]);
  } catch (err) {
    const error = new Error(`fetch failed: ${err.message || "Unknown error"}`);
    error.statusCode = err.response?.status || err.statusCode || 503;
    error.statusText = err.response?.statusText || "Service Unavailable";
    error.data = err.response?.data || null;
    throw error;
  }
};
