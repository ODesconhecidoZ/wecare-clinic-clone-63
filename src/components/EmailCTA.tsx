
import { Mail, ArrowRight } from "lucide-react";

const EmailCTA = () => {
  return (
    <section className="py-20 bg-primary/10" id="email-cta">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-gray-800">Tem Alguma Dúvida?</h2>
          
          <p className="text-2xl leading-relaxed mb-10 text-gray-600">
            Envie-nos um e-mail para obter mais informações sobre os nossos tratamentos ou para esclarecer qualquer questão que possa ter.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex justify-center items-center mb-6">
              <Mail className="text-primary h-12 w-12" />
            </div>
            
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Contacte-nos por E-mail</h3>
            
            <p className="text-xl text-gray-600 mb-8">
              Para mais informações ou para marcar uma consulta personalizada, envie-nos um e-mail. Responderemos o mais rapidamente possível.
            </p>
            
            <a 
              href="mailto:cc.clinic2025.ear@gmail.com" 
              className="btn-primary inline-flex items-center text-xl px-8 py-4"
            >
              Enviar E-mail
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCTA;
