import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import WhatsAppButton from "./components/WhatsAppButton";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import ValuesSection from "./components/ValuesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <HeroSlider />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ValuesSection />
      <WhatsAppButton />
      <BlogSection />
      <Footer />
    </main>
  );
}
