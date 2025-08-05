import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Fetches data from a Next API route using a GET request.
 *
 * @param {string} endpoint - The API endpoint to request (e.g. "/api/news").
 * @param {object} [qp={}] - Optional query parameters as key-value pairs.
 * @returns {Promise<any>} - Resolves with the response data.
 * @throws {Error} - Throws an error if the request fails.
 */

export default async function fetchNextServer(endpoint, qp = {}) {
  try {
    const url = new URL(endpoint, BASE_URL);
    const response = await axios.get(url.toString(), { params: qp });
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch data from ${endpoint}: ${
        error.response?.data?.message || error.message
      }`
    );
  }
}
