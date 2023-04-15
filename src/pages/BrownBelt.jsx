import Navbar from "../components/Navbar"
import Music from "../components/Music"
import "./Belts.css"

const BrownBelt = () => {
  return (
    <main className="brown main">
      <Navbar />
      <Music image="brownBelt.png" audio="amazing-grace.mp3" />
    </main>
  )
}

export default BrownBelt
