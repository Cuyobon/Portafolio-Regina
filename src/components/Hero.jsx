import { motion } from "framer-motion"
// 1. IMPORTA TU IMAGEN AQUÍ (asegúrate de poner el nombre exacto de tu foto)
import miFotoHero from "../assets/hero3.jpeg" 

export default function Hero() {
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
          <button>Explorar Proyectos</button>
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