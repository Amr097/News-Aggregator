import axios from "axios";

const newsApiURL = process.env.NEWSAPI_BASE_URL;
const theGaurdianApiURL = process.env.GUARDIAN_BASE_URL;

export const axiosNewsApiInstance = axios.create({
  baseURL: newsApiURL,
});
export const axiostheGaurdianApiInstance = axios.create({
  baseURL: theGaurdianApiURL,
});
