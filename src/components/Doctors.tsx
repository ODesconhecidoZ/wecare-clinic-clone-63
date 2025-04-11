
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80",
      phone: "800-555-1234",
      email: "sarah.johnson@medicare-clinic.com",
      path: "/doctors"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "General Medicine",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80",
      phone: "800-555-1235",
      email: "michael.chen@medicare-clinic.com",
      path: "/doctors"
    },
    {
      name: "Dr. Emma Williams",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=80",
      phone: "800-555-1236",
      email: "emma.williams@medicare-clinic.com",
      path: "/doctors"
    },
    {
      name: "Dr. James Taylor",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=80",
      phone: "800-555-1237",
      email: "james.taylor@medicare-clinic.com",
      path: "/doctors"
    }
  ];

  return (
    <section className="section-padding bg-white" id="doctors">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet Our Doctors</h2>
          <p className="section-subtitle">
            Our team of experienced healthcare professionals is dedicated to providing you with the best possible care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{doctor.name}</h3>
                <p className="text-primary font-medium mb-4">{doctor.specialty}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{doctor.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{doctor.email}</span>
                  </div>
                </div>
                <Link
                  to={doctor.path}
                  className="text-primary font-medium flex items-center hover:text-blue-700 transition-colors"
                >
                  View Profile
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/doctors" className="btn-primary inline-flex items-center">
            View All Doctors
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

export default Doctors;
