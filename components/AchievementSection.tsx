export default function AchievementSection() {
  return (
    <section className="max-w-6xl mx-auto w-full my-20 flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-semibold text-center">
          Thành quả của học việc
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Học viện Cam Nguyen</h3>
            <p className="text-md">Tên dự án:</p>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-lg h-[606px]">
                <img
                  src="banner5.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex gap-5">
                <div className="overflow-hidden rounded-lg h-[323px] w-auto">
                  <img
                    src="banner7.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg h-[323px] w-auto">
                  <img
                    src="banner6.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-lg h-[606px] w-auto">
                <img
                  src="banner8.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-[323px] w-auto">
                <img
                  src="banner9.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
