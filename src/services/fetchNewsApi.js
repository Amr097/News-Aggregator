import { axiosNewsApiInstance } from "@/lib/axios";

export default async function fetchNewsApi(path, qp = {}) {
  try {
    console.log(qp, { apiKey: process.env.NEXT_PUBLIC_NEWSAPI_KEY });

    const res = await axiosNewsApiInstance.get(path, {
      params: {
        ...qp,
        apiKey: process.env.NEXT_PUBLIC_NEWSAPI_KEY,
      },
    });

    return res || {};
  } catch (error) {
    console.log(error);
  }
}
