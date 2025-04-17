
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Sparkles, Leaf, Droplets, Zap, Waves, Star, 
  Sun, Heart, Flower, UserCheck, ArrowRight 
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      id: "facial",
      label: "Faciais",
      services: [
        {
          icon: <Sparkles className="h-10 w-10" />,
          title: "Limpeza de Pele",
          description: "Tratamentos personalizados incluindo hidra clean machine, peeling ultra-sônico e limpeza adequada para cada fotótipo."
        },
        {
          icon: <Star className="h-10 w-10" />,
          title: "Rejuvenescimento Facial",
          description: "Tratamentos para rugas, melasma, acne e revitalização facial com tecnologias avançadas."
        },
        {
          icon: <Flower className="h-10 w-10" />,
          title: "Peeling Rose de Mer",
          description: "Tratamentos para rosácea, melasma, estrias e cicatrizes com peeling natural de corais."
        },
        {
          icon: <Leaf className="h-10 w-10" />,
          title: "Vapor Facial",
          description: "Tratamento que combina vapor e ozonoterapia para limpeza profunda e nutrição da pele facial."
        }
      ]
    },
    {
      id: "corporal",
      label: "Corporais",
      services: [
        {
          icon: <Zap className="h-10 w-10" />,
          title: "HIFU Ultraformer",
          description: "Tecnologia de ultrassom focalizado para lifting facial/corporal, flacidez e gordura localizada."
        },
        {
          icon: <Zap className="h-10 w-10" />,
          title: "Radiofrequência Morpheus",
          description: "Radiofrequência microagulhada para tratamento de flacidez, gordura localizada e rejuvenescimento."
        },
        {
          icon: <Waves className="h-10 w-10" />,
          title: "Sauna Finlandesa",
          description: "Tratamento relaxante para desintoxicação, alívio de dores musculares e estresse."
        },
        {
          icon: <Waves className="h-10 w-10" />,
          title: "Banho Grego",
          description: "Hidratação profunda corporal com técnicas relaxantes e aromáticas."
        },
        {
          icon: <Heart className="h-10 w-10" />,
          title: "Massagem Vibratória",
          description: "Técnica que promove relaxamento, melhora circulação e alivia tensões musculares."
        },
        {
          icon: <Heart className="h-10 w-10" />,
          title: "Drenagem Linfática",
          description: "Massagem suave que estimula o sistema linfático, reduzindo edemas e melhorando a circulação."
        }
      ]
    },
    {
      id: "capilares",
      label: "Capilares",
      services: [
        {
          icon: <Droplets className="h-10 w-10" />,
          title: "Intradermoterapia Capilar",
          description: "Aplicação de ativos diretamente no couro cabeludo para tratar queda e estimular crescimento."
        },
        {
          icon: <Droplets className="h-10 w-10" />,
          title: "Mesoterapia/Nanoterapia",
          description: "Técnicas avançadas para fortalecer os fios e tratar disfunções do couro cabeludo."
        },
        {
          icon: <Droplets className="h-10 w-10" />,
          title: "Derma Pen Capilar",
          description: "Microagulhamento para estimular a produção de colágeno no couro cabeludo e regeneração."
        },
        {
          icon: <Droplets className="h-10 w-10" />,
          title: "Head Spa",
          description: "Tratamento relaxante e nutritivo para o couro cabeludo e fios."
        }
      ]
    },
    {
      id: "regenerativas",
      label: "Tecnologias Regenerativas",
      services: [
        {
          icon: <Sun className="h-10 w-10" />,
          title: "Hialuron Pen",
          description: "Aplicação de ácido hialurônico sem agulhas, para hidratação profunda e preenchimento sutil."
        },
        {
          icon: <Sun className="h-10 w-10" />,
          title: "Skinbooster/Swettbotox",
          description: "Técnicas de hidratação profunda e controle da transpiração com resultados naturais."
        },
        {
          icon: <Sun className="h-10 w-10" />,
          title: "Máscara LED",
          description: "Fototerapia com diferentes comprimentos de onda para diversos tratamentos dermatológicos."
        },
        {
          icon: <Sun className="h-10 w-10" />,
          title: "Dermalife 5.5",
          description: "Tratamento avançado para equilibrar o pH da pele e regeneração celular."
        }
      ]
    },
    {
      id: "especiais",
      label: "Programas Especiais",
      services: [
        {
          icon: <Leaf className="h-10 w-10" />,
          title: "Detox",
          description: "Programa completo de desintoxicação corporal com protocolos personalizados."
        },
        {
          icon: <Leaf className="h-10 w-10" />,
          title: "Tratamentos para Dermatites",
          description: "Protocolos específicos para diferentes tipos de dermatites, com abordagem natural."
        },
        {
          icon: <Leaf className="h-10 w-10" />,
          title: "Tratamento para Bronquite",
          description: "Terapias complementares para alívio dos sintomas de bronquite."
        },
        {
          icon: <Leaf className="h-10 w-10" />,
          title: "Tratamento para Asma",
          description: "Protocolos especiais para auxiliar no controle da asma e melhorar a qualidade de vida."
        },
        {
          icon: <Leaf className="h-10 w-10" />,
          title: "Tratamento para Alergias",
          description: "Abordagens complementares para aliviar sintomas de alergias respiratórias e cutâneas."
        }
      ]
    }
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
          <Tabs defaultValue="facial" className="w-full">
            <div className="mb-8 overflow-x-auto">
              <TabsList className="inline-flex space-x-1 p-1 bg-gray-100 rounded-lg w-auto min-w-full md:min-w-0">
                {serviceCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id} 
                    className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tratamentos {category.label}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                      <div className="flex items-start">
                        <div className="mr-4 text-primary">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <a 
                            href="https://wa.me/351967319782" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:text-blue-700 transition-colors flex items-center"
                          >
                            Agendar pelo WhatsApp
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Additional Information */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Informações Adicionais</h2>
            <p className="text-gray-600 mb-4">
              Nossa clínica oferece tecnologia de ponta em estética avançada e regenerativa, com profissionais altamente qualificados e ambiente acolhedor para seu bem-estar.
            </p>
            <p className="text-gray-600 mb-6">
              Para mais informações sobre nossos serviços ou para agendar uma consulta, entre em contato pelo telefone +351 967319782 ou email cc.clinic2025.ear@gmail.com.
            </p>
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
      </div>

      <Footer />
    </div>
  );
};

export default Services;
