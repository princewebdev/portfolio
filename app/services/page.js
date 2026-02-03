"use client";

import Link from 'next/link';
import { ArrowUpRight, Code2, Palette, TrendingUp, Megaphone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies. From simple landing pages to complex platforms, I create solutions that scale with your business.",
      features: [
        "Custom React and Next.js Applications",
        "WordPress and Laravel Development",
        "E-commerce Solutions",
        "API Development and Integration",
        "Performance Optimization",
        "Responsive Design"
      ],
      link: "/services/web-development"
    },
    {
      icon: <Palette size={32} />,
      title: "Graphic Design",
      description: "Visual identities that make a lasting impression. I design logos, brand systems, and marketing materials that communicate your brand story effectively.",
      features: [
        "Logo and Brand Identity Design",
        "Social Media Graphics",
        "Print Design and Marketing Materials",
        "UI/UX Design",
        "Illustration",
        "Brand Guidelines"
      ],
      link: "/services/graphic-design"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "SEO Optimization",
      description: "Data-driven strategies to improve your search engine rankings and drive organic traffic. I focus on sustainable, white-hat techniques that deliver long-term results.",
      features: [
        "Technical SEO Audits",
        "Keyword Research and Strategy",
        "On-page Optimization",
        "Content Strategy",
        "Local SEO",
        "Analytics and Reporting"
      ],
      link: "/services/seo"
    },
    {
      icon: <Megaphone size={32} />,
      title: "Digital Marketing",
      description: "Performance marketing campaigns that drive real results. From social media to paid advertising, I help you reach your target audience effectively.",
      features: [
        "Social Media Marketing",
        "Google and Facebook Ads",
        "Content Marketing",
        "Email Marketing",
        "Conversion Rate Optimization",
        "Marketing Analytics"
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
              I offer a range of services to help businesses establish and grow their digital presence. 
              From development to design to marketing - everything you need under one roof.
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
