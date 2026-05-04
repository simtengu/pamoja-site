import Hero from "@/components/home/Hero";
import AvailabilityBar from "@/components/home/AvailabilityBar";
import AboutBrief from "@/components/home/AboutBrief";
import AccommodationsList from "@/components/home/AccommodationsList";
import RoomsPreview from "@/components/home/RoomsPreview";
import Experiences from "@/components/home/Experiences";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Reviews from "@/components/home/Reviews";
import NewsBlog from "@/components/home/NewsBlog";
import HomeGallery from "@/components/home/HomeGallery";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-safari-light">
      {/* Hero Section */}
      <Hero />
      
      {/* Search/Availability Floating Bar */}
      <AvailabilityBar />
      
      {/* Briefly telling the story */}
      <AboutBrief />
      
      {/* Showcasing the 7 accommodations */}
      <AccommodationsList />
      
      {/* Showcasing select rooms */}
      <RoomsPreview />
      
      {/* Tabbed Dining, Pools, Wellness section */}
      <Experiences />
      
      {/* Why choose Pamoja */}
      <WhyChooseUs />

      {/* Guest Reviews Slider */}
      <Reviews />

      {/* Latest News & Blog */}
      <NewsBlog />
      
      {/* Gallery snippet */}
      <HomeGallery />
    </div>
  );
}
