
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Entre em Contacto</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Tem perguntas ou deseja agendar uma consulta? Entre em contacto por qualquer um dos métodos abaixo.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Informações de Contacto</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="flex items-start justify-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">Localização</h4>
                    <p className="text-lg text-gray-600">Rua Branco Martins, loja 3</p>
                    <p className="text-lg text-gray-600">2450-106 Nazaré</p>
                    <p className="text-lg text-gray-600">Portugal</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">Telemóvel</h4>
                    <p className="text-lg text-gray-600">+351 967 319 782</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start justify-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">Email</h4>
                    <p className="text-lg text-gray-600">cc.clinic2025.ear@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">Horário</h4>
                    <p className="text-lg text-gray-600">Segunda - Sexta: 9:00 - 19:00</p>
                    <p className="text-lg text-gray-600">Sábado: 9:00 - 13:00</p>
                    <p className="text-lg text-gray-600">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <a 
                href="https://wa.me/351967319782" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center text-lg"
              >
                Contactar pelo WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
