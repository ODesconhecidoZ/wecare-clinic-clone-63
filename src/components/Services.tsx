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

const serviceImages = {
  "Hidra-clean": "https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Peeling ultrassônico": "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Alta frequência": "https://images.pexels.com/photos/3764015/pexels-photo-3764015.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Ozonoterapia": "https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Hidrapeeling": "https://images.pexels.com/photos/3764575/pexels-photo-3764575.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Vapor facial": "https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg?auto=compress&cs=tinysrgb&w=800",
  "HIFU Ultraformer": "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Radiofrequência Morpheus": "https://images.pexels.com/photos/5069437/pexels-photo-5069437.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Sauna finlandesa": "https://images.pexels.com/photos/5069624/pexels-photo-5069624.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Banho grego": "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Massagem vibratória": "https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Drenagem linfática": "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Intradermoterapia": "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Mesoterapia/nanoterapia": "https://images.pexels.com/photos/7088474/pexels-photo-7088474.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Derma pen": "https://images.pexels.com/photos/7089397/pexels-photo-7089397.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Head spa": "https://images.pexels.com/photos/3993127/pexels-photo-3993127.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Tratamento para queda capilar": "https://images.pexels.com/photos/3993120/pexels-photo-3993120.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Estímulo ao crescimento": "https://images.pexels.com/photos/7089663/pexels-photo-7089663.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Hialuron Pen": "https://images.pexels.com/photos/7147462/pexels-photo-7147462.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Skinbooster/Swettbotox": "https://images.pexels.com/photos/7147431/pexels-photo-7147431.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Máscara LED": "https://images.pexels.com/photos/7147456/pexels-photo-7147456.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Dermalife 5.5": "https://images.pexels.com/photos/3997382/pexels-photo-3997382.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Laser facial regenerativo": "https://images.pexels.com/photos/5069471/pexels-photo-5069471.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Microagulhamento": "https://images.pexels.com/photos/7147483/pexels-photo-7147483.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Detox": "https://images.pexels.com/photos/3764027/pexels-photo-3764027.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Tratamentos para dermatites": "https://images.pexels.com/photos/7147437/pexels-photo-7147437.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Tratamentos para bronquite": "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Tratamentos para asma": "https://images.pexels.com/photos/4047137/pexels-photo-4047137.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Tratamentos para alergias": "https://images.pexels.com/photos/4046997/pexels-photo-4046997.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Programas personalizados": "https://images.pexels.com/photos/3764012/pexels-photo-3764012.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Massagens modeladoras": "https://images.pexels.com/photos/3997988/pexels-photo-3997988.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Tratamentos para celulite": "https://images.pexels.com/photos/6663467/pexels-photo-6663467.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Tratamentos para flacidez": "https://images.pexels.com/photos/6663466/pexels-photo-6663466.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Limpeza de pele profunda": "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Peeling químico": "https://images.pexels.com/photos/5069433/pexels-photo-5069433.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Tratamentos anti-idade": "https://images.pexels.com/photos/5069435/pexels-photo-5069435.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Análise facial": "https://images.pexels.com/photos/3764016/pexels-photo-3764016.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Diagnóstico capilar": "https://images.pexels.com/photos/3993453/pexels-photo-3993453.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Avaliação corporal": "https://images.pexels.com/photos/6551138/pexels-photo-6551138.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Testes de sensibilidade": "https://images.pexels.com/photos/7147414/pexels-photo-7147414.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Análise de pele": "https://images.pexels.com/photos/3764610/pexels-photo-3764610.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Consultoria personalizada": "https://images.pexels.com/photos/7641925/pexels-photo-7641925.jpeg?auto=compress&cs=tinysrgb&w=800"
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
          description: "Estimula a produ��ão de colágeno, melhorando a textura e firmeza da pele de forma não invasiva."
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
                      <div className="w-full h-40 mb-4 overflow-hidden rounded-md">
                        <img
                          src={serviceImages[service.name] || "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800"}
                          alt={`Imagem de ${service.name}`}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            console.log(`Erro ao carregar imagem para: ${service.name}`);
                            e.currentTarget.src = "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=800";
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
