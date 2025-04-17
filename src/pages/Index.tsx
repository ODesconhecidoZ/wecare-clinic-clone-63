
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClinicInfo from "../components/ClinicInfo";
import Services from "../components/Services";
import About from "../components/About";
import BookingInfo from "../components/BookingInfo";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen text-center">
      <Navbar />
      <Hero />
      <ClinicInfo />
      <About />
      <Services />
      <BookingInfo />
      <Contact />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Index;
