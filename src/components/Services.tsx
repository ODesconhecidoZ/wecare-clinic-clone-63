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

// Imagens mais representativas dos procedimentos (priorizando fontes confiáveis)
const serviceImages = {
  "Hidra-clean": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Peeling ultrassônico": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Alta frequência": "https://images.unsplash.com/photo-1598965402089-897ce52e8355?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Ozonoterapia": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Hidrapeeling": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Vapor facial": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "HIFU Ultraformer": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Radiofrequência Morpheus": "https://images.unsplash.com/photo-1581591524083-5ae5b0d95b64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Sauna finlandesa": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Banho grego": "https://images.unsplash.com/photo-1572553687040-79b22e4013e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Massagem vibratória": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Drenagem linfática": "https://images.unsplash.com/photo-1570174006382-115a138243ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Intradermoterapia": "https://images.unsplash.com/photo-1579165466741-7f35e4755183?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Mesoterapia/nanoterapia": "https://images.unsplash.com/photo-1606206873634-443e7a39ff24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Derma pen": "https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Head spa": "https://images.unsplash.com/photo-1562243061-204550d8a2c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Tratamento para queda capilar": "https://images.unsplash.com/photo-1560983073-c29bfc68fe6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Estímulo ao crescimento": "https://images.unsplash.com/photo-1626954079979-ec490d0cce95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Hialuron Pen": "https://images.unsplash.com/photo-1598952553841-f9357e5d2de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Skinbooster/Swettbotox": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Máscara LED": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Dermalife 5.5": "https://images.unsplash.com/photo-1612908689375-946bac7aebb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Laser facial regenerativo": "https://images.unsplash.com/photo-1614859076384-14b6c067e60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Microagulhamento": "https://images.unsplash.com/photo-1636300174712-96e2ba933382?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Detox": "https://images.unsplash.com/photo-1600618528240-fb9fc964eca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Tratamentos para dermatites": "https://images.unsplash.com/photo-1584515942389-dde4d739fb41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Tratamentos para bronquite": "https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Tratamentos para asma": "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Tratamentos para alergias": "https://images.unsplash.com/photo-1584515979956-d0f650ea561a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Programas personalizados": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Massagens modeladoras": "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Tratamentos para celulite": "https://images.unsplash.com/photo-1570194065650-d99fb4a38b97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Tratamentos para flacidez": "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Limpeza de pele profunda": "https://images.unsplash.com/photo-1612908687288-b0334b295e1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Peeling químico": "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Tratamentos anti-idade": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Análise facial": "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Diagnóstico capilar": "https://images.unsplash.com/photo-1580421383874-7e5007c66ca4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Avaliação corporal": "https://images.unsplash.com/photo-1581333100576-b73befd79a72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Testes de sensibilidade": "https://images.unsplash.com/photo-1579165466573-cb89e80ce409?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Análise de pele": "https://images.unsplash.com/photo-1604770101268-e6af07169560?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "Consultoria personalizada": "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
                      {/* Imagem para cada serviço */}
                      <div className="w-full h-40 mb-4 overflow-hidden rounded-md">
                        <img
                          src={serviceImages[service.name]}
                          alt={`Imagem de ${service.name}`}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                            console.log(`Erro ao carregar imagem para: ${service.name}`);
                          }}
                        />
                      </div>
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
