
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClinicInfo from "../components/ClinicInfo";
import Services from "../components/Services";
import About from "../components/About";
import Doctors from "../components/Doctors";
import BookingInfo from "../components/BookingInfo";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClinicInfo />
      <About />
      <Services />
      <Doctors />
      <BookingInfo />
      <Contact />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
