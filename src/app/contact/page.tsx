import { ContactHero, ContactForm, AccommodationsMap } from "@/components/contact/ContactSections";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-safari-light">
      <ContactHero />
      <ContactForm />
      <AccommodationsMap />
    </div>
  );
}
