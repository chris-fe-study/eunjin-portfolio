import { publicApi } from "@/shared/api";
import { eventApiEndpoint } from "../config";
import { type EventsResponse, type PaginatedRequestDto } from "../model";
import type { PaginatedEventsResponse } from "../model/events.dto";

export const getEvents = async ({ page, limit }: PaginatedRequestDto) => {
  const result = await publicApi.get<PaginatedEventsResponse>(
    eventApiEndpoint.events(),
    {
      // axios GET 방식에서 query parameter 전달 방식
      params: {
        page,
        limit,
      },
    }
  );
  return result.data;
};

export const getEventsBanner = async () => {
  const result = await publicApi.get<EventsResponse>(
    eventApiEndpoint.eventsBanner()
  );
  return result.data.data;
};
