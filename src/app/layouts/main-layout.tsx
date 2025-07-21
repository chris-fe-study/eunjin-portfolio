import { Link, Outlet } from "react-router";
import { Header } from "./header";
import { Side } from "./side";

export default function MainLayout() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Side />
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/event-report">Event Report</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul> */}
      <Outlet />
    </div>
  );
}
