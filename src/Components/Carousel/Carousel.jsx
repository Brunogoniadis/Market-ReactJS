import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { CarouselWrapper, CustomSlider } from './style'

export const Carousel = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 5,
        autoplay: true,          // Enable autoplay
        autoplaySpeed: 10,     // Set autoplay speed to 2000 milliseconds (2 seconds)
      };

    useEffect(() => {
        // Optionally, you can add any additional initialization logic here
    }, []);

    return (
        <CarouselWrapper>
            <CustomSlider {...settings}>
                <div>
                    <h3>Slide 1</h3>
                </div>

                <div>
                    <h3>Slide 2</h3>
                </div>

                <div>
                    <h3>Slide 3</h3>
                </div>

            </CustomSlider>
        </CarouselWrapper>
    );
};