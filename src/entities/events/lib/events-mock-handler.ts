import { eventsMockData, eventsApiEndpoint } from "../config";
import { http, HttpResponse } from "msw";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const eventsMockHandlers = [
  http.get(`${baseUrl}${eventsApiEndpoint.events()}`, () => {
    return HttpResponse.json(eventsMockData);
  }),
];
