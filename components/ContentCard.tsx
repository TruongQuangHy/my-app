interface ContentCardProps {
  title: string;
  description: string[];
  image: string;
  isEven: boolean;
}
export default function BodySection({
  title,
  description,
  image,
  isEven,
}: ContentCardProps) {
  return (
    <div
      className={`flex justify-between items-start gap-20 ${
        isEven ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold uppercase">{title}</h1>
        <ul className="flex flex-col gap-2 mt-3 list-disc">
          {description.map((desc, index) => (
            <li key={index} className="text-md font-normal">
              {desc}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 h-auto overflow-hidden rounded-lg relative group cursor-pointer">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black rounded-full overflow-hidden group-hover:opacity-80 opacity-0 transition-opacity duration-300 ">
          <svg
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.75 0.19043C13.3099 0.19043 0.75 12.7515 0.75 28.1904C0.75 43.6294 13.3099 56.1904 28.75 56.1904C44.1901 56.1904 56.75 43.6294 56.75 28.1904C56.75 12.7515 44.1901 0.19043 28.75 0.19043ZM39.8812 29.1714L23.5479 39.6714C23.3565 39.7956 23.1355 39.8571 22.9167 39.8571C22.7253 39.8571 22.5316 39.8092 22.3585 39.7147C21.9824 39.5096 21.75 39.1176 21.75 38.6904V17.6904C21.75 17.2632 21.9824 16.8712 22.3585 16.6661C22.7276 16.4634 23.1901 16.4758 23.5479 16.7094L39.8812 27.2094C40.2139 27.4236 40.4167 27.7939 40.4167 28.1904C40.4167 28.5869 40.2139 28.9571 39.8812 29.1714Z"
              fill="#A4CD39"
            />
          </svg>
        </div>
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
