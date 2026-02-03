"use client";

import Link from 'next/link';
import { ArrowUpRight, Briefcase, GraduationCap, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const experiences = [
    {
      company: "Freelance",
      role: "Full Stack Developer & Designer",
      period: "2020 - Present",
      description: "Building custom web solutions for clients worldwide. Leading projects from concept to deployment, specializing in React, Next.js, and WordPress development.",
      link: "#"
    },
    {
      company: "Digital Agency",
      role: "Senior Web Developer",
      period: "2018 - 2020",
      description: "Led development of 50+ client projects including e-commerce platforms and SaaS applications. Mentored junior developers and established coding standards.",
      link: "#"
    },
    {
      company: "StartUp Hub",
      role: "Frontend Developer",
      period: "2016 - 2018",
      description: "Developed responsive user interfaces and implemented modern frontend architectures. Collaborated with designers to create pixel-perfect implementations.",
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
    { title: "Clean Code", description: "Writing maintainable, scalable, and well-documented code." },
    { title: "User First", description: "Every decision is made with the end user in mind." },
    { title: "Continuous Learning", description: "Always staying updated with the latest technologies." },
    { title: "Honest Communication", description: "Transparent and clear communication with clients." }
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
              I am a Full Stack Developer and Designer based in Bangladesh with a passion for 
              creating beautiful, functional, and user-centered digital experiences. I have been 
              building things for the web for over 5 years.
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
                My journey into web development started back in 2015 when I built my first website 
                for a local business. Since then, I have been hooked on the process of turning ideas 
                into reality through code.
              </p>
              <p>
                Over the years, I have worked with startups, agencies, and established businesses, 
                helping them build their digital presence. From simple landing pages to complex 
                e-commerce platforms, I enjoy the challenge of solving problems through technology.
              </p>
              <p>
                What sets me apart is my combination of technical skills and design sensibility. 
                I do not just write code - I craft experiences. I believe that great software 
                should not only work well but also feel great to use.
              </p>
              <p>
                When I am not coding, you will find me exploring new technologies, contributing 
                to open source projects, or sharing my knowledge through blog posts and tutorials.
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
