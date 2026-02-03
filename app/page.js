"use client";

import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, Code2, Palette, TrendingUp, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const technologies = [
    "React", "Next.js", "Node.js", "TypeScript", "Laravel", "PHP", 
    "WordPress", "Tailwind CSS", "PostgreSQL", "MongoDB", "Figma", 
    "SEO", "Google Ads", "Facebook Ads", "Photoshop", "Illustrator"
  ];

  const experiences = [
    {
      company: "Freelance",
      role: "Full Stack Developer & Designer",
      period: "2020 - Present",
      description: "Building custom web solutions for clients worldwide. Specializing in React, Next.js, and WordPress development."
    },
    {
      company: "Digital Agency",
      role: "Senior Web Developer",
      period: "2018 - 2020",
      description: "Led development of 50+ client projects including e-commerce platforms and SaaS applications."
    },
    {
      company: "StartUp Hub",
      role: "Frontend Developer",
      period: "2016 - 2018",
      description: "Developed responsive user interfaces and implemented modern frontend architectures."
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured multivendor marketplace with real-time inventory, payment processing, and admin dashboard.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      link: "/portfolio"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for a B2B SaaS company with real-time data visualization and reporting features.",
      tags: ["React", "TypeScript", "D3.js", "Firebase"],
      link: "/portfolio"
    },
    {
      title: "Brand Identity System",
      description: "Complete visual identity redesign including logo, color system, typography, and marketing materials.",
      tags: ["Branding", "UI Design", "Figma", "Illustrator"],
      link: "/portfolio"
    }
  ];

  const services = [
    {
      icon: <Code2 size={24} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      link: "/services/web-development"
    },
    {
      icon: <Palette size={24} />,
      title: "Graphic Design",
      description: "Brand identities, logos, and visual designs that make an impact.",
      link: "/services/graphic-design"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "SEO Optimization",
      description: "Data-driven strategies to boost your search engine rankings.",
      link: "/services/seo"
    },
    {
      icon: <Megaphone size={24} />,
      title: "Digital Marketing",
      description: "Performance marketing campaigns that drive real results.",
      link: "/services/marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm text-neutral-400">Available for new projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I am <span className="gradient-text">Prince</span> ??
              <br />
              <span className="text-neutral-400">Building digital experiences</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              A Full Stack Developer & Designer focused on creating beautiful, functional, 
              and user-centered digital experiences. I help brands grow through code and creativity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link 
                href="/contact" 
                className="group flex items-center gap-2 bg-green-500 text-neutral-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-400 transition-all"
              >
                Lets Work Together
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link 
                href="/portfolio" 
                className="flex items-center gap-2 text-neutral-300 px-8 py-4 rounded-xl text-lg font-medium hover:text-white border border-neutral-700 hover:border-neutral-500 transition-all"
              >
                View My Work
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@princewebdev.com"
                className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Me, Basically</h2>
            
            <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
              <p>
                I am a passionate developer and designer with over 5 years of experience crafting 
                digital solutions. I believe in the power of clean code, thoughtful design, and 
                strategic thinking to solve real business problems.
              </p>
              <p>
                My expertise spans across the full development stack - from building responsive 
                frontends with React and Next.js to architecting robust backend systems. I also 
                bring a strong design sensibility to every project, ensuring that the end result 
                is not just functional, but beautiful.
              </p>
              <p>
                When I am not coding, you will find me exploring new technologies, contributing to 
                open source, or writing about web development best practices.
              </p>
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 mt-8 text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              Learn more about me
              <ArrowUpRight size={18} />
            </Link>
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
            <h2 className="section-title">Where I Have Worked</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 card-hover"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
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

      {/* Technologies Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Daily Tools</h2>
            
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

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">What I Do</h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="group p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-green-400 mb-4 group-hover:bg-green-500 group-hover:text-neutral-900 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm">{service.description}</p>
                </Link>
              ))}
            </div>

            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 mt-8 text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              View all services
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Stuff I Have Built</h2>
            
            <div className="space-y-6">
              {projects.map((project, index) => (
                <Link
                  key={index}
                  href={project.link}
                  className="group block p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 card-hover"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-neutral-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="tech-badge text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 mt-8 text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              View all projects
              <ArrowUpRight size={18} />
            </Link>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Your Move
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Got a project in mind? Lets chat and turn your ideas into reality. 
              I am always excited to work on interesting challenges.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-green-500 text-neutral-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-400 transition-all"
            >
              Start a Conversation
              <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
