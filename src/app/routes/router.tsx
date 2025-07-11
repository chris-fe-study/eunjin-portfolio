import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage, CalendarPage, EventReportPage, FeedbackPage } from "@/pages";
import { MainLayout } from "../layouts";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/event-report" element={<EventReportPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
