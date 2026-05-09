import ExperiencesHero from "@/components/experiences/ExperiencesHero";
import ExperiencesList from "@/components/experiences/ExperiencesList";
import OffersSection from "@/components/experiences/OffersSection";

export const metadata = {
  title: "Experiences & Offers | Pamoja Africa",
  description: "Discover short, simple, and unforgettable experiences tailored to your stay. Explore our exclusive offers across Tanzania's prime wildernesses.",
};

export default function ExperiencesPage() {
  return (
    <div className="flex flex-col w-full bg-safari-light">
      <ExperiencesHero />
      <ExperiencesList />
      {/* Decorative Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-safari-gold/30 to-transparent"></div>
      <OffersSection />
    </div>
  );
}
