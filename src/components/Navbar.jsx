import "./Navbar.css"
import { AiOutlineHome } from "react-icons/ai"

const Navbar = ({ sidebar }) => {
  return (
    <nav className={sidebar ? "navbar active" : "navbar"}>
      <button className="btn">
        <AiOutlineHome />
      </button>
      <button className="btn white">White</button>
      <button className="btn yellow">Yellow</button>
      <button className="btn orange">Orange</button>
      <button className="btn green">Green</button>
      <button className="btn purple">Purple</button>
      <button className="btn blue">Blue</button>
      <button className="btn red">Red</button>
      <button className="btn brown">Brown</button>
      <button className="btn black">Black</button>
    </nav>
  )
}

export default Navbar
