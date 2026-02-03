"use client";

import Link from 'next/link';
import { ArrowUpRight, Code2, Palette, TrendingUp, Megaphone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "WordPress Development",
      description: "Custom WordPress themes, WooCommerce stores, and high-performance websites. From plugin customization to complete site builds, I create scalable WordPress solutions tailored to your needs.",
      features: [
        "Custom WordPress Theme Development",
        "WooCommerce E-commerce Store Setup",
        "Plugin Customization and Development",
        "WordPress Performance Optimization",
        "Responsive and Mobile-Friendly Design",
        "Website Maintenance and Support"
      ],
      link: "/services/web-development"
    },
    {
      icon: <Palette size={32} />,
      title: "Frontend Development",
      description: "Modern, responsive frontend interfaces built with HTML5, CSS3, JavaScript, and popular frameworks. Create beautiful, fast-loading websites with pixel-perfect design, cross-browser compatibility, and mobile-first approach.",
      features: [
        "HTML5 Semantic Markup",
        "CSS3, SASS, and Modern Styling",
        "JavaScript (ES6+) and jQuery",
        "React for Dynamic Interfaces",
        "Bootstrap and Tailwind CSS",
        "Responsive and Mobile-First Design"
      ],
      link: "/services/graphic-design"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Performance & SEO Optimization",
      description: "Website speed optimization and technical SEO to improve search rankings and user experience. I focus on Core Web Vitals, on-page SEO, and performance best practices for faster, more discoverable websites.",
      features: [
        "Website Speed Optimization",
        "Core Web Vitals Improvement",
        "On-Page SEO & Technical Setup",
        "Image and Code Optimization",
        "Caching and CDN Implementation",
        "SEO-Friendly URL Structure"
      ],
      link: "/services/seo"
    },
    {
      icon: <Megaphone size={32} />,
      title: "Website Maintenance & Support",
      description: "Ongoing website maintenance, updates, and technical support to keep your WordPress site secure, fast, and running smoothly. Regular backups, security monitoring, and quick fixes when you need them.",
      features: [
        "WordPress Core and Plugin Updates",
        "Security Monitoring and Hardening",
        "Regular Backups and Recovery",
        "Bug Fixes and Troubleshooting",
        "Performance Monitoring",
        "Priority Support Response"
      ],
      link: "/services/marketing"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start with a deep dive into your business, goals, and target audience."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Based on insights, I create a detailed plan and project roadmap."
    },
    {
      step: "03",
      title: "Execution",
      description: "Design and development with regular check-ins and feedback loops."
    },
    {
      step: "04",
      title: "Launch",
      description: "Thorough testing, deployment, and handover with ongoing support."
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
              What I Do
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
              I offer professional WordPress development, WooCommerce stores, and frontend development services. 
              From custom themes to responsive interfaces - everything you need to build a successful, 
              high-performance website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={service.link}
                  className="group block p-6 md:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 card-hover"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-neutral-800 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-neutral-900 transition-all flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-green-400 transition-colors flex items-center gap-2">
                          {service.title}
                          <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-neutral-400 mt-2 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-3 pl-0 md:pl-18">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-neutral-400">
                          <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">How I Work</h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {process.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800"
                >
                  <span className="text-4xl font-bold text-green-400/30">{item.step}</span>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.description}</p>
                </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Let us discuss your project and see how I can help you achieve your goals.
              Free consultation, no strings attached.
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
