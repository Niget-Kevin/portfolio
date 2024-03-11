import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.scss';

function Slider({ images }) {
    return (
        <Carousel 
            autoPlay 
            interval={3000}
            infiniteLoop 
            thumbWidth={120}
            showStatus={false}
        >
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </Carousel>
    );
}

export default Slider;
