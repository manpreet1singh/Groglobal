import React, { useState } from 'react'
import './Contact.css';
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
  return (
    <div className="contact-form">
    <h1>Contact Us...</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Id *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="query">Your Query *</label>
        <textarea
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
    <div className="illustration">
      {/* Illustration of a customer service representative */}
      <img src="/path/to/illustration.png" alt="Customer Service Rep" />
    </div>
  </div>
);
  
}

export default Contact