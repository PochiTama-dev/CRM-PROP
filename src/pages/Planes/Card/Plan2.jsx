import React from "react";
import "./card.css"; 
import user from "./icons/user.png"; 
import bell from "./icons/bell.png"; 
import document from "./icons/document.png"; 
import info from "./icons/info.png"; 

const Plan2 = ({ selected }) => {
  return (
    <div className={`card2 ${selected ? 'selected' : ''}`}>
      <div className="card-price">
        <h3 className="card-title">Mensual</h3>
        <h2 className="card-title">
          <s>$1200</s> $1000/Mes
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

export default Plan2;
