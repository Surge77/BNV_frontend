import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Services from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoBar />
        <Services />
        <WorkingProcess />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
