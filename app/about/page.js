"use client";

import Link from 'next/link';
import { ArrowUpRight, Briefcase, GraduationCap, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const experiences = [
    {
      company: "Progressive Bytes",
      role: "WordPress Developer",
      period: "Mar 2025 - Present",
      description: "Building awesome websites on WordPress for clients. Developing custom themes, implementing responsive designs, optimizing website performance, and ensuring SEO best practices. Working with modern WordPress technologies and frontend frameworks.",
      link: "#"
    },
    {
      company: "Freelance",
      role: "WordPress & Frontend Developer",
      period: "2022 - Present",
      description: "Developing custom WordPress themes, WooCommerce stores, and responsive frontend interfaces for clients worldwide. Building pixel-perfect websites with HTML5, CSS3, JavaScript, and modern frameworks. Expertise in custom plugin development, responsive design, and performance optimization.",
      link: "#"
    },
    {
      company: "Shikhbe Shobai",
      role: "Web Development Student & Early Career",
      period: "2022",
      description: "Started my web development journey learning WordPress, PHP, HTML, CSS, JavaScript, and modern web technologies. Built foundational skills in custom theme development, responsive design, and best coding practices through hands-on projects.",
      link: "#"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2012 - 2016",
      description: "Focused on software engineering, data structures, and web technologies."
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2024" },
    { name: "Meta Frontend Developer", issuer: "Meta", year: "2023" },
    { name: "Google Analytics Certified", issuer: "Google", year: "2023" },
    { name: "HubSpot Content Marketing", issuer: "HubSpot", year: "2022" }
  ];

  const values = [
    { title: "WordPress Expertise", description: "Custom themes, plugins, WooCommerce, and complete WordPress solutions." },
    { title: "Frontend Mastery", description: "HTML5, CSS3, JavaScript, responsive design, and cross-browser compatibility." },
    { title: "Performance & SEO", description: "Optimized code, fast load times, mobile-first approach, and SEO best practices." },
    { title: "Quality Delivery", description: "Pixel-perfect design implementation, clean code, and reliable client support." }
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
              Me, Basically
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
              I am a passionate WordPress and Frontend Developer from Bangladesh, currently working at Progressive Bytes. 
              I have strong expertise in creating modern, responsive, high-performance, and SEO-friendly websites. 
              I started my journey in 2022 and specialize in custom WordPress development and frontend technologies 
              including HTML5, CSS3, JavaScript, and responsive design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">My Story</h2>
            
            <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
              <p>
                My web development journey began in 2022 when I started learning from Shikhbe Shobai, a renowned 
                learning platform in Bangladesh. That is where I discovered my passion for WordPress development 
                and modern frontend technologies. From day one, I was captivated by the possibilities of creating 
                functional, beautiful, and responsive websites that solve real business problems.
              </p>
              <p>
                I quickly immersed myself in WordPress - mastering custom theme development, plugin customization, 
                and WooCommerce e-commerce solutions. I learned PHP, MySQL, HTML5, CSS3, JavaScript, and WordPress 
                core architecture from the ground up. Within months, I was building custom post types, creating 
                responsive layouts, and developing complete websites for real clients.
              </p>
              <p>
                My frontend development skills include modern HTML5 semantic markup, CSS3 with Flexbox and Grid, 
                JavaScript (ES6+), jQuery, Bootstrap, Tailwind CSS, and responsive mobile-first design. I also 
                work with React for building dynamic user interfaces when needed. I focus on cross-browser 
                compatibility, accessibility standards, and writing clean, maintainable code.
              </p>
              <p>
                Today, I work as a freelance WordPress and Frontend Developer, serving clients worldwide. I 
                specialize in custom WordPress theme development, WooCommerce stores, responsive design, 
                performance optimization, and SEO best practices. Every project is an opportunity to deliver 
                pixel-perfect, high-quality work that exceeds expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="text-green-400" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-400">Hired Anyway</h2>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 card-hover"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-green-400 font-medium">{exp.role}</p>
                    </div>
                    <span className="text-sm text-neutral-500 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-neutral-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="text-green-400" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-400">Education</h2>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <p className="text-green-400 font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-neutral-500 font-mono">{edu.period}</span>
                  </div>
                  <p className="text-neutral-400">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Award className="text-green-400" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-400">Useless Papers</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 card-hover"
                >
                  <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
                  <p className="text-neutral-400 text-sm">{cert.issuer}</p>
                  <span className="text-xs text-neutral-500 font-mono">{cert.year}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Heart className="text-green-400" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-400">What I Believe In</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-neutral-400 text-sm">{value.description}</p>
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
              Want to work together?
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              I am always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-green-500 text-neutral-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-400 transition-all"
            >
              Get In Touch
              <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
