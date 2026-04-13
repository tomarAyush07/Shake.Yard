import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useEffect, useRef, useState } from 'react'
import ShakeYardLogo from './Shakeyardlogo.jsx'

export default function Navbar() {
  const { totalItems } = useCart()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [bagBounce, setBagBounce] = useState(false)
  const prevItems = useRef(totalItems)
  useEffect(() => {
    if (totalItems > prevItems.current) {
      setBagBounce(true)
      const t = setTimeout(() => setBagBounce(false), 500)
      return () => clearTimeout(t)
    }
    prevItems.current = totalItems
  }, [totalItems])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const LINKS = [
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
  ]

  return (
    <nav
      style={{
        height: '70px',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 200,
        transition: 'background 0.35s, border-color 0.35s',
        background: scrolled ? 'rgba(26,24,32,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <ShakeYardLogo size="md" />
      </Link>

      <ul className="navbar-links">
        {LINKS.map(({ to, label }) => {
          const active = location.pathname === to
          return (
            <li key={to} className="nav-hide" style={{ position: 'relative' }}>
              <Link
                to={to}
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '1.2rem',
                  letterSpacing: '0.15em',
                  color: active ? 'var(--electric-yellow)' : 'var(--cream)',
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  display: 'block',
                  position: 'relative',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--electric-yellow)'}
                onMouseLeave={e => e.currentTarget.style.color = active ? 'var(--electric-yellow)' : 'var(--cream)'}
              >
                {label}
              </Link>
              <span style={{
                position: 'absolute', bottom: '-2px', left: 0,
                height: '1.5px', background: 'var(--electric-yellow)',
                width: active ? '100%' : '0%',
                transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1)',
                display: 'block',
              }} />
            </li>
          )
        })}

        <li>
          <Link
            to="/menu"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: '1.1rem',
              letterSpacing: '0.12em',
              background: 'var(--hot-pink)',
              color: 'white',
              padding: '9px 22px',
              borderRadius: '100px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s',
              transform: bagBounce ? 'scale(1.18)' : 'scale(1)',
              boxShadow: totalItems > 0 ? '0 0 20px rgba(255,45,120,0.5)' : 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.07) translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,45,120,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = totalItems > 0 ? '0 0 20px rgba(255,45,120,0.5)' : 'none' }}
          >
            Bag
            {totalItems > 0 && (
              <span style={{
                background: 'var(--electric-yellow)', color: 'var(--dark)',
                borderRadius: '50%', width: '20px', height: '20px',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', fontWeight: 700,
              }}>{totalItems}</span>
            )}
            🛍
          </Link>
        </li>
      </ul>
    </nav>
  )
}