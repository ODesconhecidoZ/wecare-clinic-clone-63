import { ArrowRight } from "lucide-react";

const ClinicInfo = () => {
  return (
    <section className="py-20 bg-gray-50 text-center" id="about">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-semibold mb-8 text-gray-800">Sobre a Clínica</h2>
          
          <p className="text-3xl leading-relaxed mb-12 text-gray-600">
            Fundada em 2022, a CC Estética Avançada Regenerativa em Nazaré é o resultado da perfeita união entre tecnologia inovadora e cuidado personalizado. O nosso espaço moderno e acolhedor proporciona tratamentos adaptados às necessidades individuais, com equipamentos de última geração que asseguram resultados duradouros para corpo, rosto e cabelo.
          </p>
          
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">Equipa e Credenciais</h3>
          
          <p className="text-2xl leading-relaxed text-gray-600 mb-10">
            A nossa equipa, composta por uma profissional especializada e certificada, segue protocolos rigorosos e utiliza tecnologia avançada. Com um atendimento personalizado e dedicado, garantimos a segurança e eficácia de cada tratamento. A satisfação de mais de 500 pacientes comprova o nosso compromisso com a qualidade e excelência em estética avançada e regenerativa.
          </p>
          
          <div className="mt-12">
            <a 
              href="https://wa.me/351967319782" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-xl px-8 py-4"
            >
              Agende a sua Consulta
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInfo;
