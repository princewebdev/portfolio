"use client";

import Link from 'next/link';
import { ArrowUpRight, Palette, PenTool, Image, Layers, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GraphicDesign() {
  const features = [
    {
      icon: <Palette size={24} />,
      title: "Brand Identity",
      description: "Complete visual identity systems including logos, color palettes, and brand guidelines."
    },
    {
      icon: <PenTool size={24} />,
      title: "Logo Design",
      description: "Memorable and versatile logos that represent your brand essence."
    },
    {
      icon: <Image size={24} />,
      title: "Marketing Materials",
      description: "Social media graphics, banners, flyers, and promotional materials."
    },
    {
      icon: <Layers size={24} />,
      title: "UI/UX Design",
      description: "User interface design for web and mobile applications."
    }
  ];

  const tools = [
    "Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe XD",
    "Sketch", "InVision", "Canva Pro", "After Effects"
  ];

  const services = [
    "Logo and Brand Identity Design",
    "Social Media Graphics and Templates",
    "Print Design (Business Cards, Brochures)",
    "Web and Mobile UI Design",
    "Marketing and Advertising Materials",
    "Packaging Design",
    "Icon and Illustration Design",
    "Brand Guidelines Documentation"
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
              Graphic Design
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
              Visual identities that make a lasting impression. I design logos, brand systems, 
              and marketing materials that communicate your brand story effectively.
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
              Ready to Create Your Brand Identity?
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Let us discuss your vision and bring your brand to life with stunning visuals.
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
