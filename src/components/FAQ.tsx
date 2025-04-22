
import { useState } from "react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Quanto tempo dura cada sessão?",
      answer: "45 a 90 minutos, conforme o protocolo."
    },
    {
      question: "Preciso de levar alguma coisa?",
      answer: "Documentos pessoais e lista de medicamentos que esteja a tomar."
    },
    {
      question: "Quantas sessões são recomendadas?",
      answer: "Normalmente 4 a 8, varia consoante cada caso específico."
    },
    {
      question: "Existem contraindicações?",
      answer: "Grávidas, certas condições cardíacas ou uso de anticoagulantes. Consulte-nos antes."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl text-center font-semibold mb-8">Perguntas Frequentes</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 last:border-0"
            >
              <button
                className="flex justify-between items-center w-full py-5 px-2 text-left"
                onClick={() => toggleItem(index)}
              >
                <span className="text-xl md:text-2xl font-medium text-gray-800">{item.question}</span>
                <span className="text-primary">
                  {openItem === index ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path 
                        fillRule="evenodd" 
                        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" 
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path 
                        fillRule="evenodd" 
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" 
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openItem === index && (
                <div className="pb-5 px-2">
                  <p className="text-lg text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
