import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const LINKS = {
  Menu: [
    { label: 'Coconut Shake',    to: '/menu' },
    { label: 'Blueberry Shake',  to: '/menu' },
    { label: 'Banana Shake',     to: '/menu' },
    { label: 'Grapefruit Shake', to: '/menu' },
    { label: 'Strawberry Shake', to: '/menu' },
  ],
  Company: [
    { label: 'About Us',    to: '/about' },
    { label: 'Our Story',   to: '/about' },
    { label: 'Ingredients', to: '/about' },
    { label: 'Blog',        to: '/' },
    { label: 'Careers',     to: '/' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/' },
    { label: 'Terms of Use',   to: '/' },
    { label: 'Imprint',        to: '/' },
    { label: 'Cookie Policy',  to: '/' },
    { label: 'Refund Policy',  to: '/' },
  ],
}

const SOCIALS = [
  { label: 'IG', href: '#', color: '#ff2d78' },
  { label: 'TW', href: '#', color: '#00d4ff' },
  { label: 'YT', href: '#', color: '#ff2d78' },
  { label: 'TT', href: '#', color: '#ffe600' },
]

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const els = footerRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-scale')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.08 })
    els?.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: '#151318', paddingTop: '70px' }}
    >
      {/* shimmer divider */}
      <div className="section-divider" />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>
        {/* Top CTA */}
        <div
          className="footer-cta reveal-scale"
          style={{
            background: 'linear-gradient(135deg, rgba(255,45,120,0.12), rgba(0,212,255,0.06))',
            border: '1px solid rgba(255,45,120,0.2)', borderRadius: '28px',
            padding: '40px 50px', display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '70px',
            transition: 'border-color 0.3s, box-shadow 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,45,120,0.4)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(255,45,120,0.08)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,45,120,0.2)'; e.currentTarget.style.boxShadow = 'none' }}
        >
          <div>
            <div style={{
              fontFamily: '"Bebas Neue",sans-serif', fontSize: 'clamp(1.8rem,3vw,2.8rem)',
              color: 'var(--cream)', lineHeight: 1, marginBottom: '8px',
            }}>
              READY TO JOIN <span style={{ color: 'var(--hot-pink)' }}>THE YARD?</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,248,240,0.4)', letterSpacing: '0.05em' }}>
              Start with your first shake. Thank us later.
            </p>
          </div>
          <Link
            to="/menu"
            className="footer-order-btn"
            style={{
              background: 'var(--hot-pink)', color: 'white', padding: '14px 36px',
              borderRadius: '100px', fontFamily: '"Bebas Neue",sans-serif',
              fontSize: '1.2rem', letterSpacing: '0.12em', textDecoration: 'none',
              whiteSpace: 'nowrap', boxShadow: '0 0 30px rgba(255,45,120,0.35)',
              display: 'inline-block',
            }}
          >
            Order Now →
          </Link>
        </div>

        <div
          className="footer-main-grid reveal"
          style={{ gap: '50px', marginBottom: '60px' }}
        >
          <div>
            <Link to="/" style={{
              fontFamily: '"Permanent Marker",cursive', fontSize: '1.6rem',
              color: 'var(--electric-yellow)', textDecoration: 'none', display: 'block', marginBottom: '16px',
              transition: 'color 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--hot-pink)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--electric-yellow)'}
            >
              SHAKE.YARD 🥤
            </Link>
            <p style={{
              fontSize: '0.72rem', color: 'rgba(255,248,240,0.35)',
              lineHeight: 1.8, marginBottom: '24px', maxWidth: '260px',
            }}>
              My milkshake brings all the boys to the yard. Crafted from 100% real fruit. No artificial stuff. No cap.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '28px' }}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.04)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: s.color, fontSize: '0.65rem',
                    fontFamily: '"Bebas Neue",sans-serif', letterSpacing: '0.05em',
                    textDecoration: 'none',
                    transition: 'border-color 0.25s, background 0.25s, transform 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = s.color
                    e.currentTarget.style.background = `${s.color}22`
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.transform = ''
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>

            <a
              href="mailto:hello@shakeyard.co"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '0.68rem', color: 'rgba(255,248,240,0.35)',
                textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--hot-pink)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,248,240,0.35)'}
            >
              ✉ hello@shakeyard.co
            </a>
          </div>
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <div style={{
                fontFamily: '"Bebas Neue",sans-serif', fontSize: '0.95rem',
                letterSpacing: '0.2em', color: 'rgba(255,248,240,0.25)',
                marginBottom: '20px', textTransform: 'uppercase',
              }}>{heading}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {items.map(item => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="footer-link"
                      style={{
                        fontSize: '0.74rem', color: 'rgba(255,248,240,0.45)',
                        textDecoration: 'none', letterSpacing: '0.04em',
                        display: 'inline-block',
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="footer-stats-bar"
          style={{
            display: 'flex', gap: '0',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            marginBottom: '32px', overflowX: 'auto',
          }}
        >
          {[['12K+','Happy Customers'],['4.9★','Average Rating'],['5','Bold Flavors'],['100%','Real Fruit'],['0','Artificial Stuff']].map(([num, lbl], i, arr) => (
            <div
              key={lbl}
              style={{
                flex: 1, textAlign: 'center', padding: '18px 10px',
                borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                minWidth: '100px', transition: 'background 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,45,120,0.04)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: '1.4rem', color: 'var(--hot-pink)', lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: '0.55rem', color: 'rgba(255,248,240,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '3px' }}>{lbl}</div>
            </div>
          ))}
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '16px', paddingBottom: '32px',
        }}>
          <span style={{ fontSize: '0.62rem', color: 'rgba(255,248,240,0.2)', letterSpacing: '0.1em' }}>
            © 2026 SHAKE.YARD — All rights reserved
          </span>
          <span style={{ fontSize: '0.62rem', color: 'rgba(255,248,240,0.15)', letterSpacing: '0.08em', fontFamily: '"Permanent Marker",cursive' }}>
            Made with 🥤 &amp; no regrets
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy', 'Terms', 'Cookies'].map(l => (
              <a
                key={l}
                href="#"
                style={{
                  fontSize: '0.62rem', color: 'rgba(255,248,240,0.2)',
                  textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,248,240,0.2)'}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-main-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
        }
        @media(max-width:900px){
          .footer-main-grid{ grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:560px){
          .footer-main-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}