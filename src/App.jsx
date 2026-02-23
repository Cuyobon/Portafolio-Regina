import { useState, useEffect } from "react"; // 1. Importa useState y useEffect
import { AnimatePresence } from "framer-motion"; // 2. Importa AnimatePresence

// Importa tus componentes existentes
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// 3. Importa el nuevo Preloader
import Preloader from "./components/Preloader"; 

function App() {
  // 4. Creamos el estado de carga: empieza en 'true' (cargando)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 5. Un temporizador falso: espera 4 segundos y apaga la carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 3000 milisegundos = 3 segundos de animación

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, []);

  return (
    // 6. Usamos AnimatePresence con mode="wait" para que la salida del preloader
    // termine antes de que entre el contenido.
    <AnimatePresence mode="wait">
      {isLoading ? (
        // SI ESTÁ CARGANDO: Muestra el Preloader
        <Preloader key="preloader" />
      ) : (
        // SI YA NO ESTÁ CARGANDO: Muestra toda tu página
        <div key="main-content">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;