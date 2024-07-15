import React from 'react'
import ReactPlayer from 'react-player';
import './Player.css';
import video from '../Videos/review.mp4';
const Player = () => {
  return (
    <div className="player-wrapper">
    <ReactPlayer className="player"
      url={video}
      controls={true}
    //  width='100%'
    //     height='100%'
    />
  </div>
  )
}

export default Player