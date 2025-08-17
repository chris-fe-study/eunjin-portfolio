import ChatIcon from "./assets/chat.svg?react";
import CalendarIcon from "./assets/calendar.svg?react";
import DocumentIcon from "./assets/document.svg?react";
import HomeIcon from "./assets/home.svg?react";

export const svgMapper = {
  chat: ChatIcon,
  calendar: CalendarIcon,
  document: DocumentIcon,
  home: HomeIcon,
};

export type SvgNameType = keyof typeof svgMapper;
