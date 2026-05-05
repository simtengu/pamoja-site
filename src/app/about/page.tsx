import AboutHero from "@/components/about/AboutHero";
import FounderStory from "@/components/about/FounderStory";
import ImpactNumbers from "@/components/about/ImpactNumbers";
import OurTimeline from "@/components/about/OurTimeline";
import { VisionMission } from "@/components/about/AboutSections";
import ImpactSection from "@/components/about/ImpactSection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import AwardsPress from "@/components/about/AwardsPress";
import AboutCTA from "@/components/about/AboutCTA";
import Reviews from "@/components/home/Reviews";

export const metadata = {
  title: "About Us | Pamoja Africa — Our Story, Our People, Our Impact",
  description:
    "Learn about Pamoja Africa's decade-long journey across Tanzania's most iconic landscapes. Meet our founder Asheri Kiisay, discover our conservation impact, and meet the passionate team behind every safari.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-safari-light">
      {/* 1. Cinematic Hero */}
      <AboutHero />

      {/* 2. Founder Story — Asheri Kiisay */}
      <FounderStory />

      {/* 3. Impact Numbers — animated stats */}
      <ImpactNumbers />

      {/* 4. Company Timeline — 2015 to Present */}
      <OurTimeline />

      {/* 5. Vision & Mission */}
      <VisionMission />

      {/* 6. Conservation Impact — 3 bento cards */}
      <ImpactSection />

      {/* 7. Core Values — flip cards */}
      <ValuesSection />

      {/* 8. Team — interactive slider */}
      <TeamSection />

      {/* 9. Awards & Press */}
      <AwardsPress />

      {/* 10. CTA */}
      <AboutCTA />

      {/* 11. Guest Reviews */}
      <Reviews />
    </div>
  );
}
