import { menuList } from "./side-menu";
import SideNavLink from "./side-nav-link";

export default function Side() {
  return (
    <aside className="w-15 h-full bg-[#121214]">
      <nav className="py-5">
        <ul className="flex flex-col gap-5">
          {menuList.map(({ path, ...item }) => (
            <li key={item.label}>
              <SideNavLink {...item} to={path} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
