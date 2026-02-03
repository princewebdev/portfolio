"use client";

import Link from 'next/link';
import { ArrowUpRight, Code2, Server, Smartphone, Globe2, ShieldCheck, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WebDevelopment() {
  const features = [
    {
      icon: <Globe2 size={24} />,
      title: "Custom Web Applications",
      description: "Complex business logic implemented with React, Next.js, and Laravel for scalable solutions."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect experience across all devices and screen sizes."
    },
    {
      icon: <Server size={24} />,
      title: "Backend Development",
      description: "Robust APIs and server architecture using Node.js, Laravel, and PostgreSQL."
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Lightning-fast load times with optimized code, caching, and CDN integration."
    }
  ];

  const technologies = [
    "React", "Next.js", "Vue.js", "Node.js", "Laravel", "PHP",
    "WordPress", "TypeScript", "PostgreSQL", "MongoDB", "Tailwind CSS", "REST APIs"
  ];

  const services = [
    "Custom React and Next.js Applications",
    "WordPress Theme Development",
    "E-commerce Platforms",
    "SaaS Applications",
    "API Development and Integration",
    "Database Design and Optimization",
    "Performance Audits and Optimization",
    "Maintenance and Support"
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
              Web Development
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
              Custom websites and web applications built with modern technologies. 
              From simple landing pages to complex platforms, I create solutions that 
              scale with your business.
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

      {/* Technologies */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Technologies I Use</h2>
            
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
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
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Let us discuss your project and see how I can help bring your vision to life.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-green-500 text-neutral-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-400 transition-all"
            >
              Get a Free Quote
              <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
