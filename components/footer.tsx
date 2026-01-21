import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
             <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-white">
                  MARSZALEK<span className="text-primary">Recovery</span>
                </span>
              </div>
              <p className="text-muted text-sm max-w-sm leading-relaxed">
                Professional recovery services for compromised social media accounts and lost digital assets. Trusted by clients worldwide.
              </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#success" className="hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link href="#process" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="#" className="hover:text-primary transition-colors">Instagram Recovery</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Facebook Recovery</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Crypto Recovery</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Fund Recovery</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>&copy; 2026 MARSZALEK Recovery. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}