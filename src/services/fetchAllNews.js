import fetchTheGaurdianApi from "./fetchTheGaurdianApi";
import fetchNewsApi from "./fetchNewsApi";
import { normalizeArticles } from "@/helpers/normalizeNewsPost";

export const fetchAllNews = async () => {
  const gaurdian = await fetchTheGaurdianApi("/search").then(
    (res) => res.data.response.results
  );
  const news = await fetchNewsApi("/top-headlines", { country: "us" }).then(
    (res) => res.data.articles
  );
  console.log([...news, ...gaurdian]);
  return normalizeArticles([...news, ...gaurdian]);
};
