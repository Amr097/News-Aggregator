import axios from "axios";

export default async function fetchNextServer(endpoint, qp = {}) {
  console.log(endpoint);
  const url = new URL(endpoint, window.location.origin);
  console.log(url.toString(), qp);
  const res = axios.get(url.toString(), { params: qp }).then((response) => {
    console.log(response);
    return response.data;
  });
  return res;
}
