import React from "react"
import { FaBars } from "react-icons/fa"
import { useOutletContext } from "react-router-dom"
import "./Music.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

const Music = ({ audio, image }) => {
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
      <img className="music-image" src={`/images/${image}`} alt="music-image" />
      <audio
        controls="controls"
        className="music-audio"
        src={`/audio/${audio}`}
      ></audio>
    </div>
  )
}

export default Music
