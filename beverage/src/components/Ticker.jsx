// export default function Ticker() {
//   const words = [
//     { text: 'MY', color: 'pink' }, { text: 'MILKSHAKE', color: 'yellow' },
//     { text: 'BRINGS', color: 'cream' }, { text: 'ALL THE', color: 'pink' },
//     { text: 'BOYS', color: 'yellow' }, { text: 'TO THE', color: 'cream' },
//     { text: 'YARD', color: 'pink' },
//   ]

//   const repeated = [...words, ...words, ...words, ...words]

//   return (
//     <div style={{
//       background: 'var(--dark)', overflow: 'hidden', whiteSpace: 'nowrap',
//       position: 'sticky', top: 0, zIndex: 100,
//       borderBottom: '1px solid rgba(255,255,255,0.06)'
//     }}>
//       <div style={{
//         display: 'inline-flex', alignItems: 'center',
//         animation: 'ticker 22s linear infinite'
//       }}>
//         <style>{`
//           @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
//           .tw-pink { color: var(--hot-pink); }
//           .tw-yellow { color: var(--electric-yellow); }
//           .tw-cream { color: rgba(255,248,240,0.25); }
//         `}</style>
//         {repeated.map((w, i) => (
//           <span key={i} className={`tw-${w.color}`} style={{
//             fontFamily: '"Bebas Neue", sans-serif', fontSize: '1.5rem',
//             letterSpacing: '0.18em', padding: '12px 28px 12px 0', whiteSpace: 'nowrap'
//           }}>{w.text}</span>
//         ))}
//       </div>
//     </div>
//   )
// }
export default function Ticker() {
  const words = [
    { text: 'MY', color: 'pink' }, { text: 'MILKSHAKE', color: 'yellow' },
    { text: 'BRINGS', color: 'cream' }, { text: 'ALL THE', color: 'pink' },
    { text: 'BOYS', color: 'yellow' }, { text: 'TO THE', color: 'cream' },
    { text: 'YARD', color: 'pink' },
  ]

  const repeated = [...words, ...words, ...words, ...words]

  return (
    <div style={{
      background: 'var(--dark)', overflow: 'hidden', whiteSpace: 'nowrap',
      position: 'sticky', top: 0, zIndex: 100,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center',
        animation: 'ticker 22s linear infinite',
      }}>
        <style>{`
          @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .tw-pink { color: var(--hot-pink); }
          .tw-yellow { color: var(--electric-yellow); }
          .tw-cream { color: rgba(255,248,240,0.25); }
        `}</style>
        {repeated.map((w, i) => (
          <span
            key={i}
            className={`tw-${w.color} ticker-word`}
            style={{
              fontFamily: '"Bebas Neue", sans-serif', fontSize: '1.5rem',
              letterSpacing: '0.18em', padding: '12px 28px 12px 0', whiteSpace: 'nowrap',
            }}
          >
            {w.text}
          </span>
        ))}
      </div>
    </div>
  )
}