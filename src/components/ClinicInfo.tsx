
import { ArrowRight } from "lucide-react";

const ClinicInfo = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-gray-800">Sobre a Clínica</h2>
          
          <p className="text-xl leading-relaxed mb-10 text-gray-600">
            A CC Estética Avançada Regenerativa em Nazaré representa a perfeita união entre inovação tecnológica e cuidado personalizado. No nosso ambiente moderno e acolhedor, cada tratamento é meticulosamente planeado para atender às necessidades específicas dos nossos clientes, utilizando equipamentos de última geração e técnicas avançadas que garantem resultados reais e duradouros para corpo, rosto e cabelo.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Equipa e Credenciais</h3>
          
          <p className="text-xl leading-relaxed text-gray-600">
            A nossa equipa é formada por profissionais especializados e certificados, que seguem protocolos rigorosos e utilizam equipamentos de última geração para garantir segurança e eficácia em todos os tratamentos oferecidos. O compromisso com a excelência e a formação contínua dos nossos especialistas reflete-se na qualidade dos resultados e na satisfação dos nossos clientes.
          </p>
          
          <div className="mt-10">
            <a 
              href="https://wa.me/351967319782" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center text-lg"
            >
              Agende a sua Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInfo;
