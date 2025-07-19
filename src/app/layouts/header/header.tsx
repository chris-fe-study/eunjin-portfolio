import { DropDownBox } from "@/components";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between h-19">
        <div className="bg-[#121214] text-white w-full h-full p-5">
          <div className="flex justify-start w-[70px] h-full">
            <div className="flex items-center text-white text-2xl font-bold font-['Inter'] w-full h-full">
              LOGO
            </div>
            <div className="flex items-center mx-15">
              <DropDownBox />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
