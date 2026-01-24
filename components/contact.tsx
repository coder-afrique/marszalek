"use client";

import { useState } from 'react';
import { Shield, Clock, MessageSquare, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: 'Social Media Hack', 
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Category:* ${formData.issueType}\n` +
      `*Details:* ${formData.description}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/17652742555?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-primary font-semibold mb-2 tracking-wider uppercase text-sm">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Recovery Today</h3>
            <p className="text-muted mb-8 text-lg leading-relaxed">
              Don't wait another day. Our team of experts is ready to help you recover your accounts and funds.
            </p>

            {/* Icons Section (Left) - Unchanged */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="text-white font-medium text-lg">256-bit Encrypted Communications</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <span className="text-white font-medium text-lg">Response Within 24 Hours</span>
              </div>
            </div>

            <div className="space-y-4">
              <a href="https://wa.me/17652742555" target="_blank" rel="noopener noreferrer" className="p-5 rounded-2xl bg-surface border border-white/10 flex items-center gap-4 hover:border-primary/50 hover:bg-surface/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary group-hover:text-black transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted uppercase tracking-wider group-hover:text-primary transition-colors">WhatsApp us directly</p>
                  <p className="text-white font-bold text-lg md:text-xl break-all">+1 765 274 2555</p>
                </div>
              </a>

              <a href="mailto:marszalekrecovery@gmail.com" className="p-5 rounded-2xl bg-surface border border-white/10 flex items-center gap-4 hover:border-primary/50 hover:bg-surface/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary group-hover:text-black transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted uppercase tracking-wider group-hover:text-primary transition-colors">Email us directly</p>
                  <p className="text-white font-bold text-lg md:text-xl break-all">marszalekrecovery@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-surface/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-medium text-white mb-2 ml-1">Full Name</label>
                <input required name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2 ml-1">Email Address</label>
                <input required name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2 ml-1">What do you need help with?</label>
                <select 
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all appearance-none cursor-pointer"
                >
                  <option value="Social Media Hack">Recover Hacked Account</option>
                  <option value="Crypto Scam">Recover Crypto Funds</option>
                  <option value="Investment Inquiry">Start Investment Plan 🚀</option>
                  <option value="Banking Fraud">Banking Fraud</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2 ml-1">Details (Optional)</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows={4} placeholder="Tell us more..." className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all resize-none" />
              </div>

              <button type="submit" className="w-full bg-primary text-black font-bold text-lg py-5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:-translate-y-1">
                Proceed to WhatsApp <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}