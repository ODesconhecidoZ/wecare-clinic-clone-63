
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">CC Estética Avançada Regenerativa</h3>
            <p className="text-gray-300 mb-4">
              Tecnologia e bem-estar para corpo, rosto e cabelo. Tratamentos personalizados com resultados reais e duradouros.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-primary/20 hover:bg-primary/30 text-primary hover:text-white p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 text-primary hover:text-white p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 text-primary hover:text-white p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Links Rápidos</h3>
            <div className="flex space-x-4 mb-6">
              <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">Sobre</Link>
              <span className="text-gray-500">•</span>
              <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Serviços</Link>
              <span className="text-gray-500">•</span>
              <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contato</Link>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-white">Contato Rápido</h3>
            <p className="text-gray-300 mb-2">
              <a href="https://wa.me/351967319782" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                WhatsApp: +351 967 319 782
              </a>
            </p>
            <p className="text-gray-300">
              <a href="mailto:cc.clinic2025.ear@gmail.com" className="hover:text-primary transition-colors">
                E-mail: cc.clinic2025.ear@gmail.com
              </a>
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Localização</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Rua Branco Martins, Loja 3, 2450-106 Nazaré</span>
              </li>
              <li className="flex items-start mt-4">
                <div className="text-gray-300">
                  <h4 className="font-medium mb-1">Horário de Funcionamento:</h4>
                  <p>Segunda a Sexta: 09h–19h</p>
                  <p>Sábado: 09h–13h</p>
                </div>
              </li>
              <li className="mt-6">
                <a 
                  href="https://wa.me/351967319782" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Agendar pelo WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CC Estética Avançada Regenerativa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
