import type { Location } from "../types";

export const locations: Location[] = [
  { id: 0, city: "전체" },
  { id: 1, city: "서울" },
  { id: 2, city: "경기" },
  { id: 3, city: "부산" },
  { id: 4, city: "제주도" },
] as const;

export const firstLocation = locations[0];
