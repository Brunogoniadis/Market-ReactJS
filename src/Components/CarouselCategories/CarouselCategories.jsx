import React, { useEffect } from 'react';
import { CarouselWrapper, CustomSlider, Item } from './style'

export const CarouselCategories = () => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,

    };

    useEffect(() => {
        // Optionally, you can add any additional initialization logic here
    }, []);

    return (
        <CarouselWrapper>
            <h2>
                Categories
            </h2>
            <CustomSlider {...settings}>

                <Item>
                    <div className="image">
                        teste
                    </div>
                    <div className="title">
                        12
                    </div>
                </Item>

                <Item>
                    <div className="image">
                        teste
                    </div>
                    <div className="title">
                        12
                    </div>
                </Item>

                <Item>
                    <div className="image">
                        teste
                    </div>
                    <div className="title">
                        12
                    </div>
                </Item>

                <Item>
                    <div className="image">
                        teste
                    </div>
                    <div className="title">
                        12
                    </div>
                </Item>

                <Item>
                    <div className="image">
                        teste
                    </div>
                    <div className="title">
                        12
                    </div>
                </Item>

                <Item>
                    <div className="image">
                        teste
                    </div>
                    <div className="title">
                        12
                    </div>
                </Item>

            </CustomSlider>
        </CarouselWrapper>
    );
};