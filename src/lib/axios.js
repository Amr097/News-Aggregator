import axios from "axios";

const newsApiURL = process.env.NEXT_PUBLIC_NEWSAPI_BASE_URL;
const theGaurdianApiURL = process.env.NEXT_PUBLIC_GUARDIAN_BASE_URL;

console.log(newsApiURL, theGaurdianApiURL);

export const axiosNewsApiInstance = axios.create({
  baseURL: newsApiURL,
});
export const axiostheGaurdianApiInstance = axios.create({
  baseURL: theGaurdianApiURL,
});
