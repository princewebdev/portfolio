"use client";

import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Search, FileText, BarChart3, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SEO() {
  const features = [
    {
      icon: <Search size={24} />,
      title: "Keyword Research",
      description: "In-depth keyword analysis to target the terms your audience is searching for."
    },
    {
      icon: <FileText size={24} />,
      title: "On-Page SEO",
      description: "Optimization of content, meta tags, headings, and internal linking structure."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Technical SEO",
      description: "Site speed, mobile optimization, schema markup, and crawlability improvements."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics and Reporting",
      description: "Detailed monthly reports with actionable insights and progress tracking."
    }
  ];

  const tools = [
    "Google Search Console", "Google Analytics", "Ahrefs", "SEMrush",
    "Moz Pro", "Screaming Frog", "GTmetrix", "PageSpeed Insights"
  ];

  const services = [
    "Comprehensive SEO Audits",
    "Keyword Research and Strategy",
    "On-Page Optimization",
    "Technical SEO Implementation",
    "Content Strategy and Optimization",
    "Local SEO for Businesses",
    "Link Building Strategies",
    "Monthly Performance Reports"
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
            <Link href="/services" className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium">
              ? Back to Services
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              SEO Optimization
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
              Data-driven strategies to improve your search engine rankings and drive organic traffic. 
              I focus on sustainable, white-hat techniques that deliver long-term results.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-green-500 text-neutral-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-400 transition-all"
            >
              Get SEO Audit
              <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">What I Offer</h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800"
                >
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-green-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Services Included</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Tools I Use</h2>
            
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span key={index} className="tech-badge">
                  {tool}
                </span>
              ))}
            </div>
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
              Ready to Rank Higher?
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Let us analyze your current SEO status and create a strategy for growth.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-green-500 text-neutral-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-400 transition-all"
            >
              Get a Free SEO Audit
              <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
