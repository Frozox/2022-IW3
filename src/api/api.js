import axios from "redaxios";

export function createRequest() {
  return axios.create({
    baseURL: "http://localhost:5000"
  });
}
