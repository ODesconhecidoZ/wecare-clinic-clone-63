
import { ArrowRight } from "lucide-react";

const BookingInfo = () => {
  return (
    <section className="py-16 bg-white" id="booking">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center font-semibold mb-8">Agendamento Rápido (via WhatsApp)</h2>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <p className="text-xl text-gray-700 mb-8">
              Para agendar o seu tratamento de forma rápida e fácil, envie uma mensagem pelo WhatsApp com as seguintes informações:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">•</span>
                <span className="text-xl text-gray-700">Nome completo</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">•</span>
                <span className="text-xl text-gray-700">Telemóvel/WhatsApp</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">•</span>
                <span className="text-xl text-gray-700">Tratamento desejado</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">•</span>
                <span className="text-xl text-gray-700">Data e horário preferidos</span>
              </li>
            </ul>
            
            <p className="text-xl text-gray-700 mb-8">
              Em poucos minutos responderemos a confirmar a sua vaga.
            </p>
            
            <a 
              href="https://wa.me/351967319782" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full flex justify-center items-center text-lg"
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
