import { publicApi } from "@/shared/api";
import { eventListApiEndpoint } from "../config";
import { type EventListResponse } from "../model";

export const getEventList = async () => {
  const result = await publicApi.get<EventListResponse>(
    eventListApiEndpoint.eventList()
  );
  return result.data.data;
};
