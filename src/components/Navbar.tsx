
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-primary font-bold text-2xl font-poppins">
            CC Estética<span className="text-gray-700"> Avançada Regenerativa</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center">
            <div className="hidden lg:flex items-center mr-6">
              <Phone className="text-primary mr-2 h-5 w-5" />
              <span className="font-medium">+351 967 319 782</span>
            </div>
            <a 
              href="https://wa.me/351967319782" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Marcar Consulta
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <div className="flex items-center py-2">
              <Phone className="text-primary mr-2 h-5 w-5" />
              <span className="font-medium">+351 967 319 782</span>
            </div>
            <a 
              href="https://wa.me/351967319782" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block text-center"
              onClick={() => setIsOpen(false)}
            >
              Marcar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
