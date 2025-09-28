import { queryOptions } from "@tanstack/react-query";
import { getEvents, getEventsBanner } from "@/entities/events/api";
import type { PaginatedRequestDto } from "@/entities/events/model";

export const eventsQueries = {
  all: () => ["events"],
  banner: () => [...eventsQueries.all(), "banner"],
  getEvents: (params: PaginatedRequestDto) =>
    queryOptions({
      queryKey: [...eventsQueries.all(), params],
      queryFn: async () => getEvents(params),
    }),
  getEventsBanner: () =>
    queryOptions({
      queryKey: [...eventsQueries.banner()],
      queryFn: async () => getEventsBanner(),
    }),
};
