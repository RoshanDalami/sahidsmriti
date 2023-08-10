'use client'

import Carousel from 'react-bootstrap/Carousel';
import sliderImage01 from '../../../../public/assets/operation02.jpeg'
import sliderImage02 from '../../../../public/assets/group001.jpg'

import Banner from './Banner';


function CarouselComponent() {
  return (
    <div className=' md:h-32'>
    <Carousel >
      <Carousel.Item>
        <Banner sub={'We are here for you'} title={'What Makes You Better, Makes Us Better.'} description={'At Sahid Smriti Samudayik Hosital, we care our team members and team members care our patients. We aim to provide a great environment to overcome the difficulties being faceed by the patients.'} image={sliderImage01}/>
      </Carousel.Item>
      <Carousel.Item>
        <Banner sub={'World class equipments'} title={'The best equipments for the best results'} description={'World class equipments with precise outputs. The best possible diagnostic approach so that we get to know the problem and find the best possible treatments.'} image={sliderImage02} />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselComponent;