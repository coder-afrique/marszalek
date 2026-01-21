import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}