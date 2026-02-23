import { useState, useEffect } from "react" // <-- 1. Agregamos useEffect aquí
import { motion, AnimatePresence } from "framer-motion"

import koaImg from "../assets/koa.jpeg"
import koaImg2 from "../assets/koa2.jpeg"
import koaImg3 from "../assets/koa3.jpeg"
import estructuraImg from "../assets/axcan.jpeg"
import estructuraImg1 from "../assets/axcan1.jpeg"
import estructuraImg2 from "../assets/axcan2.jpeg"
import wankaImg from "../assets/wanka.jpeg"
import wankaImg1 from "../assets/wanka1.jpeg"
import wankaImg2 from "../assets/wanka2.jpeg"
import Img from "../assets/astro.jpeg"
import Img1 from "../assets/robot.jpeg"
import Img2 from "../assets/render.jpeg"
import Img3 from "../assets/ceramica.jpeg"
import Img4 from "../assets/patin.jpeg"

const proyectosInfo = [
  // ... (MANTÉN TU LISTA DE PROYECTOS EXACTAMENTE IGUAL) ...
  {
    id: 1,
    title: "KOA",
    shortDesc: "Funcionalidad, estética y emoción en cada detalle.",
    longDesc: "Koa es un proyecto de diseño que combina funcionalidad, estética y sostenibilidad, creando productos y espacios pensados para vivir experiencias únicas. Cada detalle busca generar emoción, identidad y conexión entre el usuario y su entorno, transformando lo cotidiano en algo memorable.",
    mainImg: koaImg3,
    gallery: [koaImg, koaImg2, koaImg3] 
  },
  {
    id: 2,
    title: "Axcan",
    shortDesc: "Exhibe, inspira, conecta.",
    longDesc: "Estructura modular de exhibición diseñada para combinar funcionalidad y estética en espacios comerciales, galerías o eventos. Su sistema de paneles coloridos y estantes de distintos niveles permite mostrar productos, obras de arte u otros objetos de manera atractiva, mientras que su diseño ergonómico facilita la interacción y contemplación, optimizando el espacio disponible.",
    mainImg: estructuraImg,
    gallery: [estructuraImg, estructuraImg1, estructuraImg2]
  },
  {
    id: 3,
    title: "Wank’a ",
    shortDesc: "Conecta, juega y crea: concentración y diversión en cada cubo.",
    longDesc: "Juego lúdico diseñado para adultos mayores que promueve la concentración y la convivencia. A través del uso de cubos de colores y un tablero modular, los jugadores ejercitan la memoria, la coordinación y la comunicación mientras crean figuras y patrones, fomentando la interacción social de manera divertida y estimulante.",
    mainImg: wankaImg,
    gallery: [wankaImg, wankaImg1, wankaImg2]
  },
  {
    id: 4,
    title: "Más proyectos",
    shortDesc: "Trayectoria académica",
    longDesc: "Proyectos que integran procesos industriales y experimentación material, utilizando resina epóxica, metal, herrería, impresión 3D, acrílico, madera, materiales biodegradables y electrónica aplicada.",
    mainImg: Img,
    gallery: [Img,Img1, Img2, Img3, Img4] 
  },
]

export default function Projects() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null)
  
  // 2. CREAMOS EL SENSOR DE PANTALLA
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    // Esta función revisa si el ancho de la pantalla es de celular (menor a 768px)
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    
    checkMobile() // Revisa una vez al cargar la página
    window.addEventListener("resize", checkMobile) // Se queda escuchando por si cambias el tamaño de la ventana
    
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Proyectos Destacados
      </motion.h2>

      <div className="projects-grid">
        {proyectosInfo.map((proyecto) => (
          <motion.div 
            key={proyecto.id}
            className="card"
            // 3. LA MAGIA CONDICIONAL: ¿Es celular? Hace el efecto nuevo. ¿Es PC? Hace el efecto original.
            initial={isMobile ? { scale: 0.85, opacity: 0.4 } : { opacity: 0, y: 50 }} 
            whileInView={isMobile ? { scale: 1.05, opacity: 1 } : { opacity: 1, y: 0 }} 
            viewport={isMobile ? { margin: "-30% 0px -30% 0px" } : { once: true, amount: 0.2 }} 
            transition={{ duration: 0.4, ease: "easeOut" }}
            // 4. EL HOVER: Solo se activa si NO es celular (!isMobile)
            whileHover={!isMobile ? { y: -10, scale: 1.03 } : {}} 
            onClick={() => setProyectoSeleccionado(proyecto)} 
          >
            <img src={proyecto.mainImg} alt={proyecto.title} className="project-img" />
            <div className="card-info">
              <h3>{proyecto.title}</h3>
              <p>{proyecto.shortDesc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- LA VENTANA EMERGENTE (MODAL) --- */}
      <AnimatePresence>
        {proyectoSeleccionado && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProyectoSeleccionado(null)} 
          >
            <motion.div 
              className="modal-content"
              key="modal-box"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }} 
              onClick={(e) => e.stopPropagation()} 
            >
              <button className="close-btn" onClick={() => setProyectoSeleccionado(null)}>✕</button>
              <h2>{proyectoSeleccionado.title}</h2>
              <p className="modal-desc">{proyectoSeleccionado.longDesc}</p>
              
              <div className="modal-gallery">
                {proyectoSeleccionado.gallery.map((foto, index) => (
                  <img key={index} src={foto} alt={`Detalle ${index}`} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}