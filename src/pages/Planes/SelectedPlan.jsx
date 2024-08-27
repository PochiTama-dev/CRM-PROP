// SelectedPlan.js
import React from 'react';
import './selectedPlan.css'; 

const SelectedPlan = ({ plan }) => {
  return (
    <div className="selected-plan">
      
      {plan === 'plan1' && (
        <div className='selected'>
          <h3>Plan Anual</h3>
          <p>$10000/Año</p>
        </div>
      )}
      {plan === 'plan2' && (
        <div className='selected'>  
          <h3>Plan mensual</h3>
          <p>$1000/Año</p>
        </div>
      )}
    </div>
  );
};

export default SelectedPlan;