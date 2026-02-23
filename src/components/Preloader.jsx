import { motion } from "framer-motion";

export default function Preloader() {
  // Esta curva matemática hace que el movimiento empiece rápido y frene suavemente
  const mechanicalEase = [0.76, 0, 0.24, 1]; 

  return (
    <motion.div 
      className="preloader-container"
      initial={{ y: 0 }}
      // Al terminar, toda la pantalla blanca se desliza hacia arriba
      exit={{ y: "-100vh", transition: { duration: 0.8, ease: mechanicalEase } }} 
    >
      <div className="mechanical-wrapper">
        
        {/* MÁSCARA SUPERIOR: El nombre sube desde abajo */}
        <div className="mask">
          <motion.h1 
            className="mech-title"
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            transition={{ duration: 1, ease: mechanicalEase, delay: 0.2 }}
          >
            Regina Briseño
          </motion.h1>
        </div>
        
        {/* LÍNEA DIVISORIA: Crece desde el centro */}
        <motion.div 
          className="mech-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
        />

        {/* MÁSCARA INFERIOR: El subtítulo baja desde arriba */}
        <div className="mask">
          <motion.p 
            className="mech-subtitle"
            initial={{ y: "-100%" }} 
            animate={{ y: 0 }} 
            transition={{ duration: 1, ease: mechanicalEase, delay: 1.1 }}
          >
            Diseñadora Industrial
          </motion.p>
        </div>

      </div>
    </motion.div>
  );
}