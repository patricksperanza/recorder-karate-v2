import Navbar from "../components/Navbar"
import Music from "../components/Music"
import "./Belts.css"

const BlueBelt = () => {
  return (
    <main className="blue main">
      <Navbar />
      <Music image="blueBelt.png" audio="when-the-saints.mp3" />
    </main>
  )
}

export default BlueBelt
