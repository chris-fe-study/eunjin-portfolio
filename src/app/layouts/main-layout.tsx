import { Outlet } from "react-router";
import { Header } from "./header";
import { Side } from "./side";
import { Footer } from "./footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="flex flex-1">
        <Side />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
