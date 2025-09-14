import type { ResponseDto } from "@/shared/model";

export interface EventList {
  title: string;
  date: { start: string; end: string };
  description: string;
  tags: string[];
  image: string;
}

export type EventListResponse = ResponseDto<EventList[]>;
