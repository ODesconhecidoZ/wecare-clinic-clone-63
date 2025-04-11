
import { Link } from "react-router-dom";
import { Heart, Stethoscope, Baby, Pill, Brain, Bone, Activity, Eye } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="h-10 w-10" />,
      title: "General Medicine",
      description: "Comprehensive care for a wide range of health conditions for patients of all ages.",
      link: "/services"
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Cardiology",
      description: "Expert care for heart conditions with advanced diagnostic and treatment options.",
      link: "/services"
    },
    {
      icon: <Baby className="h-10 w-10" />,
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents.",
      link: "/services"
    },
    {
      icon: <Pill className="h-10 w-10" />,
      title: "Pharmacy Services",
      description: "Convenient access to prescriptions and expert pharmaceutical advice.",
      link: "/services"
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Neurology",
      description: "Specialized care for conditions affecting the brain, spinal cord, and nervous system.",
      link: "/services"
    },
    {
      icon: <Bone className="h-10 w-10" />,
      title: "Orthopedics",
      description: "Comprehensive care for bone, joint, and muscle conditions.",
      link: "/services"
    },
    {
      icon: <Activity className="h-10 w-10" />,
      title: "Preventive Care",
      description: "Health screenings and wellness services to help prevent diseases.",
      link: "/services"
    },
    {
      icon: <Eye className="h-10 w-10" />,
      title: "Ophthalmology",
      description: "Specialized care for eye conditions and vision problems.",
      link: "/services"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Medical Services</h2>
          <p className="section-subtitle">
            We offer a wide range of medical services to meet all your healthcare needs under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 flex-grow mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="text-primary font-medium flex items-center hover:text-blue-700 transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary inline-flex items-center">
            View All Services
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
