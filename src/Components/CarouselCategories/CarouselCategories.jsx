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

    const categoryImages = {
        smartphones: 'https://i.imgur.com/gYVV2wt.png',
        laptops: 'https://i.imgur.com/tAGgheM.png',
        fragrances: 'https://i.imgur.com/J4AblsF.png',
        skincare: 'https://i.imgur.com/jcVUVFh.png',
        groceries: 'https://imgur.com/1Jl0cw5.png',
        'home-decoration': 'https://i.imgur.com/3r5a0sW.png',
        furniture: 'https://imgur.com/tgxulMT.png',
        tops: 'https://i.imgur.com/HJoNYB6.png',
        'womens-dresses': 'https://i.imgur.com/MK2yN9j.png',
        'womens-shoes': 'https://i.imgur.com/2ZvHa8b.png',
        'mens-shirts': 'https://i.imgur.com/9Aym2Gi.png',
        'mens-shoes': 'https://i.imgur.com/95BddFh.png',

        'mens-watches': 'https://i.imgur.com/hDF1Zje.png',

        'womens-watches': 'https://i.imgur.com/3RL5l9f.png',
        'womens-bags': 'https://i.imgur.com/PKaj9S0.png',
        'womens-jewellery': 'https://i.imgur.com/QQOpgb8.png',
        sunglasses: 'https://i.imgur.com/UIT2Ygg.png',
        automotive: 'https://i.imgur.com/p1512FS.png',
        motorcycle: 'https://i.imgur.com/GUuaslD.png',
        lighting: 'https://i.imgur.com/1eEoyxh.png',
    };



    console.log("CATEGORIES", categories);

    useEffect(() => {
        // Alguma lógica adicional que pode ser adicionada aqui
    }, []);

    return (
        <CarouselWrapper>
            <h2>Categories</h2>
            <CustomSlider {...settings}>
                {categories.map(category => (
                    <Item key={category}>
                        <>

                            <img
                                referrerpolicy="no-referrer"
                                className="image"
                                src={categoryImages[category]}
                                alt={category}
                            />
                        </>
                        <div className="title">{category.charAt(0).toUpperCase() + category.slice(1)}</div>
                    </Item>
                ))}
            </CustomSlider>
        </CarouselWrapper>
    );
};
