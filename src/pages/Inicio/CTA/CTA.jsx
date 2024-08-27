
import './CTA.css';
import bannerImage from '../../../assets/CTA/FondoCTA.webp'; // Importa la imagen

const CTA = () => {
  return (
    <div className="cta-container" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="cta-overlay">
        <h1 className="cta-title">
          Únete ahora mismo y accede al estudio de mercado más completo que impulsará tu negocio inmobiliario
        </h1>
        <h2 className="cta-subtitle">¡Aprovecha esta oportunidad!</h2>
        <button className="cta-button">Suscribete ya</button>
      </div>
    </div>
  );
};

export default CTA;
