import { useEffect, useState } from 'react';
import Footer from "./../../components/layout/Footer";
import Header from "./../../components/layout/Header";
import "./../../styles/components/pages/Testimonios.css";

const initialTestimonios = [
  {
    name: "Gaby",
    testimonial:
      "Me siento más liviana, más conectada conmigo misma y con los que amo. Este proceso me está enseñando que sanar no es borrar el pasado, sino integrarlo con amor y conciencia. Y eso, para mí, no tiene precio."
  },
  {
    name: "María Gómez",
    testimonial: "Recomendado para transformar tu vida. ¡Muy profesional!"
  },
  {
    name: "Luis Martínez",
    testimonial: "Las consultas me permitieron comprender mejor mis emociones."
  }
];

const Testimonios = () => {
  const [testimonios, setTestimonios] = useState(initialTestimonios);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newTestimonio, setNewTestimonio] = useState({ name: '', testimonial: '' });

  // Auto-play: cambia testimonio cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonios]);

  const goToPrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? testimonios.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonios.length);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonio({ ...newTestimonio, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Evitamos agregar testimonios vacíos
    if (newTestimonio.name.trim() && newTestimonio.testimonial.trim()) {
      setTestimonios([...testimonios, newTestimonio]);
      setNewTestimonio({ name: '', testimonial: '' });
      // Si lo deseas, puedes actualizar currentIndex para mostrar el testimonio agregado
    }
  };

  return (
    <div className="app-container">
      <Header />

      {/* Contenedor principal para el contenido */}
      <div className="main-content">
        <div className="testimonios">
          <h2>Testimonios</h2>
          <div className="carousel">
            <button className="prev" onClick={goToPrev}>&#10094;</button>
            <div className="testimonial">
              <p className="testimonial-text">{testimonios[currentIndex].testimonial}</p>
              <p className="testimonial-name">- {testimonios[currentIndex].name}</p>
            </div>
            <button className="next" onClick={goToNext}>&#10095;</button>
          </div>
          <form className="testimonial-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Tu nombre" 
              value={newTestimonio.name}
              onChange={handleChange}
              required
            />
            <textarea 
              name="testimonial"
              placeholder="Tu testimonio" 
              value={newTestimonio.testimonial}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Agregar Testimonio</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Testimonios;
