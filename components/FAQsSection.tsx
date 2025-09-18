export default function FAQsSection() {
  return (
    <section className="">
      <div className="relative">
        <img
          src="https://boc.mona.academy/learn/assets/images/about-me-title-2.svg"
          alt=""
          className="-top-[5.2rem] left-1/2 -translate-x-1/2 object-cover absolute z-10 max-w-6xl"
        />
        <div className="h-[700px] w-full overflow-hidden relative">
          <img
            src="FQA.jpg"
            alt=""
            className="h-full w-full absolute top-0 left-0 object-cover -z-10"
          />
          <div className="bg-black/30 w-full h-full absolute top-0 left-0 -z-10"></div>
          <div className="mt-[100px] max-w-6xl mx-auto">
            <h1 className="text-5xl font-semibold leading-tight  max-w-3xl uppercase text-white">
              chính sách hoa hồng hấp dẫn chop người giới thiệu
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
