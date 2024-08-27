
import './Confia.css'; 
import LogoEmpresa from '../../../assets/confia/logo1.png';

const Confia = () => {
  return (
    <div className="confia-container">
      <h2 className="confia-title">Confía en nosotros</h2>
      <div className="logo-container">
        <img src={LogoEmpresa} alt="Logo Empresa" />
      </div>
    </div>
  );
}

export default Confia;
