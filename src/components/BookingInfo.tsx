
import { ArrowRight } from "lucide-react";

const BookingInfo = () => {
  return (
    <section className="py-16 bg-white" id="booking">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-6">Agendamento Rápido (via WhatsApp)</h2>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <p className="text-gray-700 mb-6">
              Para agendar seu tratamento de forma rápida e fácil, envie uma mensagem pelo WhatsApp com as seguintes informações:
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-700">Nome completo</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-700">Telefone/WhatsApp</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-700">Tratamento desejado</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-700">Data e horário preferidos</span>
              </li>
            </ul>
            
            <p className="text-gray-700 mb-6">
              Em poucos minutos responderemos confirmando sua vaga.
            </p>
            
            <a 
              href="https://wa.me/351967319782" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full flex justify-center items-center"
            >
              Agendar pelo WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingInfo;
