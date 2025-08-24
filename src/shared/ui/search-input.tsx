import { cn } from "../lib";
import { Input } from "./input";
import { SvgIcon } from "./svg-icon";
import { Separator } from "./separator";

export function SearchInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div className="flex items-center overflow-hidden w-fit h-10 bg-black border border-gray-700 rounded-full text-gray-100 focus:outline-none focus:border-gray-500">
      <div className="size-full px-5 py-2 flex justify-center">
        <Input
          placeholder="검색"
          type="text"
          className={cn(className)}
          {...props}
        />
      </div>

      <Separator orientation="vertical" className="bg-gray-700!" />
      <div className="bg-gray-800 px-4 h-full flex items-center justfiy-center">
        <SvgIcon name="search" className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
}
