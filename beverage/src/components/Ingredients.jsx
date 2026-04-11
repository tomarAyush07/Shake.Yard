import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import ing1 from '../assets/ingredients_1.png'
import ing2 from '../assets/ingredients_2.png'
import ing3 from '../assets/ingredients_3.png'
import ing4 from '../assets/ingredients_4.png'
import ing5 from '../assets/ingredients_5.png'

const INGREDIENTS = [
  { num: '01', name: 'Coconut',    desc: 'Cracked fresh from tropical paradises. Creamy, nutty, obsession-worthy.',  img: ing1, color: '#d3d4cf' },
  { num: '02', name: 'Blueberry',  desc: 'Plump, antioxidant-packed, peak ripeness. Bold flavor every time.',         img: ing2, color: '#7f68ec' },
  { num: '03', name: 'Banana',     desc: "Naturally sweet & smooth. The gym-bro's secret weapon.",                    img: ing3, color: '#fac857' },
  { num: '04', name: 'Grapefruit', desc: 'Hand-picked citrus. Bright, invigorating, no cap.',                         img: ing4, color: '#ff6756' },
  { num: '05', name: 'Strawberry', desc: "Sun-ripened. The GOAT fruit. It's giving summer forever.",                  img: ing5, color: '#f27d9a' },
]

export default function Ingredients() {
  return (
    <section style={{ padding: '100px 40px 80px', position: 'relative' }} id="fresh">
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="section-divider" 
        style={{ marginBottom: '60px', transformOrigin: 'left' }} 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.02, 1],
          opacity: [0.015, 0.03, 0.015]
        }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        style={{
          fontSize: '20vw', fontFamily: '"Bebas Neue",sans-serif',
          color: 'rgba(255,255,255,1)', position: 'absolute',
          top: '50%', left: '50%', translateX: '-50%', translateY: '-50%',
          whiteSpace: 'nowrap', pointerEvents: 'none',
          letterSpacing: '0.1em', userSelect: 'none',
        }}
      >FRESH</motion.div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '20px', marginBottom: '50px',
        }}>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"Bebas Neue",sans-serif',
              fontSize: 'clamp(3rem,7vw,6rem)', lineHeight: 0.9, color: 'var(--cream)',
            }}
          >
            ONLY THE<br /><span style={{ color: 'var(--hot-pink)' }}>FRESHEST</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: '0.78rem', color: 'rgba(255,248,240,0.4)', maxWidth: '280px', lineHeight: 1.7 }}
          >
            We didn't cut corners. Every fruit is hand-picked, and we dare you to taste the difference.
          </motion.p>
        </div>

        <div className="ing-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {INGREDIENTS.map((ing, i) => (
            <motion.div
              key={ing.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover="hover"
              className="ing-card"
              style={{
                background: 'rgba(37,34,48,0.6)', 
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '80px 28px 32px',
                position: 'relative', overflow: 'visible',
                cursor: 'none',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.04)',
                borderBottom: `2px solid transparent`,
              }}
              variants={{
                hover: { 
                  y: -8,
                  background: 'rgba(45,41,60,0.8)',
                  borderColor: ing.color,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.4)`
                }
              }}
            >
              <motion.div 
                variants={{
                  hover: { opacity: 1 }
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at top, ${ing.color}15, transparent 70%)`,
                  pointerEvents: 'none',
                  borderRadius: '24px'
                }} 
              />

              <div style={{ position: 'absolute', top: '-65px', left: '20px', zIndex: 5, pointerEvents: 'none' }}>
                <motion.img
                  src={ing.img}
                  alt={ing.name}
                  variants={{
                    hover: { 
                      scale: 1.25, 
                      rotate: -8, 
                      y: -14,
                      filter: `drop-shadow(0 15px 25px ${ing.color}88)`
                    }
                  }}
                  initial={{ 
                    scale: 1, 
                    rotate: 0, 
                    y: 0,
                    filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.5))"
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  style={{
                    height: '130px',
                    transformOrigin: 'bottom center',
                  }}
                />
              </div>

              <motion.div 
                variants={{ hover: { color: ing.color } }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: '0.82rem', letterSpacing: '0.2em',
                  color: 'rgba(255,248,240,0.2)',
                  marginBottom: '8px', fontFamily: '"Bebas Neue",sans-serif',
                }}
              >
                {ing.num} —
              </motion.div>
              <div style={{
                fontFamily: '"Bebas Neue",sans-serif', fontSize: '2rem',
                color: 'var(--cream)', lineHeight: 1, marginBottom: '10px',
              }}>
                {ing.name}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,248,240,0.35)', lineHeight: 1.7 }}>
                {ing.desc}
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: INGREDIENTS.length * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover="hover"
            style={{
              background: 'rgba(37,34,48,0.4)', 
              backdropFilter: 'blur(12px)',
              padding: '36px 28px 32px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', textAlign: 'center',
              borderRadius: '24px',
              border: '1px dashed rgba(255,45,120,0.3)',
              cursor: 'none'
            }}
            variants={{
              hover: {
                background: 'rgba(45,41,60,0.7)',
                borderColor: 'var(--hot-pink)',
                scale: 1.02
              }
            }}
          >
            <motion.div 
              variants={{ hover: { scale: 1.1 } }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                fontFamily: '"Permanent Marker",cursive', fontSize: '1.4rem',
                color: 'var(--cream)', marginBottom: '16px', lineHeight: 1.4,
              }}>
              And it's<br />damn<br />good 🔥
            </motion.div>
            <Link
              to="/menu"
              style={{
                color: 'var(--hot-pink)', fontSize: '0.75rem', letterSpacing: '0.15em',
                textDecoration: 'none', textTransform: 'uppercase',
                borderBottom: '1px solid var(--hot-pink)', paddingBottom: '4px',
                fontWeight: 'bold'
              }}
            >
              Shop the menu →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}