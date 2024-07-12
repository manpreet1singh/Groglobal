import React from 'react';
import Carousel from 'react-bootstrap/Carousel';





function IndividualIntervalsExample() {
  return (
  <div className='slider'>  
    <Carousel>
      <Carousel.Item interval={1000}>
        <h1>First Images</h1>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <h1>Second Images</h1>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <h1>Third Images</h1>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

export default IndividualIntervalsExample;