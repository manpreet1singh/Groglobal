import React from 'react'
import './Bottom.css';
import result from "../Images/result.png";
import time from "../Images/time.png";
import support from "../Images/support.png";
const Bottom = () => {
  return (
    <div className="containerbottom">
        <div className="blueline"></div>
        <div className="content">
       <div className="head">
        <span>What do we </span>
        <br />
        <span style={{ color: '#55B7CE' }}>Promise?</span>
       
       </div>
       
       <div className="list">
            <ul>
                <li> <img  style={{ height: '90px',width:'90px' }} src={time} alt="time" /> On time Delivery</li>
                <li> <img  style={{ height: '90px',width:'90px' }} src={result} alt="result" /> Guranteed results</li>
                <li>  <img  style={{ height: '90px',width:'90px' }} src={support} alt="support" /> 24*7 Support</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Bottom