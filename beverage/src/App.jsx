import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Lenis from 'lenis'
import { AnimatePresence, motion } from 'framer-motion'

import Ticker from './components/Ticker'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import CustomCursor from './components/CustomCursor'
import IntroLoader from './components/IntroLoader'


export default function App() {
  const [introDone, setIntroDone] = useState(false)
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.5,
      smoothWheel: true,
      smoothTouch: false,
    })
    function raf(time) {
      if (introDone) lenis.raf(time) 
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
    }
  }, [introDone])
  return (
    <CartProvider>
      <AnimatePresence mode="wait">
        {!introDone ? (
          <IntroLoader key="loader" onComplete={() => setIntroDone(true)} />
        ) : (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ width: '100%' }}
          >
            <Ticker />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      <CustomCursor />
    </CartProvider>
  )
}