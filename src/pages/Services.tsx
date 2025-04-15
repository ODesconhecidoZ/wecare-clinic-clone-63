
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Sparkles, Leaf, Droplets, Zap, Waves, Star, Sun, Heart, Flower, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Limpeza de Pele",
      description: "Tratamentos personalizados incluindo hidra clean machine, peeling ultra-sônico e limpeza adequada para cada fotótipo.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Tratamentos Avançados",
      description: "Hifu, radiofrequência microagulhada e outros tratamentos para lifting facial, flacidez e gordura localizada.",
    },
    {
      icon: <Waves className="h-10 w-10" />,
      title: "Hidroterapia",
      description: "Tratamentos corporais com hidrapeeling, banho grego e sauna finlandesa para relaxamento e bem-estar.",
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: "Rejuvenescimento",
      description: "Tratamentos para rugas, melasma, acne e revitalização facial com tecnologias avançadas.",
    },
    {
      icon: <Sun className="h-10 w-10" />,
      title: "Terapias Estéticas",
      description: "Mesoterapia, nanoterapia e skinbooster para revitalização e rejuvenescimento.",
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Massagem Terapêutica",
      description: "Massagens relaxantes, drenagem linfática e tratamentos corporais vibratórios.",
    },
    {
      icon: <Flower className="h-10 w-10" />,
      title: "Tratamentos Faciais",
      description: "Peeling rose de Mer, tratamentos para rosácea, estrias e cicatrizes.",
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Terapias Naturais",
      description: "Ozonoterapia, vapor facial e tratamentos para dermatites com abordagem natural.",
    },
    {
      icon: <Droplets className="h-10 w-10" />,
      title: "Tratamentos Capilares",
      description: "Terapias para queda capilar, alopecia e revitalização dos fios.",
    },
    {
      icon: <UserCheck className="h-10 w-10" />,
      title: "Consulta Personalizada",
      description: "Avaliação individual e desenvolvimento de plano de tratamento personalizado para suas necessidades.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-50 pt-32 pb-10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h1>
          <p className="text-lg text-gray-600">Tratamentos estéticos avançados e personalizados para você.</p>
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
                      Agendar Consulta
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Informações Adicionais</h2>
            <p className="text-gray-600 mb-4">
              Nossa clínica oferece tecnologia de ponta em estética avançada e regenerativa, com profissionais altamente qualificados e ambiente acolhedor para seu bem-estar.
            </p>
            <p className="text-gray-600">
              Para mais informações sobre nossos serviços ou para agendar uma consulta, entre em contato pelo telefone +351 967319782 ou email cc.clinic2025.ear@gmail.com.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
