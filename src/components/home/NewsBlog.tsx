"use client";

import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function NewsBlog() {
  const posts = [
    {
      id: 1,
      title: "The Great Migration: What You Need to Know for 2026",
      excerpt: "Expert insights on following the wildebeest migration patterns this year and how Pamoja mobile camps get you closer to the action.",
      image: "/images/migration-2.jpeg",
      date: "Mar 15, 2026",
      author: "Pamoja Guides",
      category: "Wildlife Guide"
    },
    {
      id: 2,
      title: "Sustainable Safari: Our Solar Initiatives at Manyara",
      excerpt: "Discover how Manyara Baobab Lodge is leading the charge in eco-conscious luxury by converting to 100% solar power operations.",
      image: "/images/baobab-2.jpeg",
      date: "Feb 28, 2026",
      author: "Sustainability Team",
      category: "Conservation"
    },
    {
      id: 3,
      title: "Capturing the Perfect Safari Sunset: Photography Tips",
      excerpt: "A professional photographer shares their top tips for capturing the breathtaking golden hour colors of the Serengeti.",
      image: "/images/serengeti-2.jpeg",
      date: "Jan 10, 2026",
      author: "David L.",
      category: "Photography"
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group bg-safari-light border border-gray-100 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full">
              
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-20 bg-safari-dark text-safari-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-safari-dark/10 group-hover:bg-safari-dark/0 transition-colors"></div>
              </div>

              <div className="p-8 flex-grow flex flex-col relative bg-white transform group-hover:-translate-y-4 transition-transform duration-300 shadow-sm mx-4 -mt-8 rounded-sm">
                
                <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-4 uppercase tracking-widest">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1 text-safari-accent" /> {post.date}</span>
                  <span className="flex items-center"><User className="w-3 h-3 mr-1 text-safari-accent" /> {post.author}</span>
                </div>
                
                <h3 className="text-xl font-serif text-safari-dark mb-4 group-hover:text-safari-accent transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <Link 
                  href="/news" 
                  className="text-xs font-bold tracking-widest text-safari-dark uppercase hover:text-safari-gold flex items-center gap-1 group/btn mt-auto border-t border-gray-100 pt-4 w-full"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
