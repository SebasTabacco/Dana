import "./../../styles/components/layout/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/tuNumero" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="skype:tuUsuario?chat">
          <i className="fab fa-skype"></i>
        </a>
      </div>
      <p>&copy; Núcleos Web. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;





