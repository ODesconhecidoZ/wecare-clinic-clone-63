
import { Zap } from "lucide-react";

const Equipment = () => {
  const equipments = [
    {
      name: "Câmara de Hidratação",
      description: "Equipamento avançado para hidratação profunda da pele, proporcionando rejuvenescimento e revitalização.",
      image: "/lovable-uploads/d0cb22cf-8cf4-46f1-ba42-9e32dbbe2d8f.png"
    },
    {
      name: "Máscara LED Terapêutica",
      description: "Tecnologia de fototerapia que utiliza diferentes comprimentos de onda para tratar diversas condições da pele.",
      image: "/lovable-uploads/5935874b-ff4b-41b0-95ec-4b3692d7e3b3.png"
    },
    {
      name: "Cápsula SPA Integral",
      description: "Sistema completo para tratamentos corporais que combina sauna, cromoterapia e aromaterapia em uma única sessão.",
      image: "/lovable-uploads/a9860b00-b086-453c-87b1-f3987a72f17a.png"
    },
    {
      name: "Sistema de Oxigenoterapia",
      description: "Equipamento que proporciona tratamentos revitalizantes através da aplicação de oxigênio de alta pressão.",
      image: "/lovable-uploads/06257cf1-034c-4a68-8c1c-fadaf0a230be.png"
    }
  ];

  return (
    <section className="section-padding bg-white" id="equipment">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold mb-6">Tecnologia de Ponta</h2>
          <p className="text-3xl max-w-4xl mx-auto mb-10">
            Investimos constantemente em equipamentos avançados e inovadores para garantir resultados superiores em todos os nossos tratamentos.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-10 shadow-sm">
          <div className="flex justify-center items-center mb-8">
            <div className="bg-primary/10 p-4 rounded-full mr-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800">
              Equipamentos de Última Geração
            </h3>
          </div>

          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Na CC Estética Avançada Regenerativa, utilizamos apenas equipamentos certificados e de alta tecnologia para garantir a eficácia e segurança dos nossos tratamentos, proporcionando resultados visíveis desde a primeira sessão.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipments.map((equipment, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-primary mb-2">{equipment.name}</h4>
                  <p className="text-gray-600">{equipment.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Todos os nossos equipamentos são operados por profissionais especializados e seguem rigorosos protocolos de higiene e segurança, garantindo resultados eficazes e duradouros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
