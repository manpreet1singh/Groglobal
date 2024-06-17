import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import ScrollToTop from './Components/ScrollToTop';



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;