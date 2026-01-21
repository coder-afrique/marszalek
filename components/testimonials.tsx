import { CheckCircle, Star } from 'lucide-react';

const reviews = [
  // Row 1
  {
    name: "Michael T.",
    loc: "New York, USA",
    tag: "Instagram",
    date: "December 2024",
    text: "My sneaker resale business account with 50K followers was hacked and they demanded ransom. MARSZALEK recovered it within 48 hours without me paying a cent. Incredible service!",
  },
  {
    name: "Sarah K.",
    loc: "London, UK",
    tag: "Crypto",
    extra: "$45,000 Recovered",
    date: "November 2024",
    text: "I lost funds to a fake investment platform that looked so real. The team traced the blockchain transaction and recovered most of my investment. I thought it was gone forever.",
  },
  {
    name: "David L.",
    loc: "Toronto, Canada",
    tag: "Facebook",
    date: "November 2024",
    text: "My personal Facebook account of 12 years was compromised and used to message my family for money. MARSZALEK restored my account and secured it so it won't happen again.",
  },
  {
    name: "James W.",
    loc: "Miami, USA",
    tag: "Crypto",
    extra: "$120,000 Recovered",
    date: "October 2024",
    text: "Fell victim to a complex pig-butchering romance scam. The forensic team worked tirelessly to trace the funds across multiple wallets and helped recover a significant portion.",
  },
  
  // Row 2
  {
    name: "Elena R.",
    loc: "Madrid, Spain",
    tag: "Banking",
    extra: "$12,500 Recovered",
    date: "January 2025",
    text: "Phishing email tricked me into giving up my bank login. The bank wouldn't help, but this team identified the mule account and coordinated with authorities to freeze the funds.",
  },
  {
    name: "Thomas B.",
    loc: "Amsterdam, Netherlands",
    tag: "Crypto",
    extra: "$55,000 Recovered",
    date: "June 2024",
    text: "A fake exchange drained my wallet. I was devastated. The team's persistence and blockchain expertise brought back hope and my hard-earned money. Highly recommended.",
  },
  {
    name: "Jennifer S.",
    loc: "Los Angeles, USA",
    tag: "Instagram",
    date: "May 2024",
    text: "My photography portfolio was locked for 'violating terms' after a bot attack. It was my livelihood. MARSZALEK resolved it directly with Meta when support forms failed me.",
  },
  {
    name: "Wei C.",
    loc: "Singapore",
    tag: "WhatsApp",
    date: "August 2024",
    text: "My business WhatsApp was hijacked, paralyzing my client communications. They restored access in under 6 hours and set up 2FA correctly for me. Lifesavers.",
  },

  // Row 3
  {
    name: "Robert H.",
    loc: "Berlin, Germany",
    tag: "Twitter/X",
    date: "September 2024",
    text: "My verified X account was stolen to promote a crypto scam. The team got it back swiftly before my reputation was ruined. Professional and very communicative.",
  },
  {
    name: "Amara O.",
    loc: "Lagos, Nigeria",
    tag: "Instagram",
    date: "October 2024",
    text: "Influencer account hacked right before a major brand deal campaign. Recovered in 24 hours. They literally saved my brand deal and my reputation.",
  },
  {
    name: "Liam N.",
    loc: "Dublin, Ireland",
    tag: "Crypto",
    extra: "$28,000 Recovered",
    date: "July 2024",
    text: "Sent ETH to a compromised contract address. Thought it was a total loss. Their technical analysis found a flaw in the scammer's contract that allowed partial recovery.",
  },
  {
    name: "Sophie M.",
    loc: "Paris, France",
    tag: "Snapchat",
    date: "December 2024",
    text: "My private 'My Eyes Only' images were threatened to be leaked. The team secured my account and removed the unauthorized access devices immediately. So relieved.",
  },

  // Row 4
  {
    name: "Daniel K.",
    loc: "Seoul, South Korea",
    tag: "YouTube",
    date: "November 2024",
    text: "My channel with 200k subs was hijacked to stream a scam. Google support was slow, but MARSZALEK expedited the process and got my channel back within a day.",
  },
  {
    name: "Fatima A.",
    loc: "Dubai, UAE",
    tag: "Banking",
    extra: "$85,000 Recovered",
    date: "August 2024",
    text: "Wire fraud nearly bankrupt my small business. They worked with international banking contacts to recall the wire transfer just in time. Worth every penny.",
  },
  {
    name: "Lucas P.",
    loc: "Sao Paulo, Brazil",
    tag: "Facebook",
    date: "September 2024",
    text: "My Business Manager was disabled due to a hacker running ads. They audited the account, removed the malicious admins, and got the ad ban lifted.",
  },
  {
    name: "Emily J.",
    loc: "Sydney, Australia",
    tag: "Gmail",
    date: "January 2025",
    text: "Locked out of my main email which is linked to everything including my bank. They guided me through a complex recovery process that finally worked. Thank you!",
  }
];

export default function Testimonials() {
  return (
    <section id="success" className="py-24 bg-background relative overflow-hidden">
       {/* Background Glow Blob */}
       <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold mb-2 tracking-wider uppercase text-sm">Success Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Real Recoveries, Real People</h3>
          <p className="text-muted max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have successfully recovered their accounts and funds with our help.
          </p>
        </div>

        {/* Updated Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="group p-6 rounded-2xl bg-surface border border-white/5 flex flex-col h-full transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)] hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors">{review.name}</h4>
                  <p className="text-xs text-muted">{review.loc}</p>
                </div>
                <div className="flex text-primary drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-md font-medium border border-primary/20">
                  {review.tag}
                </span>
                {review.extra && (
                  <span className="bg-primary/20 text-green-300 text-xs px-2.5 py-1 rounded-md font-medium border border-primary/30 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                    {review.extra}
                  </span>
                )}
              </div>

              <div className="mb-6 flex-grow">
                 <p className="text-sm text-gray-300 relative z-10 leading-relaxed">"{review.text}"</p>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted border-t border-white/5 pt-4 group-hover:border-white/10">
                <CheckCircle className="w-4 h-4 text-primary" /> Verified Recovery
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}