import { TrendingUp, ShieldCheck, Zap, ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    name: "Starter Growth",
    price: "$500 - $4,999",
    roi: "15% Monthly Return",
    icon: ShieldCheck,
    features: [
      "Secure Asset Storage",
      "Weekly Performance Reports",
      "Basic Risk Management",
      "24/7 Support Access"
    ],
    highlight: false
  },
  {
    name: "Pro Trader",
    price: "$5,000 - $24,999",
    roi: "25% Monthly Return",
    icon: TrendingUp,
    features: [
      "Advanced AI Trading Strategies",
      "Daily Profit Compounding",
      "Zero Withdrawal Fees",
      "Priority Support Line",
      "Capital Insurance Protection"
    ],
    highlight: true // This one will glow more
  },
  {
    name: "Elite Partner",
    price: "$25,000+",
    roi: "40% Monthly Return",
    icon: Zap,
    features: [
      "Dedicated Portfolio Manager",
      "Institutional Grade Security",
      "Real-time Asset Monitoring",
      "Private Investment Calls",
      "VIP Events Access",
      "Full Capital Guarantee"
    ],
    highlight: false
  }
];

export default function Investments() {
  return (
    <section id="investments" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold mb-2 tracking-wider uppercase text-sm">Grow Your Wealth</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Secure Investment Opportunities</h3>
          <p className="text-muted max-w-2xl mx-auto">
            Don't just recover your assets—grow them. Join our exclusive investment programs managed by expert financial analysts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight 
                  ? 'bg-surface/80 border-primary shadow-[0_0_30px_rgba(16,185,129,0.15)]' 
                  : 'bg-surface/40 border-white/5 hover:border-primary/30'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  MOST POPULAR
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                plan.highlight ? 'bg-primary text-black' : 'bg-primary/10 text-primary'
              }`}>
                <plan.icon className="w-7 h-7" />
              </div>

              <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
              <div className="text-primary font-bold text-2xl mb-1">{plan.price}</div>
              <p className="text-sm text-gray-400 mb-8 font-medium">{plan.roi}</p>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  plan.highlight 
                    ? 'bg-primary text-black hover:bg-green-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Start Investing <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}