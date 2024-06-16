import React from 'react'
import  meet from "../Images/meet.jpg";
import  tick from "../Images/tick.png";
import './Services.css';
import Middle from './Middle';
const Services = () => {
  return (
    <div>
    <div className="container">
      <div className="upper">
        <h1>Services</h1>
        <span>Home{`>`} Services </span>
      </div>
      <div className="lower">
        <div className="lower-left">
        <img src={meet} alt="meet" />
        </div>
        <div className="lower-right">
          <div className="lower-right-upper">
          <div className="blue-line"></div>
          <div className="heading">
           <h2>How do we solve your</h2>
           <h2> problem</h2> 
          </div>
          </div>
          <div className="lower-right-down">
            <ul>
            <li className="list" >
              <img src={tick} className="check"></img>
              <span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laudantium.</span>
              </li>
            <li className="list"> <img src={tick} className="check"></img><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nisi.</span></li>
            <li className="list">  <img src={tick} className="check"></img><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta?</span></li>
            <li className="list"> <img src={tick} className="check"></img><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, voluptatum?</span></li>

            </ul>
          </div>
         

        </div>
        

      </div>
    


    </div>
    <Middle/>
    </div>
  )
}

export default Services