import ChatIcon from "./assets/chat.svg?react";
import CalendarIcon from "./assets/calendar.svg?react";
import DocumentIcon from "./assets/document.svg?react";
import HomeIcon from "./assets/home.svg?react";
import Search from "./assets/search.svg?react";
import AppstoreBlackBadge from "./assets/appstore-black-badge.svg?react";
import AppstoreBadge from "./assets/appstore-badge.svg?react";
import GoogleplayBlackBadge from "./assets/googleplay-black-badge.svg?react";
import GoogleplayBadge from "./assets/googleplay-badge.svg?react";
import HomeBannerNext from "./assets/home-banner-next.svg?react";
import HomeBannerPrev from "./assets/home-banner-prev.svg?react";

export const svgMapper = {
  chat: ChatIcon,
  calendar: CalendarIcon,
  document: DocumentIcon,
  home: HomeIcon,
  search: Search,
  appstoreBlackBadge: AppstoreBlackBadge,
  appstoreBadge: AppstoreBadge,
  googleplayBlackBadge: GoogleplayBlackBadge,
  googleplayBadge: GoogleplayBadge,
  homeBannerNext: HomeBannerNext,
  homeBannerPrev: HomeBannerPrev,
};

export type SvgNameType = keyof typeof svgMapper;
