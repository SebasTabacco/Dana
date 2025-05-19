// src/components/pages/Contacto.js
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Contacto = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      alert(result.message || "Consulta enviada correctamente.");
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
      alert("Hubo un error al enviar la consulta.");
    }
  };

  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
};

export default Contacto;



