
import { Link } from "react-router-dom";
import { 
  Heart, Sparkles, Flower, Zap, Waves, 
  Leaf, Activity, Droplets, ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Tratamentos Faciais",
      description: "Hidra-clean, peeling ultrassônico, alta frequência, ozonoterapia, hidrapeeling.",
      link: "/services"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Tratamentos Corporais",
      description: "HIFU Ultraformer, radiofrequência Morpheus, sauna finlandesa, banho grego, massagem vibratória, drenagem linfática.",
      link: "/services"
    },
    {
      icon: <Droplets className="h-10 w-10" />,
      title: "Terapias Capilares",
      description: "Intradermoterapia, mesoterapia/nanoterapia, derma pen, head spa, queda capilar e estímulo ao crescimento.",
      link: "/services"
    },
    {
      icon: <Activity className="h-10 w-10" />,
      title: "Tecnologias Regenerativas",
      description: "Hialuron Pen, skinbooster/swettbotox, máscara LED, Dermalife 5.5.",
      link: "/services"
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Programas Especiais",
      description: "Detox, vapor facial, tratamentos para dermatites, bronquite, asma e alergias.",
      link: "/services"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos uma ampla gama de tratamentos estéticos avançados e regenerativos para atender todas as suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
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
            Quero agendar pelo WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
