import { DropDown, Search, Button } from "@/shared";

export default function Header() {
  return (
    <header>
      <div className="h-19">
        <div className="flex justify-between  bg-[#121214] text-white w-full h-full px-5">
          <div className="flex justify-start w-full h-full">
            <div className=" w-[70px] h-full">
              <div className="flex items-center text-white text-2xl font-bold font-['Inter'] w-full h-full">
                LOGO
              </div>
            </div>
            <div className="flex items-center mx-15">
              <DropDown className="h-7 w-50 " />
            </div>
          </div>
          <div className="flex justify-end w-full h-full">
            <div className="flex items-center">
              <Search
                // onSearch={handleSearch}
                className="w-50"
              />
              <span className="w-0 h-10 mx-5 outline outline-[1px] outline-zinc-800"></span>
              <Button text="로그인" className="w-20 h-10" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
