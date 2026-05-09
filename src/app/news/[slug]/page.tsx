import BlogDetailClient from "@/components/news/BlogDetailClient";

export default async function NewsDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return <BlogDetailClient slug={slug} />;
}
