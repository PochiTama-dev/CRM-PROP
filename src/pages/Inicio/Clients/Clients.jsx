import './Clients.css';
import logo1 from '../../../assets/clientes/logo1.webp';
import logo2 from '../../../assets/clientes/logo2.webp';
import logo3 from '../../../assets/clientes/logo3.webp';
import logo4 from '../../../assets/clientes/logo4.webp';
import logo5_1 from '../../../assets/clientes/logo5_1.webp';

const Clients = () => {
  return (
    <div className="clients-container">
      <h2 className="clients-title">Conoce a nuestros clientes</h2>
      <div className="clients-logos">
        <a href="#">
          <img src={logo1} alt="Cliente 1" className="client-logo" />
        </a>
        <a href="#">
          <img src={logo2} alt="Cliente 2" className="client-logo" />
        </a>
        <a href="#">
          <img src={logo3} alt="Cliente 3" className="client-logo" />
        </a>
        <a href="#">
          <img src={logo4} alt="Cliente 4" className="client-logo" />
        </a>
        <a href="#">
          <img src={logo5_1} alt="Cliente 5" className="client-logo" />
        </a>
      </div>
    </div>
  );
};

export default Clients;
