
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">MediCare Clinic</h3>
            <p className="text-gray-300 mb-4">
              Providing quality healthcare services for the entire family. Your health is our priority.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-primary/20 hover:bg-primary/30 text-primary hover:text-white p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 text-primary hover:text-white p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 text-primary hover:text-white p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 text-primary hover:text-white p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Our Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> General Medicine
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Cardiology
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Pediatrics
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Neurology
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Orthopedics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Healthcare Avenue, Medical District, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">800-555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@medicare-clinic.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri: 8:00 AM - 8:00 PM<br />Sat: 8:00 AM - 5:00 PM<br />Sun: 10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MediCare Clinic. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
