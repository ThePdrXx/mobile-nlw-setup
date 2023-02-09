import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.0.2.2:3333/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
});