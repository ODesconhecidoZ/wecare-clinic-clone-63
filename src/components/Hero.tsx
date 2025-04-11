
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-50"></div>
      </div>
      
      <div className="container-custom relative flex flex-col lg:flex-row items-center">
        {/* Content */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-6">
            Your Health Is Our <span className="text-primary">Priority</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Experience exceptional care with our dedicated team of medical professionals. We're committed to providing personalized healthcare services for you and your family.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link to="/contact" className="btn-primary flex items-center">
              Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:8005551234" className="py-3 px-6 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center">
              <Phone className="mr-2 h-5 w-5 text-primary" /> 
              Call Now
            </a>
          </div>
        </div>
        
        {/* Image or Feature Box */}
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Quick Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Saturday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Appointments</h4>
                  <p className="text-gray-600">Book online or call us at 800-555-1234</p>
                  <p className="text-gray-600">Emergency services available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Contact</h4>
                  <p className="text-gray-600">Phone: 800-555-1234</p>
                  <p className="text-gray-600">Email: info@medicare-clinic.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
