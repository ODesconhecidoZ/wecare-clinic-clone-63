
import { 
  Sparkles, Zap, Droplets, Activity, Leaf, ArrowRight,
  Scan, Brain, PenLine, Scissors, Flame
} from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const Services = () => {
  const serviceCategories = [
    {
      id: "facial",
      name: "Faciais",
      icon: <Sparkles className="h-6 w-6" />,
      services: [
        "Hidra-clean",
        "Peeling ultrassônico",
        "Alta frequência",
        "Ozonoterapia",
        "Hidrapeeling",
        "Vapor facial"
      ]
    },
    {
      id: "body",
      name: "Corporais",
      icon: <Zap className="h-6 w-6" />,
      services: [
        "HIFU Ultraformer",
        "Radiofrequência Morpheus",
        "Sauna finlandesa",
        "Banho grego",
        "Massagem vibratória",
        "Drenagem linfática"
      ]
    },
    {
      id: "hair",
      name: "Capilares",
      icon: <Droplets className="h-6 w-6" />,
      services: [
        "Intradermoterapia",
        "Mesoterapia/nanoterapia",
        "Derma pen",
        "Head spa",
        "Tratamento para queda capilar",
        "Estímulo ao crescimento"
      ]
    },
    {
      id: "regen",
      name: "Regenerativos",
      icon: <Activity className="h-6 w-6" />,
      services: [
        "Hialuron Pen",
        "Skinbooster/Swettbotox",
        "Máscara LED",
        "Dermalife 5.5",
        "Laser facial regenerativo",
        "Microagulhamento"
      ]
    },
    {
      id: "special",
      name: "Especiais",
      icon: <Leaf className="h-6 w-6" />,
      services: [
        "Detox",
        "Tratamentos para dermatites",
        "Tratamentos para bronquite",
        "Tratamentos para asma",
        "Tratamentos para alergias",
        "Programas personalizados"
      ]
    },
    {
      id: "aesthetic",
      name: "Estéticos",
      icon: <Scissors className="h-6 w-6" />,
      services: [
        "Massagens modeladoras",
        "Tratamentos para celulite",
        "Tratamentos para flacidez",
        "Limpeza de pele profunda",
        "Peeling químico",
        "Tratamentos anti-idade"
      ]
    },
    {
      id: "diagnostic",
      name: "Diagnósticos",
      icon: <Scan className="h-6 w-6" />,
      services: [
        "Análise facial",
        "Diagnóstico capilar",
        "Avaliação corporal",
        "Testes de sensibilidade",
        "Análise de pele",
        "Consultoria personalizada"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Oferecemos uma ampla gama de tratamentos estéticos avançados e regenerativos para atender todas as suas necessidades, categorizados para facilitar a sua escolha.
          </p>
        </div>

        <Tabs defaultValue="facial" className="max-w-5xl mx-auto">
          <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent h-auto gap-2">
            {serviceCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2 px-4 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {category.icon}
                <span>{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-in fade-in-50 duration-300">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold ml-3 text-gray-800">Tratamentos {category.name}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                      <p className="text-center font-medium text-gray-700">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

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
