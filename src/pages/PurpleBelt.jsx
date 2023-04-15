import Navbar from "../components/Navbar"
import Music from "../components/Music"
import "./Belts.css"

const PurpleBelt = () => {
  return (
    <main className="purple main">
      <Navbar />
      <Music image="purpleBelt.png" audio="old-macdonald.mp3" />
    </main>
  )
}

export default PurpleBelt
