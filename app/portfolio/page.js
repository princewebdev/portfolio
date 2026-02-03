"use client";

import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured multivendor marketplace with real-time inventory management, secure payment processing, and comprehensive admin dashboard. Built for scale with 10K+ daily users.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      image: null,
      link: "#"
    },
    {
      title: "SaaS Analytics Dashboard",
      category: "Web Application",
      description: "Real-time analytics dashboard for a B2B SaaS company. Features include custom data visualization, automated reporting, and team collaboration tools.",
      tags: ["React", "TypeScript", "D3.js", "Firebase", "Tailwind"],
      image: null,
      link: "#"
    },
    {
      title: "Brand Identity System",
      category: "Graphic Design",
      description: "Complete visual identity redesign for a tech startup. Included logo design, color system, typography guidelines, and comprehensive brand book.",
      tags: ["Branding", "Logo Design", "Figma", "Illustrator"],
      image: null,
      link: "#"
    },
    {
      title: "Restaurant Ordering System",
      category: "Web Development",
      description: "Custom online ordering platform with real-time order tracking, kitchen display system, and integrated delivery management.",
      tags: ["Laravel", "Vue.js", "MySQL", "Socket.io"],
      image: null,
      link: "#"
    },
    {
      title: "SEO Campaign - Health Clinic",
      category: "Digital Marketing",
      description: "Comprehensive SEO strategy that increased organic traffic by 250% in 6 months. Included technical SEO, content strategy, and local SEO optimization.",
      tags: ["SEO", "Content Marketing", "Google Analytics", "Ahrefs"],
      image: null,
      link: "#"
    },
    {
      title: "Corporate Website Redesign",
      category: "Web Development",
      description: "Modern redesign for a financial services company. Focused on performance, accessibility, and conversion optimization.",
      tags: ["WordPress", "PHP", "JavaScript", "GSAP"],
      image: null,
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
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 md:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 card-hover"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-sm text-green-400 font-medium">{project.category}</span>
                        <h3 className="text-xl md:text-2xl font-semibold text-white mt-1 group-hover:text-green-400 transition-colors flex items-center gap-2">
                          {project.title}
                          <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                      </div>
                      <div className="p-2 rounded-lg bg-neutral-800 text-neutral-400 group-hover:bg-green-500 group-hover:text-neutral-900 transition-all">
                        <ExternalLink size={18} />
                      </div>
                    </div>
                    
                    <p className="text-neutral-400 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tech-badge text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
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
