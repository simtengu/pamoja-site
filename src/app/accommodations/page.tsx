import AccommodationsHero from "@/components/accommodations/AccommodationsHero";
import PropertyListicle from "@/components/accommodations/PropertyListicle";

export default function AccommodationsPage() {
  return (
    <div className="flex flex-col w-full bg-safari-light">
      <AccommodationsHero />
      <PropertyListicle />
    </div>
  );
}
