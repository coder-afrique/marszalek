import Link from 'next/link';
import { ArrowRight, Lock, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9811a_1px,transparent_1px),linear-gradient(to_bottom,#10b9811a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Top Center Glow Spot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-medium mb-8 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
          <Lock className="w-4 h-4" />
          Trusted by 500+ Clients Worldwide
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Recover Your <br />
          <span className="text-primary drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">Digital Assets</span> <br />
          & Accounts
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-muted mb-10 leading-relaxed">
          Expert recovery specialists helping you regain access to hacked social media accounts and recover lost funds. Professional, confidential, and effective.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:-translate-y-1">
            Start Recovery <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="#success" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg rounded-xl transition-all backdrop-blur-sm">
            View Success Stories
          </Link>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="mt-24 border-t border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">500+</div>
            <div className="text-primary font-medium tracking-wide uppercase text-sm">Accounts Recovered</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">$2.5M+</div>
            <div className="text-primary font-medium tracking-wide uppercase text-sm">Funds Retrieved</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">98%</div>
            <div className="text-primary font-medium tracking-wide uppercase text-sm">Success Rate</div>
          </div>
        </div>
        
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 pb-12 px-4">
           <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-surface/80 backdrop-blur text-sm text-white shadow-lg">
             <Shield className="w-4 h-4 text-primary" /> 100% Confidential
           </span>
           <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-surface/80 backdrop-blur text-sm text-white shadow-lg">
             <Clock className="w-4 h-4 text-primary" /> 24/7 Support
           </span>
           <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-surface/80 backdrop-blur text-sm text-white shadow-lg">
             <Lock className="w-4 h-4 text-primary" /> Secure Process
           </span>
        </div>
      </div>
    </div>
  );
}