import { Route, Routes } from "react-router-dom";
import Contacto from "./components/pages/Contacto";
import Home from "./components/pages/Home";
import Testimonios from "./components/pages/Testimonios";
import Videos from "./components/pages/Videos";
import "./styles/components/pages/App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} /> {/* Ruta para Contacto */}
      <Route path="/testimonios" element={<Testimonios />} />
      <Route path="/videos" element={<Videos />} />
    </Routes>
  );
};

export default App;

