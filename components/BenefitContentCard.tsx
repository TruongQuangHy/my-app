interface BenefitCardProps {
  title: string;
  describtion: string;
  icon: React.ReactNode;
  isEven?: boolean;
}
export default function BenefitContentCard({
  title,
  describtion,
  icon,
  isEven,
}: BenefitCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-start text-center gap-2 p-5 relative ${
        isEven ? "" : ""
      }`}
    >
      {isEven && (
        <div className="absolute h-1/2 w-0.5 bg-[#c2c2c2] top-1/2 -right-8  -translate-y-1/2"></div>
      )}
      <div className="size-10 flex items-center justify-center">{icon}</div>
      <div className="flex flex-col gap-2">
        <h3 className="uppercase text-2xl font-semibold max-w-sm mx-auto">
          {title}
        </h3>
        <p className="text-md">{describtion}</p>
      </div>
    </div>
  );
}
