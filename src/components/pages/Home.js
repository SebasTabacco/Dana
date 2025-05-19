import Footer from "./../../components/layout/Footer";
import Header from "./../../components/layout/Header";
import Nav from "./../../components/layout/Nav";
import "./../../styles/components/pages/Home.css";

const data = [
  {
    img: "/image/maestros/bert.jpg",
    title: "Bert Hellinger",
    profession: "Padre",
    desc: "Creador de las constelaciones familiares, un método de terapia y consultoría basado en la conexión con el cosmos."
  },
  {
    img: "/image/maestros/ryke.jpg",
    title: "Ryke Geerd Hamer",
    profession: "Médico Alemán",
    desc: "La nueva medicina germánica se sustenta en las llamadas “cinco leyes biológicas” que su creador propuso como hipótesis."
  },
  {
    img: "/image/maestros/carl.webp",
    title: "Carl Gustav Jung",
    profession: "Médico y psiquiatra",
    desc: "Médico psiquiatra, psicólogo y ensayista suizo, fundador de la psicología analítica."
  },
  {
    img: "/image/maestros/anne.jpg",
    title: "Anne Schützenberger",
    profession: "Psicóloga francesa",
    desc: "Teórica e investigadora de campo a la vez, perteneció a la resistencia. Ha sido profesora en varias universidades, psicoterapeuta con formación en psicoanálisis, abierta a todas las innovaciones."
  },
  {
    img: "/image/maestros/masaru.jpg",
    title: "Masaru Emoto",
    profession: "Autor japonés",
    desc: "Autor japonés conocido por sus afirmaciones de que las palabras, oraciones, sonidos y pensamientos dirigidos hacia un volumen de agua influirían sobre la forma de los cristales de hielo obtenidos del mismo."
  },
  {
    img: "/image/maestros/pablo.jpg",
    title: "Pablo Almazan",
    profession: "Creador de Humano Puente",
    desc: "El iniciador de Humano Puente, un espacio para descubrir de dónde venimos y hacia dónde vamos."
  },
  {
    img: "/image/maestros/hipocrates.jpg",
    title: "Hipócrates",
    profession: "Médico griego",
    desc: "Médico de la antigua Grecia, conocido como el padre de la medicina, sus aportes a la medicina son fundamentales, ya que describió muchas enfermedades y trastornos, estableciendo principios que aún se utilizan hoy en día."
  },
];

const Home = () => {
  return (
    
    <div className="app-container">
      <Header />
      <Nav />
     {/* Nuevo contenedor "about-me" para tu foto y tu historia */}
        <div className="sobre-mi">
          <div className="yo-img">
            <img 
              src="/image/varias/Dana.webp" 
              alt="dana" 
              className="profile-img" 
            />
          </div>
          <div className="about-text">
            <h2>Sobre Mi Historia</h2>
            <p>
              ¿Quién soy?
            Te doy la bienvenida y gracias por llegar.
            Me resulta difícil decirte “quién soy” sin contarte mi historia, esa que guioné para estar hoy aquí sentada “escribiéndome”,
            agradecida por mis síntomas, esos que me trajeron a este presente, honrando mi historia y mis ancestros.
          </p>
          <p>Ese fue el inicio de un camino sin retorno: el de la Bioexistencia Consciente. Un camino en el que descubrí que cada síntoma tiene un sentido,
            que no hay error en lo que el cuerpo manifiesta, y que sanar no es corregir, sino recordar quién soy más allá del dolor.
            Desde entonces, he transitado por formaciones, espacios terapéuticos, procesos internos profundos y, sobre todo,
            experiencias humanas reales que me fueron llevando a acompañar a otros en sus propios recorridos. No desde la certeza absoluta,
            sino desde la escucha, la presencia y el respeto por el tiempo y el proceso de cada uno.
            Hoy, acompaño a quienes sienten ese mismo pulso: el deseo de mirar hacia adentro, de soltar lo heredado sin conciencia,
            de transformar lo que pesa y de vivir una vida más liviana, auténtica y propia.
            No tengo respuestas para todos, pero sí tengo preguntas que pueden abrir nuevos caminos.
            Y la certeza de que todo síntoma es una puerta hacia algo mucho más grande: vos.

            Gracias por estar acá.</p>
          </div>
        </div>
      {/* Contenedor principal de la página */}
      <div className="main-content">
        {/* Sección con las tarjetas */}
        <section className="container">
          {data.map((item, index) => (
            <div key={index} className="card">
              <img src={item.img} alt={item.title} className="card-img" />
              <h3>{item.title}</h3>
              <h4 className="profession">{item.profession}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Sección "ayuda" */}
        <div className="ayuda">
          <div className="ayuda-text">
            <h2>¿Qué Hacemos?</h2>
            <p>En BEC trabajamos con una mirada única: no tratamos enfermedades, tratamos significados.
              Para nosotros, la "enfermedad" no es más que información.
              Información valiosa que tu cuerpo y tu mente están comunicando para ser escuchados, no silenciados.
            </p>
            <h3>¿Cómo te acompaño?</h3>
            <p>Nuestro enfoque no es el del experto que da respuestas desde afuera. Es el de quien camina contigo, escucha contigo y descubre contigo.
              No se trata de interpretar ni de diagnosticar, sino de abrir un espacio para que tú mismo comprendas qué necesita ser transformado.
              En cada consulta, te acompaño con preguntas, con presencia y con herramientas que te ayuden a mirar dentro sin juicio.
              Es un proceso respetuoso, profundo y revelador. No estás roto, ni perdido; estás en camino.
            </p>
            <h3>¿Cómo es una consulta?</h3>
            <p>Quiero contarte algo antes de que llegues.
              Cuando cruces la puerta, no te recibiré con una ficha clínica ni con un cuestionario frío.
              Te recibiré como quien recibe a alguien que está listo para dejar de cargar con lo que ya no le pertenece.
              Comenzaremos con tu historia, con lo que te duele hoy, con lo que no entiendes y con lo que te trajo hasta aquí.
              A partir de ahí, haremos juntos un recorrido que no es lineal ni predecible, pero sí profundamente personal.
              Porque no hay mapas universales, solo hay mapas personales, y el tuyo lo iremos trazando paso a paso.
              No estás solo y no hay nada en ti que necesite ser corregido, sólo comprendido.
            </p>
          </div>
          <div className="ayuda-image">
            <img
              src="/image/varias/mano.webp"
              alt="ayuda"
              className="special-img"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
