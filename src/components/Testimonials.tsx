
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sofia Martins",
      role: "Paciente",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
      content: "Realizei o tratamento HIFU Ultraformer e os resultados foram surpreendentes! A flacidez do meu rosto melhorou significativamente e a equipa foi extremamente profissional durante todo o processo. Recomendo vivamente este tratamento para quem procura resultados naturais sem cirurgia.",
      rating: 5
    },
    {
      name: "Carlos Rodrigues",
      role: "Paciente",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
      content: "Comecei os tratamentos capilares há 6 meses e já noto uma diferença incrível. A combinação de mesoterapia e microagulhamento realmente funcionou para mim. Os profissionais são muito atenciosos e sempre explicam cada etapa do processo.",
      rating: 5
    },
    {
      name: "Isabel Costa",
      role: "Paciente",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
      content: "A limpeza de pele profunda com peeling ultrassônico transformou completamente a minha pele. As manchas diminuíram e a textura melhorou muito. O ambiente da clínica é muito acolhedor e a equipe é extremamente competente.",
      rating: 5
    },
    {
      name: "Miguel Santos",
      role: "Paciente",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
      content: "Os tratamentos estéticos corporais, especialmente a Radiofrequência Morpheus, superaram minhas expectativas. Os resultados na flacidez e contorno corporal são visíveis desde as primeiras sessões. Equipe muito profissional e dedicada.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="section-padding bg-primary/5 text-gray-800" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title text-purple-800">O Que Os Nossos Pacientes Dizem</h2>
          <p className="section-subtitle text-purple-600">
            Não acredite apenas em nós - ouça o que os nossos pacientes têm a dizer sobre as suas experiências na nossa clínica.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Testimonials - Multiple Cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md flex flex-col border-2 border-purple-100 hover:border-purple-200 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-300" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Testimonials - Single Card with Carousel */}
          <div className="md:hidden">
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-purple-100">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                    {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gray-300" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonials[currentIndex].content}"</p>
              <div className="flex justify-between">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-purple-50 hover:bg-purple-100 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-purple-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-purple-50 hover:bg-purple-100 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-purple-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

