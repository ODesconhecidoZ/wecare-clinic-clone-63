
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Doctors = () => {
  const professionals = [
    {
      name: "Dra. Carolina Costa",
      specialty: "Especialista em Estética Avançada",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80",
      description: "Dra. Carolina é especialista em tratamentos estéticos avançados, com mais de 10 anos de experiência em rejuvenescimento facial e corporal. Formada em Medicina Estética, dedica-se a procedimentos como radiofrequência microagulhada e HIFU.",
      education: "Especialização em Medicina Estética pela Universidade de Lisboa",
      phone: "+351 967 319 782",
      email: "carolina@cc-estetica.com"
    },
    {
      name: "Dr. Miguel Santos",
      specialty: "Terapeuta de Medicina Regenerativa",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80",
      description: "Dr. Miguel é especialista em medicina regenerativa e tratamentos capilares. Com formação avançada em terapias naturais, desenvolve protocolos personalizados que combinam tecnologia e abordagens naturais para resultados excepcionais.",
      education: "Mestrado em Medicina Regenerativa pela Universidade do Porto",
      phone: "+351 967 319 782",
      email: "miguel@cc-estetica.com"
    },
    {
      name: "Dra. Sofia Ribeiro",
      specialty: "Esteticista Especializada",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=80",
      description: "Dra. Sofia é especialista em tratamentos faciais e corporais com vasta experiência em limpezas de pele profundas e peelings químicos. Dedica-se a criar protocolos personalizados para cada tipo de pele e necessidade específica.",
      education: "Pós-graduação em Cosmetologia Avançada",
      phone: "+351 967 319 782",
      email: "sofia@cc-estetica.com"
    },
    {
      name: "Dra. Ana Martins",
      specialty: "Especialista em Hidroterapia",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&auto=format&fit=crop&q=80",
      description: "Dra. Ana é especializada em tratamentos de hidroterapia e bem-estar corporal. Desenvolveu técnicas exclusivas que combinam a cápsula Dermalife com massagens terapêuticas para resultados superiores em relaxamento e detoxificação.",
      education: "Especialização em Hidroterapias e Técnicas de SPA",
      phone: "+351 967 319 782",
      email: "ana@cc-estetica.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-50 pt-32 pb-10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nossa Equipe</h1>
          <p className="text-lg text-gray-600">Conheça nossos profissionais especializados em estética avançada e regenerativa.</p>
        </div>
      </div>

      {/* Professionals Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {professionals.map((professional, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{professional.name}</h3>
                  <p className="text-primary font-medium mb-2">{professional.specialty}</p>
                  <p className="text-sm text-gray-600 mb-4">{professional.education}</p>
                  
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{professional.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{professional.email}</span>
                    </div>
                    <Link to="/contact" className="mt-4 inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors">
                      Agendar Consulta <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Details */}
          <div className="space-y-8">
            {professionals.map((professional, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{professional.name}</h3>
                    <p className="text-primary font-medium mb-4">{professional.specialty}</p>
                    <p className="text-gray-600 mb-4">{professional.description}</p>
                    <p className="text-gray-700 font-medium mb-2">Formação:</p>
                    <p className="text-gray-600 mb-4">{professional.education}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-primary" />
                        <span>{professional.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-2 text-primary" />
                        <span>{professional.email}</span>
                      </div>
                      <Link to="/contact" className="btn-primary inline-flex items-center sm:ml-auto">
                        Agendar Consulta <ArrowRight className="ml-2 h-5 w-5" />
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
