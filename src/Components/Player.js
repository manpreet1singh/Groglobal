import React from 'react'
import ReactPlayer from 'react-player';
import './Player.css';
const Player = () => {
  return (
    <div className="player-wrapper">
    <ReactPlayer className="player"
      url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      controls={true}
    //  width='100%'
    //     height='100%'
    />
  </div>
  )
}

export default Player