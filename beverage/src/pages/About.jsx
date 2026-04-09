// import CustomCursor from '../components/CustomCursor'
// export default function About() {
//   return (
//     <>
//      <CustomCursor />
//     <div style={{ padding: '60px 40px', maxWidth: '800px', margin: '0 auto' }}>
//       <h1 style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: 'clamp(4rem,8vw,8rem)', lineHeight: 0.9, color: 'var(--cream)', marginBottom: '40px' }}>
//         ABOUT <span style={{ color: 'var(--hot-pink)' }}>US</span>
//       </h1>
//       {[
//         ['The Yard 🏡', 'SHAKE.YARD started with one obsession: make a milkshake so good it brings everyone to the yard. We use 100% real fruit, no artificial stuff, and zero apologies.'],
//         ['Why we exist 🥤', 'Because protein shakes taste like chalk and smoothies are boring. We blended the best of both worlds — real fruit, high protein, maximum flavor.'],
//         ['Our promise 🌿', 'No artificial flavors. No weird preservatives. No cap. Just real ingredients that actually taste good.'],
//       ].map(([title, body]) => (
//         <div key={title} style={{ marginBottom: '48px' }}>
//           <h2 style={{ fontFamily: '"Permanent Marker",cursive', fontSize: '1.6rem', color: 'var(--electric-yellow)', marginBottom: '12px' }}>{title}</h2>
//           <p style={{ fontSize: '0.85rem', color: 'rgba(255,248,240,0.55)', lineHeight: 1.9 }}>{body}</p>
//         </div>
//       ))}
//     </div>
//     </>
//   )
// }
import { Link } from 'react-router-dom'

const TEAM = [
  { initial: 'A', name: 'Ayush Singh', role: 'Founder & Chief Shake Officer', color: '#ff2d78' },
  { initial: 'R', name: 'Riya Patel',  role: 'Head of Flavors',               color: '#7c3aed' },
  { initial: 'K', name: 'Karan Dev',   role: 'Head of Operations',            color: '#ffe600' },
]

const VALS = [
  ['🍓', 'Real fruit only', 'No concentrates, no syrups, no fake stuff. Ever.'],
  ['💪', 'Protein-packed', '24g of protein per shake. Your muscles called — we answered.'],
  ['🌿', 'Clean ingredients', 'If you can not pronounce it, it is not in your shake.'],
  ['🚀', 'Bold flavors', 'We did not come here to be boring. Every sip hits different.'],
]

export default function About() {
  return (
    <>
      <div className="page-content" style={{ padding: '60px 40px', maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <h1 style={{
          fontFamily: '"Bebas Neue",sans-serif', fontSize: 'clamp(4rem,8vw,8rem)',
          lineHeight: 0.9, color: 'var(--cream)', marginBottom: '24px',
        }}>
          ABOUT <span style={{ color: 'var(--hot-pink)' }}>US</span>
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,248,240,0.5)', lineHeight: 1.8, maxWidth: '560px', marginBottom: '70px' }}>
          SHAKE.YARD started with one obsession: make a milkshake so good it brings everyone to the yard.
          We use 100% real fruit, zero artificial anything, and absolutely zero apologies.
        </p>

        {/* Story sections */}
        {[
          ['The Yard 🏡', 'SHAKE.YARD started in a tiny kitchen with one blender, five fruits, and a stubborn belief that protein shakes don not have to taste like chalk. We blended the best of both worlds — real fruit, high protein, maximum flavor. Now we are bringing the yard to everyone.'],
          ['Why we exist 🥤', 'Because most "healthy" shakes taste like disappointment in a cup. We built something that actually tastes good — no fake sweeteners, no mystery powders, no compromises. Just fruit, protein, and vibes.'],
          ['Our promise 🌿', 'No artificial flavors. No weird preservatives. No filler ingredients. No cap. Just real stuff that actually tastes the way it should.'],
        ].map(([title, body]) => (
          <div key={title} style={{ marginBottom: '52px' }}>
            <h2 style={{ fontFamily: '"Permanent Marker",cursive', fontSize: '1.6rem', color: 'var(--electric-yellow)', marginBottom: '14px' }}>{title}</h2>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,248,240,0.55)', lineHeight: 1.9 }}>{body}</p>
          </div>
        ))}

        {/* Values grid */}
        <h2 style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--cream)', marginBottom: '32px' }}>
          WHAT WE <span style={{ color: 'var(--hot-pink)' }}>STAND FOR</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '16px', marginBottom: '70px' }}>
          {VALS.map(([icon, title, desc]) => (
            <div key={title} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px', padding: '24px',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{icon}</div>
              <div style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: '1.2rem', color: 'var(--cream)', marginBottom: '8px' }}>{title}</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,248,240,0.4)', lineHeight: 1.7 }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <h2 style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'var(--cream)', marginBottom: '32px' }}>
          THE <span style={{ color: 'var(--electric-yellow)' }}>TEAM</span>
        </h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '70px' }}>
          {TEAM.map(t => (
            <div key={t.name} style={{
              flex: '1 1 200px', background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '28px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
            }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%',
                background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Bebas Neue",sans-serif', fontSize: '1.6rem', color: 'var(--dark)',
                marginBottom: '14px',
              }}>
                {t.initial}
              </div>
              <div style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: '1.2rem', color: 'var(--cream)', marginBottom: '4px' }}>{t.name}</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,248,240,0.4)', letterSpacing: '0.08em' }}>{t.role}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,45,120,0.12), rgba(0,212,255,0.06))',
          border: '1px solid rgba(255,45,120,0.2)', borderRadius: '24px', padding: '40px',
          textAlign: 'center',
        }}>
          <div style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--cream)', marginBottom: '12px' }}>
            ENOUGH READING.<br /><span style={{ color: 'var(--hot-pink)' }}>TIME TO DRINK.</span>
          </div>
          <Link to="/menu" style={{
            display: 'inline-block', background: 'var(--hot-pink)', color: 'white',
            padding: '14px 36px', borderRadius: '100px',
            fontFamily: '"Bebas Neue",sans-serif', fontSize: '1.2rem',
            letterSpacing: '0.12em', textDecoration: 'none',
            boxShadow: '0 0 30px rgba(255,45,120,0.35)',
          }}>
            Shop the Menu →
          </Link>
        </div>
      </div>
    </>
  )
}