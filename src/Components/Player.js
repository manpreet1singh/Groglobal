import React from 'react'
import ReactPlayer from 'react-player';
import './Player.css';
const Player = () => {
  return (
    <div className="player-wrapper">
    <ReactPlayer className="player"
      url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      controls={true}
      width='517px'
      height=' 328px'
    />
  </div>
  )
}

export default Player