// import logoImg from "../assets/logo_sticker.png";
// export default function ShakeYardLogo({ size = 'md' }) {
//   const scale = { sm: 0.55, md: 1, lg: 1.4 }[size] || 1

//   const fontSize = `${Math.round(42 * scale)}px`
//   const iconW = Math.round(44 * scale)
//   const iconH = Math.round(54 * scale)
//   const strokeW = scale < 0.8 ? '2px' : scale > 1.2 ? '4px' : '3px'
//   const shadow = `${Math.round(3 * scale)}px ${Math.round(3 * scale)}px 0px #cc1a5a`;
//   const imgSize = Math.round(100 * scale);

//   return (
//     <div style={{
      
     
//       lineHeight: 1,
//     }}>
//       <img
//         src={logoImg}
//         alt="Shake Yard"
//         style={{
//           width: "200px",
//           height: "200px",
//           objectFit: "contain",
//         }}
//       />
//     </div>
//   )
// }
import logoImg from '../assets/logo_sticker.png'

export default function ShakeYardLogo({ size = 'md' }) {
  // Map size prop to actual pixel heights
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