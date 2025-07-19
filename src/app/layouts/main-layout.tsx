import { Link, Outlet } from "react-router";
import { Header } from "./header";

export default function MainLayout() {
  return (
    <div>
      <Header>
        <ul>
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
        </ul>
      </Header>
      <Outlet />
    </div>
  );
}
