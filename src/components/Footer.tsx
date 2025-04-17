
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">CC Estética Avançada Regenerativa</h3>
            <p className="text-gray-300 mb-4">
              Cuidado e bem-estar integrados com tratamentos estéticos avançados e regenerativos para realçar sua beleza natural.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-primary/20 hover:bg-primary/30 text-primary hover:text-white p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 text-primary hover:text-white p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 text-primary hover:text-white p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/20 hover:bg-primary/30 text-primary hover:text-white p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Nossos Serviços
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Nossa Equipe
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Tratamentos Faciais
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Tratamentos Corporais
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Terapias Estéticas
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Terapias Capilares
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" /> Massagem Terapêutica
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Informações de Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Rua Branco Martins, loja 3, 2450-106 Nazaré</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">+351 967 319 782</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">cc.clinic2025.ear@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Seg-Sex: 9:00 - 19:00<br />Sáb: 9:00 - 17:00<br />Dom: Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CC Estética Avançada Regenerativa. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary text-sm">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm">Termos de Serviço</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm">Mapa do Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
