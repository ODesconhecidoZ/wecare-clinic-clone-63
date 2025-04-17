
import { Link } from "react-router-dom";
import { Heart, Sparkles, Baby, Zap, Waves, Sun, Activity, Droplets, Leaf, Flower } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Limpeza de Pele",
      description: "Tratamentos personalizados incluindo hidra clean machine, peeling ultra-sônico e limpeza adequada para cada fotótipo.",
      link: "/services"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Tratamentos Avançados",
      description: "Hifu, radiofrequência microagulhada e outros tratamentos para lifting facial, flacidez e gordura localizada.",
      link: "/services"
    },
    {
      icon: <Waves className="h-10 w-10" />,
      title: "Hidroterapia",
      description: "Tratamentos corporais com hidrapeeling, banho grego e sauna finlandesa para relaxamento e bem-estar.",
      link: "/services"
    },
    {
      icon: <Sun className="h-10 w-10" />,
      title: "Rejuvenescimento",
      description: "Tratamentos para rugas, melasma, acne e revitalização facial com tecnologias avançadas.",
      link: "/services"
    },
    {
      icon: <Activity className="h-10 w-10" />,
      title: "Terapias Estéticas",
      description: "Mesoterapia, nanoterapia e skinbooster para revitalização e rejuvenescimento.",
      link: "/services"
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Massagem Terapêutica",
      description: "Massagens relaxantes, drenagem linfática e tratamentos corporais vibratórios.",
      link: "/services"
    },
    {
      icon: <Flower className="h-10 w-10" />,
      title: "Tratamentos Faciais",
      description: "Peeling rose de Mer, tratamentos para rosácea, estrias e cicatrizes.",
      link: "/services"
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Terapias Naturais",
      description: "Ozonoterapia, vapor facial e tratamentos para dermatites com abordagem natural.",
      link: "/services"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Nossos Serviços Estéticos</h2>
          <p className="section-subtitle">
            Oferecemos uma ampla gama de tratamentos estéticos avançados e regenerativos para atender todas as suas necessidades.
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
                Saiba Mais
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
            Ver Todos os Serviços
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
