import "./Navbar.css"
import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai"
import { useOutletContext } from "react-router-dom"

const Navbar = () => {
  const [sidebar, setSidebar] = useOutletContext()
  return (
    <nav className={sidebar ? "navbar active" : "navbar"}>
      <Link to="/">
        <button className="btn">
          <AiOutlineHome />
        </button>
      </Link>
      <Link to="/white">
        <button className="btn btn-white">White</button>
      </Link>
      <Link to="/yellow">
        <button className="btn btn-yellow">Yellow</button>
      </Link>
      <Link to="/orange">
        <button className="btn btn-orange">Orange</button>
      </Link>
      <Link to="/green">
        <button className="btn btn-green">Green</button>
      </Link>
      <Link to="/purple">
        <button className="btn btn-purple">Purple</button>
      </Link>
      <Link to="/blue">
        <button className="btn btn-blue">Blue</button>
      </Link>
      <Link to="/red">
        <button className="btn btn-red">Red</button>
      </Link>
      <Link to="/brown">
        <button className="btn btn-brown">Brown</button>
      </Link>
      <Link to="/black">
        <button className="btn btn-black">Black</button>
      </Link>
    </nav>
  )
}

export default Navbar
