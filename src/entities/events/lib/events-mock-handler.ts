import { eventApiEndpoint, eventsMockData } from "../config";
import type { PaginatedEventsResponse } from "../model/events.dto";
import { http, HttpResponse } from "msw";
import { env } from "@/shared/config/env";

export const eventsMockHandlers = [
  http.get(`${env.apiBaseUrl}${eventApiEndpoint.events()}`, ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;
    const limit = url.searchParams.get("limit") || 10;

    const offset = (Number(page) - 1) * Number(limit);
    return HttpResponse.json({
      data: eventsMockData.data.slice(offset, offset + Number(limit)),
      pageInfo: {
        total: eventsMockData.data.length,
        currentPage: Number(page),
      },
    } as PaginatedEventsResponse);
  }),
  http.get(`${env.apiBaseUrl}${eventApiEndpoint.eventsBanner()}`, () => {
    const bannerEvents = eventsMockData.data.slice(0, 3);
    return HttpResponse.json({ data: bannerEvents });
  }),
];
