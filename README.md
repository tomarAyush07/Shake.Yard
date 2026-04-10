# 🥤 SHAKE.YARD

> *My milkshake brings all the boys to the yard.*

A bold, animated milkshake brand website built with React, Framer Motion, and a whole lot of flavor. Features a cinematic intro loader, interactive shake slider, 3D tilt effects, custom cursor, and a full cart system.

---

## ✨ Features

- **Cinematic Intro Loader** — multi-phase animation sequence with grayscale-to-color reveal, flying strawberries, shockwave ring, and a dramatic enter button
- **Custom Cursor** — dual-layer cursor (dot + trailing ring) with spring physics and interactive hover states
- **Hero Section** — 3D mouse-tracked tilt with parallax blobs and flavor-switching shake images
- **Shake Slider** — draggable/swipeable card carousel with 5 flavors, spring animations, and add-to-cart
- **Ingredients Section** — hover-animated ingredient cards with floating fruit imagery
- **Stats Strip** — animated counting numbers using Framer Motion springs
- **Lifestyle Section** — 3D tilt image card with staggered list reveals
- **Newsletter** — email signup with validation and animated success state
- **Sticky Navbar** — scroll-aware frosted glass navbar with active route underline and bag count badge
- **Cart System** — global context-based cart with add/remove/clear and price calculation
- **Ticker** — infinite scrolling marquee strip
- **Responsive Design** — mobile-first breakpoints at 900px, 600px, and 400px

---

## 🗂 Project Structure

```
src/
├── assets/               # Shake images, ingredient images, logo
├── components/
│   ├── CustomCursor.jsx  # Spring-physics dual cursor
│   ├── Footer.jsx        # Site footer
│   ├── Hero.jsx          # Landing hero with 3D tilt + flavor picker
│   ├── Ingredients.jsx   # Ingredient cards grid
│   ├── IntroLoader.jsx   # Cinematic intro animation sequence
│   ├── Lifestyle.jsx     # Lifestyle section with 3D card
│   ├── Navbar.jsx        # Sticky scroll-aware navbar
│   ├── Newsletter.jsx    # Email signup section
│   ├── ShakeSlider.jsx   # Draggable shake card carousel
│   ├── Shakeyardlogo.jsx # Logo component
│   ├── StatsStrip.jsx    # Animated stat counters
│   └── Ticker.jsx        # Scrolling marquee ticker
├── context/
│   └── CartContext.jsx   # Global cart state (add/remove/clear)
├── pages/
│   ├── Home.jsx          # Home page composition
│   ├── Menu.jsx          # Full menu grid with cart integration
│   └── About.jsx         # Brand story, values, team
└── styles/
    └── home.css          # Global styles, animations, responsive breakpoints
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| **React** | UI framework |
| **React Router** | Client-side routing (`/`, `/menu`, `/about`) |
| **Framer Motion** | All animations — springs, gestures, scroll-linked, sequences |
| **CSS (custom)** | Global variables, keyframes, responsive grid layouts |

### Fonts (via Google Fonts)
- `Bebas Neue` — headings and display text
- `Space Mono` — labels and monospace UI
- `Permanent Marker` — handwritten accent text

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/shake-yard.git
cd shake-yard
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

## 📦 Key Dependencies

```json
{
  "react": "^18",
  "react-router-dom": "^6",
  "framer-motion": "^11"
}
```

---

## 🎨 Design Tokens

Defined as CSS variables (set globally):

```css
--hot-pink:        #ff2d78
--electric-yellow: #ffe600
--lime:            #b8ff57
--cream:           #fff8f0
--dark:            #1a1820
```

---

## 🛒 Cart System

The cart is managed via React Context (`CartContext`). Any component can:

```js
const { cart, addItem, removeItem, clearCart, totalItems, totalPrice } = useCart()
```

Items are identified by `name`. Adding the same item increments `qty`. Prices are parsed from strings like `"Rs 99"` or `"Rs 1,499"`.

---

## 📱 Responsive Breakpoints

| Breakpoint | Changes |
|-----------|---------|
| `≤ 900px` | Hero goes single-column, hide image; lifestyle/newsletter stack vertically |
| `≤ 600px` | Nav links hidden (bag icon only); stats wrap; single-column everywhere |
| `≤ 400px` | Hero ring shrinks; ingredients single column |

---

## 📄 Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home.jsx` | Full landing page with all sections |
| `/menu` | `Menu.jsx` | Grid menu with cart add/remove |
| `/about` | `About.jsx` | Brand story, values, and team |

---

## 🙌 Credits

Built by the SHAKE.YARD team — Ayush Singh, Riya Patel, and Karan Dev.

---

*Brings all the boys to the yard. No notes.*