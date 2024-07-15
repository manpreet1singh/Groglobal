import React from 'react'
import ReactPlayer from 'react-player';
import './Player.css';

const Player = () => {
  return (
    <div className="player-wrapper">
    <ReactPlayer className="player"
      url="https://drive.google.com/file/d/1dQdsmFEUT0KEn6zLEpCCRaneoEtoAp67/view"
      controls={true}
    //  width='100%'
    //     height='100%'
    />
  </div>
  )
}

export default Player