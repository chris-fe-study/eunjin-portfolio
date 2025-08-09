import { Link, useLocation } from "react-router";
import { HomeIcon, CalendarIcon, DocumentIcon, ChatIcon } from "@/assets";

export default function Side() {
  const menuItems = [
    {
      label: "홈",
      icon: <HomeIcon className="w-[18px] h-[18px]" />,
      path: "/",
    },
    {
      label: "달력",
      icon: <CalendarIcon className="w-[18px] h-[18px]" />,
      path: "/calendar",
    },
    {
      label: "행사 제보",
      icon: <DocumentIcon className="w-[18px] h-[18px]" />,
      path: "/event-report",
    },
    {
      label: "피드백",
      icon: <ChatIcon className="w-[18px] h-[18px]" />,
      path: "/feedback",
    },
  ];
  const location = useLocation();
  return (
    <aside className="w-15 h-full bg-[#121214]">
      <nav className="py-5">
        <ul className="flex flex-col gap-5">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="flex items-center flex-col gap-2"
                >
                  {item.icon}
                  <span
                    className={`justify-start text-xs font-normal font-['Inter'] ${
                      isActive ? "text-white" : "text-neutral-400"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
