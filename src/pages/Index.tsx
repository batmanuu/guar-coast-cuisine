import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MangroveTransition from "@/components/MangroveTransition";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MangroveTransition />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
};

export default Index;
