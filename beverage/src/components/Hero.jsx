import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

import shake from '../assets/SHAKE3.png'
import shake1 from '../assets/shakeCoconut.png'
import shake2 from '../assets/blueberry.png'
import shake3 from '../assets/banana.png'
import shake4 from '../assets/grapefruit.png'

const HERO_IMGS = [shake, shake1, shake2, shake3, shake4]

const PILLS = [
  { label: '🍓 Strawberry', color: '#f27d9a' },
  { label: '🥥 Coconut',   color: '#d3d4cf' },
  { label: '🫐 Blueberry', color: '#7f68ec' },
  { label: '🍌 Banana',    color: '#fac857' },
  { label: '🍊 Grapefruit',color: '#ff6756' },
]

const STATS = [
  ['24g', 'Protein'],
  ['100%', 'Real fruit'],
  ['4.9 ★', 'Rating'],
]

export default function Hero() {
  const [heroIdx, setHeroIdx] = useState(0)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 20, stiffness: 100, mass: 1 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15])
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-30, 30])
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-30, 30])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    mouseX.set((e.clientX - cx) / rect.width)
    mouseY.set((e.clientY - cy) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const switchFlavor = (idx) => {
    if (idx === heroIdx) return
    setHeroIdx(idx)
  }

  return (
    <motion.section
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: '88vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '40px 60px',
        position: 'relative',
        overflow: 'hidden',
        gap: '30px',
        perspective: 1200
      }}
    >
      <motion.div
        className="hero-blob"
        style={{ x: parallaxX, y: parallaxY }}
      />
      <motion.div
        className="hero-blob2"
        style={{ x: useTransform(parallaxX, v => -v * 0.5), y: useTransform(parallaxY, v => -v * 0.5) }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(255,230,0,0.1)',
            border: '1px solid var(--electric-yellow)',
            borderRadius: '100px', padding: '6px 18px', marginBottom: '24px',
          }}
        >
          <div className="blink-dot" />
          <span style={{
            fontSize: '0.72rem', color: 'var(--electric-yellow)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>
            Now serving • All day every day
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: '"Bebas Neue",sans-serif',
            fontSize: 'clamp(4.5rem,9vw,9rem)',
            lineHeight: 0.88, color: 'var(--cream)', letterSpacing: '-0.01em',
          }}
        >
          <span style={{ color: 'var(--hot-pink)', display: 'block' }}>MY</span>
          <span style={{ display: 'block' }}>MILK</span>
          <span style={{ color: 'var(--electric-yellow)', display: 'block' }}>SHAKE</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          style={{
            fontSize: '0.85rem', color: 'rgba(255,248,240,0.55)',
            lineHeight: 1.8, maxWidth: '380px', margin: '20px 0 26px',
          }}
        >
          Brings all the boys to the yard. Crafted from real fruit.
          Dangerously good. No notes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}
        >
          {PILLS.map((p, i) => (
            <button
              key={p.label}
              onClick={() => switchFlavor(i)}
              className={`hero-pill${heroIdx === i ? ' active' : ''}`}
              style={heroIdx === i ? { borderColor: p.color, color: p.color } : {}}
            >
              {p.label}
            </button>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}
        >
          <Link to="/menu" className="btn-primary">Get the drip ↓</Link>
          <Link to="/about" className="btn-secondary">What's inside?</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
        >
          {STATS.map(([v, l]) => (
            <div key={l} className="hero-stat-card" style={{
               display: 'flex', alignItems: 'center', gap: '10px',
               background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
               borderRadius: '12px', padding: '10px 16px',
            }}>
              <div>
                <div style={{
                  fontFamily: '"Bebas Neue",sans-serif', fontSize: '1.3rem',
                  color: 'var(--lime)', lineHeight: 1,
                }}>{v}</div>
                <div style={{
                  fontSize: '0.6rem', color: 'rgba(255,248,240,0.4)',
                  letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: '2px',
                }}>{l}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="hero-image-col"
        style={{
          position: 'relative', zIndex: 2,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          perspective: 1000
        }}
      >
        <motion.div style={{
          position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
          background: `radial-gradient(circle, rgba(255,60,120,0.4), transparent 68%)`,
          filter: 'blur(50px)', pointerEvents: 'none',
          x: useTransform(parallaxX, v => v * 0.6),
          y: useTransform(parallaxY, v => v * 0.6),
        }} />

        <motion.div
          className="hero-ring"
          onClick={() => switchFlavor((heroIdx + 1) % HERO_IMGS.length)}
          style={{
            rotateX,
            rotateY,
            transition: 'box-shadow 0.4s',
          }}
        >
          <motion.img
            key={heroIdx}
            src={HERO_IMGS[heroIdx]}
            alt="Milkshake"
            className="hero-img-spin"
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
            style={{
              height: 'clamp(340px, 55vw, 680px)',
              objectFit: 'contain',
              position: 'relative', zIndex: 2,
            }}
          />

        </motion.div>
      </motion.div>
    </motion.section>
  )
}