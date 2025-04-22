
import {
  Sparkles, Zap, Droplets, Activity, Leaf, ArrowRight,
  Scan, Scissors
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

// Imagens ilustrativas para cada serviço
const serviceImages: Record<string, string> = {
  "Hidra-clean": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "Peeling ultrassônico": "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80",
  "Alta frequência": "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80",
  "Ozonoterapia": "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  "Hidrapeeling": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  "Vapor facial": "https://images.unsplash.com/photo-1521939094609-93aba1af40d6?auto=format&fit=crop&w=600&q=80",
  "HIFU Ultraformer": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  "Radiofrequência Morpheus": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "Sauna finlandesa": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  "Banho grego": "https://images.unsplash.com/photo-1556229010-aa3bdf1b4397?auto=format&fit=crop&w=600&q=80",
  "Massagem vibratória": "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
  "Drenagem linfática": "https://images.unsplash.com/photo-1512428559087-dc1c88b942c2?auto=format&fit=crop&w=600&q=80",
  "Intradermoterapia": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
  "Mesoterapia/nanoterapia": "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80",
  "Derma pen": "https://images.unsplash.com/photo-1522335789203-a258e60b7665?auto=format&fit=crop&w=600&q=80",
  "Head spa": "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  "Tratamento para queda capilar": "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=600&q=80",
  "Estímulo ao crescimento": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "Hialuron Pen": "https://images.unsplash.com/photo-1506629082955-511b1ccebccb?auto=format&fit=crop&w=600&q=80",
  "Skinbooster/Swettbotox": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
  "Máscara LED": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "Dermalife 5.5": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
  "Laser facial regenerativo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  "Microagulhamento": "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "Detox": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "Tratamentos para dermatites": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
  "Tratamentos para bronquite": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "Tratamentos para asma": "https://images.unsplash.com/photo-1512428559087-dc1c88b942c2?auto=format&fit=crop&w=600&q=80",
  "Tratamentos para alergias": "https://images.unsplash.com/photo-1522335789203-a258e60b7665?auto=format&fit=crop&w=600&q=80",
  "Programas personalizados": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "Massagens modeladoras": "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=600&q=80",
  "Tratamentos para celulite": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  "Tratamentos para flacidez": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
  "Limpeza de pele profunda": "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80",
  "Peeling químico": "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80",
  "Tratamentos anti-idade": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
  "Análise facial": "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80",
  "Diagnóstico capilar": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  "Avaliação corporal": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  "Testes de sensibilidade": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "Análise de pele": "https://images.unsplash.com/photo-1522335789203-a258e60b7665?auto=format&fit=crop&w=600&q=80",
  "Consultoria personalizada": "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
};

const Services = () => {
  const serviceCategories = [
    {
      id: "facial",
      name: "Faciais",
      icon: <Sparkles className="h-6 w-6" />,
      services: [
        {
          name: "Hidra-clean",
          description: "Limpeza profunda da pele que elimina impurezas, desobstrui os poros e hidrata profundamente."
        },
        {
          name: "Peeling ultrassônico",
          description: "Esfoliação suave que remove células mortas e impurezas usando ondas ultrassônicas, ideal para peles sensíveis."
        },
        {
          name: "Alta frequência",
          description: "Tratamento que utiliza corrente elétrica de alta frequência para combater acne, inflamações e estimular a circulação."
        },
        {
          name: "Ozonoterapia",
          description: "Aplicação de ozônio medicinal na pele para eliminar bactérias, melhorar oxigenação e rejuvenescer o tecido cutâneo."
        },
        {
          name: "Hidrapeeling",
          description: "Combina hidratação profunda com esfoliação suave para renovar a pele, removendo impurezas e células mortas."
        },
        {
          name: "Vapor facial",
          description: "Aplicação de vapor que abre os poros, facilita a remoção de impurezas e prepara a pele para tratamentos posteriores."
        }
      ]
    },
    {
      id: "body",
      name: "Corporais",
      icon: <Zap className="h-6 w-6" />,
      services: [
        {
          name: "HIFU Ultraformer",
          description: "Ultrassom focalizado de alta intensidade que estimula o colágeno e promove lifting sem cirurgia."
        },
        {
          name: "Radiofrequência Morpheus",
          description: "Combinação de radiofrequência e microagulhamento para remodelar o contorno corporal e tratar a flacidez."
        },
        {
          name: "Sauna finlandesa",
          description: "Sauna seca com temperatura elevada que promove desintoxicação, relaxamento e melhora circulatória."
        },
        {
          name: "Banho grego",
          description: "Ritual de limpeza e hidratação corporal inspirado na Grécia antiga que deixa a pele macia e revitalizada."
        },
        {
          name: "Massagem vibratória",
          description: "Técnica que utiliza aparelhos vibratórios para reduzir tensão muscular, melhorar circulação e modelar o corpo."
        },
        {
          name: "Drenagem linfática",
          description: "Massagem específica que estimula o sistema linfático, reduz edemas e melhora a circulação sanguínea."
        }
      ]
    },
    {
      id: "hair",
      name: "Capilares",
      icon: <Droplets className="h-6 w-6" />,
      services: [
        {
          name: "Intradermoterapia",
          description: "Aplicação de ativos diretamente no couro cabeludo para tratar a queda de cabelo e estimular o crescimento."
        },
        {
          name: "Mesoterapia/nanoterapia",
          description: "Microinjeções de nutrientes no couro cabeludo para fortalecer os fios e prevenir a queda."
        },
        {
          name: "Derma pen",
          description: "Microagulhamento que estimula a produção de colágeno no couro cabeludo e melhora a absorção de ativos."
        },
        {
          name: "Head spa",
          description: "Tratamento relaxante para o couro cabeludo que combina limpeza profunda, massagem e aplicação de ativos."
        },
        {
          name: "Tratamento para queda capilar",
          description: "Protocolo personalizado que combina diferentes técnicas para combater a queda de cabelo e fortalecer os fios."
        },
        {
          name: "Estímulo ao crescimento",
          description: "Tratamento que utiliza ativos e tecnologias avançadas para estimular o crescimento e fortalecer os fios."
        }
      ]
    },
    {
      id: "regen",
      name: "Regenerativos",
      icon: <Activity className="h-6 w-6" />,
      services: [
        {
          name: "Hialuron Pen",
          description: "Aplicação de ácido hialurônico sem agulhas para hidratação profunda e preenchimento de linhas finas."
        },
        {
          name: "Skinbooster/Swettbotox",
          description: "Aplicação de substâncias revitalizantes que melhoram a qualidade da pele e reduzem sinais de envelhecimento."
        },
        {
          name: "Máscara LED",
          description: "Fototerapia com diferentes comprimentos de onda que trata acne, rugas e estimula o colágeno."
        },
        {
          name: "Dermalife 5.5",
          description: "Tratamento inovador que combina diferentes tecnologias para revitalizar e rejuvenescer a pele."
        },
        {
          name: "Laser facial regenerativo",
          description: "Estimula a produção de colágeno, melhorando a textura e firmeza da pele de forma não invasiva."
        },
        {
          name: "Microagulhamento",
          description: "Criação de microcanais na pele que estimulam a regeneração celular e a produção de colágeno."
        }
      ]
    },
    {
      id: "special",
      name: "Especiais",
      icon: <Leaf className="h-6 w-6" />,
      services: [
        {
          name: "Detox",
          description: "Programa completo de desintoxicação do organismo que melhora a saúde geral e reflete na qualidade da pele."
        },
        {
          name: "Tratamentos para dermatites",
          description: "Protocolos específicos para tratar diferentes tipos de dermatites, reduzindo inflamação e irritação."
        },
        {
          name: "Tratamentos para bronquite",
          description: "Terapias complementares que ajudam a aliviar sintomas de bronquite e melhorar a saúde respiratória."
        },
        {
          name: "Tratamentos para asma",
          description: "Abordagem multidisciplinar que visa melhorar a qualidade de vida de pacientes com asma."
        },
        {
          name: "Tratamentos para alergias",
          description: "Combinação de terapias que ajudam a reduzir reações alérgicas e fortalecer o sistema imunológico."
        },
        {
          name: "Programas personalizados",
          description: "Protocolos desenvolvidos especificamente para as necessidades individuais de cada cliente."
        }
      ]
    },
    {
      id: "aesthetic",
      name: "Estéticos",
      icon: <Scissors className="h-6 w-6" />,
      services: [
        {
          name: "Massagens modeladoras",
          description: "Técnicas manuais que auxiliam na definição do contorno corporal e redução de medidas."
        },
        {
          name: "Tratamentos para celulite",
          description: "Combinação de tecnologias e ativos que reduzem o aspecto da celulite e melhoram a textura da pele."
        },
        {
          name: "Tratamentos para flacidez",
          description: "Protocolos que estimulam o colágeno e a elastina para devolver firmeza à pele."
        },
        {
          name: "Limpeza de pele profunda",
          description: "Procedimento completo que remove impurezas, cravos e células mortas, deixando a pele limpa e renovada."
        },
        {
          name: "Peeling químico",
          description: "Aplicação de substâncias que promovem a esfoliação controlada da pele, tratando manchas e rugas."
        },
        {
          name: "Tratamentos anti-idade",
          description: "Protocolos avançados que combatem os sinais de envelhecimento e promovem o rejuvenescimento da pele."
        }
      ]
    },
    {
      id: "diagnostic",
      name: "Diagnósticos",
      icon: <Scan className="h-6 w-6" />,
      services: [
        {
          name: "Análise facial",
          description: "Avaliação detalhada da pele do rosto para identificar necessidades específicas e recomendar tratamentos."
        },
        {
          name: "Diagnóstico capilar",
          description: "Exame do couro cabeludo e dos fios para identificar problemas e definir o melhor protocolo de tratamento."
        },
        {
          name: "Avaliação corporal",
          description: "Análise completa do corpo para identificar áreas que necessitam de intervenção estética."
        },
        {
          name: "Testes de sensibilidade",
          description: "Identificação de possíveis alergias a produtos e substâncias para garantir tratamentos seguros."
        },
        {
          name: "Análise de pele",
          description: "Estudo aprofundado do tipo de pele e suas condições atuais para direcionar os tratamentos mais adequados."
        },
        {
          name: "Consultoria personalizada",
          description: "Orientação especializada para criar um programa de cuidados estéticos adaptado às necessidades individuais."
        }
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Os Nossos Serviços</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Oferecemos uma vasta gama de tratamentos estéticos avançados e regenerativos para ir ao encontro de todas as suas necessidades, categorizados para facilitar a sua escolha.
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="bg-gray-50 p-5 rounded-lg hover:bg-primary/5 transition-colors border border-gray-100 flex flex-col">
                      <img
                        src={serviceImages[service.name] || "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"}
                        alt={service.name}
                        className="rounded-md w-full h-40 object-cover mb-4"
                        loading="lazy"
                      />
                      <h4 className="font-semibold text-lg mb-2 text-primary">{service.name}</h4>
                      <p className="text-gray-700">{service.description}</p>
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
            Quero marcar pelo WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

