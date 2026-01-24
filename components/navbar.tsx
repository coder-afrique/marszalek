"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050f0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-primary drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="text-xl font-bold tracking-tight text-white">
              MARSZALEK<span className="text-primary">Recovery</span>
            </span>
          </div>
          
          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-sm font-medium text-muted hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">Services</Link>
            <Link href="#investments" className="text-sm font-medium text-muted hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">Investments</Link>
            <Link href="#success" className="text-sm font-medium text-muted hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">Success Stories</Link>
            <Link href="#process" className="text-sm font-medium text-muted hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">How It Works</Link>
            <Link href="#contact" className="text-sm font-medium text-muted hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">Contact</Link>
            
            <Link href="#contact" className="bg-primary hover:bg-green-400 text-black font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]">
              Get Help Now
            </Link>
          </div>

          {/* Mobile Hamburger Button (Visible only on Mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-primary transition-colors focus:outline-none"
            >
              {isOpen ? (
                <X className="h-8 w-8 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              ) : (
                <Menu className="h-8 w-8 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-[#050f0a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 py-6 space-y-4 flex flex-col items-center text-center">
            <Link 
              href="#services" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-lg font-medium text-white hover:text-primary transition-colors py-2"
            >
              Services
            </Link>
            <Link 
              href="#investments" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-lg font-medium text-white hover:text-primary transition-colors py-2"
            >
              Investments
            </Link>
            <Link 
              href="#success" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-lg font-medium text-white hover:text-primary transition-colors py-2"
            >
              Success Stories
            </Link>
            <Link 
              href="#process" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-lg font-medium text-white hover:text-primary transition-colors py-2"
            >
              How It Works
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-lg font-medium text-white hover:text-primary transition-colors py-2"
            >
              Contact
            </Link>

            <div className="pt-4 w-full">
              <Link 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="block w-full bg-primary hover:bg-green-400 text-black font-bold px-6 py-4 rounded-xl transition-all text-lg shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              >
                Get Help Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}