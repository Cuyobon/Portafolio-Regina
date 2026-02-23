import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <h1>Regina Briseño</h1>
      <div>
        <a href="#about">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contact">Contacto</a>

            {/* --- NUEVO BOTÓN DE CV --- */}
        <a href="/CV_Regina_Briseno.pdf" download className="nav-cv-btn">
          Descargar CV
        </a>
      </div>
    </motion.nav>
  )
}