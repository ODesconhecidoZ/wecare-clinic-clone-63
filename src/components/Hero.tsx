
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Phone } from "lucide-react";

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
            Beleza e <span className="text-primary">Bem-estar</span> Integrados
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Descubra tratamentos estéticos avançados e regenerativos personalizados para realçar sua beleza natural e promover seu bem-estar completo.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link to="/contact" className="btn-primary flex items-center">
              Agendar Consulta <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+351967319782" className="py-3 px-6 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center">
              <Phone className="mr-2 h-5 w-5 text-primary" /> 
              Ligar Agora
            </a>
          </div>
        </div>
        
        {/* Feature Box */}
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Informações Rápidas</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Segunda - Sexta: 9:00 - 19:00</p>
                  <p className="text-gray-600">Sábado: 9:00 - 17:00</p>
                  <p className="text-gray-600">Domingo: Fechado</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Agendamentos</h4>
                  <p className="text-gray-600">Agende online ou ligue: +351 967 319 782</p>
                  <p className="text-gray-600">Atendimento personalizado para cada cliente</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Contato</h4>
                  <p className="text-gray-600">Telefone: +351 967 319 782</p>
                  <p className="text-gray-600">Email: cc.clinic2025.ear@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
