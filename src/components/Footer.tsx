
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-6">
      <div className="container-custom text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">CC Estética Avançada Regenerativa</h3>
            <p className="text-gray-300 mb-4 max-w-md mx-auto">
              Tecnologia e bem-estar para corpo, rosto e cabelo. Tratamentos personalizados com resultados reais e duradouros.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Localização</h3>
            <ul className="space-y-3 flex flex-col items-center">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Rua Branco Martins, Loja 3, 2450-106 Nazaré</span>
              </li>
              <li className="mt-4 text-center">
                <div className="text-gray-300">
                  <h4 className="font-medium mb-1">Horário de Funcionamento:</h4>
                  <p>Segunda a Sexta: 10h–18h</p>
                  <p>Sábado: 10h–13h</p>
                </div>
              </li>
              <li className="mt-6">
                <a 
                  href="https://wa.me/351967319782" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Marcar pelo WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center">
          <p className="text-gray-300 mb-2">
            <a href="https://wa.me/351967319782" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              WhatsApp: +351 967 319 782
            </a>
          </p>
          <p className="text-gray-300 mb-6">
            <a href="mailto:cc.clinic2025.ear@gmail.com" className="hover:text-primary transition-colors">
              E-mail: cc.clinic2025.ear@gmail.com
            </a>
          </p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CC Estética Avançada Regenerativa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
