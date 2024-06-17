import React from 'react'
import Player from './Player'
import './Story.css';
import './Player.css';
const Story = () => {
  return (
    <div className="story">
      <Player/>
      <div className="story-right">
      <div className="storyblue-line"></div>
        <h2>Don't Listen to us,</h2>
        <h2>Listen to our <span style={{ color: '#55B7CE' }} >Success story</span> </h2>
        <p>Lorem ipsum dolor sit amet consectetur. Etiam imperdiet a malesuada adipiscing donec. Adipiscing enim neque eget semper sem commodo. Integer viverra suspendisse scelerisque cras lectus sodales. Ali</p>
      </div>

    </div>
  )
}

export default Story