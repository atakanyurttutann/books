import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PUBLIC_HOST_API,
});
