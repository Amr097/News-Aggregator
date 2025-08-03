import fetchTheGaurdianApi from "./fetchTheGaurdianApi";
import fetchNewsApi from "./fetchNewsApi";
import { normalizeArticles } from "@/helpers/normalizeNewsPost";

export const fetchAllNews = async (searchQuery) => {
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
  console.log([...news, ...gaurdian]);
  return normalizeArticles([...news, ...gaurdian]);
};
