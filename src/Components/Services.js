import React from 'react'
import  meet from "../Images/meet.jpg";
import  tick from "../Images/tick.png";
import './Services.css';
import Middle from './Middle';
import Bottom from './Bottom';
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div className='main'>
    <div className="container">
      <div className="upper">
        <h1>Services</h1>
        <span>
            <Link to="/">Home</Link> {'>'} Services
          </span>
      </div>
      {/* <div className='contbutton'>
        <Link to="https://api.whatsapp.com/send?phone=918377059526">
         
            <img src={wa} alt='wastaap' />
            
         
          
        </Link>
      </div> */}
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
            <li className="lists" >
              <img src={tick} className="check"></img>
              <span >By Enhancing Brand Engagement</span>
              </li>
            <li className="lists"> <img src={tick} className="check"></img><span>Managing your brand's Reputation</span></li>
            <li className="lists">  <img src={tick} className="check"></img><span>Driving in Sales for your Product</span></li>
            {/* /*<li className="list"> <img src={tick} className="check"></img><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, voluptatum?</span></li>*/ }

            </ul>
          </div>
         

        </div>
        

      </div>
    


    </div>
    <Middle/>
    <Bottom/>
    </div>
  )
}

export default Services