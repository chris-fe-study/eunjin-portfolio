import { eventApiEndpoint, eventsMockData } from "../config";
import { http, HttpResponse } from "msw";
import { env } from "@/shared/config/env";

export const eventsMockHandlers = [
  http.get(`${env.apiBaseUrl}${eventApiEndpoint.events()}`, () => {
    return HttpResponse.json(eventsMockData);
  }),
  http.get(`${env.apiBaseUrl}${eventApiEndpoint.eventsBanner()}`, () => {
    const bannerEvents = eventsMockData.data.slice(0, 3);
    return HttpResponse.json({ data: bannerEvents });
  }),
];
