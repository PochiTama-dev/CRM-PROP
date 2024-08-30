import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './footer.css';  
import LogoCRM from '../../assets/logo/crmprop.png';
import Setting from '../../assets/logo/uil_setting.png';
import Visa from '../../assets/footer/visa.png';
import Master from '../../assets/footer/logos_mastercard.png';
import Mp from '../../assets/footer/logo-mercadopago.png';
import Face from '../../assets/footer/face.png';
import Insta from '../../assets/footer/insta.png';
import Xt from '../../assets/footer/x.png';
import Yt from '../../assets/footer/yt.png';
import LinkIcon from '../../assets/footer/link.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-ctn'>
        <div className="footer-left">
          <div className="logo">
            <img src={Setting} alt="CRMPROP Logo" />
          </div>
          <div className="logo2">
            <img src={LogoCRM} alt="CRMPROP Logo" />
          </div>
          <div className="address">
            <span>French 2300</span>
            <span>C1125 AAF</span>
            <span>CABA | Argentina</span>
          </div>
        </div>
        
        <div className="footer-center">
          <ul className="footer-links">
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/contacto">Soporte</Link></li>
            <li><Link to="/cancellations">Cancelaciones</Link></li>
            <li><Link to="/privacy">Políticas de privacidad y condiciones de uso</Link></li>
          </ul>
        </div>
        
        <div className="footer-center">
          <div className="feedback">
            <p>Danos tu opinión</p>
          </div>
          <div className="feedback">
            <p>Métodos de pago</p>
          </div>
          <div className="payment-methods">
            <img src={Master} alt="Mastercard" />
            <img src={Visa} alt="Visa" />
            <img src={Mp} alt="MercadoPago" />
          </div>
        </div>
        
        <div className="social-icons">
          <Link to="https://www.linkedin.com" className="social-icon">
            <img src={LinkIcon} alt="LinkedIn" />
          </Link>
          <Link to="https://www.facebook.com" className="social-icon">
            <img src={Face} alt="Facebook" />
          </Link>
          <Link to="https://www.instagram.com" className="social-icon">
            <img src={Insta} alt="Instagram" />
          </Link>
          <Link to="https://www.twitter.com" className="social-icon">
            <img src={Xt} alt="X (Twitter)" />
          </Link>
          <Link to="https://www.youtube.com" className="social-icon">
            <img src={Yt} alt="YouTube" />
          </Link>
        </div>
        
      </div>
      <div className="legal-info">
        <p>Todos los derechos reservados CRMPROP 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
