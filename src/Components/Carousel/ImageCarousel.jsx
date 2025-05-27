import React from 'react'
import { img } from './img/data'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import classes from './Carousel.module.css'; // Import your custom CSS for styling

function ImageCarousel() {
    return (
        <div>
            <Carousel
                showIndicators={false}
                infiniteLoop={true}
                autoPlay={true}
                showThumbs={false}
            >
                {
                    img.map((imageitemlink) => (
                        <div className={classes.hero_image} key={imageitemlink}>
                            <img
                                src={imageitemlink}
                                alt="carousel"
                            />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default ImageCarousel
