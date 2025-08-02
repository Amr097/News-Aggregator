import { axiostheGaurdianApiInstance } from "@/lib/axios";

export default async function fetchTheGaurdianApi(path, qp = {}) {
  try {
    console.log(qp, { apiKey: process.env.NEXT_PUBLIC_GUARDIAN_API_KEY });
    const res = await axiostheGaurdianApiInstance.get(path, {
      params: {
        ...qp,
        "api-key": process.env.NEXT_PUBLIC_GUARDIAN_API_KEY,
      },
    });

    return res || {};
  } catch (error) {
    console.log(error);
  }
}
