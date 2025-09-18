export default function DataSection() {
  return (
    <section className="">
      <div className="relative h-[400px] flex flex-col gap-5 overflow-hidden items-center justify-center text-white">
        <img
          src="bannerdata.jpg"
          alt=""
          className="absolute top-0 left-0 object-cover -z-10"
        />
        <div className="bg-black/50 absolute top-0 left-0 w-full h-full -z-10"></div>
        <h1 className="text-5xl font-semibold text-center">
          Người Thật, sản phẩm thật
        </h1>
        <div className="flex items-end justify-center gap-10">
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="text-md">Hoạt động dơn</p>
            <h1 className="text-5xl font-bold text-[#a4cd39]">15+</h1>
            <span className="text-md">Nằm trong diễn họa kiến trúc</span>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center border-l-2 border-r-2 border-white px-10">
            <p className="text-md">Hoạt động dơn</p>
            <h1 className="text-5xl font-bold text-[#a4cd39]">15+</h1>
            <span className="text-md">Nằm trong diễn họa kiến trúc</span>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="text-md">Hoạt động dơn</p>
            <h1 className="text-5xl font-bold text-[#a4cd39]">15+</h1>
            <span className="text-md">Nằm trong diễn họa kiến trúc</span>
          </div>
        </div>
      </div>
    </section>
  );
}
