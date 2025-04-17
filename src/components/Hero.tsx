
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-50"></div>
      </div>
      
      <div className="container-custom relative flex flex-col lg:flex-row items-center">
        {/* Content */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-6">
            CC Estética <span className="text-primary">Avançada Regenerativa</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Tecnologia e bem-estar para corpo, rosto e cabelo
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="https://wa.me/351967319782" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center">
              Agende pelo WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
        
        {/* Feature Box */}
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Localização & Horário</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Endereço</h4>
                <p className="text-gray-600">Rua Branco Martins, Loja 3</p>
                <p className="text-gray-600">2450-106 Nazaré</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Horário de Funcionamento</h4>
                <p className="text-gray-600">Segunda a Sexta: 09h–19h</p>
                <p className="text-gray-600">Sábado: 09h–13h</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-1">Contatos</h4>
                <p className="text-gray-600">Telefone/WhatsApp: +351 967 319 782</p>
                <p className="text-gray-600">E-mail: cc.clinic2025.ear@gmail.com</p>
              </div>
              
              <a href="https://wa.me/351967319782" target="_blank" rel="noopener noreferrer" className="btn-primary w-full flex justify-center items-center">
                Agende pelo WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
