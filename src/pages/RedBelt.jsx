import Navbar from "../components/Navbar"
import Music from "../components/Music"
import "./Belts.css"

const RedBelt = () => {
  return (
    <main className="red main">
      <Navbar />
      <Music image="redBelt.png" audio="twinkle-twinkle.mp3" />
    </main>
  )
}

export default RedBelt
