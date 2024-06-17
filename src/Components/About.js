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
            <p>Lorem ipsum dolor sit amet consectetur. Commodo a augue duis amet diam molestie sit massa posuere. Bibendum a a ipsum felis diam feugiat cursus suspendisse. Pharetra lacinia massa mi elementum. Augue quis viverra dis etiam et massa nec gravida lorem. Pharetra dui amet eget imperdiet iaculis netus sed nunc amet. Erat augue cras aliquam ut sed. Amet blandit tortor odio justo sed sit vel viverra ut. Libero</p>
          </div>
          <button  className="aboutbutton">Get Started </button>
         

        </div>
        

      </div>
    


    </div>
  
    <Team/>
    <Story/>
    </div>
  )
}

export default About