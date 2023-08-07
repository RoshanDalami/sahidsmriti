'use client'

import Carousel from 'react-bootstrap/Carousel';
import sliderImage01 from '../../../public/assets/operation02.jpeg'
import sliderImage02 from '../../../public/assets/group001.jpg'

import Banner from './Banner';


function CarouselComponent() {
  return (
    <div className=' md:h-32'>

    <Carousel >
      <Carousel.Item>
        <Banner title={'hello World'} image={sliderImage01}/>
      </Carousel.Item>
      <Carousel.Item>
        <Banner title={'hello Sahidsmriti'} image={sliderImage02} />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselComponent;