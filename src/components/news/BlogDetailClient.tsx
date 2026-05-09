"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Loader2 } from "lucide-react";
import { Blog, BlogCategory } from "@/types/blog";
import { getBlogBySlug, getCategories } from "@/lib/api/blog";

export default function BlogDetailClient({ slug }: { slug: string }) {
  const [post, setPost] = useState<Blog | null>(null);
  const [categoryName, setCategoryName] = useState<string>("News");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlog() {
      try {
        const [fetchedBlog, fetchedCategories] = await Promise.all([
          getBlogBySlug(slug),
          getCategories()
        ]);
        
        if (fetchedBlog) {
          setPost(fetchedBlog);
          if (fetchedBlog.categories && fetchedBlog.categories.length > 0) {
            const cat = fetchedCategories.find(c => c.id === fetchedBlog.categories[0]);
            if (cat) setCategoryName(cat.title);
          }
        }
      } catch (error) {
        console.error("Failed to load blog:", error);
      } finally {
        setLoading(false);
      }
    }
    
    loadBlog();
  }, [slug]);

  const formatDate = (dateValue: any) => {
    if (!dateValue) return "Recently";
    try {
      const date = typeof dateValue === 'string' 
        ? new Date(dateValue) 
        : dateValue.toDate ? dateValue.toDate() : new Date();
        
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (e) {
      return "Recently";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-safari-light pt-32 flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-safari-gold animate-spin mb-4" />
        <p className="text-safari-dark font-sans uppercase tracking-widest text-xs font-bold">Loading Story...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-safari-light pt-32 px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif text-safari-dark mb-4">Story Not Found</h1>
        <p className="text-gray-500 font-light mb-8 max-w-lg mx-auto">
          We couldn't find the story you're looking for. It may have been moved or removed.
        </p>
        <Link 
          href="/news"
          className="flex items-center text-safari-dark hover:text-safari-gold transition-colors font-bold uppercase tracking-widest text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Stories
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-safari-light pt-16">
      {/* Blog Hero Image */}
      <div className="w-full h-[50vh] md:h-[60vh] relative">
        <img 
          src={post.photos && post.photos.length > 0 ? post.photos[0] : "/images/migration-2.jpeg"} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-safari-dark/80 via-transparent to-transparent"></div>
        
        {/* Absolute Back Button */}
        <Link 
          href="/news"
          className="absolute top-8 left-4 md:left-8 flex items-center text-white hover:text-safari-gold transition-colors font-bold uppercase tracking-widest text-xs z-10 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
        </Link>
      </div>

      {/* Blog Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20 mb-24">
        
        {/* Header Card */}
        <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl border border-gray-100 text-center mb-12">
          <span className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-6 block">
            {categoryName}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-safari-dark leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center justify-center text-xs text-gray-500 font-semibold uppercase tracking-widest gap-6 border-t border-gray-100 pt-6">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-safari-accent" /> {formatDate(post.createdAt)}</span>
            <span className="flex items-center"><User className="w-4 h-4 mr-2 text-safari-accent" /> {post.author}</span>
          </div>
        </div>

        {/* Rich Text Content */}
        {/* Using @tailwindcss/typography (prose) for formatting rich HTML from Quill */}
        <div 
          className="prose prose-lg md:prose-xl max-w-none break-words overflow-hidden prose-headings:font-serif prose-headings:text-safari-dark prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed prose-a:text-safari-gold prose-a:no-underline hover:prose-a:underline prose-img:rounded-sm shadow-sm bg-white p-8 md:p-12 border border-gray-100"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Additional Photos Gallery if exists */}
        {post.photos && post.photos.length > 1 && (
          <div className="mt-16">
            <h3 className="text-2xl font-serif text-safari-dark mb-8 text-center">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.photos.slice(1).map((photo, idx) => (
                <div key={idx} className="relative h-64 md:h-80 rounded-sm overflow-hidden shadow-md">
                  <img src={photo} alt={`Gallery image ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
