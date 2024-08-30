import React, { useState } from 'react';
import './login.css';
import Google from '../../assets/google.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>¡Accede a tu cuenta!</h1>
      </div>
      <div className="login-right">
        <div className='login-ctn'>
          <div className='title-login'>
            <h2>Iniciar sesión</h2>
            <p>Completa el formulario</p>
          </div>
          <form className="login-form">
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
                htmlFor="password" 
                className={password === '' ? 'required-label' : ''}
              >
                Contraseña
              </label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="login-button">Iniciar sesión</button>
            <div className="divider">
              <hr /> <span>o</span> <hr />
            </div>
            <button type="button" className="google-login">
              <img src={Google} alt="Google Logo" />
              Continuar con Google
            </button>
            <p className="register-link">¿No tienes una cuenta? <a href="#register">Registrarse</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
