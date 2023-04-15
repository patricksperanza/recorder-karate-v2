import React from "react"
import musicImg from "../assets/images/whiteBelt.jpg"
import audio from "../assets/audio/hot-cross-buns.mp3"
import "./Music.css"

const Music = () => {
  return (
    <div className="music">
      <img className="music-image" src={musicImg} />
      <audio controls="controls" className="music-audio" src={audio}></audio>
    </div>
  )
}

export default Music
