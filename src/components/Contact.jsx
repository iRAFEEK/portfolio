import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="contact-title">
            Let's create something
            <span className="title-accent"> together</span>
          </h2>

          <motion.a 
            href="mailto:aitenmagdy8@gmail.com" 
            className="contact-email"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            aitenmagdy8@gmail.com
          </motion.a>
        </motion.div>

        <motion.footer 
          className="footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="footer-simple">
            <span className="footer-name">Aiten</span>
            <div className="footer-social">
              <a 
                href="https://www.linkedin.com/in/aiten-magdy-50a508342/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/aiten_hanna?igsh=NTc4MTIwNjQ2YQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
            </div>
            <span className="footer-copyright">© 2025</span>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}

export default Contact
