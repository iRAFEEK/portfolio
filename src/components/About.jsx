import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const highlights = [
    { icon: '◇', title: 'Yale Young Global Scholars', desc: 'Full Scholarship Recipient 2025', section: 'journey' },
    { icon: '✦', title: 'Silicon Valley Explorer', desc: 'NVIDIA · Google · Meta · PayPal', section: 'silicon-valley' },
    { icon: '○', title: 'Passionate Artist', desc: 'Founder & Designer', section: 'passions' }
  ]

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-container">
                <img src="/images/sunset1.jpg" alt="Aiten at sunset" className="about-image" />
              </div>
              <div className="image-accent-line"></div>
              <div className="image-accent-dot"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-content-col"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-subtitle">About Me</span>
            <h2 className="about-title">
              Where curiosity meets
              <span className="title-accent"> ambition</span>
            </h2>

            <div className="about-text-wrapper">
              <p className="about-text">
                I'm Aiten, a high school sophomore with an insatiable curiosity for technology
                and a deep love for creative expression. My journey took me to Silicon Valley,
                where I visited NVIDIA, Google, Meta, Instagram, and PayPal.
              </p>
              <p className="about-text">
                Through conversations and dinners with engineers from OpenAI, Duolingo, LinkedIn,
                and more, I discovered how AI and technology can make the world a better place—
                for the people around me and for myself.
              </p>
              <p className="about-text">
                Being selected as a Yale Young Global Scholar on a full scholarship was a
                defining moment—it showed me that dreams, when pursued with dedication,
                become reality.
              </p>
            </div>

            <div className="about-signature">
              <span className="signature-text">Aiten</span>
              <span className="signature-line"></span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="highlights-section"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="highlights-grid">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="highlight-card clickable"
                onClick={() => scrollToSection(item.section)}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="highlight-icon">{item.icon}</span>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.desc}</p>
                <span className="highlight-arrow">→</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
