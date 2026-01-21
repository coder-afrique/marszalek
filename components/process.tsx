import { MessageSquare, Search, Wrench, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: "01",
    icon: MessageSquare,
    title: "Contact Us",
    desc: "Reach out through our secure form with details about your situation. All communications are encrypted."
  },
  {
    id: "02",
    icon: Search,
    title: "Assessment",
    desc: "Our experts analyze your case and develop a customized recovery strategy tailored to your needs."
  },
  {
    id: "03",
    icon: Wrench,
    title: "Recovery Process",
    desc: "We execute the recovery plan using advanced techniques, keeping you informed at every step."
  },
  {
    id: "04",
    icon: CheckCircle2,
    title: "Account Restored",
    desc: "Your account or funds are recovered and secured. We provide guidance on preventing future incidents."
  }
];

export default function process() {
  return (
    <section id="process" className="py-20 bg-surface/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold mb-2">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Recover Your Assets</h3>
          <p className="text-muted max-w-2xl mx-auto">
            Our streamlined process ensures efficient and effective recovery while keeping you informed every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 rounded-xl bg-background border border-white/5">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl font-bold text-white/5 z-0">
                {step.id}
              </span>
              <div className="relative z-10 flex flex-col items-center text-center pt-4">
                <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center border border-primary/20 mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                <p className="text-sm text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}