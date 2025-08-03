import { axiosNewsApiInstance } from "@/lib/axios";

export default async function fetchNewsApi(path, qp = {}) {
  try {
    const apiKey = process.env.NEWSAPI_KEY;

    if (!apiKey) {
      throw new Error("News API key is missing");
    }

    const res = await axiosNewsApiInstance.get(path, {
      params: {
        ...qp,
        apiKey,
      },
    });

    return res || {};
  } catch (error) {
    console.log(error);
  }
}
