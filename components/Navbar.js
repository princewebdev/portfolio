"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white hover:text-green-400 transition-colors">
              Prince<span className="text-green-400">.</span>
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-neutral-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-neutral-800/50"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 bg-green-500 text-neutral-900 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-400 transition-all"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-white hover:bg-neutral-800/50 block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-green-500 text-neutral-900 px-4 py-3 rounded-lg text-base font-semibold text-center hover:bg-green-400 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
