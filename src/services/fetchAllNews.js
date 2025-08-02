import fetchTheGaurdianApi from "./fetchTheGaurdianApi";
import fetchNewsApi from "./fetchNewsApi";

export const fetchAllNews = async () => {
  const gaurdian = await fetchTheGaurdianApi("/search").then(
    (res) => res.data.response.results
  );
  const news = await fetchNewsApi("/top-headlines", { country: "eg" }).then(
    (res) => res.data.articles
  );

  return [...gaurdian, ...news];
};
