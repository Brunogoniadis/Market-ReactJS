import React, { useEffect, useState } from 'react';
import { MainScreen } from './style';
import { UseHookProduct } from '../../Service/CustomHooks';
import star from '../../assets/fullStar.png';
import halfstar from '../../assets/halfStar.png';

export const Product = () => {
    const { productState, loading, error } = UseHookProduct(2);
    const [mainImage, setMainImage] = useState(productState?.thumbnail);



    function RenderStars() {
        const rating = productState?.rating;
        const ratingInt = Math.floor(rating);
        const ratingDecimal = (rating - ratingInt).toFixed(2).substring(1);

        const stars = [];

        for (let i = 0; i < ratingInt; i++) {
            stars.push(<img key={i} src={star} alt="Full Star" />);
        }

        if (ratingDecimal >= 0.5) {
            stars.push(<img key="half" src={halfstar} alt="Half Star" />);
        }

        return (
            <div className="stars-wrapper">
                {stars}
            </div>
        );
    }

    return (
        <MainScreen>
            <div className="content">
                <div className='item-picture-wrapper'>
                    <img src={mainImage || productState?.thumbnail} className="item-picture" />
                    <div className='item-images-wrapper'>
                        {productState?.images.slice(0, 4).map((imageUrl, index) => (
                            <button
                                className="mini-image-button"
                                key={index}
                                style={{ backgroundImage: `url(${imageUrl})` }}
                                onClick={() => setMainImage(imageUrl)} // Atualiza a imagem principal quando a miniatura é clicada
                            />

                        ))}
                    </div>
                </div>
                <div className="description-wrapper">
                    <div className='title-container'>
                        <h2>{productState?.title}</h2>
                    </div>

                    {RenderStars()}

                    <div>
                        <p>{productState?.description}</p>
                    </div>
                    <hr />
                    <div className="price-container">
                        <h2>US$ {productState?.price}</h2>
                        <p>Discount percentage: %{productState?.discountPercentage}</p>
                    </div>
                    <div className="buy-container">
                        <button className='buy-now'>Buy Now!</button>
                        <button>Add to cart</button>
                    </div>
                    <div className='obs-container'>
                        <p>Our current inventory is {productState?.stock}</p>
                    </div>
                </div>
            </div>
        </MainScreen>
    )
}
