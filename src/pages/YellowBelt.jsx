import Navbar from "../components/Navbar"
import Music from "../components/Music"
import "./Belts.css"

const YellowBelt = () => {
  return (
    <main className="yellow main">
      <Navbar />
      <Music image="yellowBelt.jpg" audio="gently-sleep.mp3" />
    </main>
  )
}

export default YellowBelt
