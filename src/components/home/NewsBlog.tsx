"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, User, Loader2 } from "lucide-react";
import { Blog, BlogCategory } from "@/types/blog";
import { getPublishedBlogs, getCategories } from "@/lib/api/blog";

export default function NewsBlog() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const [fetchedBlogs, fetchedCategories] = await Promise.all([
          getPublishedBlogs(3),
          getCategories()
        ]);
        
        // Map category IDs to titles
        const categoryMap: Record<string, string> = {};
        fetchedCategories.forEach(cat => {
          categoryMap[cat.id] = cat.title;
        });
        
        setCategories(categoryMap);
        setPosts(fetchedBlogs);
      } catch (error) {
        console.error("Failed to load blogs for homepage:", error);
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
    <section className="py-24 bg-white px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="text-left max-w-2xl">
            <span className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
              News & Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-safari-dark leading-tight">
              Stories from the Bush
            </h2>
          </div>
          <Link 
            href="/news" 
            className="group flex flex-shrink-0 items-center gap-2 text-safari-accent font-bold uppercase text-xs tracking-widest hover:text-safari-gold mt-6 md:mt-0 pb-1 border-b-2 border-transparent hover:border-safari-gold transition-all"
          >
            Read All Articles 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 text-safari-gold animate-spin" />
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group bg-safari-light border border-gray-100 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full">
                
                <div className="relative h-64 overflow-hidden">
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

                <div className="p-8 flex-grow flex flex-col relative bg-white transform group-hover:-translate-y-4 transition-transform duration-300 shadow-sm mx-4 -mt-8 rounded-sm">
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-4 uppercase tracking-widest">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1 text-safari-accent" /> {formatDate(post.createdAt)}</span>
                    <span className="flex items-center truncate max-w-[120px]"><User className="w-3 h-3 mr-1 text-safari-accent flex-shrink-0" /> <span className="truncate">{post.author}</span></span>
                  </div>
                  
                  <h3 className="text-xl font-serif text-safari-dark mb-4 group-hover:text-safari-accent transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link 
                    href={`/news/${post.slug}`} 
                    className="text-xs font-bold tracking-widest text-safari-dark uppercase hover:text-safari-gold flex items-center gap-1 group/btn mt-auto border-t border-gray-100 pt-4 w-full"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-safari-light rounded-sm">
            <p className="text-gray-500 font-light">No articles available at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
