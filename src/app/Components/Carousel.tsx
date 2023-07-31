'use client'

import Carousel from 'react-bootstrap/Carousel';

import Banner from './Banner';


function CarouselComponent() {
  return (
    <div className=' md:h-32'>

    <Carousel >
      <Carousel.Item>
        <Banner title={'hello World'}/>
      </Carousel.Item>
      <Carousel.Item>
        <Banner title={'hello Sahidsmriti'}/>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselComponent;