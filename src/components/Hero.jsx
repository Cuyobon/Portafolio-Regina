import { motion } from "framer-motion"
// 1. IMPORTA TU IMAGEN AQUÍ (asegúrate de poner el nombre exacto de tu foto)
import miFotoHero from "../assets/hero3.jpeg" 

export default function Hero() {
  const scrollToProjects = () => {
    // Busca la sección por su ID y hace un scroll suave hacia ella
    document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">

        {/* COLUMNA IZQUIERDA: TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero-text"
        >
          <h2>DISEÑO <br></br> que se vive.</h2>
          <p>
              No solo diseño objetos o espacios. <br></br>
              Diseño sensaciones, atmósferas y memorias que permanecen.
          </p>
          {/* AQUÍ ESTÁ LA MAGIA DEL BOTÓN */}
          <button onClick={scrollToProjects}>Explorar Proyectos</button>
        </motion.div>

        {/* COLUMNA DERECHA: IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hero-image"
        >
          <img src={miFotoHero} alt="Regina Briseño" />
        </motion.div>

      </div>
    </section>
  )
}