import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [big, setBig] = useState(false)
  const [visible, setVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfigDot = { damping: 25, stiffness: 300, mass: 0.5 }
  const dotX = useSpring(mouseX, springConfigDot)
  const dotY = useSpring(mouseY, springConfigDot)

  const springConfigRing = { damping: 30, stiffness: 100, mass: 1.5 }
  const ringX = useSpring(mouseX, springConfigRing)
  const ringY = useSpring(mouseY, springConfigRing)

  useEffect(() => {
    const move = (e) => {
      if (!visible) setVisible(true)
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY, visible])

  useEffect(() => {
    const interactiveSelector = 'a, button, [role="button"], input, select, textarea, .shake-card-inner, .ing-card, .hero-pill, .menu-card, .value-card, .navbar-links a, nav a'
    
    const handleMouseOver = (e) => {
      if (e.target.closest(interactiveSelector)) {
        setBig(true)
      }
    }
    const handleMouseOut = (e) => {
      if (e.target.closest(interactiveSelector)) {
        setBig(false)
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          width: big ? '10px' : '8px',
          height: big ? '10px' : '8px',
          background: big ? 'var(--electric-yellow)' : 'var(--hot-pink)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: big ? '10px' : '8px',
          height: big ? '10px' : '8px',
          background: big ? 'var(--electric-yellow)' : 'var(--hot-pink)',
        }}
        transition={{ duration: 0.2 }}
      />
      
      <motion.div
        className="custom-cursor-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          width: big ? '60px' : '36px',
          height: big ? '60px' : '36px',
          borderRadius: '50%',
          border: `1.5px solid ${big ? 'var(--electric-yellow)' : 'var(--hot-pink)'}`,
          pointerEvents: 'none',
          zIndex: 9998,
          translateX: '-50%',
          translateY: '-50%',
          opacity: 0.6,
        }}
        animate={{
          width: big ? '60px' : '36px',
          height: big ? '60px' : '36px',
          borderColor: big ? 'var(--electric-yellow)' : 'var(--hot-pink)',
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  )
}