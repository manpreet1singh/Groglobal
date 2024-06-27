// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import logo  from "../Images/logo.png"

// const Navbar = () => {
//   const [currentPage, setCurrentPage] = useState('home');

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src={logo} alt="Your Logo" />
//         <span className="logo-text">Gro </span>
        
//       </div>
//       <ul className="nav-links">
//         <li className={currentPage === 'home' ? 'active' : ''}>
//           <Link to="/" onClick={() => handlePageChange('home')}>Home</Link>
//         </li>
//         <li className={currentPage === 'about' ? 'active' : ''}>
//           <Link to="/about" onClick={() => handlePageChange('about')}>About</Link>
//         </li>
//         <li className={currentPage === 'services' ? 'active' : ''}>
//           <Link to="/services" onClick={() => handlePageChange('services')}>Services</Link>
//         </li>
//         <li className={currentPage === 'contact' ? 'active' : ''}>
//           <Link to="/contact" onClick={() => handlePageChange('contact')}>Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png'; // Update this with the actual path to your logo
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
     setCurrentPage(page);
   };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Your Logo" />
        <span className="logo-text">Gro</span>
      </div>
      <button className="hamburger" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li className={currentPage === 'home' ? 'active' : ''}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li className={currentPage === 'about' ? 'active' : ''}>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li className={currentPage === 'services' ? 'active' : ''}>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        </li>
        <li className={currentPage === 'contact' ? 'active' : ''}>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
