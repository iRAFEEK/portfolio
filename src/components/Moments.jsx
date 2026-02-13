import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './Moments.css'

const Moments = () => {
  const sectionRef = useRef(null)
  const constraintsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [zIndices, setZIndices] = useState({})
  const [topZ, setTopZ] = useState(10)

  // Responsive positions - smaller values for better mobile compatibility
  const moments = [
    { src: '/images/instagram2.jpg', caption: 'Street Art Vibes', position: 'bottom center', x: -140, y: 0, rotate: -8 },
    { src: '/images/sunset1.jpg', caption: 'Golden Hour', position: 'center', x: -50, y: -60, rotate: 5 },
    { src: '/images/city.jpg', caption: 'City Lights', position: 'center', x: 50, y: -40, rotate: -3 },
    { src: '/images/portrait2.jpg', caption: 'New Connections', position: 'top center', x: 140, y: 20, rotate: 6 },
  ]

  const bringToFront = (index) => {
    setTopZ(prev => prev + 1)
    setZIndices(prev => ({ ...prev, [index]: topZ + 1 }))
  }

  return (
    <section className="section moments" ref={sectionRef}>
      <div className="moments-bg">
        <div className="moments-gradient"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="moments-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="moments-eyebrow">Life in frames</span>
          <h2 className="moments-title">
            Every moment<br />
            <span className="title-highlight">tells a story</span>
          </h2>
          <p className="moments-hint">✦ Drag the photos around ✦</p>
        </motion.div>

        <div className="moments-gallery" ref={constraintsRef}>
          {moments.map((moment, i) => (
            <motion.div
              key={i}
              className="moment-card"
              initial={{ opacity: 0, x: moment.x, y: moment.y + 100, rotate: moment.rotate }}
              animate={isInView ? { opacity: 1, x: moment.x, y: moment.y, rotate: moment.rotate } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              onDragStart={() => bringToFront(i)}
              onTapStart={() => bringToFront(i)}
              whileDrag={{ scale: 1.05, rotate: 0, cursor: 'grabbing' }}
              whileHover={{ scale: 1.02 }}
              style={{ zIndex: zIndices[i] || i + 1 }}
            >
              <div className="moment-image">
                <img src={moment.src} alt={moment.caption} style={{ objectPosition: moment.position }} draggable="false" />
              </div>
              <div className="moment-caption-area">
                <span className="moment-caption">{moment.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="moments-cta"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="cta-text">Want to create moments together?</p>
          <a href="#contact" className="cta-link">
            <span>Let's Connect</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Moments

