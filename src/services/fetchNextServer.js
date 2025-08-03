import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

console.log(BASE_URL);

export default async function fetchNextServer(endpoint, qp = {}) {
  try {
    const url = new URL(endpoint, BASE_URL);
    const response = await axios.get(url.toString(), { params: qp });
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error(`Failed to fetch data from ${endpoint}: ${error.message}`);
  }
}
