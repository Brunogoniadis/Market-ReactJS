import React, { useEffect } from 'react';
import { CarouselWrapper, CustomSlider, ImageWrapper } from './style'
import frameSlide1 from '../../assets/frameslide1.png'

export const CarouselBanner = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    useEffect(() => {
        // Optionally, you can add any additional initialization logic here
    }, []);

    return (
        <CarouselWrapper>
            <CustomSlider {...settings}>

                <div>
                    <ImageWrapper
                        src={frameSlide1}
                    />
                </div>

            </CustomSlider>
        </CarouselWrapper>
    );
};