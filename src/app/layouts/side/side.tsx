import { Link, useLocation } from "react-router";

export default function Side() {
  const location = useLocation();
  return (
    <div className="w-15 h-full bg-[#121214]">
      <ul className="flex flex-col gap-5 py-5">
        <li>
          <Link to="/" className="flex items-center flex-col gap-2">
            <svg
              width="25"
              height="25"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_103)">
                <path
                  d="M9.00004 1.55457e-05C8.24629 1.55457e-05 7.49816 0.247516 6.86816 0.731266L1.14754 5.20314C0.787778 5.4875 0.497484 5.85004 0.298665 6.26327C0.0998468 6.6765 -0.00227643 7.12957 3.84942e-05 7.58814L0.0169135 15.0188C0.0169135 16.6556 1.31066 18 2.89129 18H7.31816V12.8925C7.31816 12.1838 7.85254 11.6269 8.53879 11.6269H9.46129C10.1419 11.6269 10.6763 12.1894 10.6763 12.8925V18H15.1313C16.7063 18 18 16.65 18 15.0188V7.58252C18 6.64314 17.5725 5.76002 16.8525 5.19752L11.1319 0.731266C10.5213 0.255182 9.76867 -0.00230478 8.99441 1.55457e-05H9.00004Z"
                  fill={location.pathname === "/" ? "white" : "#999999"}
                />
              </g>
              <defs>
                <clipPath id="clip0_1_103">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span
              className={`justify-start text-xs font-normal font-['Inter'] ${
                location.pathname === "/" ? "text-white" : "text-neutral-400"
              }`}
            >
              홈
            </span>
          </Link>
        </li>
        <li>
          <Link to="/calendar" className="flex items-center flex-col gap-2">
            <svg
              width="25"
              height="25"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.625 0C5.15812 0 4.78125 0.376875 4.78125 0.84375V2.25H3.09375C2.27415 2.25296 1.48896 2.57986 0.909413 3.15941C0.329864 3.73896 0.00296423 4.52415 0 5.34375L0 14.9062C0 16.605 1.395 18 3.09375 18H14.9062C16.605 18 18 16.605 18 14.9062V5.34375C18 3.645 16.605 2.25 14.9062 2.25H13.2188V0.84375C13.2188 -0.28125 11.5312 -0.28125 11.5312 0.84375V2.25H6.46875V0.84375C6.46875 0.376875 6.09188 0 5.625 0ZM3.09375 6.75H14.9062C15.6938 6.75 16.3125 7.36875 16.3125 8.15625V14.9062C16.3125 15.6938 15.6938 16.3125 14.9062 16.3125H3.09375C2.90866 16.314 2.72512 16.2786 2.55383 16.2085C2.38254 16.1384 2.22692 16.0348 2.09604 15.904C1.96516 15.7731 1.86163 15.6175 1.79149 15.4462C1.72135 15.2749 1.686 15.0913 1.6875 14.9062V8.15625C1.6875 7.36875 2.30625 6.75 3.09375 6.75ZM3.9375 8.4375V10.6875H6.1875V8.4375H3.9375ZM7.875 8.4375V10.6875H10.125V8.4375H7.875ZM11.8125 8.4375V10.6875H14.0625V8.4375H11.8125ZM3.9375 12.375V14.625H6.1875V12.375H3.9375ZM7.875 12.375V14.625H10.125V12.375H7.875ZM11.8125 12.375V14.625H14.0625V12.375H11.8125Z"
                fill={location.pathname === "/calendar" ? "white" : "#999999"}
              />
            </svg>

            <span
              className={`justify-start text-xs font-normal font-['Inter'] ${
                location.pathname === "/calendar"
                  ? "text-white"
                  : "text-neutral-400"
              }`}
            >
              달력
            </span>
          </Link>
        </li>
        <li>
          <Link to="/event-report" className="flex items-center flex-col gap-2">
            <svg
              width="20"
              height="25"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_108)">
                <path
                  d="M3.20833 0C1.44667 0 0 1.395 0 3.09375V14.9062C0 16.605 1.44667 18 3.20833 18H10.7917C12.5533 18 14 16.605 14 14.9062V5.625L8.16667 0H6.41667H3.20833ZM3.20833 1.6875H6.41667V5.90625C6.41667 6.67294 7.07992 7.3125 7.875 7.3125H12.25V14.9062C12.25 15.6926 11.6072 16.3125 10.7917 16.3125H3.20833C3.01635 16.3142 2.82594 16.2789 2.64823 16.2088C2.47053 16.1387 2.30908 16.0352 2.17332 15.9043C2.03756 15.7734 1.9302 15.6177 1.85752 15.4463C1.78484 15.275 1.74829 15.0914 1.75 14.9062V3.09375C1.75 2.30737 2.39283 1.6875 3.20833 1.6875ZM8.16667 2.31806L11.5961 5.625H8.16667V2.31806Z"
                  fill={
                    location.pathname === "/event-report" ? "white" : "#999999"
                  }
                />
              </g>
              <defs>
                <clipPath id="clip0_1_108">
                  <rect width="14" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span
              className={`justify-start text-xs font-normal font-['Inter'] ${
                location.pathname === "/event-report"
                  ? "text-white"
                  : "text-neutral-400"
              }`}
            >
              행사
              <br />
              제보
            </span>
          </Link>
        </li>
        <li>
          <Link to="/feedback" className="flex items-center flex-col gap-2">
            <svg
              width="25"
              height="25"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_14_2569)">
                <path
                  d="M9 0C4.03875 0 0 4.03875 0 9C0 10.5694 0.466875 12.0825 1.2375 13.4437L0.10125 16.2169C-0.106875 16.7231 0.05625 17.3025 0.399375 17.6344C0.748125 17.9719 1.33312 18.1069 1.82812 17.8819L4.47187 16.6894C5.83722 17.5226 7.4007 17.9751 9 18C13.9613 18 18 13.9613 18 9C18 4.03875 13.9613 0 9 0ZM9 1.6875C13.05 1.6875 16.3125 4.95 16.3125 9C16.3139 10.325 15.9546 11.6255 15.2733 12.7619C14.592 13.8984 13.6142 14.828 12.4448 15.4511C11.2754 16.0742 9.95854 16.3674 8.63526 16.2991C7.31197 16.2309 6.03221 15.8039 4.93313 15.0638L4.53937 14.805L2.03625 15.93L3.105 13.3425L2.86313 12.9769C2.14768 11.8729 1.7433 10.5964 1.6926 9.28182C1.6419 7.96727 1.94676 6.66339 2.57504 5.50759C3.20333 4.3518 4.13178 3.38689 5.26254 2.71458C6.39329 2.04226 7.68447 1.68744 9 1.6875Z"
                  fill={location.pathname === "/feedback" ? "white" : "#999999"}
                />
              </g>
              <defs>
                <clipPath id="clip0_14_2569">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span
              className={`justify-start text-xs font-normal font-['Inter'] ${
                location.pathname === "/feedback"
                  ? "text-white"
                  : "text-neutral-400"
              }`}
            >
              피드백
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
