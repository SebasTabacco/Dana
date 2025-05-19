import { useState } from "react";
import Footer from "./../../components/layout/Footer";
import Header from "./../../components/layout/Header";
import "./../../styles/components/pages/Contacto.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    localidad: "",
    consulta: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Tu consulta ha sido enviada.");
  };

  return (
    <div>
      <Header /> {/* Se muestra el Header arriba */}
      
      <div className="contact-container">
        <h2>Formulario de Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nombre:</label>
            <input type="text" name="nombre" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Apellido:</label>
            <input type="text" name="apellido" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Teléfono:</label>
            <input type="tel" name="telefono" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Localidad:</label>
            <input type="text" name="localidad" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Consulta:</label>
            <textarea name="consulta" rows="4" onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Enviar Consulta</button>
        </form>
      </div>

      <Footer /> {/* Se muestra el Footer abajo */}
    </div>
  );
};

export default Contact;

