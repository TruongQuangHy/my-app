import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-3 px-8">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <button>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.600098 14.0008C0.600098 13.338 1.13735 12.8008 1.8001 12.8008H16.2001C16.8629 12.8008 17.4001 13.338 17.4001 14.0008C17.4001 14.6635 16.8629 15.2008 16.2001 15.2008H1.8001C1.13735 15.2008 0.600098 14.6635 0.600098 14.0008ZM0.600098 2.00078C0.600098 1.33803 1.13735 0.800781 1.8001 0.800781H16.2001C16.8629 0.800781 17.4001 1.33803 17.4001 2.00078C17.4001 2.66352 16.8629 3.20078 16.2001 3.20078H1.8001C1.13735 3.20078 0.600098 2.66352 0.600098 2.00078ZM0.600098 8.00078C0.600098 7.33805 1.13735 6.80078 1.8001 6.80078H9.0001C9.66286 6.80078 10.2001 7.33805 10.2001 8.00078C10.2001 8.66354 9.66286 9.20078 9.0001 9.20078H1.8001C1.13735 9.20078 0.600098 8.66354 0.600098 8.00078Z"
                fill="#A4CD39"
              />
            </svg>
          </button>
          <img
            src="logo.png"
            alt=""
            className="size-[70px] object-cover bg-transparent"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="font-semibold p-3 rounded-full hover:bg-[#A4CD39]">
            Chương trình học
          </button>
          <button className="font-semibold p-3 rounded-full ">Quyền lợi</button>
          <button className="font-semibold p-3 rounded-full ">
            NGUYÊN BOC là ai?
          </button>
          <button className="font-semibold p-3 rounded-full ">FAQs</button>
        </div>
      </div>
      <div>
        <button className="font-semibold p-3 rounded-full hover:bg-[#A4CD39]">
          HỌC MIỄN PHÍ
        </button>
      </div>
    </nav>
  );
}
