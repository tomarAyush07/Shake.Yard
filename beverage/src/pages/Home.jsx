import '../styles/home.css'
import Hero from '../components/Hero'
import StatsStrip from '../components/StatsStrip'
import ShakeSlider from '../components/ShakeSlider'
import Ingredients from '../components/Ingredients'
import Newsletter from '../components/Newsletter'
import Lifestyle from '../components/Lifestyle'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ShakeSlider />
      <Ingredients />
      <Newsletter />
      <Lifestyle />
    </>
  )
}