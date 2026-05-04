import { 
  AboutHero, 
  OurStory, 
  LocationsSection,
  VisionMission, 
  ValuesSection,
  TeamSection,
  AboutCTA
} from "@/components/about/AboutSections";
import Reviews from "@/components/home/Reviews";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-safari-light">
      <AboutHero />
      <OurStory />
      <LocationsSection />
      <VisionMission />
      <ValuesSection />
      <TeamSection />
      <AboutCTA />
      
      {/* Reusing the beautiful auto-playing 
          Reviews slider from the Homepage */}
      <Reviews />
    </div>
  );
}
