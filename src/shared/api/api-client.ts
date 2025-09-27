import axios from "axios";
import { env } from "../config/env";

export const publicApi = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});
