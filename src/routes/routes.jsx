import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Inicio/Home';
import Historial from '../pages/Historial/Historial';
import Planes from '../pages/Planes/Planes';
import Condiciones from '../pages/Condiciones/Condiciones';
import Preguntas from '../pages/Preguntas/Preguntas';
import Login from '../pages/Login/Login';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Contacto from '../pages/Contacto/Contacto';
function AppRoutes() {
  return (
    <Router>
        <Header /> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/planes" element={<Planes/>} />
        <Route path="/condiciones-generales" element={<Preguntas />} />
        <Route path="/preguntas-frecuentes" element={<Preguntas />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default AppRoutes;
