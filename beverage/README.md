# SHAKE.YARD — Enhanced Files Drop-In Guide

## What's in here
Every file is a drop-in replacement. Copy each file to the matching path in your project.

| This file              | Replaces in your project                    |
|------------------------|---------------------------------------------|
| home.css               | src/styles/home.css                         |
| CustomCursor.jsx       | src/components/CustomCursor.jsx             |
| Hero.jsx               | src/components/Hero.jsx                     |
| StatsStrip.jsx         | src/components/StatsStrip.jsx               |
| ShakeSlider.jsx        | src/components/ShakeSlider.jsx              |
| Ingredients.jsx        | src/components/Ingredients.jsx              |
| Lifestyle.jsx          | src/components/Lifestyle.jsx                |
| Newsletter.jsx         | src/components/Newsletter.jsx               |
| Navbar.jsx             | src/components/Navbar.jsx                   |
| Footer.jsx             | src/components/Footer.jsx                   |

## What was added / changed

### home.css
- Scroll reveal system (.reveal / .reveal-left / .reveal-right / .reveal-scale + .visible)
- Stagger delay classes (.delay-1 through .delay-6)
- Hero ring glowing conic-gradient border
- Blob animations upgraded (3-point path motion)
- hero-stat-card hover effect
- Animated section-divider shimmer line
- Footer link slide-right underline animation
- All existing responsive breakpoints preserved

### CustomCursor.jsx
- TWO elements: a precise dot + a lagging trailing ring (lerp interpolation via requestAnimationFrame)
- Ring turns yellow on hover instead of dot getting big
- Much smoother feel overall

### Hero.jsx
- 3D perspective tilt on the bottle ring following mouse position
- Parallax blobs that shift opposite to mouse direction
- Scroll-reveal on all left-side elements with stagger delays
- Flavor pills now tinted to their own color when active
- Hero stat cards with hover lift
- Floating blob3 added

### StatsStrip.jsx
- Count-up animation (0 → target) triggered when strip enters viewport
- Eased cubic count-up (not linear)
- Hover underline sweep effect on each stat

### ShakeSlider.jsx
- Cards glow with their own chipColor on hover
- Bottle image rotates and lifts more dramatically on hover
- ADD button turns green + shows "✓ ADDED" for 1s after click
- Dot indicators use each shake's chipColor when active
- Arrow buttons disabled (with opacity) at boundaries

### Ingredients.jsx
- Fruit images get colored drop-shadow matching their ingredient color on hover
- Cards shift up 4px on hover
- Color wash overlay appears behind content
- Number label changes to ingredient color on hover
- "Shop the menu" link turns yellow on hover
- Shimmer section divider above section

### Lifestyle.jsx
- Image has 3D perspective tilt following mouse
- List items slide in with staggered delays once section is visible
- Post-workout tag uses wiggle animation
- Shimmer divider above section

### Newsletter.jsx
- Full section scales in on scroll with reveal-scale
- Background diagonal stripe pattern
- Moving yellow glow orb animation
- Avatar circles lift on hover
- Input focus shows yellow glow ring

### Navbar.jsx
- Sticky with blur glassmorphism that activates on scroll
- Active page link shows yellow + underline
- Bag button bounces when item is added to cart
- Bag shows item count badge (yellow circle)

### Footer.jsx
- CTA box glows on hover
- Social icons lift + colored glow on hover
- Footer links slide right on hover with pink underline
- Stats bar items highlight on hover
- Section shimmer divider at top