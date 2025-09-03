import { publicApi } from "@/shared/api";
import { eventsApiEndpoint } from "../config";
import { type EventsResponse } from "../model";

export const getEvents = async () => {
  const result = await publicApi.get<EventsResponse>(
    eventsApiEndpoint.events()
  );
  return result.data.data;
};
