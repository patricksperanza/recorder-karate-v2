import "./Navbar.css"
import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai"

const Navbar = ({ sidebar }) => {
  return (
    <nav className={sidebar ? "navbar active" : "navbar"}>
      <Link to="/">
        <button className="btn">
          <AiOutlineHome />
        </button>
      </Link>
      <Link to="/white">
        <button className="btn white">White</button>
      </Link>
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
