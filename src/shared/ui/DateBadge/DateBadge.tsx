import dayjs from "dayjs";
import { SvgIcon } from "../svg-icon";

interface DateBadgeProps {
  date: string;
}

export default function DateBadge({
  date = dayjs().format("YYYY년 MM월 DD일"),
}: DateBadgeProps) {
  return (
    <div className="w-37 h-7 duration-300 flex justify-start items-center bg-gray-900 rounded-full border-2 border-gray-600">
      <SvgIcon name="calendar" className="size-5 mr-1" />
      <p className="text-gray-300 text-neutral-400 text-sm font-normal font-['Inter']">
        {date}
      </p>
    </div>
  );
}
