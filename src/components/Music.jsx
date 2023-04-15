import React from "react"
import { FaBars } from "react-icons/fa"
import musicImg from "../assets/images/whiteBelt.jpg"
import audio from "../assets/audio/hot-cross-buns.mp3"
import { useOutletContext } from "react-router-dom"
import "./Music.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

const Music = () => {
  const [sidebar, setSidebar] = useOutletContext()
  return (
    <div className="music">
      {!sidebar && (
        <FaBars className="music-bars" onClick={() => setSidebar(!sidebar)} />
      )}
      {sidebar && (
        <AiOutlineCloseCircle
          className="music-bars"
          onClick={() => setSidebar(!sidebar)}
        />
      )}
      <img className="music-image" src={musicImg} />
      <audio controls="controls" className="music-audio" src={audio}></audio>
    </div>
  )
}

export default Music
