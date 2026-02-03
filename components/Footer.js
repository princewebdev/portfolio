import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={18} />, href: 'mailto:hello@princewebdev.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-neutral-800/50 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-white hover:text-green-400 transition-colors">
              Prince<span className="text-green-400">.</span>
            </Link>
            <p className="text-neutral-400 text-sm max-w-xs">
              Building digital experiences that matter. Full Stack Developer and Designer.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="py-6 border-t border-neutral-800/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            {currentYear} Prince. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
