import HeaderGlobalSearch from "./header-global-search";
import HeaderLoginButton from "./header-login-button";
import HeaderLocaleSelect from "./header-locale-select";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between  bg-gray-900 text-white w-full h-16 px-5">
        <div className="flex justify-start w-full h-full">
          <div className=" w-17.5 h-full">
            <div className="flex items-center text-white text-2xl font-bold font-['Inter'] w-full h-full">
              LOGO
            </div>
          </div>
          <div className="flex items-center mx-15">
            <HeaderLocaleSelect />
          </div>
        </div>
        <div className="flex justify-end w-full h-full">
          <div className="flex items-center">
            <HeaderGlobalSearch />
            {/* <Search
              // onSearch={handleSearch}
              className="w-50"
            /> */}
            <span className="w-0 h-10 mx-5 outline-1 outline-zinc-800"></span>
            <HeaderLoginButton>로그인</HeaderLoginButton>
          </div>
        </div>
      </div>
    </header>
  );
}
