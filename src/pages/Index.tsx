
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClinicInfo from "../components/ClinicInfo";
import Services from "../components/Services";
import BookingInfo from "../components/BookingInfo";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClinicInfo />
      <Services />
      <BookingInfo />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
