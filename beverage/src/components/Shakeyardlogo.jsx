import logoImg from '../assets/logo_sticker.png'

export default function ShakeYardLogo({ size = 'md' }) {
  const heights = { sm: 40, md: 52, lg: 72 }
  const h = heights[size] || 52
  return (
    <div style={{ lineHeight: 1, display: 'inline-flex', alignItems: 'center' }}>
      <img
        src={logoImg}
        alt="Shake Yard"
        style={{
          height: `${h}px`,
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  )
}