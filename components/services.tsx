import { Instagram, Facebook, Twitter, MessageCircle, Wallet, CreditCard } from 'lucide-react';

const services = [
  {
    icon: Instagram,
    title: "Instagram Recovery",
    desc: "Regain access to hacked or locked Instagram accounts with our proven recovery methods."
  },
  {
    icon: Facebook,
    title: "Facebook Recovery",
    desc: "Restore your Facebook profile and business pages from unauthorized access."
  },
  {
    icon: Twitter,
    title: "Twitter/X Recovery",
    desc: "Get back your Twitter account and protect it from future compromises."
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Recovery",
    desc: "Recover hijacked WhatsApp accounts and secure your conversations."
  },
  {
    icon: Wallet,
    title: "Crypto Fund Recovery",
    desc: "Trace and recover cryptocurrency lost to scams, fraud, or theft."
  },
  {
    icon: CreditCard,
    title: "Banking Fraud Recovery",
    desc: "Assist in recovering funds lost to online banking fraud and scams."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold mb-2 tracking-wider uppercase text-sm">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Recovery Solutions</h3>
          <p className="text-muted max-w-2xl mx-auto">
            We specialize in recovering compromised accounts and lost funds using advanced techniques and industry expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-surface border border-white/5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)] hover:-translate-y-1 relative overflow-hidden">
              
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-black transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-muted text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}