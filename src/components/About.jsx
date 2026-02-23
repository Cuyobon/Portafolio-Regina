import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="about-section">
      
      <motion.div 
        className="about-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Sobre mí</h2>
        <div className="about-line"></div>
        <p>
          Soy diseñadora industrial apasionada por crear proyectos que combinan funcionalidad, estética y significado. 
          Me interesa diseñar productos, interiores y experiencias donde la identidad, el concepto y la emoción se vivan en cada detalle. <br></br>
          Disfruto trabajar en soluciones estratégicas y creativas, donde cada decisión de diseño tenga propósito y genere impacto,  
          logrando que los espacios y objetos no solo se vean, sino que se sientan y se recuerden. 
        </p>
      </motion.div>

      <motion.div 
        className="about-right"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="about-card">
          <h3>Habilidades</h3>
          <ul>
            <li>Diseño industrial e interiores con enfoque funcional y estético.</li>
            <li>Creación de productos, espacios y experiencias con identidad.</li>
            <li>	Prototipado y visualización de proyectos.</li>
            <li>Innovación, creatividad y soluciones estratégicas.</li>
            <li>Planificación de eventos y experiencias memorables.</li>
          </ul>
        </div>
      </motion.div>

    </section>
  )
}