import React from "react";
import "./card.css"; 
import masVendido from "./icons/masVendido.png"; 
import user from "./icons/user.png"; 
import bell from "./icons/bell.png"; 
import document from "./icons/document.png"; 
import info from "./icons/info.png"; 

const Plan1 = ({ selected }) => {
  return (
    <div className={`card ${selected ? 'selected' : ''}`}>
      <div className="mas_vendido">
        <img src={masVendido} alt="Más Vendido" />
        MAS VENDIDO
      </div>
      <div className="card-price">
        <h3 className="card-title">Anual</h3>
        <h2 className="card-title">
          <s>$12000</s> $10000/Año
        </h2>
      </div>
      <div className="card-info">
        <hr />
        <div className="inline-container">
          <img src={document} alt="user icon" className="icon" />
          <h2>Estudio de mercado inmobiliario - CABA</h2>
          <img src={info} alt="información" className="info-icon" />
        </div>
        <hr />
        <div className="inline-container">
          <img src={user} alt="user icon" className="icon" />
          <h2>Presentación personalizada</h2>
          <img src={info} alt="información" className="info-icon" />
        </div>
        <hr />
        <div className="inline-container">
          <img src={bell} alt="user icon" className="icon" />
          <h2>Actualización mensual</h2>
          <img src={info} alt="información" className="info-icon" />
        </div>
      </div>
    </div>
  );
};

export default Plan1;
