import type { ResponseDto, PaginatedResponseDto } from "@/shared/model";

export interface Event {
  id: number;
  imageUrl: string;
  title: string;
  date: {
    start: string;
    end: string;
  };
  description: string;
  tags: string[];
}

export type EventsResponse = ResponseDto<Event[]>;
export type PaginatedEventsResponse = PaginatedResponseDto<Event[]>;
