import axios from "axios";

export default async function fetchNextServer(endpoint, qp = {}) {
  try {
    const url = new URL(endpoint, window.location.origin);
    const response = await axios.get(url.toString(), { params: qp });
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error(`Failed to fetch data from ${endpoint}: ${error.message}`);
  }
}
