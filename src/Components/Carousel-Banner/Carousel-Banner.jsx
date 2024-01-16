import React, { useEffect } from 'react';
import { CarouselWrapper, CustomSlider } from './style'

export const CarouselBanner = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          
        autoplaySpeed: 3000,     
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