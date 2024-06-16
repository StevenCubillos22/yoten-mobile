import React, { useState } from 'react';
import './Accordion.css';

// Componente AccordionItem para cada elemento del acordeón
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del acordeón
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        {question}
      </div>
      {isOpen && <div className="accordion-body">{answer}</div>}
    </div>
  );
};

// Componente Accordion que recibe los datos como props
const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

// Datos de ejemplo para el acordeón
const faqData = [
  { question: '¿Hay tiendas abiertas por la noche donde pueda comprar alimentos aptos para alérgicos?', answer: 'Sí, en Japón hay muchas tiendas de conveniencia (konbini) abiertas 24/7 que ofrecen productos sin alérgenos comunes como gluten, lácteos y frutos secos.' },
  { question: '¿Qué actividades nocturnas hay en Kioto?', answer: 'Aparte de nuestras actividades, Pasea por Gion, visita templos iluminados como Kiyomizu-dera, cena en un ryokan, navega por el río Kamo o disfruta de un espectáculo de maiko.' },
  { question: '¿Cuáles son los mejores lugares para observar estrellas en Japón?', answer: 'Nuestras actividades se realizarán en el Monte Fuji, la isla de Okinawa y los Alpes Japoneses. Estos lugares tienen cielos despejados y poca contaminación lumínica.' },
  { question: '¿Puedo recibir instrucción sobre cómo usar el equipo fotográfico durante el tour?', answer: 'Sí, nuestros guías proporcionan instrucciones y consejos sobre cómo usar el equipo para capturar las mejores fotos nocturnas.' },
  { question: '¿Hay algún código de vestimenta específico que deba seguir durante los tours nocturnos en templos o santuarios?', answer: 'Sí, se recomienda llevar ropa modesta y respetuosa, evitando prendas muy reveladoras.' },
  { question: '¿Necesito quitarme los zapatos al entrar en ciertos recintos durante el tour?', answer: 'Sí, en algunos templos y santuarios es necesario quitarse los zapatos antes de entrar.' },
  
  
  
  // Añadir más preguntas y respuestas aquí
];

// Exportar el componente con los datos de ejemplo
const AccordionWithData = () => <Accordion data={faqData} />;

export default AccordionWithData;

