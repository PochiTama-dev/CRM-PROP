import React, { useState } from 'react';
import './contacto.css'; // Cambia el nombre del archivo CSS si es necesario

const Contacto = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [tel, setTel] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log({ name, email, message, tel });
  };

  return (
    <div className="contacto-container">
      <div className="contacto-left">
        <h1>¡Contáctanos!</h1>
      </div>
      <div className="contacto-right">
        <div className='contacto-form-container'>
          <div className='contacto-title'>
            <h2>Soporte</h2>
            <p>Completa el formulario para ponerte en contacto con nosotros</p>
          </div>
          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label 
                htmlFor="name" 
                className={name === '' ? 'required-label' : ''}
              >
                Nombre
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
            <div className="input-group">
              <label 
                htmlFor="email" 
                className={email === '' ? 'required-label' : ''}
              >
                Correo
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="input-group">
              <label 
                htmlFor="tel" 
                className={tel === '' ? 'required-label' : ''}
              >
                Teléfono
              </label>
              <input 
                type="number" 
                id="tel" 
                name="tel" 
                value={tel} 
                onChange={(e) => setTel(e.target.value)}
                required 
              />
            </div>
            <div className="input-group">
              <label 
                htmlFor="message" 
                className={message === '' ? 'required-label' : ''}
              >
                Describi el problema
              </label>
              <textarea 
                id="message" 
                name="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                required 
              />
            </div>
            <p className="contacto-register-link">Al completar este formulario, aceptar que estás de acuerdo con las   <a href="#help">politicas de confidencialidad.</a></p>
            <button type="submit" className="contacto-submit-button">Enviar</button>
    
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
