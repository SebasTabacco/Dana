import { useState } from "react";
import { Link } from "react-router-dom";
import "./../../styles/components/layout/Nav.css";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="nav">
      <button onClick={() => setMenuVisible(!menuVisible)} className="menu-btn">
        ☰ Menú
      </button>
      {menuVisible && (
        <ul className="menu">
          
          <li><Link to="/contacto">Contacto</Link></li> 
          <li><Link to="/videos">videos</Link></li>
          <li><Link to="/cursos">Cursos</Link></li>
          <li><Link to="/testimonios">Testimonios</Link></li>
          
        </ul>
      )}
    </nav>
  );
};

export default Nav;

