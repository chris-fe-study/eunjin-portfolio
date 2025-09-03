import { Popover, PopoverTrigger, PopoverContent } from "../popover";
import { Calendar } from "../calendar";
import { useState, type ReactNode } from "react";
import type { DateRange } from "react-day-picker";

interface DatePickerProps {
  trigger: ReactNode;
}

export default function DatePicker({ trigger }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="range"
          selected={date}
          captionLayout="dropdown"
          onSelect={(date) => {
            setDate(date);
          }}
          classNames={{
            range_start: "border-t-1 border-b-1 border-blue-600 rounded-l-full",
            range_middle:
              "bg-blue-600/15 border-t-1 border-b-1 border-blue-600",
            range_end: "border-t-1 border-b-1 border-blue-600 rounded-r-full",
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
