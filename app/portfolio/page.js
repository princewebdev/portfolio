"use client";

import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    {
      title: "Custom WooCommerce Store",
      category: "WordPress Development",
      description: "Full-featured e-commerce platform built with WooCommerce. Custom theme development, payment gateway integration, advanced product filtering, and optimized checkout flow.",
      tags: ["WordPress", "WooCommerce", "PHP", "MySQL"],
      image: "https://live.staticflickr.com/65535/52277497746_5a22357ee4_z.jpg",
      link: "#"
    },
    {
      title: "React Dashboard Interface",
      category: "Frontend Development",
      description: "Admin dashboard UI built with modern frontend practices. Focus on responsive layouts, interactive charts, and clean component structure.",
      tags: ["HTML5", "CSS3", "JavaScript", "React"],
      image: "https://live.staticflickr.com/65535/52277524968_03b1a6576a_z.jpg",
      link: "#"
    },
    {
      title: "Corporate WordPress Website",
      category: "WordPress Development",
      description: "Professional business website with custom theme, Elementor Pro integration, multilingual support, and performance optimizations for SEO.",
      tags: ["WordPress", "Elementor", "SEO", "Performance"],
      image: "https://live.staticflickr.com/65535/52277522903_f8191d6a77_z.jpg",
      link: "#"
    },
    {
      title: "Next.js Blog Platform (Example)",
      category: "Static & Dynamic Sites",
      description: "SEO-optimized blog platform with static generation, MDX support for rich content, and image optimization for fast page loads.",
      tags: ["Next.js", "Static Generation", "MDX", "SEO"],
      image: "https://live.staticflickr.com/65535/52264322231_87ed114f49_z.jpg",
      link: "#"
    },
    {
      title: "WordPress Performance Overhaul",
      category: "WordPress Optimization",
      description: "Site speed improvements, caching, image optimization, and technical SEO that significantly reduced load times and improved search visibility.",
      tags: ["Caching", "Image Optimization", "SEO", "Speed"],
      image: "https://live.staticflickr.com/65535/52277502026_34ba251157_z.jpg",
      link: "#"
    },
    {
      title: "Headless WordPress + React",
      category: "Decoupled Architecture",
      description: "Headless setup using WordPress as CMS with a React frontend consuming REST API for a fast, flexible content experience.",
      tags: ["Headless CMS", "REST API", "React", "WordPress"],
      image: "https://live.staticflickr.com/65535/52277500396_afd195b2d2_z.jpg",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Stuff I Did Not Ruin
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
              A collection of projects I have worked on over the years. From web applications 
              to brand identities, each project represents a unique challenge and solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative h-48 bg-neutral-800">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-500">No image</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute left-4 bottom-4">
                      <span className="text-xs bg-green-500 text-black font-bold px-2 py-1 rounded">{project.category}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-neutral-900 border border-neutral-800">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-between">
                      <span>{project.title}</span>
                      <ExternalLink size={16} className="text-neutral-400 group-hover:text-green-400" />
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-500">Case Study</span>
                      <button className="inline-flex items-center gap-2 bg-green-500 text-black px-3 py-2 rounded-md text-sm font-semibold hover:bg-green-400 transition-all">
                        View Project
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              I am always looking for new challenges and interesting projects to work on. 
              Let us create something amazing together.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-green-500 text-neutral-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-400 transition-all"
            >
              Start a Project
              <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
