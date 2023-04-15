import Intro from "../components/Intro"
import Rules from "../components/Rules"
import { useOutletContext } from "react-router-dom"
import "./Home.css"
import logo from "../assets/images/logo.svg"
import Navbar from "../components/Navbar"
import { FaBars } from "react-icons/fa"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useState } from "react"

const Home = () => {
  const [sidebar, setSidebar] = useOutletContext()
  return (
    <div className="home">
      <header className="home-logo">
        {!sidebar && (
          <FaBars className="home-bars" onClick={() => setSidebar(!sidebar)} />
        )}
        {sidebar && (
          <AiOutlineCloseCircle
            className="home-bars"
            onClick={() => setSidebar(!sidebar)}
          />
        )}
        <img src={logo} alt="" />
        <div className="home-logo-border"></div>
      </header>
      <main className="home-main">
        <Navbar sidebar={sidebar} />
        <Intro />
        <Rules />
      </main>
    </div>
  )
}

export default Home
