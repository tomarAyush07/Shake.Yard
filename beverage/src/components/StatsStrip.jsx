import { useRef, useEffect } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

const STATS = [
  { target: 5,    suffix: '',   label: 'Wild flavors' },
  { target: 100,  suffix: '%',  label: 'Real fruit' },
  { target: 0,    suffix: '',   label: 'Artificial stuff' },
  { target: null, suffix: '∞',  label: 'Boys in the yard' },
]

function StatItem({ stat, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const springValue = useSpring(0, {
    damping: 40,
    stiffness: 40,
    mass: 1.5,
  })
  useEffect(() => {
    if (isInView && stat.target !== null) {
      springValue.set(stat.target)
    }
  }, [isInView, stat.target, springValue])
  const displayValue = useTransform(springValue, (latest) => 
    Math.round(latest)
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="stat-item"
      style={{
        flex: 1, 
        textAlign: 'center', 
        padding: '24px 10px',
        borderRight: index < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
        minWidth: '120px', 
        position: 'relative',
        cursor: 'none',
      }}
      whileHover="hover"
    >
      <motion.div
        className="stat-num"
        variants={{
          hover: { color: 'var(--electric-yellow)', scale: 1.05 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          fontFamily: '"Bebas Neue",sans-serif',
          fontSize: 'clamp(2.2rem,4vw,3.2rem)',
          color: 'var(--hot-pink)', 
          lineHeight: 1,
        }}
      >
        {stat.target !== null ? <motion.span>{displayValue}</motion.span> : stat.suffix}
        {stat.target !== null && stat.suffix}
      </motion.div>
      
      <motion.div
        className="stat-label"
        style={{
          fontSize: '0.68rem', 
          color: 'rgba(255,248,240,0.4)',
          letterSpacing: '0.2em', 
          textTransform: 'uppercase', 
          marginTop: '8px',
        }}
        variants={{
          hover: { color: 'rgba(255,248,240,0.8)' }
        }}
      >
        {stat.label}
      </motion.div>
      <motion.div
        variants={{
          hover: { width: '100%', left: '0%' }
        }}
        initial={{ width: '0%', left: '50%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          bottom: 0,
          height: '2px',
          background: 'var(--electric-yellow)',
          boxShadow: '0 0 10px var(--electric-yellow)'
        }}
      />
    </motion.div>
  )
}
export default function StatsStrip() {
  return (
    <div
      className="stats-strip"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '20px 40px',
        background: 'rgba(26,24,32,0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      {STATS.map((stat, i) => (
        <StatItem key={stat.label} stat={stat} index={i} />
      ))}
    </div>
  )
}