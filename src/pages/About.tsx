
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-50 pt-32 pb-10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sobre Nós</h1>
          <p className="text-lg text-gray-600">Conheça a CC Estética Avançada Regenerativa e nosso compromisso com seu bem-estar.</p>
        </div>
      </div>

      {/* About Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1631815585553-a8672bf09995?w=800&auto=format&fit=crop&q=80" 
                alt="CC Estética Avançada Regenerativa" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-6">
                A CC Estética Avançada Regenerativa apresenta-se como um espaço dedicado ao cuidado e bem-estar integrados, assinado por um logotipo que combina as iniciais "CC" em um azul profundo e silhuetas minimalistas de corpo e perfil facial, evocando a união entre estética e regeneração.
              </p>
              <p className="text-gray-600">
                Localizada na Rua Branco Martins, loja 3, 2450-106 Nazaré, nossa clínica convida à descoberta de uma proposta completa de tratamentos, onde cada detalhe — desde a disposição harmoniosa dos móveis até o tom acolhedor das paredes brancas — reflete profissionalismo e conforto.
              </p>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h3>
              <p className="text-gray-600">
                Proporcionar tratamentos estéticos avançados e regenerativos personalizados que melhoram a qualidade de vida dos nossos clientes e contribuem para o seu bem-estar integral.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser referência em estética avançada regenerativa, reconhecida pela excelência em tratamentos, inovação tecnológica e serviço personalizado.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossos Valores</h3>
              <p className="text-gray-600">
                Excelência, Personalização, Integridade, Inovação e Bem-estar guiam tudo o que fazemos na CC Estética Avançada Regenerativa.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Por Que Escolher a CC Estética</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mt-10">
              <div className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Profissionais Especializados</h4>
                  <p className="text-gray-600">
                    Nossa equipe é composta por especialistas com vasta experiência em estética avançada e medicina regenerativa.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Tratamentos Personalizados</h4>
                  <p className="text-gray-600">
                    Cada cliente recebe um plano de tratamento exclusivo, adaptado às suas necessidades específicas e objetivos estéticos.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Tecnologia de Ponta</h4>
                  <p className="text-gray-600">
                    Utilizamos equipamentos avançados e inovadores para garantir resultados eficazes e duradouros.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Ambiente Acolhedor</h4>
                  <p className="text-gray-600">
                    Nossa clínica foi projetada para proporcionar conforto e bem-estar durante todos os procedimentos.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Abordagem Integrativa</h4>
                  <p className="text-gray-600">
                    Combinamos diferentes técnicas e tecnologias para oferecer resultados superiores em bem-estar e beleza.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Compromisso com Resultados</h4>
                  <p className="text-gray-600">
                    Nossa maior satisfação é ver a transformação e felicidade dos nossos clientes após nossos tratamentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
