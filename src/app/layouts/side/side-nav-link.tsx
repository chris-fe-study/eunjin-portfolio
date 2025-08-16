import { NavLink, type NavLinkProps } from "react-router";
import { type MenuItem } from "./side-menu";
import { SvgIcon } from "@/shared/ui";
import { cn } from "@/shared/lib";

type SideNavLinkProps = NavLinkProps & Omit<MenuItem, "path">;

export default function SideNavLink({
  label,
  icon,
  ...props
}: SideNavLinkProps) {
  return (
    <NavLink {...props}>
      {({ isActive }) => (
        <>
          <div className="flex flex-col items-center gap-2">
            <div
              className={cn(
                "p-2 rounded-sm bg-transparent",
                isActive && "bg-gray-800"
              )}
            >
              {" "}
              <SvgIcon
                name={icon}
                className={cn(
                  "size=[18px] fill-gray-400 transition-colors",
                  isActive && "fill-white"
                )}
              />
            </div>
            <span
              className={cn(
                `justify-start text-xs font-normal font-['Inter'] text-neutral-400 transition-colors`,
                isActive && "text-white"
              )}
            >
              {label}
            </span>
          </div>
        </>
      )}
    </NavLink>
  );
}
