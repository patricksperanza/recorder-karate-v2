import Navbar from "../components/Navbar"
import Music from "../components/Music"
import "./Belts.css"

const GreenBelt = () => {
  return (
    <main className="green main">
      <Navbar />
      <Music image="greenBelt.png" audio="it's-raining.mp3" />
    </main>
  )
}

export default GreenBelt
