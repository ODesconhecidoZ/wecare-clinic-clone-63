
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80",
      description: "Dr. Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing and treating heart conditions. She specializes in preventive cardiology and cardiac rehabilitation.",
      education: "MD from Harvard Medical School",
      phone: "800-555-1234",
      email: "sarah.johnson@medicare-clinic.com"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "General Medicine",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80",
      description: "Dr. Chen is a family physician dedicated to providing comprehensive primary care for patients of all ages. He has a special interest in preventive medicine and chronic disease management.",
      education: "MD from Johns Hopkins University School of Medicine",
      phone: "800-555-1235",
      email: "michael.chen@medicare-clinic.com"
    },
    {
      name: "Dr. Emma Williams",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=80",
      description: "Dr. Williams is a compassionate pediatrician with a commitment to children's health and development. She provides comprehensive care from newborn checkups to adolescent health services.",
      education: "MD from Stanford University School of Medicine",
      phone: "800-555-1236",
      email: "emma.williams@medicare-clinic.com"
    },
    {
      name: "Dr. James Taylor",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=80",
      description: "Dr. Taylor is a skilled neurologist specializing in the diagnosis and treatment of conditions affecting the brain, spinal cord, and nervous system. He has particular expertise in headache management and movement disorders.",
      education: "MD from Yale School of Medicine",
      phone: "800-555-1237",
      email: "james.taylor@medicare-clinic.com"
    },
    {
      name: "Dr. Olivia Martinez",
      specialty: "Orthopedics",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&auto=format&fit=crop&q=80",
      description: "Dr. Martinez is an orthopedic surgeon specializing in sports medicine and joint replacement. She is committed to helping patients recover from injuries and regain mobility through surgical and non-surgical treatments.",
      education: "MD from University of California, San Francisco",
      phone: "800-555-1238",
      email: "olivia.martinez@medicare-clinic.com"
    },
    {
      name: "Dr. David Wilson",
      specialty: "ENT Specialist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=80",
      description: "Dr. Wilson is an ear, nose, and throat specialist with expertise in treating conditions such as sinusitis, hearing loss, and throat disorders. He is known for his patient-centered approach to care.",
      education: "MD from Columbia University College of Physicians and Surgeons",
      phone: "800-555-1239",
      email: "david.wilson@medicare-clinic.com"
    },
    {
      name: "Dr. Lisa Patel",
      specialty: "Ophthalmology",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&auto=format&fit=crop&q=80",
      description: "Dr. Patel is an ophthalmologist specializing in comprehensive eye care, including the diagnosis and treatment of eye diseases, vision correction, and cataract surgery.",
      education: "MD from Duke University School of Medicine",
      phone: "800-555-1240",
      email: "lisa.patel@medicare-clinic.com"
    },
    {
      name: "Dr. Robert Thompson",
      specialty: "Dermatology",
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=500&auto=format&fit=crop&q=80",
      description: "Dr. Thompson is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. He provides expert care for skin conditions ranging from acne to skin cancer.",
      education: "MD from University of Pennsylvania School of Medicine",
      phone: "800-555-1241",
      email: "robert.thompson@medicare-clinic.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-50 pt-32 pb-10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Doctors</h1>
          <p className="text-lg text-gray-600">Meet our team of experienced and dedicated healthcare professionals.</p>
        </div>
      </div>

      {/* Doctors Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-gray-600 mb-4">{doctor.education}</p>
                  
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{doctor.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{doctor.email}</span>
                    </div>
                    <Link to="/contact" className="mt-4 inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors">
                      Book Appointment <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Doctor Details */}
          <div className="space-y-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{doctor.name}</h3>
                    <p className="text-primary font-medium mb-4">{doctor.specialty}</p>
                    <p className="text-gray-600 mb-4">{doctor.description}</p>
                    <p className="text-gray-700 font-medium mb-2">Education:</p>
                    <p className="text-gray-600 mb-4">{doctor.education}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-primary" />
                        <span>{doctor.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-2 text-primary" />
                        <span>{doctor.email}</span>
                      </div>
                      <Link to="/contact" className="btn-primary inline-flex items-center sm:ml-auto">
                        Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Doctors;
