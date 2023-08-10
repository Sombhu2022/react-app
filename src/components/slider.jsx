import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../style/slider.scss'

import  img1 from '../images/img1.jpg'
import  img2 from '../images/img2.jpg'
import  img3 from '../images/img3.png'
import  img4 from '../images/img4.png'


function slider() {
  return (
    <div className='slider-div'>
        <Carousel infiniteLoop autoPlay showArrows={false} showThumbs={false} showStatus={false} interval={2000} stopOnHover={true}>
            <div className='slider-image'>
                <img src={img1} alt="Image1" />
                <p className='legend'>this is slider image 1</p></div>
            <div className='slider-image'>
                <img src={img2} alt="Image2" />
                <p className='legend'>this is slider image 2</p></div>
            <div className='slider-image'>
                <img src={img3 } alt="Image3" />
                <p className='legend'>this is slider image 3</p></div>
            <div className='slider-image'>
                <img src={img4 } alt="Image4" />
                <p className='legend'>this is slider image 4</p></div>
        </Carousel>
    </div>
    
  )
}

export default slider