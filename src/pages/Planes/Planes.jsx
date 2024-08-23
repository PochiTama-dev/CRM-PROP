import React, { useState } from 'react';
import './planes.css';  
import Plan1 from './Card/Plan1';
import Plan2 from './Card/Plan2';
import SelectedPlan from './SelectedPlan';  

const Planes = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="planes-container">
      <div className="left-section">
        <div 
          className={`left-box ${selectedPlan === 'plan1' ? 'selected' : ''}`}
          onClick={() => handleSelectPlan('plan1')}
        >
          <Plan1 />
        </div>
        <div 
          className={`left-box ${selectedPlan === 'plan2' ? 'selected' : ''}`}
          onClick={() => handleSelectPlan('plan2')}
        >
          <Plan2 />
        </div>
      </div>
      <div className="right-section">
        <div className="right-box">
          <h2>Planes</h2>
          <span>Compara las características y beneficios de cada opción para tomar la mejor decisión.</span>
          <h3>Elegiste</h3>
          {selectedPlan && <SelectedPlan plan={selectedPlan} />} 
          <button>Iniciar suscripción</button>
        </div>
      </div>
    </div>
  );
}

export default Planes;
