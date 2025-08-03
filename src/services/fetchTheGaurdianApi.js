import { axiostheGaurdianApiInstance } from "@/lib/axios";

export default async function fetchTheGaurdianApi(path, qp = {}) {
  try {
    const apiKey = process.env.GUARDIAN_API_KEY;

    if (!apiKey) {
      throw new Error("Guardian API key is missing");
    }

    const res = await axiostheGaurdianApiInstance.get(path, {
      params: {
        ...qp,
        "api-key": apiKey,
      },
    });

    return res || {};
  } catch (error) {
    console.log(error);
  }
}
