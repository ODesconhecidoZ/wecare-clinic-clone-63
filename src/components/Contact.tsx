
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="section-padding bg-white text-center" id="contact">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-5xl font-semibold mb-8">Entre em Contacto</h2>
          <p className="text-3xl mb-12 max-w-3xl mx-auto">
            Tem perguntas ou deseja agendar uma consulta? Entre em contacto por qualquer um dos métodos abaixo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-12 rounded-xl shadow-sm">
            <h3 className="text-4xl font-semibold text-gray-800 mb-12">Informações de Contacto</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-12">
                <div className="flex items-start justify-start mx-auto max-w-md">
                  <div className="bg-primary/10 p-5 rounded-lg mr-6">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium text-gray-800 mb-3">Localização</h4>
                    <p className="text-xl text-gray-600">Rua Branco Martins, loja 3</p>
                    <p className="text-xl text-gray-600">2450-106 Nazaré</p>
                    <p className="text-xl text-gray-600">Portugal</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-start mx-auto max-w-md">
                  <div className="bg-primary/10 p-5 rounded-lg mr-6">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium text-gray-800 mb-3">Telemóvel</h4>
                    <p className="text-xl text-gray-600">+351 967 319 782</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-12">
                <div className="flex items-start justify-start mx-auto max-w-md">
                  <div className="bg-primary/10 p-5 rounded-lg mr-6">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium text-gray-800 mb-3">Email</h4>
                    <a href="mailto:cc.clinic2025.ear@gmail.com" className="text-xl text-gray-700 underline underline-offset-2">cc.clinic2025.ear@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start justify-start mx-auto max-w-md">
                  <div className="bg-primary/10 p-5 rounded-lg mr-6">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium text-gray-800 mb-3">Horário</h4>
                    <p className="text-xl text-gray-600 mb-1">Segunda a Sexta: 10h - 18h</p>
                    <p className="text-xl text-gray-600 mb-1">Sábado: 10h - 13h</p>
                    <p className="text-xl text-gray-600">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <a 
                href="https://wa.me/351967319782" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center text-2xl px-10 py-4"
              >
                Contactar pelo WhatsApp
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

