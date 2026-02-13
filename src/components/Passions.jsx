import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Passions.css'

const Passions = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="passions" className="section passions" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="passions-header"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-subtitle">What Drives Me</span>
          <h2 className="section-title">My Passions</h2>
        </motion.div>

        {/* Music Section */}
        <motion.div 
          className="passion-section"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="passion-section-content">
            <span className="passion-label">01</span>
            <h3 className="passion-section-title">Music</h3>
            <p className="passion-section-text">
              I play the guitar and piano, and I sing—music is how I connect with my soul and others. 
              I lead worship at church and recently started sharing my music on Instagram. Whether it's 
              an intimate acoustic session or leading thousands in worship, music allows me to express 
              what words alone cannot.
            </p>
            <div className="passion-tags">
              <span>Guitar</span>
              <span>Piano</span>
              <span>Vocals</span>
              <span>Worship</span>
            </div>
          </div>
          <div className="passion-section-image">
            <div className="image-wrapper">
              <img src="/images/music.jpg" alt="Aiten playing guitar" />
            </div>
            <span className="image-caption">Playing for 5 years and counting</span>
          </div>
        </motion.div>

        {/* Faith & Theater Section */}
        <motion.div 
          className="passion-section reverse"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="passion-section-content">
            <span className="passion-label">02</span>
            <h3 className="passion-section-title">Faith & Theater</h3>
            <p className="passion-section-text">
              Faith is a cornerstone of my life. As an active member of my church, I lead worship and 
              theater productions to spread the message of Jesus to thousands of people. The stage 
              becomes a sacred space where storytelling meets purpose, allowing me to touch hearts 
              and inspire transformation through performance.
            </p>
            <div className="passion-tags">
              <span>Theater</span>
              <span>Worship Leading</span>
              <span>Storytelling</span>
              <span>Faith</span>
            </div>
          </div>
          <div className="passion-section-image wide">
            <div className="image-wrapper">
              <img src="/images/theater.jpg" alt="Aiten performing in theater" />
            </div>
            <span className="image-caption">"Lost and Found" — Main character at age 14, performed for hundreds</span>
          </div>
        </motion.div>

        {/* Jewelry Business Section */}
        <motion.div 
          className="passion-section"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="passion-section-content">
            <span className="passion-label">03</span>
            <h3 className="passion-section-title">Jewelry Design</h3>
            <p className="passion-section-text">
              Every piece I create is handmade with love and intention. What started as a creative 
              outlet became a thriving business—I've grown my revenue by over 150% in less than a year. 
              Each design combines elegance with meaning, turning precious materials into wearable 
              stories that my customers treasure.
            </p>
            <div className="passion-tags">
              <span>Handmade</span>
              <span>Entrepreneur</span>
              <span>+150% Revenue</span>
              <span>Design</span>
            </div>
          </div>
          <div className="passion-section-gallery-wrapper">
            <div className="passion-section-gallery">
              <img src="/images/jewelry1.jpg" alt="Handmade jewelry piece" />
              <img src="/images/jewelry2.jpg" alt="Handmade jewelry piece" />
              <img src="/images/jewelry3.jpg" alt="Handmade jewelry piece" />
            </div>
            <span className="image-caption">Handcrafted pieces — Photography, lighting & styling all done by me</span>
          </div>
        </motion.div>

        {/* Computer Science Section */}
        <motion.div 
          className="passion-section reverse"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="passion-section-content">
            <span className="passion-label">04</span>
            <h3 className="passion-section-title">Computer Science</h3>
            <p className="passion-section-text">
              From algorithms to AI, I love exploring how code can solve real-world problems and 
              create beautiful experiences. Technology is my tool for making the world a better 
              place—whether it's building innovative solutions or understanding how the digital 
              world shapes our future.
            </p>
            <div className="passion-tags">
              <span>Web Development</span>
              <span>AI & ML</span>
              <span>Innovation</span>
            </div>
          </div>
          <div className="passion-section-image">
            <div className="image-wrapper">
              <img src="/images/sf_downtown.jpg" alt="Aiten in downtown San Francisco" />
            </div>
            <span className="image-caption">Downtown San Francisco — Surrounded by thousands of YC, a16z-backed startups</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Passions
