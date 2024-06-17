import React from 'react'
import "./Middle.css";
import Cards from './Cards';
import { Link } from 'react-router-dom';
const Middle = () => {
  return (
    <div className="containernew" >
    <div className="headers"><h3>Our Creative Services</h3>
    <h1 style={{ color: '#ffffff' }} >The Top Digital Marketing Services We Provide</h1>
    </div>
    <Cards/>
    <button  className="button"><Link to="/contact" >Book an appointment </Link></button>
    </div>
  )
}

export default Middle