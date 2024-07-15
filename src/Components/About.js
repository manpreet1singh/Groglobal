import React from 'react'
import './About.css'
import about from '../Images/about.png';
import Team from './Team';
import Story from './Story';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
    <div className="aboutcontainer">
      <div className="aboutupper">
        <h1>About Us</h1>
        <span>
            <Link to="/">Home</Link> {'>'} About Us
          </span>
      </div>
      <div className="aboutlower">
        <div className="aboutlower-left">
        <img src={about} alt="meet" ></img>
        </div>
        <div className="aboutlower-right">
          <div className="aboutlower-right-upper">
          <div className="aboutblue-line"></div>
          <div className="aboutheading">
           <h2>Build Up Your  </h2>
           <h2> Organization with</h2> 
           <h2> our Solutions</h2>
          </div>
          </div>
          <div className="aboutlower-right-down">
            <p>Our social media agency helps creators start from zero by thoroughly researching the target audience to identify key demographics, likes, behaviours and preferences. We develop content strategies that align with the creator’s brand recognition, plan content types, themes, styles, and formats. We determine the most appropriate social media platforms based on the creator’s goals and optimize the content pages for maximum visibility and engagement. Additionally, we help create high-quality content, including images, videos, and text, and scheduling posts in a more accessible and engaging way fully incorporate, enabling strong and efficient data acquisition</p>
          </div>
          <Link to='/services'><button  className="aboutbutton">Get Started </button></Link>
        </div>
      </div>
    </div>
    <Team/>
    <Story/>
    </div>
  )
}

export default About