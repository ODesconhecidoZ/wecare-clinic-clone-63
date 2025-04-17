
import { Phone, Mail, ArrowRight } from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80",
      phone: "+351 967 319 782",
      email: "cc.clinic2025.ear@gmail.com",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "General Medicine",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80",
      phone: "+351 967 319 782",
      email: "cc.clinic2025.ear@gmail.com",
    },
    {
      name: "Dr. Emma Williams",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=80",
      phone: "+351 967 319 782",
      email: "cc.clinic2025.ear@gmail.com",
    },
    {
      name: "Dr. James Taylor",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=80",
      phone: "+351 967 319 782",
      email: "cc.clinic2025.ear@gmail.com",
    }
  ];

  return (
    <section className="section-padding bg-white" id="doctors">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Nossa Equipe Médica</h2>
          <p className="section-subtitle">
            Nossa equipe de profissionais de saúde experientes está dedicada a fornecer o melhor atendimento possível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center">{doctor.name}</h3>
                <p className="text-primary font-medium mb-4 text-center">{doctor.specialty}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 justify-center">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{doctor.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600 justify-center">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{doctor.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://wa.me/351967319782" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex items-center"
          >
            Agendar Consulta
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
