
import { CheckCircle2, Award, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">About MediCare Clinic</h2>
          <p className="section-subtitle">
            We've been providing exceptional healthcare services to our community for over 25 years.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content with Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1631815585553-a8672bf09995?w=800&auto=format&fit=crop&q=80"
                alt="MediCare Clinic Team"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="text-center px-4 py-2">
                <h3 className="text-4xl font-bold text-primary">25+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Providing Quality Healthcare Services For All Your Needs
            </h3>
            <p className="text-gray-600 mb-6">
              At MediCare Clinic, we believe in a patient-centered approach to healthcare. Our team of experienced medical professionals is dedicated to providing compassionate care and personalized treatment plans to help you achieve optimal health.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                <p className="text-gray-700">State-of-the-art facilities and modern medical technology</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                <p className="text-gray-700">Team of experienced and board-certified medical professionals</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                <p className="text-gray-700">Comprehensive healthcare services for all age groups</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                <p className="text-gray-700">Patient-centered approach with personalized treatment plans</p>
              </div>
            </div>

            <Link to="/about" className="btn-primary inline-flex items-center">
              Learn More About Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="mb-3 text-primary flex justify-center">
              <Users className="h-8 w-8" />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">20K+</h4>
            <p className="text-gray-600">Patients Served</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="mb-3 text-primary flex justify-center">
              <Award className="h-8 w-8" />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">15+</h4>
            <p className="text-gray-600">Medical Specialists</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="mb-3 text-primary flex justify-center">
              <Heart className="h-8 w-8" />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">98%</h4>
            <p className="text-gray-600">Patient Satisfaction</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="mb-3 text-primary flex justify-center">
              <Award className="h-8 w-8" />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">25+</h4>
            <p className="text-gray-600">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
