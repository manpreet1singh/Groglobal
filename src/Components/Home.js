import React from 'react'
import home1 from '../Images/home1.png';
import home2 from '../Images/home2.png';
import home3 from '../Images/home3.png';
import home from '../Images/home.png';
import homenew2 from '../Images/homenew2.png';
import wa from "../Images/wa.png" ;
import './Home.css';
import './transition.css';
import Card from './CardHome';
import { FiCpu } from "react-icons/fi";
import Brand from './BrandLogo';
import HomeDiv from './HomeDiv';
import HomeQues from './HomeQues';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  document.title=" GroGlobally | Home"
  return (
    
    <div className="main-section">
      <div className='contbutton'>
        <Link to="https://api.whatsapp.com/send?phone=918377059526">
         
            <img src={wa} alt='wastaap' />
            
         
          
        </Link>
      </div>

    <div className="home-container">
      
      <div className="home-content">
        <h1>Boost Your </h1>
         <div className='headin'><h1><span class="heading-span">Online  </span>   Presence</h1></div>
    
        <p class="main-para">One Stop Solution for your Digital Marketing needs. 
        </p>
        <Link to={'/services'}><button className="btn-home">Get Strarted</button></Link>
      </div>
      
    </div>

    
    <div class="home-card">
      <Card 
        title="Fast" 
        content="Specialized Teams and Data-Driven Decisions" 
        Icon={FiCpu} 
      />
      <Card 
        title="Efficient" 
        content="Client Communication and Cost Management" 
        Icon={FiCpu} 
       />
      <Card 
        title="Reliable" 
        content="Customized Solution and Ethical Practices" 
        Icon={FiCpu} 
      />
    </div>



      <div class="aboutHome">
        <div class="aboutHomeContent">
          <h2 class="heading">About Us</h2>
            <p class="para">Welcome to GroGlobally, where creativity and technology come together to drive unparalleled growth for your brand. We provide well-researched, optimized, and creative content to enhance your online visibility. Our cutting-edge business models include digital advertising, social media strategy, SEO, content writing, and business research. As a customer-facing digital marketing agency, we aim to make marketing tools accessible and economical for startups and entrepreneurs. At GroGlobally, we’re committed to providing strategic assessments tailored to your specific business needs. Join us to build a strong digital presence that drives growth and elevates your brand.

            </p>
          <Link to={'/about'}><button className="btn-home">Know More</button></Link>
        </div>
        <img src={home3} ></img>
      </div>
  
    {/* brand logos */}
    <Brand></Brand>
    <HomeDiv></HomeDiv>
    <HomeQues></HomeQues>
    

  </div>
  


   
  )
}

export default Home