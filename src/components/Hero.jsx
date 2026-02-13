import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const [phase, setPhase] = useState(0) // 0: name only, 1: split reveal, 2: full content
  const [currentTagline, setCurrentTagline] = useState(0)
  
  const taglines = ["Dreamer", "Creator", "Scholar", "Visionary"]

  // Cinematic reveal sequence
  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 1500) // Start split after 1.5s
    const timer2 = setTimeout(() => setPhase(2), 2500) // Show content after 2.5s
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  // Rotate taglines
  useEffect(() => {
    if (phase < 2) return
    const interval = setInterval(() => {
      setCurrentTagline(prev => (prev + 1) % taglines.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [phase])

  // Smooth scroll
  const smoothScroll = (e, targetId) => {
    e.preventDefault()
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      {/* Phase 0 & 1: Cinematic Name Reveal */}
      <AnimatePresence>
        {phase === 0 && (
          <motion.div 
            className="hero-intro-screen"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="intro-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Aiten
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 1+: Split Layout */}
      <motion.div 
        className="hero-split"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side - Content */}
        <div className="hero-left">
          <div className="left-content">
            {/* Name */}
            <motion.h1 
              className="hero-name"
              initial={{ x: -100, opacity: 0 }}
              animate={phase >= 1 ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Aiten
            </motion.h1>

            {/* Animated Tagline */}
            <motion.div 
              className="hero-tagline"
              initial={{ opacity: 0 }}
              animate={phase >= 2 ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTagline}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {taglines[currentTagline]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Tech · Business · Arts
            </motion.p>

            {/* CTA */}
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a 
                href="#journey" 
                className="cta-button"
                onClick={(e) => smoothScroll(e, '#journey')}
              >
                <span>Explore</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 5v14m0 0l-6-6m6 6l6-6"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Bottom Info */}
          <motion.div 
            className="hero-bottom-left"
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="scroll-hint">
              <span>Scroll</span>
              <motion.div 
                className="scroll-line"
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <motion.div 
          className="hero-right"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={phase >= 1 ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="image-container">
            <motion.img 
              src="/images/sunset2.jpg" 
              alt="Aiten"
              initial={{ scale: 1.3 }}
              animate={phase >= 1 ? { scale: 1 } : {}}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="image-overlay"></div>
          </div>

          {/* Floating Badge - Bottom */}
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <span className="badge-icon">✦</span>
            <span>YYGS 2025</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
