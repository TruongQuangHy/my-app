export default function HeaderSection() {
  return (
    <section className="h-[calc(100vh-64px)] w-full ">
      <div className="relative h-full">
        <img
          src="/bannerheader.png"
          alt=""
          className="absolute -z-[10] top-0 left-0 object-cover"
        />
        <div className="max-w-6xl mx-auto h-full w-full flex flex-col items-start justify-end gap-5 py-10">
          <img
            src="logo2.png"
            alt=""
            className="object-contain bg-transparent h-[180px]"
          />
          <h1 className="uppercase text-4xl font-semibold text-white">
            mở ra giới hạn diễn họa kiến trúc
          </h1>
        </div>
      </div>
    </section>
  );
}
