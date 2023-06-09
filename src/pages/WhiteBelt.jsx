import Navbar from "../components/Navbar"
import Music from "../components/Music"
import "./Belts.css"

const WhiteBelt = () => {
  return (
    <main className="white main">
      <Navbar />
      <Music image="whiteBelt.jpg" audio="hot-cross-buns.mp3" />
    </main>
  )
}

export default WhiteBelt
