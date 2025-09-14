import { publicApi } from "@/shared/api";
import { eventApiEndpoint } from "../config";
import { type EventsResponse } from "../model";

export const getEvents = async () => {
  const result = await publicApi.get<EventsResponse>(eventApiEndpoint.events());
  return result.data.data;
};
