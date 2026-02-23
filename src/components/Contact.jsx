import { FaLinkedin, FaBehance, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-content">
        <h2>Construyamos<br></br> 
          algo increíble juntos</h2>
        <p>Estoy disponible para nuevos proyectos y colaboraciones.</p>

        {/* --- CORREO --- */}
        <a href="mailto:reginia1961@gmail.com" className="email-link">
         reginia1961@gmail.com
        </a>

        {/* --- REDES SOCIALES --- */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/claudia-regina-brise%C3%B1o-dom%C3%ADnguez-85546b17b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMeMXwdDvQNKoMe8UD4kFAg%3D%3D" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/4428155547" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/rreginiaa1961?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* --- BOTÓN DE CV --- */}
        <a href="/CV_Regina_Briseno.pdf" download className="cv-button">
          Descargar CV
        </a>

        {/* --- NUEVA LEYENDA DE COLABORADORES --- */}
        <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '60px', textAlign: 'center', lineHeight: '1.5' }}>
          * Algunos de los proyectos presentados en este portafolio fueron desarrollados en colaboración académica con compañeros de la Universidad Cuauhtémoc Querétaro.
        </p>

      </div>
    </footer>
  )
}