import Hero from "../component/Hero"
import TranSummary from "../component/TranSummary"
import FeaturesInfo from "../component/FeaturesInfo"
import Navbar from "../component/Navbar"

const Landing = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <TranSummary/>
    <FeaturesInfo/>
    </>
  )
}

export default Landing