import { setupWorker } from "msw/browser";
import { eventsMockHandlers } from "@/entities/events/lib";

export const worker = setupWorker(...eventsMockHandlers);
