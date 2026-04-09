import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!email.trim()) { setError('Enter your email first!'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('That doesn\'t look like a valid email.'); return }
    setError('')
    setSubmitted(true)
  }

  return (
    <section className="newsletter-section" style={{ padding: '60px 20px' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: 'linear-gradient(135deg, var(--hot-pink), #e03e6b)', 
          borderRadius: '32px',
          padding: 'clamp(40px, 6vw, 70px) clamp(30px, 5vw, 60px)', 
          position: 'relative', 
          overflow: 'hidden',
          maxWidth: '1200px',
          margin: '0 auto',
          boxShadow: '0 30px 60px rgba(255,45,120,0.2)'
        }}
      >
        {/* Hardware-accelerated background pattern */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.08,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.3) 0, rgba(0,0,0,0.3) 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px',
        }} />

        {/* Dynamic Framer Motion glow orb replacing CSS keyframes */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
          style={{
            position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,230,0,0.4), transparent 70%)',
            top: '-150px', right: '-150px', pointerEvents: 'none',
          }} 
        />

        <div className="newsletter-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(0,0,0,0.25)', borderRadius: '100px',
                padding: '6px 16px', fontSize: '0.7rem', letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.95)', 
                marginBottom: '20px', alignSelf: 'flex-start',
                backdropFilter: 'blur(4px)'
              }}>
              <span>🥤</span> Join the yard
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                fontFamily: '"Bebas Neue",sans-serif',
                fontSize: 'clamp(3rem,6vw,5.5rem)',
                lineHeight: 0.9, color: 'white', marginBottom: '30px',
                textShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }}
            >
              GET THE<br />DISCOUNT.<br />SLAY.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
            >
              <div style={{ display: 'flex' }}>
                {[['S', '#e03e6b'], ['M', '#5b4ecf'], ['J', '#1aac8e'], ['K', '#d4820a']].map(([init, bg], i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.15, y: -4, zIndex: 10 }}
                    style={{
                      width: '38px', height: '38px', borderRadius: '50%',
                      border: '2.5px solid rgba(255,45,120,1)', background: bg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.8rem', fontWeight: 700, color: 'white',
                      marginLeft: i === 0 ? 0 : '-12px',
                      cursor: 'none', position: 'relative'
                    }}>
                    {init}
                  </motion.div>
                ))}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'white', letterSpacing: '0.05em' }}>2,847 shake addicts</strong>
                already in the yard
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
            {[
              ['🎁', '10% off your first order — instantly'],
              ['🔥', 'Early access to new drops & limited flavors'],
              ['🚫', 'Zero spam. Unsubscribe whenever. No hard feelings.'],
            ].map(([icon, text], i) => (
              <motion.div 
                key={text} 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  fontSize: '0.8rem', color: 'rgba(255,255,255,0.95)',
                  background: 'rgba(0,0,0,0.1)', padding: '12px 16px',
                  borderRadius: '16px', backdropFilter: 'blur(5px)'
                }}
              >
                <div style={{
                  width: '36px', height: '36px', flexShrink: 0,
                  background: 'rgba(255,255,255,0.15)', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>{icon}</div>
                <span style={{ fontWeight: 500 }}>{text}</span>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              style={{ marginTop: '10px' }}
            >
              {submitted ? (
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  style={{
                    background: 'rgba(0,0,0,0.3)', borderRadius: '100px',
                    padding: '20px 24px', textAlign: 'center',
                    fontFamily: '"Permanent Marker",cursive', fontSize: '1.2rem', color: 'var(--electric-yellow)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
                  }}
                >
                  You're in! 🎉 Check your inbox.
                </motion.div>
              ) : (
                <>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={e => { setEmail(e.target.value); setError('') }}
                        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                        style={{
                          width: '100%', padding: '16px 24px',
                          borderRadius: '100px',
                          border: error ? '2px solid rgba(0,0,0,0.5)' : '2px solid rgba(255,255,255,0.2)',
                          background: 'rgba(0,0,0,0.2)', color: 'white',
                          fontFamily: '"Space Mono",monospace', fontSize: '0.85rem',
                          outline: 'none', transition: 'all 0.3s ease',
                          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--electric-yellow)'}
                        onBlur={e => e.target.style.borderColor = error ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.2)'}
                      />
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSubmit}
                      style={{
                        padding: '16px 32px', background: 'var(--dark)',
                        color: 'var(--electric-yellow)',
                        border: 'none', borderRadius: '100px',
                        fontFamily: '"Bebas Neue",sans-serif',
                        fontSize: '1.2rem', letterSpacing: '0.15em',
                        cursor: 'none', whiteSpace: 'nowrap',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                      }}
                    >
                      I'M IN ↗
                    </motion.button>
                  </div>
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        fontSize: '0.75rem', color: 'rgba(0,0,0,0.7)',
                        marginTop: '8px', paddingLeft: '16px', fontWeight: 'bold'
                      }}
                    >
                      ⚠ {error}
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}