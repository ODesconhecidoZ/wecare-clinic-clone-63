
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, Stethoscope, Baby, Pill, Brain, Bone, Activity, Eye, FileText, Ear } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="h-10 w-10" />,
      title: "General Medicine",
      description: "Comprehensive care for a wide range of health conditions for patients of all ages. Our general medicine services include routine check-ups, preventive care, and treatment for common illnesses.",
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Cardiology",
      description: "Expert care for heart conditions with advanced diagnostic and treatment options. Our cardiology department offers EKGs, stress tests, echocardiograms, and treatment plans for heart-related conditions.",
    },
    {
      icon: <Baby className="h-10 w-10" />,
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents. Our pediatric services include well-child visits, immunizations, developmental assessments, and treatment for childhood illnesses.",
    },
    {
      icon: <Pill className="h-10 w-10" />,
      title: "Pharmacy Services",
      description: "Convenient access to prescriptions and expert pharmaceutical advice. Our on-site pharmacy provides prescription filling, medication management, and consultation with experienced pharmacists.",
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Neurology",
      description: "Specialized care for conditions affecting the brain, spinal cord, and nervous system. Our neurology department offers diagnostic testing, treatment plans, and ongoing care for neurological disorders.",
    },
    {
      icon: <Bone className="h-10 w-10" />,
      title: "Orthopedics",
      description: "Comprehensive care for bone, joint, and muscle conditions. Our orthopedic services include diagnosis and treatment of sprains, fractures, arthritis, and other musculoskeletal issues.",
    },
    {
      icon: <Activity className="h-10 w-10" />,
      title: "Preventive Care",
      description: "Health screenings and wellness services to help prevent diseases. Our preventive care includes regular check-ups, vaccinations, health risk assessments, and lifestyle counseling.",
    },
    {
      icon: <Eye className="h-10 w-10" />,
      title: "Ophthalmology",
      description: "Specialized care for eye conditions and vision problems. Our ophthalmology services include vision testing, diagnosis and treatment of eye diseases, and surgical interventions when necessary.",
    },
    {
      icon: <Ear className="h-10 w-10" />,
      title: "ENT Services",
      description: "Diagnosis and treatment for ear, nose, and throat conditions. Our ENT department handles issues from common ear infections to complex sinus problems and hearing disorders.",
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Dental Services",
      description: "Complete dental care for the whole family. Our dental services include regular check-ups, cleanings, fillings, root canals, and cosmetic dental procedures.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-50 pt-32 pb-10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">Comprehensive healthcare services for you and your family.</p>
        </div>
      </div>

      {/* Services Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link to="/contact" className="text-primary font-medium hover:text-blue-700 transition-colors flex items-center">
                      Book Appointment
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Insurance and Payment</h2>
            <p className="text-gray-600 mb-4">
              We accept most major insurance plans and offer various payment options to ensure that high-quality healthcare remains accessible to all our patients. Our administrative staff is available to assist you with insurance verification and billing inquiries.
            </p>
            <p className="text-gray-600">
              For more information about our services, insurance acceptance, or to schedule an appointment, please contact us at 800-555-1234 or email us at info@medicare-clinic.com.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
