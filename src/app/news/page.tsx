"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, User, Loader2 } from "lucide-react";
import { Blog } from "@/types/blog";
import { getPublishedBlogs, getCategories } from "@/lib/api/blog";

export default function NewsPage() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const [fetchedBlogs, fetchedCategories] = await Promise.all([
          getPublishedBlogs(), // fetch all
          getCategories()
        ]);
        
        const categoryMap: Record<string, string> = {};
        fetchedCategories.forEach(cat => {
          categoryMap[cat.id] = cat.title;
        });
        
        setCategories(categoryMap);
        setPosts(fetchedBlogs);
      } catch (error) {
        console.error("Failed to load blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    
    loadBlogs();
  }, []);

  const formatDate = (dateValue: any) => {
    if (!dateValue) return "Recently";
    try {
      const date = typeof dateValue === 'string' 
        ? new Date(dateValue) 
        : dateValue.toDate ? dateValue.toDate() : new Date();
        
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (e) {
      return "Recently";
    }
  };

  return (
    <main className="min-h-screen bg-safari-light pt-24">
      {/* Header */}
      <section className="py-20 px-4 bg-safari-dark text-center text-white">
        <span className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
          Pamoja Africa
        </span>
        <h1 className="text-4xl md:text-6xl font-serif mb-6">News & Journal</h1>
        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
          Immerse yourself in the stories of the African bush. From thrilling wildlife encounters and conservation updates to expert travel tips.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <Loader2 className="w-12 h-12 text-safari-gold animate-spin mb-4" />
              <p className="text-safari-dark font-sans uppercase tracking-widest text-xs font-bold">Loading Journal...</p>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
              {posts.map((post) => (
                <article key={post.id} className="group bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full">
                  
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute top-4 left-4 z-20 bg-safari-dark text-safari-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-md">
                      {post.categories && post.categories.length > 0 
                        ? categories[post.categories[0]] || "News" 
                        : "News"}
                    </div>
                    <img 
                      src={post.photos && post.photos.length > 0 ? post.photos[0] : "/images/migration-2.jpeg"} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                    />
                    <div className="absolute inset-0 bg-safari-dark/10 group-hover:bg-safari-dark/0 transition-colors"></div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-4 uppercase tracking-widest">
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-1 text-safari-accent" /> {formatDate(post.createdAt)}</span>
                      <span className="flex items-center truncate max-w-[120px]"><User className="w-3 h-3 mr-1 text-safari-accent flex-shrink-0" /> <span className="truncate">{post.author}</span></span>
                    </div>
                    
                    <h3 className="text-2xl font-serif text-safari-dark mb-4 group-hover:text-safari-accent transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link 
                      href={`/news/${post.slug}`} 
                      className="text-xs font-bold tracking-widest text-safari-dark uppercase hover:text-safari-gold flex items-center gap-1 group/btn mt-auto border-t border-gray-100 pt-6 w-full"
                    >
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white rounded-sm shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif text-safari-dark mb-4">No stories published yet</h2>
              <p className="text-gray-500 font-light">We are out in the bush gathering incredible stories. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
