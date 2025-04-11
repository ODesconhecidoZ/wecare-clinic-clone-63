
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-50 pt-32 pb-10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with our team or schedule an appointment.</p>
        </div>
      </div>

      {/* Contact Content */}
      <Contact />
      
      {/* Map */}
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Find Us</h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941512199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1593527523138!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen 
              aria-hidden="false" 
              tabIndex={0}
              title="MediCare Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
