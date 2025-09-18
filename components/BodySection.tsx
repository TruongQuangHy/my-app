import ContentCard from "./ContentCard";

export default function BodySection() {
  const itemsConent = [
    {
      title: "tranffic simulation",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ],
      image: "content1.png",
    },
    {
      title: "liquid Simulation",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ],
      image: "content2.png",
    },
    {
      title: "people Simulation",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ],
      image: "content3.png",
    },
    {
      title: "wind motion",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ],
      image: "content4.png",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto my-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 max-w-3xl">
          <h1 className="text-5xl font-semibold uppercase leading-tight">
            các phần mềm và plugin được học thêm trong khóa
          </h1>
        </div>
        <div className="flex flex-col gap-20">
          {itemsConent.map((item, index) => (
            <ContentCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              isEven={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
