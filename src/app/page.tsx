import { CTASection } from "@/components/CTASection";
import { DocsPreviewSection } from "@/components/DocsPreviewSection";
import { FeaturedLibrariesSection } from "@/components/FeaturedLibrariesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { PhilosophySection } from "@/components/PhilosophySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <FeaturedLibrariesSection />
        <PhilosophySection />
        <DocsPreviewSection />
        <OpenSourceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
