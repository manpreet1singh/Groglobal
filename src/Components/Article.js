import React from 'react'
import './Article.css'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { articles } from './Assets'


const Article = () => {
    const [images,setImages]=useState([]);

    useEffect(() => {
        // Simulating a fetch with imported data
        setImages(articles);
      }, []);
  return (
    <div className="main-container">
        <div className="upper-sec">
            <h1>Articles</h1>
           <Link to='/'> <p>Back to home</p></Link> 
        </div>
        <div className="lower-sec">
        {images.map(image => (
          <div key={image.id} className="image-item"
          style={{ flexDirection: image.id % 2 === 1 ? 'row' : 'row-reverse' }}
          >
            <img src={image.src} alt={image.alt} />
            <div className="image-details">
              <h3>{image.title}</h3>
              <h4>{image.subtitle}</h4>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Article