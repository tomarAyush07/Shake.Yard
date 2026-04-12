import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import lifestyle from '../assets/black.png'

export default function Lifestyle() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 200, mass: 1.5 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)
  const rotateX = useTransform(smoothY, [-1, 1], [10, -10])
  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    // Normalize coordinates
    mouseX.set((e.clientX - cx) / (rect.width / 2))
    mouseY.set((e.clientY - cy) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }
  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8
      }
    }
  }

  const listItem = {
    hidden: { opacity: 0, x: -25 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <section style={{ padding: '100px 40px', position: 'relative' }}>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="section-divider" 
        style={{ marginBottom: '80px', transformOrigin: 'right' }} 
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="lifestyle-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '80px',
          alignItems: 'center'
        }}>
          <motion.div 
            style={{ position: 'relative', perspective: 1200 }}
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                borderRadius: '35px', overflow: 'visible', height: '520px',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                backdropFilter: 'blur(10px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '20px', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                cursor: 'none'
              }}
            >
              <motion.img
                src={lifestyle}
                alt="Shake lifestyle"
                style={{ 
                  maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block',
                  transform: 'translateZ(60px)', 
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.6))'
                }}
              />
            </motion.div>
            <motion.div 
              animate={{ 
                y: [0, -8, 0],
                rotate: [-3, -4, -3]
              }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              style={{
                position: 'absolute', bottom: '-20px', right: '15px',
                background: 'var(--electric-yellow)', color: 'var(--dark)',
                fontFamily: '"Permanent Marker",cursive', fontSize: '1rem',
                padding: '12px 26px', borderRadius: '100px',
                boxShadow: '4px 4px 0 var(--hot-pink)',
              }}>
              Post-Workout ✓
            </motion.div>
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase',
                color: 'var(--hot-pink)', marginBottom: '20px',
                display: 'inline-block', borderBottom: '1px solid var(--hot-pink)', paddingBottom: '4px'
              }}
            >
              shake as part of your day
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: '"Bebas Neue",sans-serif',
                fontSize: 'clamp(3.5rem,5vw,5rem)',
                lineHeight: 0.9, color: 'var(--cream)', marginBottom: '28px',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            >
              REFUEL.<br />RECOVER.<br />REPEAT.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: '0.9rem', color: 'rgba(255,248,240,0.6)',
                lineHeight: 1.8, marginBottom: '40px', maxWidth: '420px'
              }}
            >
              Our shakes are built for your actual life — post-gym, pre-work,
              mid-existential-crisis. Protein-packed, naturally flavored, and
              absolutely slaps.
            </motion.p>

            <motion.ul 
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              style={{
                listStyle: 'none', display: 'flex', flexDirection: 'column',
                gap: '20px', marginBottom: '45px',
              }}
            >
              {[
                ['High protein', 'supports recovery'],
                ['All natural', 'no weird stuff'],
                ['Easy to take', 'fits your lifestyle'],
              ].map(([bold, rest]) => (
                <motion.li 
                  key={bold} 
                  variants={listItem}
                  whileHover={{ x: 8 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    fontSize: '0.85rem', color: 'rgba(255,248,240,0.65)',
                    background: 'rgba(255,255,255,0.02)', padding: '12px 18px',
                    borderRadius: '12px', border: '1px solid rgba(255,255,255,0.03)',
                    cursor: 'default'
                  }}
                >
                  <div style={{ 
                    width: '10px', height: '10px', borderRadius: '50%', 
                    background: 'var(--lime)', flexShrink: 0,
                    boxShadow: '0 0 12px var(--lime)'
                  }} />
                  <span><strong style={{ color: 'var(--cream)' }}>{bold}</strong> — {rest}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/menu" style={{
                  background: 'var(--hot-pink)', color: 'white', padding: '16px 36px',
                  borderRadius: '100px', fontFamily: '"Bebas Neue",sans-serif',
                  letterSpacing: '0.1em', fontSize: '1.2rem', textDecoration: 'none',
                  display: 'inline-block', boxShadow: '0 10px 20px rgba(255,45,120,0.3)',
                  cursor: 'none'
                }}>
                  Shop Shakes
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" style={{
                  border: '2px solid rgba(255,248,240,0.15)', color: 'var(--cream)',
                  padding: '14px 36px', borderRadius: '100px',
                  fontFamily: '"Bebas Neue",sans-serif',
                  letterSpacing: '0.1em', fontSize: '1.2rem', textDecoration: 'none',
                  display: 'inline-block', background: 'rgba(0,0,0,0.2)',
                  cursor: 'none'
                }}>
                  View Recipes
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}