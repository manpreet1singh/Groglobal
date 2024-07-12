import React, { useState } from 'react'
import './Contact.css';
import im from '../Images/image 33.png';
const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    
    event.preventDefault();
    // Handle form submission logic here
    console.log('First Name:', firstName);
    console.log('Email:', email);
    console.log('Query:', query);
  };
  document.title=" GroGlobally | Contact"
  return (
    <div className="contact-form">
    
    <h1>Contact Us...</h1><br/>
      <div className='contact-links'>
        <h3>Contact us through Mail: <a href="mailto:info@groglobally.com?body=">info@groglobally.com</a><br/><br/>
        or<br/><br/>
        Contact Us directly at:<a href="tel:+918377059526"> +91-8377059526</a> </h3>
      </div>
    </div>
    

);
  
}

export default Contact