import Navbar from "../components/Navbar";
import RandomImage from "../pages/RandomImage";

export default function Home() {
  const demoImages = [
    "https://picsum.photos/id/1/500/333",
    "https://picsum.photos/id/2/500/333",
    "https://picsum.photos/id/3/500/333",
    "https://picsum.photos/id/4/500/333",
    "https://picsum.photos/id/5/500/333",
  ];
  return (
    <>
      <Navbar />
      <RandomImage images={demoImages} />
    </>
  );
}
