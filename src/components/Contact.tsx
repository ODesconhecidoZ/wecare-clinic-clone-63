
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Tem perguntas ou deseja agendar uma consulta? Entre em contato por qualquer um dos métodos abaixo.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Informações de Contato</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start justify-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Localização</h4>
                    <p className="text-gray-600">Rua Branco Martins, loja 3</p>
                    <p className="text-gray-600">2450-106 Nazaré</p>
                    <p className="text-gray-600">Portugal</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Telefone</h4>
                    <p className="text-gray-600">+351 967 319 782</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start justify-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">cc.clinic2025.ear@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Horário</h4>
                    <p className="text-gray-600">Segunda - Sexta: 9:00 - 19:00</p>
                    <p className="text-gray-600">Sábado: 9:00 - 17:00</p>
                    <p className="text-gray-600">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <a 
                href="https://wa.me/351967319782" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Entrar em Contato pelo WhatsApp
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
