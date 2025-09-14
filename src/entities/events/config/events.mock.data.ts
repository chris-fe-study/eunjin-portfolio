import type { EventsResponse } from "../model";

export const eventsMockData: EventsResponse = {
  data: [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      title: "SPY×FAMILY - 2025년 8월 9일부터 개최! (가상)",
      date: {
        start: "2025년 8월 9일",
        end: "2025년 8월 15일",
      },
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      title: "원피스 - 2025년 9월 20일부터 개최! (가상)",
      date: { start: "2025년 9월 20일", end: "2025년 9월 25일" },
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      title: "나루토 - 2025년 10월 5일부터 개최! (가상)",
      date: { start: "2025년 10월 5일", end: "2025년 10월 12일" },
    },
  ],
};
