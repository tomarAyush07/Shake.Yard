import { useCart } from '../context/CartContext'
import shake1 from '../assets/shakeCoconut.png'
import shake2 from '../assets/blueberry.png'
import shake3 from '../assets/banana.png'
import shake4 from '../assets/grapefruit.png'
import shake5 from '../assets/strawberry.png'

const SHAKES = [
  { name: 'Coconut',label: 'Tropical',chipColor: '#d3d4cf', price: 'Rs 99', img: shake1, desc: 'Creamy, nutty, straight-up iconic.'},
  { name: 'Blueberry',  label: 'Antioxidant',chipColor: '#7f68ec', price: 'Rs 149', img: shake2, desc: 'Tangy, bold, unapologetically purple.'},
  { name:'Banana',label: 'Classic',chipColor: '#fac857', price: 'Rs 99', img: shake3, desc: 'Smooth, sweet, gym approved.' },
  { name: 'Grapefruit', label: 'Zesty',chipColor: '#ff6756', price: 'Rs 199', img: shake4, desc: 'Bright, citrusy, and it slaps hard.' },
  { name:'Strawberry',label:'Fan fave ★',chipColor:'#f27d9a', price: 'Rs 199',img: shake5, desc:'The OG. This is the one that started it all.'},
]
export default function Menu() {
  const { addItem, cart } = useCart()

  return (
    <>
    <div style={{ padding: '60px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: 'clamp(4rem,8vw,8rem)', lineHeight: 0.9, color: 'var(--cream)', marginBottom: '16px' }}>
        THE <span style={{ color: 'var(--hot-pink)' }}>MENU</span>
      </h1>
      <p style={{ fontSize: '0.82rem', color: 'rgba(255,248,240,0.4)', marginBottom: '60px' }}>Pick your poison. All shakes, all day, no regrets.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '24px' }}>
        {SHAKES.map(s => {
          const inCart = cart.find(i => i.name === s.name)
          return (
            <div key={s.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '100px 28px 28px', position: 'relative', overflow: 'visible' }}>
              <img src={s.img} alt={s.name} style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', height: '160px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} />
              <span style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.6rem', letterSpacing: '0.15em', padding: '4px 10px', borderRadius: '100px', border: `1px solid ${s.chipColor}`, color: s.chipColor }}>{s.label}</span>
              <div style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: '2rem', color: 'var(--cream)', marginBottom: '6px' }}>{s.name}</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,248,240,0.4)', lineHeight: 1.6, marginBottom: '20px' }}>{s.desc}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: '"Bebas Neue",sans-serif', fontSize: '1.5rem', color: 'var(--electric-yellow)' }}>{s.price}</span>
                <button onClick={() => addItem(s)} style={{ background: 'var(--hot-pink)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '100px', fontFamily: '"Bebas Neue",sans-serif', fontSize: '1rem', cursor: 'pointer' }}>
                  {inCart ? `IN BAG (${inCart.qty})` : 'ADD +'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}