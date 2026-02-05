import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <HeroSlider />
    </main>
  );
}
