export default function ProfileDetailSection() {
  return (
    <section className="max-w-6xl mx-auto w-full flex  gap-10 py-10">
      <div className="flex flex-col gap-4  w-[60%]]">
        <div className="flex flex-col gap-5 border-b-2 border-[#c2c2c2] pb-5">
          <h1 className="text-5xl font-semibold uppercase">
            nguyên boc là ai?
          </h1>
          <div className="flex flex-col gap-0.5">
            <h2 className="text-2xl font-semibold text-[#a4cd39] uppercase">
              Dương thanh nguyên
            </h2>
            <p className="text-md">Còn được biết đến với tên "Nguyên BOC"</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold uppercase">
              Là một nghệ sĩ 3D và Giám đốc Sáng tạo, đồng thời là người sáng
              lập BOC Studio
            </h1>
            <p className="text-md font-semibold">
              Một studio hàng đầu tại Việt Nam chuyên về diễn họa kiến trúc
              (archviz)
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-md font-bold">
            Với hơn 15+ năm hoạt động trong ngành diễn họa kiến trúc.
          </h2>
          <p className="text-md">
            <strong>
              Là một trong những chuyên gia hàng đầu trong lĩnh vực “Chaos
              Vantage’’ tại Việt Nam,
            </strong>
            và đã được công nhận trên phạm vi quốc tế nhờ vào những đóng góp to
            lớn trong việc phát triển và ứng dụng phần mềm này trong ngành
            ‘’diễn họa kiến trúc (Archviz)’’.
          </p>
          <p className="text-md">
            Với hơn một thập kỷ kinh nghiệm làm việc và giảng dạy,
            <strong>
              Nguyên BOC không chỉ là người tiên phong trong việc áp dụng công
              nghệ mới, mà còn là người có khả năng tối ưu hóa quy trình làm
              việc
            </strong>
            cho hàng ngàn kiến trúc sư và nhà thiết kế trên khắp thế giới.
          </p>
          <p className="text-md font-bold">
            Beta Tester Đầu Tiên Tại Việt Nam - Đóng Góp Vào Sự Phát Triển Của
            Chaos Vantage.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-[40%]">
        <div className="w-auto h-[573px] flex justify-center items-center ">
          <img
            src="avatar.png"
            alt=""
            className="w-full h-full object-cover bg-transparent"
          />
        </div>
      </div>
    </section>
  );
}
