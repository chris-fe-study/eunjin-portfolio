import { queryOptions } from "@tanstack/react-query";
import { getEvents, getEventsBanner } from "@/entities/events/api";

export const eventsQueries = {
  all: () => ["events"],
  banner: () => [...eventsQueries.all(), "banner"],
  getEvents: () =>
    queryOptions({
      queryKey: [...eventsQueries.all()],
      queryFn: async () => getEvents(),
    }),
  getEventsBanner: () =>
    queryOptions({
      queryKey: [...eventsQueries.banner()],
      queryFn: async () => getEventsBanner(),
    }),
};
