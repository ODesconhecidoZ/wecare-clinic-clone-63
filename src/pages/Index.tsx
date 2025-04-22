
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClinicInfo from "../components/ClinicInfo";
import Services from "../components/Services";
import About from "../components/About";
import Equipment from "../components/Equipment";
import BookingInfo from "../components/BookingInfo";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import EmailCTA from "../components/EmailCTA";

const Index = () => {
  return (
    <div className="min-h-screen text-center">
      <Navbar />
      <Hero />
      <ClinicInfo />
      <About />
      <Services />
      <Equipment />
      <BookingInfo />
      <Contact />
      <Testimonials />
      <FAQ />
      <EmailCTA />
    </div>
  );
};

export default Index;
