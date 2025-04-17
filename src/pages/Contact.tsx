
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h1>
          <p className="text-lg text-gray-600">Entre em contato com nossa equipe ou agende uma consulta.</p>
        </div>
      </div>

      {/* Contact Content */}
      <Contact />
      
      {/* Map */}
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Encontre-nos</h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.6912429515317!2d-9.07213372402771!3d39.60337760503601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22041e5434401b%3A0xb3d48d0d61192dd1!2sR.+Branco+Martins%2C+2450-106+Nazar%C3%A9!5e0!3m2!1spt-PT!2spt!4v1554721138404!5m2!1spt-PT!2spt" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen 
              aria-hidden="false" 
              tabIndex={0}
              title="CC Estética Avançada Regenerativa Localização"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
