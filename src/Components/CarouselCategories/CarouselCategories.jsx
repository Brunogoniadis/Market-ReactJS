import React, { useEffect } from 'react';
import { CarouselWrapper, CustomSlider, Item } from './style';
import { UseApiCategories } from '../../Service/CustomHooks';

export const CarouselCategories = () => {
    const { categories, loading, error } = UseApiCategories();

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
    };

    console.log("CATEGORIES", categories);

    useEffect(() => {
        // Alguma lógica adicional que pode ser adicionada aqui
    }, []);

    return (
        <CarouselWrapper>
            <h2>Categories</h2>
            <CustomSlider {...settings}>
                {categories.slice(0, 5).map(category => (
                    <Item key={category.id}>
                        <img
                            referrerpolicy="no-referrer"
                            className="image"
                            src={category.image}
                            alt={category.name}
                        />
                        <div className="title">{category.name}</div>
                    </Item>
                ))}
            </CustomSlider>
        </CarouselWrapper>
    );
};
