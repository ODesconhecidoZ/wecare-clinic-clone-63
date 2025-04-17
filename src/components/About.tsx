
import { CheckCircle2, Award, Heart, Users } from "lucide-react";

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

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
            Providing Quality Healthcare Services For All Your Needs
          </h3>
          <p className="text-gray-600 mb-6 text-center">
            At MediCare Clinic, we believe in a patient-centered approach to healthcare. Our team of experienced medical professionals is dedicated to providing compassionate care and personalized treatment plans to help you achieve optimal health.
          </p>

          <div className="space-y-4 mb-8 max-w-2xl mx-auto">
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
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
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
