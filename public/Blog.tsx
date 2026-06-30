import React, { useState } from 'react';
import { Icons } from './AppIcons';
import { Page } from '../types';

interface BlogProps {
  setPage: (page: Page) => void;
}

const Blog: React.FC<BlogProps> = ({ setPage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts = [
    {
      title: "Aluminum Profile Lighting Ideas",
      excerpt: "Aluminum profile lighting provides a sleek, modern, seamless look. Here are creative ideas to integrate it into your living spaces and offices.",
      date: "June 27, 2026",
      category: "Design",
      author: "Joshua Wyclif Kitunguuzi",
      authorRole: "Co-Founder & Operations Director",
      image: "/premium-aluminum-profile-lighting-matuga.jpg",
      linkTo: Page.SEO_PROFILE_LIGHTING
    },
    {
      title: "Solar Installation Prices in Kampala",
      excerpt: "The cost of solar installation in Uganda depends on system size and battery type. Get an accurate picture of what a reliable hybrid solar system will cost.",
      date: "June 20, 2026",
      category: "Solar",
      author: "Eng. John Mukasa",
      authorRole: "Senior Solar & Security Systems Specialist",
      image: "/blog-solar-prices.jpg",
      linkTo: Page.SEO_SOLAR
    },
    {
      title: "Cost of Wiring a 3-Bedroom House in Uganda",
      excerpt: "Wiring a house correctly is critical. We break down the estimated costs for wiring, materials, and labor required for a modern home in Kampala.",
      date: "June 13, 2026",
      category: "Pricing",
      author: "Daniel Alemukori",
      authorRole: "Co-Founder & Lead Technical Engineer",
      image: "/house-wiring-slab-piping-mukono.jpg",
      linkTo: Page.SEO_HOUSE_WIRING_COST
    },
    {
      title: "Smart Home Installation in Uganda: Benefits, Costs & Best Systems",
      excerpt: "Discover how smart home technology can improve your convenience, security, and energy efficiency, and what it costs to install in Uganda.",
      date: "June 06, 2026",
      category: "Smart Home",
      author: "Joshua Wyclif Kitunguuzi",
      authorRole: "Co-Founder & Operations Director",
      image: "/smart_home_switches.webp",
      linkTo: Page.SEO_SMART_HOME
    },
    {
      title: "Designing a Professional CCTV Security System in Uganda: The Complete Guide",
      excerpt: "Learn how to design a professional CCTV surveillance system in Uganda. From IP camera resolution and NVR storage to remote mobile monitoring and weatherproofing.",
      date: "May 30, 2026",
      category: "Security",
      author: "Eng. John Mukasa",
      authorRole: "Senior Solar & Security Systems Specialist",
      image: "/blog-smart-home.jpg",
      linkTo: Page.SEO_BLOG_CCTV
    },
    {
      title: "Slab Piping & Conduit Works: Establishing Your Property's Electrical Foundation",
      excerpt: "Laying high-quality heavy-duty conduits in concrete floor slabs before deck casting is critical to ensure a lifetime of flexible, block-free electrical wiring.",
      date: "May 23, 2026",
      category: "Engineering",
      author: "Daniel Alemukori",
      authorRole: "Co-Founder & Lead Technical Engineer",
      image: "/house-wiring-slab-piping-mukono.jpg",
      linkTo: Page.SEO_BLOG_CONDUIT_SLAB
    },
    {
      title: "Best Electrical Installation Company in Kampala: What Homeowners Should Know",
      excerpt: "Choosing the right electrical company in Kampala is crucial for safety. Learn what credentials, experience, and safety standards to look for.",
      date: "May 16, 2026",
      category: "Tips",
      author: "Daniel Alemukori",
      authorRole: "Co-Founder & Lead Technical Engineer",
      image: "/complete-house-wiring-biira-wakiso.jpg",
      linkTo: Page.SEO_ELEC_INSTALL
    },
    {
      title: "Best Modern Lighting Designs in Uganda",
      excerpt: "From luxury ceiling layouts to ambient staircases, discover the best modern architectural lighting designs to elevate your property.",
      date: "May 09, 2026",
      category: "Lighting",
      author: "Daniel Alemukori",
      authorRole: "Co-Founder & Lead Technical Engineer",
      image: "/modern-residential-lighting-salaama-kampala.jpg",
      linkTo: Page.SEO_ARCH_LIGHTING
    }
  ];

  const categories = ["All", "Pricing", "Smart Home", "Solar", "Lighting", "Design", "Security", "Engineering", "Tips"];

  // Filter posts based on category and search query
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 text-left bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Professional Engineering Insights
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">Expert Insights & Engineering Guides</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stay updated with safety code compliance, cost breakdowns, solar calculations, and modern interior lighting architectures in Uganda.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="pt-10 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row gap-6 justify-between items-center">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition duration-200 uppercase tracking-wider ${
                  selectedCategory === cat 
                    ? 'bg-amber-500 text-slate-950 shadow' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Inputs */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search guides or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-250 text-slate-800 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition shadow-inner bg-slate-50"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-xs text-slate-400 hover:text-slate-600 uppercase font-black"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-4xl">🪹</span>
            <h3 className="text-lg font-black text-slate-900 mt-4 mb-2">No Guides Found</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">We couldn't find any articles matching your filters. Try entering a different search term or resetting your category selections.</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-6 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs px-5 py-2.5 rounded-lg transition uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredPosts.map((post, i) => (
              <article 
                key={i} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-250/80 flex flex-col hover:shadow-md hover:border-slate-300 transition duration-300"
              >
                {/* Photo Header */}
                <div 
                  className="h-52 overflow-hidden relative cursor-pointer group bg-slate-900"
                  onClick={() => setPage(post.linkTo)}
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    referrerPolicy="no-referrer"
                    loading="lazy" 
                    width="400"
                    height="208"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-[10px] font-black px-3 py-1.5 rounded-md uppercase tracking-wider shadow">
                    {post.category}
                  </div>
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors duration-400"></div>
                </div>

                {/* Card Content body */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="text-slate-400 text-xs mb-3 flex items-center justify-between font-mono">
                    <span className="flex items-center">
                      <Icons.Calendar className="h-3.5 w-3.5 mr-1" />
                      {post.date}
                    </span>
                    <span>5 min read</span>
                  </div>

                  <h2 
                    className="text-lg md:text-xl font-black text-slate-950 mb-3 hover:text-amber-600 transition-colors cursor-pointer leading-tight"
                    onClick={() => setPage(post.linkTo)}
                  >
                    {post.title}
                  </h2>

                  <p className="text-slate-600 text-xs md:text-sm mb-6 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="border-t border-slate-200 pt-4 mb-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-black text-[10px] flex items-center justify-center mr-3 font-mono">
                      {post.author.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-900 leading-none">{post.author}</p>
                      <p className="text-[10px] text-slate-400 font-medium font-mono uppercase">{post.authorRole}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setPage(post.linkTo)}
                    className="text-amber-600 font-extrabold text-xs md:text-sm flex items-center hover:text-amber-700 transition group border-t border-slate-100 pt-3"
                  >
                    Read Engineering Guide
                    <Icons.ArrowRight className="ml-1.5 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
