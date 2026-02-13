import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Work.css'

const Work = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const experiences = [
    {
      id: 1,
      title: 'NVIDIA Headquarters',
      category: 'Silicon Valley Visit',
      year: '2024',
      description: 'Explored the cutting edge of AI and GPU technology at NVIDIA, learning about how they\'re shaping the future of computing and artificial intelligence.',
      image: '/images/nvidia.jpg',
      position: '50% 50%'
    },
    {
      id: 2,
      title: 'Google San Francisco',
      category: 'Tech Immersion',
      year: '2024',
      description: 'Visited Google\'s San Francisco office with stunning views of the Bay Bridge, discovering how they\'re building products that impact billions of people.',
      image: '/images/google.jpg',
      position: 'center center'
    },
    {
      id: 3,
      title: 'Instagram / Meta',
      category: 'Social Innovation',
      year: '2024',
      description: 'Stepped inside Instagram\'s vibrant office space, exploring how social media platforms are designed to connect people worldwide.',
      image: '/images/instagram.jpg',
      position: '50% 60%'
    },
    {
      id: 4,
      title: 'PayPal Headquarters',
      category: 'Fintech Innovation',
      year: '2024',
      description: 'Visited PayPal\'s headquarters to understand how financial technology is revolutionizing the way people send and receive money globally.',
      image: '/images/paypal.jpg',
      position: '50% 35%'
    },
    {
      id: 5,
      title: 'OpenAI Conversations',
      category: 'AI & Future Tech',
      year: '2024',
      description: 'Had inspiring conversations with engineers working on the frontier of artificial intelligence, discussing how AI can make the world better.',
      image: '/images/openai.jpg',
      position: 'top center'
    },
    {
      id: 6,
      title: 'LinkedIn Product Team',
      category: 'Career & Networking',
      year: '2024',
      description: 'Connected with product managers at LinkedIn, learning about how they build features that help professionals grow their careers.',
      image: '/images/linkedin.jpg',
      position: '50% 25%'
    }
  ]

  const yaleImages = [
    { src: '/images/yale1.jpg', alt: 'Aiten at Yale campus' },
    { src: '/images/yale_new2.jpg', alt: 'Aiten with YYGS friends' },
    { src: '/images/yale_new1.jpg', alt: 'Aiten at Yale' },
    { src: '/images/yale2.jpg', alt: 'Aiten at Yale architecture' }
  ]

  return (
    <section id="journey" className="section work" ref={sectionRef}>
      <div className="container">
        {/* Yale Section - FIRST */}
        <motion.div 
          className="yale-section yale-first"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Hero Layout - Title + Featured Image */}
          <div className="yale-hero">
            <div className="yale-hero-content">
              <span className="section-subtitle">Full Scholarship · Summer 2025</span>
              <h3 className="yale-title">Yale Young Global Scholars</h3>
              <p className="yale-intro">
                Selected among thousands of applicants worldwide, I spent two transformative 
                weeks at Yale University exploring global challenges alongside brilliant minds 
                from every corner of the world.
              </p>
              <div className="yale-stats">
                <div className="yale-stat">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Countries</span>
                </div>
                <div className="yale-stat">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Weeks</span>
                </div>
                <div className="yale-stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Friendships</span>
                </div>
              </div>
            </div>
            <motion.div 
              className="yale-hero-image"
              initial={{ opacity: 0, scale: 0.95, rotate: 6 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 3 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="image-inner">
                <img src={yaleImages[0].src} alt={yaleImages[0].alt} />
              </div>
              <span className="polaroid-caption">Yale Summer 2025</span>
            </motion.div>
          </div>

          {/* Bento Grid - Images + Text */}
          <div className="yale-bento">
            <motion.div 
              className="yale-bento-item text-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>
                Being selected as a Yale Young Global Scholar on a full scholarship was a 
                transformative experience. I lived and learned alongside extraordinary students—
                future leaders, innovators, and changemakers who share my passion for making a difference.
              </p>
            </motion.div>
            
            <motion.div 
              className="yale-bento-item image-card"
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 2 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="image-inner">
                <img src={yaleImages[1].src} alt={yaleImages[1].alt} />
              </div>
              <span className="polaroid-caption">New friends</span>
            </motion.div>
            
            <motion.div 
              className="yale-bento-item image-card tall"
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: -1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="image-inner">
                <img src={yaleImages[2].src} alt={yaleImages[2].alt} />
              </div>
              <span className="polaroid-caption">Campus life</span>
            </motion.div>
            
            <motion.div 
              className="yale-bento-item image-card"
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: -2 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="image-inner">
                <img src={yaleImages[3].src} alt={yaleImages[3].alt} />
              </div>
              <span className="polaroid-caption">Memories</span>
            </motion.div>
            
            <motion.div 
              className="yale-bento-item text-card accent"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p>
                Together, we explored pressing global challenges—from climate change and AI to social 
                justice. Late-night discussions, collaborative projects, and world-renowned professors 
                opened my eyes to perspectives I had never considered.
              </p>
              <span className="quote-mark">"</span>
            </motion.div>
          </div>

          {/* Bottom Quote */}
          <motion.div 
            className="yale-quote"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>YYGS taught me that the most powerful solutions come from diverse minds working together.</p>
          </motion.div>
        </motion.div>

        {/* Silicon Valley Section */}
        <div id="silicon-valley">
          <motion.div 
            className="work-header"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-subtitle">Silicon Valley Journey</span>
            <h2 className="section-title">Tech Companies Visited</h2>
            <p className="work-intro">
              Conversations and experiences that elevated my curiosity about using AI and 
              technology to make the world a better place.
            </p>
          </motion.div>
        </div>

        <div className="experiences-grid">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              className="experience-card"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="experience-image">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  style={{ objectPosition: exp.position }}
                />
              </div>
              <div className="experience-content">
                <div className="experience-meta">
                  <span className="experience-category">{exp.category}</span>
                  <span className="experience-year">{exp.year}</span>
                </div>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-description">{exp.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work
