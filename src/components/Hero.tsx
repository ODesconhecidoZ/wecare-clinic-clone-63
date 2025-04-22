
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden text-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-50"></div>
      </div>
      
      <div className="container-custom relative flex flex-col items-center">
        {/* Content */}
        <div className="w-full max-w-4xl mb-12 text-center">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-gray-800 mb-10">
            CC Estética <span className="text-primary">Avançada Regenerativa</span>
          </h1>
          <p className="text-3xl md:text-4xl text-gray-600 mb-14 max-w-3xl mx-auto">
            Tecnologia e bem-estar para corpo, rosto e cabelo, com atenção personalizada.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://wa.me/351967319782" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center text-2xl px-10 py-4">
              Agende pelo WhatsApp <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </div>
        </div>
        
        {/* Feature Box */}
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-12">
          <h3 className="text-4xl font-semibold mb-8 text-gray-800">Localização e Horário</h3>
          
          <div className="space-y-10 text-left max-w-3xl mx-auto text-xl md:text-2xl text-gray-700">
            <div>
              <h4 className="text-2xl font-medium mb-2">Morada</h4>
              <p>Rua Branco Martins, Loja 3</p>
              <p>2450-106 Nazaré</p>
            </div>
            
            <div>
              <h4 className="text-2xl font-medium mb-2">Horário de Funcionamento</h4>
              <p>Segunda a Sexta: 10h–18h</p>
              <p>Sábado: 10h–13h</p>
            </div>
            
            <div>
              <h4 className="text-2xl font-medium mb-2">Contactos</h4>
              <p>Telemóvel/WhatsApp: +351 967 319 782</p>
              <p>Email: cc.clinic2025.ear@gmail.com</p>
            </div>
            
            <a href="https://wa.me/351967319782" target="_blank" rel="noopener noreferrer" className="btn-primary w-full flex justify-center items-center text-2xl px-8 py-4 mt-8">
              Agende pelo WhatsApp <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

