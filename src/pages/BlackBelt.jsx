import Navbar from "../components/Navbar"
import Music from "../components/Music"
import "./Belts.css"

const BlackBelt = () => {
  return (
    <main className="black main">
      <Navbar />
      <Music image="blackBelt.png" audio="ode-to-joy.mp3" />
    </main>
  )
}

export default BlackBelt
