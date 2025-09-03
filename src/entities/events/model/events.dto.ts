import type { ResponseDto } from "@/shared/model";

export interface Event {
  id: number;
  imageUrl: string;
  title: string;
  date: {
    start: string;
    end: string;
  };
}

export type EventsResponse = ResponseDto<Event[]>;
