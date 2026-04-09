import { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import strawberryImg from '../assets/ingredients_5.png'
import shakeImg from '../assets/SHAKE3.png'

export default function IntroLoader({ onComplete }) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const runSequence = async () => {
      // --- PHASE 1: INITIAL DARK STATE ---
      animate(".shake-silhouette", { opacity: 0, scale: 0.9, filter: "grayscale(100%) brightness(0.1) blur(10px)" }, { duration: 0 })
      animate(".shake-color", { opacity: 0, filter: "brightness(2) blur(20px)", scale: 1.1 }, { duration: 0 })
      animate(".strawberry", { opacity: 0, scale: 0 }, { duration: 0 })
      animate(".bg-glow", { opacity: 0, scale: 0.5 }, { duration: 0 })
      animate(".text-reveal", { opacity: 0, y: 50, filter: "blur(10px)", scale: 0.9 }, { duration: 0 })
      animate(".enter-btn", { opacity: 0, scale: 0.8 }, { duration: 0 })
      animate(".energy-ring", { opacity: 0, scale: 0 }, { duration: 0 })

      // --- PHASE 2: THE HAUNTING APPEARANCE ---
      // Bottle appears slowly in pure dark grayscale
      await animate(".shake-silhouette", 
        { opacity: 1, filter: "grayscale(100%) brightness(0.3) blur(0px)", scale: 1 }, 
        { duration: 2, ease: "easeOut" }
      )

      // Heartbeat tension pulse
      animate(".shake-container", 
        { scale: [1, 1.02, 1, 1.03, 1] }, 
        { duration: 1.5, times: [0, 0.2, 0.4, 0.8, 1], ease: "easeInOut" }
      )

      // --- PHASE 3: THE GATHERING STORM ---
      const numBerries = 12
      const stormPromises = []
      
      // Strawberries fly in from extreme angles and orbit wildly
      for(let i=0; i<numBerries; i++) {
        // Random start positions far off-screen
        const startX = (Math.random() > 0.5 ? 1 : -1) * (400 + Math.random() * 400)
        const startY = (Math.random() > 0.5 ? 1 : -1) * (300 + Math.random() * 400)
        
        // Setup initial invisible state offscreen in grayscale
        animate(`.straw-${i}`, { x: startX, y: startY, filter: "grayscale(100%) brightness(0.3) blur(2px)" }, { duration: 0 })

        // The Storm Animation (Flying towards center, looping, rotating like crazy)
        stormPromises.push(
          animate(`.straw-${i}`, {
            x: [startX, startX * 0.2, -startX * 0.3, startX * 0.1, 0],
            y: [startY, startY * 0.5, -startY * 0.2, startY * 0.4, 0],
            rotate: [0, 360, 720, 1080],
            scale: [0, 1.5, 0.5, 1.2, 1],
            opacity: [0, 1, 1, 1, 1]
          }, { 
            duration: 2.5 + Math.random() * 0.5, 
            ease: "easeInOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          })
        )
      }

      // Simultaneously, the bottle starts violently vibrating
      animate(".shake-container", 
        { x: [-2, 2, -3, 3, -1, 1, 0], y: [-1, 2, -2, 1, -3, 0] }, 
        { duration: 2.5, ease: "linear", repeat: Infinity, repeatType: "mirror" }
      )
      
      // The background starts glowing intensely just before climax
      animate(".bg-glow", { opacity: 0.5, scale: 1 }, { duration: 2.5, ease: "easeIn" })

      await Promise.all(stormPromises)

      // STOP VIBRATION
      animate(".shake-container", { x: 0, y: 0 }, { duration: 0.1 })

      // --- PHASE 4: THE CLIMAX EXPLOSION ---
      // 1. Shockwave Ring Expands
      animate(".energy-ring", 
        { opacity: [0, 1, 0], scale: [0, 2, 4], borderWidth: ["20px", "5px", "0px"] }, 
        { duration: 0.8, ease: "easeOut" }
      )

      // 2. Strawberries violently explode OUTWARD in FULL color
      for(let i=0; i<numBerries; i++) {
        const explodeX = (Math.random() - 0.5) * 600
        const explodeY = (Math.random() - 0.5) * 600
        animate(`.straw-${i}`, 
          { 
            x: explodeX, 
            y: explodeY, 
            filter: "grayscale(0%) brightness(1) blur(0px)",
            scale: Math.random() * 1.5 + 0.5
          }, 
          { duration: 0.8, type: "spring", bounce: 0.6 }
        )
      }

      // 3. The Bottle flashes into full, vibrant color instantly
      animate(".shake-color", 
        { opacity: 1, filter: "brightness(1) blur(0px)", scale: 1 }, 
        { duration: 0.4, ease: "easeOut" }
      )
      animate(".shake-silhouette", { opacity: 0 }, { duration: 0.1 }) // Hide silhouette
      
      // 4. Background erupts into beautiful pink
      animate(".bg-glow", 
        { opacity: 1, scale: 1.5, background: "radial-gradient(circle, rgba(255,45,120,0.4) 0%, transparent 60%)" }, 
        { duration: 0.8, ease: "easeOut" }
      )

      // Milkshake ultimate bounce from the shockwave
      animate(".shake-container", 
        { scale: [1, 1.15, 0.95, 1], y: [0, -30, 10, 0] }, 
        { duration: 1, type: "spring", bounce: 0.5 }
      )

      // --- PHASE 5: IMPACTFUL REVEAL ---
      animate(".text-reveal-1", { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }, { duration: 0.6, type: "spring", bounce: 0.4 })
      animate(".text-reveal-2", { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }, { duration: 0.6, type: "spring", bounce: 0.4, delay: 0.1 })
      
      await animate(".enter-btn", 
        { opacity: 1, scale: 1 }, 
        { duration: 0.6, type: "spring", bounce: 0.5, delay: 0.3 }
      )
    }

    runSequence()
  }, [animate])

  return (
    <motion.div
      className="intro-loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(30px)" }}
      transition={{ duration: 1.5, ease: [0.64, 0, 0.78, 0] }} // Very slow dramatic exit
      style={{
        position: 'fixed', inset: 0, zIndex: 999999,
        background: '#030206', // Pure dark tension background
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', cursor: 'default'
      }}
    >
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontSize: '28vw', fontFamily: '"Bebas Neue", sans-serif', color: 'rgba(255,255,255,0.015)',
        pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 0, letterSpacing: '-0.02em',
        filter: 'blur(2px)'
      }}>
        THRILL
      </div>

      <div ref={scope} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10, width: '100%' }}>
        
        {/* Tension / Explosion Background Glow */}
        <div className="bg-glow" style={{
          position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)',
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)', filter: 'blur(50px)', zIndex: 0
        }} />

        {/* Shockwave Ring */}
        <div className="energy-ring" style={{
          position: 'absolute', top: '50%', left: '50%', width: '300px', height: '300px',
          border: '10px solid var(--hot-pink)', borderRadius: '50%',
          transform: 'translate(-50%, -50%)', zIndex: 5, pointerEvents: 'none',
          boxShadow: '0 0 50px var(--hot-pink), inset 0 0 50px var(--hot-pink)'
        }} />

        {/* Dynamic Storm Container */}
        <div className="shake-container" style={{ position: 'relative', width: '300px', height: '400px', zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
          {/* Swirling Strawberries (12 of them) */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 8, pointerEvents: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {[...Array(12)].map((_, i) => (
              <img 
                key={i} 
                src={strawberryImg} 
                className={`strawberry straw-${i}`} 
                style={{ 
                  position: 'absolute', 
                  width: `${Math.random() * 40 + 30}px`, // 30px to 70px
                  filter: 'drop-shadow(0 20px 20px rgba(0,0,0,0.8))',
                  zIndex: Math.random() > 0.5 ? 9 : 1 // Some in front, some in back
                }} 
              />
            ))}
          </div>

          {/* PHASE 1/2: The Grayscale Dark Apparition */}
          <motion.img 
            className="shake-silhouette"
            src={shakeImg} 
            alt="Milkshake Dark" 
            style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', zIndex: 2 }} 
          />

          {/* PHASE 4: The Climax Full Color Shake */}
          <motion.img 
            className="shake-color"
            src={shakeImg} 
            alt="Milkshake Filled" 
            style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', zIndex: 3, filter: 'drop-shadow(0 0 60px rgba(255,45,120,0.5))' }} 
          />

        </div>

        {/* Cinematic Impact Typography */}
        <div style={{ marginTop: '30px', textAlign: 'center', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ overflow: 'hidden', padding: '10px' }}>
            <h1 className="text-reveal-1 text-reveal" style={{ 
              fontFamily: '"Bebas Neue", sans-serif', 
              fontSize: 'clamp(5rem, 10vw, 9rem)', 
              background: 'linear-gradient(to bottom, #ffffff 30%, #a4a5a1 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              lineHeight: 0.9, letterSpacing: '0.04em',
              filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.8))',
              margin: 0
            }}>
               SHAKE.YARD
            </h1>
          </div>
          
          <div style={{ overflow: 'hidden' }}>
            <p className="text-reveal-2 text-reveal" style={{ 
              fontSize: '0.9rem', color: 'var(--hot-pink)', 
              letterSpacing: '0.45em', textTransform: 'uppercase',
              fontWeight: 700, fontFamily: '"Space Mono", monospace',
              margin: 0
            }}>
              My Milkshake Brings All The Boys To The Yard
            </p>
          </div>
        </div>

        {/* Climax Call to Action */}
        <motion.button 
          className="enter-btn"
          onClick={onComplete}
          whileHover={{ scale: 1.05, background: 'var(--hot-pink)', color: 'white', borderColor: 'transparent', boxShadow: '0 0 50px rgba(255,45,120,0.8)' }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: '50px',
            padding: '20px 50px',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'var(--cream)',
            borderRadius: '100px',
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: '1.6rem',
            letterSpacing: '0.25em',
            cursor: 'none', 
            transition: 'background 0.4s, color 0.4s, border-color 0.4s, box-shadow 0.4s',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <span style={{ position: 'relative', zIndex: 2 }}>ENTER THE YARD ↗</span>
          <div style={{ position: 'absolute', top: 0, left: '-100%', width: '50%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)', transform: 'skewX(-20deg)', pointerEvents: 'none' }} />
        </motion.button>
        
      </div>
    </motion.div>
  )
}
