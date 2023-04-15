import Navbar from "../components/Navbar"
import Music from "../components/Music"
import "./Belts.css"

const OrangeBelt = () => {
  return (
    <main className="orange main">
      <Navbar />
      <Music image="orangeBelt.jpg" audio="merrily-we-roll-along.mp3" />
    </main>
  )
}

export default OrangeBelt
