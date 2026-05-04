import DetailsDataLoader from "@/components/details/DetailsDataLoader";

export default async function AccommodationDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return <DetailsDataLoader id={slug} />;
}
