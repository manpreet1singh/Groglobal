import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';
import Article from './Components/Article';
import ArticleDetail from './Components/ArticleDetail';
import WhatsappButton from './Components/WhatsappButton';



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar />
    <WhatsappButton/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/articles" element={<Article/>}/>
      <Route path="/articles/:id" element={<ArticleDetail/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>

  );
}

export default App;