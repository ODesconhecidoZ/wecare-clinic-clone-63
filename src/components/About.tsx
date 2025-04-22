
import { CheckCircle2, Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section className="section-padding bg-white text-center" id="about">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold mb-6">Sobre a Clínica CC Estética Avançada Regenerativa</h2>
          <p className="text-3xl max-w-4xl mx-auto mb-12">
            Fundada em 2022, a nossa clínica tem vindo a estabelecer-se como referência em tratamentos de estética avançada e regenerativa, proporcionando bem-estar, saúde e realce da beleza natural.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Tecnologia Avançada e Atendimento Personalizado
          </h3>
          <p className="text-2xl text-gray-600 mb-12">
            Atendemos entre 4 a 5 clientes diariamente, garantindo atenção individualizada e resultados eficazes. Com mais de 500 pacientes satisfeitos, temos orgulho em proporcionar tratamentos personalizados que promovem saúde, conforto e confiança.
          </p>

          <div className="space-y-6 max-w-3xl mx-auto mb-16">
            <div className="flex items-start justify-center">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1 mr-4" />
              <p className="text-xl text-gray-700">Equipamentos de última geração com tecnologia inovadora</p>
            </div>
            <div className="flex items-start justify-center">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1 mr-4" />
              <p className="text-xl text-gray-700">Equipa especializada e dedicada a cada cliente</p>
            </div>
            <div className="flex items-start justify-center">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1 mr-4" />
              <p className="text-xl text-gray-700">Atendimento diário com média de 4 a 5 clientes</p>
            </div>
            <div className="flex items-start justify-center">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1 mr-4" />
              <p className="text-xl text-gray-700">Mais de 500 pacientes satisfeitos</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="mb-4 text-primary flex justify-center">
              <Users className="h-10 w-10" />
            </div>
            <h4 className="text-4xl font-bold text-gray-800 mb-2">500+</h4>
            <p className="text-xl text-gray-600">Pacientes Satisfeitos</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="mb-4 text-primary flex justify-center">
              <Award className="h-10 w-10" />
            </div>
            <h4 className="text-4xl font-bold text-gray-800 mb-2">4–5</h4>
            <p className="text-xl text-gray-600">Clientes Atendidos por Dia</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="mb-4 text-primary flex justify-center">
              <Heart className="h-10 w-10" />
            </div>
            <h4 className="text-4xl font-bold text-gray-800 mb-2">Desde 2022</h4>
            <p className="text-xl text-gray-600">Anos de Atividade</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="mb-4 text-primary flex justify-center">
              <Award className="h-10 w-10" />
            </div>
            <h4 className="text-4xl font-bold text-gray-800 mb-2">10h–18h</h4>
            <p className="text-xl text-gray-600">Horário Dias Úteis</p>
            <h4 className="text-4xl font-bold text-gray-800 mt-4 mb-2">10h–13h</h4>
            <p className="text-xl text-gray-600">Horário Sabados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

