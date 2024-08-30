import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPhoneCall, FiUser } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoCRM from '../../assets/logo/logocrm.webp';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={LogoCRM} alt="Logo" />
        </Link>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/historial' ? 'active' : ''}>
            <Link to="/historial">Historial</Link>
          </li>
          <li className={location.pathname === '/planes' ? 'active' : ''}>
            <Link to="/planes">Planes</Link>
          </li>
          <li className={location.pathname === '/condiciones-generales' ? 'active' : ''}>
            <Link to="/condiciones-generales">Condiciones Generales</Link>
          </li>
          <li className={location.pathname === '/preguntas-frecuentes' ? 'active' : ''}>
            <Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link>
          </li>
        </ul>
        <div className="nav-actions">
          <a href="tel:+1234567890" className="call-button">
            <FiPhoneCall /> +1234567890
          </a>
          <Link to="/iniciar-sesion" className="login-icon">
            <FiUser />
          </Link>
        </div>
      </nav>
      <div className="mobile-menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {menuOpen && (
        <div className="mobile-nav-actions">
          <a href="tel:+1234567890" className="call-button">
            <FiPhoneCall /> +1234567890
          </a>
          <Link to="/iniciar-sesion" className="login-icon">
            <FiUser />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
