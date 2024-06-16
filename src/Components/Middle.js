import React from 'react'
import "./Middle.css";
import Cards from './Cards';
const Middle = () => {
  return (
    <div className="containernew" >
    <div className="headers"><h3>Our Creative Services</h3>
    <h1>The Top Digital Marketing Services We Provide</h1>
    </div>
    <Cards/>
    <button  className="button">Book an appointment </button>
    </div>
  )
}

export default Middle