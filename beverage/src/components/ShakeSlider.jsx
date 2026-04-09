import { useState, useRef, useEffect, useCallback } from 'react'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'

import shake1 from '../assets/shakeCoconut.png'
import shake2 from '../assets/blueberry.png'
import shake3 from '../assets/banana.png'
import shake4 from '../assets/grapefruit.png'
import shake5 from '../assets/strawberry.png'

const SHAKES = [
  { name: 'Coconut',    label: 'Tropical',    chipColor: '#d3d4cf', price: 'Rs 99',  img: shake1, desc: 'Creamy, nutty, straight-up iconic. Tropical paradise in a cup.',          cardClass: 'coconut' },
  { name: 'Blueberry',  label: 'Antioxidant', chipColor: '#7f68ec', price: 'Rs 149', img: shake2, desc: 'Picked at peak ripeness. Tangy, bold, unapologetically purple.',           cardClass: 'blueberry' },
  { name: 'Banana',     label: 'Classic',     chipColor: '#fac857', price: 'Rs 99',  img: shake3, desc: 'Smooth, sweet, and absolutely loaded with potassium. Gym approved.',      cardClass: 'banana' },
  { name: 'Grapefruit', label: 'Zesty',       chipColor: '#ff6756', price: 'Rs 199', img: shake4, desc: 'Not for the faint-hearted. Bright, citrusy, and it slaps hard.',          cardClass: 'grapefruit' },
  { name: 'Strawberry', label: 'Fan fave ★', chipColor: '#f27d9a', price: 'Rs 199', img: shake5, desc: 'The OG. Sun-ripened, summer vibes. This is the one that started it all.', cardClass: 'strawberry' },
]

const CARD_BG = {
  coconut:    'linear-gradient(160deg,#323230,#252523)',
  blueberry:  'linear-gradient(160deg,#251f48,#1a1535)',
  banana:     'linear-gradient(160deg,#352b00,#271f00)',
  grapefruit: 'linear-gradient(160deg,#38110d,#2a0a07)',
  strawberry: 'linear-gradient(160deg,#38001e,#280015)',
}

export default function ShakeSlider() {
  const { addItem } = useCart()
  const [sliderIdx, setSliderIdx] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [cardW, setCardW] = useState(304)
  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const dragStart = useRef(0)
  const dragCurrent = useRef(0)

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return
      const card = trackRef.current.querySelector('.shake-card-inner')
      if (card) setCardW(card.getBoundingClientRect().width + 24)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const goTo = (idx) => setSliderIdx(Math.max(0, Math.min(SHAKES.length - 1, idx)))

  const onDragStart = (e) => {
    isDragging.current = true
    dragStart.current = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX
    dragCurrent.current = dragStart.current
  }

  const onDragMove = (e) => {
    if (!isDragging.current) return
    dragCurrent.current = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX
  }

  const onDragEnd = useCallback(() => {
    if (!isDragging.current) return
    isDragging.current = false
    const diff = dragCurrent.current - dragStart.current
    if (diff < -60) setSliderIdx(i => Math.min(SHAKES.length - 1, i + 1))
    else if (diff > 60) setSliderIdx(i => Math.max(0, i - 1))
  }, [])

  useEffect(() => {
    window.addEventListener('mouseup', onDragEnd)
    window.addEventListener('touchend', onDragEnd)
    return () => {
      window.removeEventListener('mouseup', onDragEnd)
      window.removeEventListener('touchend', onDragEnd)
    }
  }, [onDragEnd])

  return (
    <section style={{ padding: '80px 0 60px' }} id="shakes">
      {/* Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } }
        }}
        style={{ padding: '0 40px', marginBottom: '50px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <motion.h2 
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: 'clamp(3rem,7vw,6rem)', lineHeight: 0.9, color: 'var(--cream)' }}>
          THE<br /><span style={{ color: 'var(--hot-pink)' }}>LINEUP</span>
        </motion.h2>
        <motion.p 
          variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
          style={{ fontSize: '0.78rem', color: 'rgba(255,248,240,0.4)', maxWidth: '280px', lineHeight: 1.7 }}>
          Five flavors, zero regrets. Pick your poison. Or try all of them — we won't judge.
        </motion.p>
      </motion.div>

      {/* Track */}
      <div style={{ overflow: 'hidden', padding: '100px 0 40px', marginTop: '-60px' }}>
        <motion.div
          animate={{ x: -(sliderIdx * cardW) }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          ref={trackRef}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          style={{
            display: 'flex', gap: '24px', padding: '0 40px',
            userSelect: 'none', cursor: isDragging.current ? 'grabbing' : 'grab'
          }}
        >
          {SHAKES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`shake-card-inner${hoveredCard === i ? ' hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                minWidth: '280px', height: '400px', borderRadius: '28px',
                flexShrink: 0, position: 'relative', overflow: 'visible',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'flex-end', padding: '28px', background: CARD_BG[s.cardClass],
              }}
            >
              <span style={{
                position: 'absolute', top: '18px', right: '18px', fontSize: '0.62rem',
                letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 10px',
                borderRadius: '100px', border: `1px solid ${s.chipColor}`, color: s.chipColor, zIndex: 3,
              }}>{s.label}</span>

              <motion.img
                src={s.img}
                alt={s.name}
                animate={{
                  y: hoveredCard === i ? -20 : 0,
                  scale: hoveredCard === i ? 1.1 : 1,
                  rotate: hoveredCard === i ? -5 : 0
                }}
                transition={{ type: 'spring', damping: 15 }}
                style={{
                  position: 'absolute',
                  top: '-70px',
                  height: '260px',
                  filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.5))',
                  zIndex: 2, pointerEvents: 'none',
                }}
              />

              <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                <div style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: '2.2rem', letterSpacing: '0.08em', color: 'var(--cream)', marginBottom: '6px' }}>{s.name}</div>
                <div style={{ fontSize: '0.67rem', color: 'rgba(255,248,240,0.45)', lineHeight: 1.5, marginBottom: '16px' }}>{s.desc}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: '1.6rem', color: 'var(--electric-yellow)' }}>{s.price}</div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addItem(s)} 
                    className="card-btn"
                    style={{ background: 'var(--hot-pink)', border: 'none', padding: '8px 16px', borderRadius: '100px', color: 'white', cursor: 'pointer', fontFamily: '"Bebas Neue",sans-serif', fontSize: '1.2rem'}}
                  >ADD +</motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div style={{ padding: '0 40px', display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button onClick={() => goTo(sliderIdx - 1)} className="ctrl-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '50%', width:'40px', height:'40px', cursor:'pointer' }}>←</button>
        <button onClick={() => goTo(sliderIdx + 1)} className="ctrl-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '50%', width:'40px', height:'40px', cursor:'pointer' }}>→</button>
        <div style={{ display: 'flex', gap: '8px' }}>
          {SHAKES.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              animate={{
                width: sliderIdx === i ? 28 : 8,
                backgroundColor: sliderIdx === i ? 'var(--hot-pink)' : 'rgba(255,248,240,0.2)'
              }}
              style={{
                height: '8px',
                borderRadius: '100px',
                border: 'none', cursor: 'pointer', padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}