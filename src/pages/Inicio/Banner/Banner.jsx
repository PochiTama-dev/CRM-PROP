import './Banner.css';
import { ShieldLock } from 'react-bootstrap-icons';
import videoBanner from '../../../assets/banner/videoBanner.mp4';

const Banner = () => {
  return (
    <div className="banner">
      <video className="banner-video" src={videoBanner} autoPlay loop muted playsInline></video>
      <div className="banner-overlay"></div> 
      <div className="banner-content">
        <h1 className="banner-title">Potencia tu negocio inmobiliario</h1>
        <p className="banner-description">Accede al estudio de mercado más completo</p>
        <button className="banner-button">Suscríbete</button>
        <br />
        <div className="banner-secure">
          <span><ShieldLock size={30} color='#007bff' className="banner-icon" /> Compra segura con garantía de satisfacción</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
