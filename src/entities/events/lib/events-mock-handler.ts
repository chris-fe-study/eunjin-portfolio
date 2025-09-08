import { eventApiEndpoint, eventsMockData } from "../config";
import { http, HttpResponse } from "msw";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const eventsMockHandlers = [
  http.get(`${baseUrl}${eventApiEndpoint.events()}`, () => {
    return HttpResponse.json(eventsMockData);
  }),
];
