import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
});

