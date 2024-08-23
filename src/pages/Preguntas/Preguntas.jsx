import React, { useState } from 'react';
import './preguntas.css'; // Asegúrate de tener el archivo CSS con los estilos
import arrow from './arrow.png'; // Asegúrate de que la ruta sea correcta
import { preguntas } from './constants'; // Importa las preguntas desde el archivo de constantes

const Preguntas = () => { 
  const [openIndex, setOpenIndex] = useState(null);
  
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="preguntas-container">
      <h2>Preguntas Frecuentes</h2>
      {preguntas.map((item, index) => (
        <div key={index} className={`pregunta-item ${openIndex === index ? 'open' : ''}`}>
          <div className="pregunta-header" onClick={() => handleClick(index)}>
            <div className="arrow-ctn">
              <img src={arrow} alt="Arrow" />
            </div>
            <span>{item.pregunta}</span>
          </div>
          {openIndex === index && (
            <div className="pregunta-body">
              <p>{item.respuesta}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Preguntas;
