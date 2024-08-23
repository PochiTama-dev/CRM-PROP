import React from 'react';
import { CheckCircle } from 'react-bootstrap-icons'; // Asegúrate de tener react-bootstrap-icons instalado
import './CardReasons.css'; // Archivo CSS para estilos

const CardReasons = () => {
  const reasons = [
    {
      title: "Estudio de mercado CABA",
      subtitle: "Identifica las zonas de oportunidad por stock y precio",
      items: [
        "Detallado por tipo de mercado",
        "Precios m2 por zona",
        "Entrecruzamientos de datos"
      ]
    },
    {
      title: "Presentación personalizada",
      subtitle: "Ideal para adjuntar a tu tasación profesional",
      items: [
        "Incorpora tu marca inmobiliaria",
        "Con datos de alto interés",
        "Modelo imprimible en PDF"
      ]
    },
    {
      title: "Actualización Mensual Completa y Detallada",
      subtitle: "Descuento por suscripción anual y soporte continuo",
      items: [
        "Recíbelo el primer día hábil",
        "Fuente de datos 100% trazables",
        "Soporte continuo"
      ]
    },
  ];

  return (
    <div className="card-reasons-container">
      {reasons.map((reason, index) => (
        <div key={index} className="card-reason">
          
          <h3 className="card-reason-title">{reason.title}</h3>
          <p className="card-reason-subtitle">{reason.subtitle}</p>
          <br />
          <br />
          <ul className="card-reason-list">
            {reason.items.map((item, idx) => (
              <React.Fragment key={idx}>
                <li className="card-reason-item">
                  <CheckCircle color='#0C57CE' className="card-reason-icon" />
                  {item}
                </li>
                {idx < reason.items.length - 1 && <br />}
              </React.Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CardReasons;
