import type { SvgNameType } from "@/shared/ui";

export type MenuItem = {
  label: string;
  icon: SvgNameType;
  path: string;
};

export const menuList: MenuItem[] = [
  {
    label: "홈",
    icon: "home",
    path: "/",
  },
  {
    label: "달력",
    icon: "calendar",
    path: "/calendar",
  },
  {
    label: "행사 제보",
    icon: "document",
    path: "/event-report",
  },
  {
    label: "피드백",
    icon: "chat",
    path: "/feedback",
  },
];
