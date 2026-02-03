"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 5000);

    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "hello@princewebdev.com",
      description: "I will respond within 24 hours",
      link: "mailto:hello@princewebdev.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+880 1644-557412",
      description: "Available Mon-Sat, 9am-8pm",
      link: "tel:+8801644557412"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      description: "Available for remote work globally",
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Github size={20} />, name: "GitHub", link: "https://github.com" },
    { icon: <Linkedin size={20} />, name: "LinkedIn", link: "https://linkedin.com" },
    { icon: <Twitter size={20} />, name: "Twitter", link: "https://twitter.com" }
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
              Your Move
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
              Got a project in mind? Want to collaborate? Or just want to say hi? 
              Shoot me a message and I will get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {method.link ? (
                  <a 
                    href={method.link}
                    className="group block p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 card-hover h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-green-400 mb-4 group-hover:bg-green-500 group-hover:text-neutral-900 transition-all">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                    <p className="text-green-400 font-medium mb-1">{method.value}</p>
                    <p className="text-neutral-500 text-sm">{method.description}</p>
                  </a>
                ) : (
                  <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 h-full">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-green-400 mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                    <p className="text-green-400 font-medium mb-1">{method.value}</p>
                    <p className="text-neutral-500 text-sm">{method.description}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <MessageCircle className="text-green-400" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-400">Send a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Project Type
                </label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Budget Range
                </label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select your budget</option>
                  <option value="$500 - $2,000">$500 - $2,000</option>
                  <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              {/* Status Messages */}
              {status.error && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-400">
                  <AlertCircle size={20} />
                  <span>{status.error}</span>
                </div>
              )}
              
              {status.success && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/50 text-green-400">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              <button 
                type="submit"
                disabled={status.loading}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 text-neutral-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-white">
              Or find me on
            </h2>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
                >
                  {social.icon}
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
