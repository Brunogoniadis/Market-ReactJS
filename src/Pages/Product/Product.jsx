import React, { useState } from 'react'
import { MainScreen } from './style'
import { UseHookProduct } from '../../Service/CustomHooks'
import star from '../../assets/fullStar.png';
import halfstar from '../../assets/halfStar.png';

export const Product = () => {

    const { productState, loading, error } = UseHookProduct(4);


    const [rating, setRating] = useState(4.3); // Defina a classificação inicial do produto

    function ProductRating({ rating }) {
        const renderStars = () => {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating - fullStars >= 0.5;

            const stars = [];

            for (let i = 0; i < fullStars; i++) {
                stars.push(<img key={`star-${i}`} src={star} alt="Full Star" />);
            }

            if (hasHalfStar) {
                stars.push(<img key={`half-star`} src={halfstar} alt="Half Star" />);
            }

            return stars;
        };

        return (
            <div className="stars-wrapper">
                {renderStars()}
            </div>
        );
    }



    console.log("produto", productState)

    return (
        <MainScreen>
            <div className="content">
                <div className='item-picture-wrapper'>
                    <img
                        src={productState?.thumbnail}
                        className="item-picture" />
                    <div className='item-images-wrapper'>
                        {productState?.images.slice(0, 4).map((imageUrl, index) => (
                            <img className="image-container" key={index} src={imageUrl} alt={`Imagem ${index + 1}`} />
                        ))}
                    </div>
                </div>
                <div className="text-container">
                    <div className='title-container'>
                        <h2>
                            {productState?.title}
                        </h2>
                    </div>

                    <div className="stars-wrapper">
                        {renderStars()}
                    </div>
                    <div>

                        <p>{productState?.description}</p>

                    </div>
                    <hr></hr>
                    <div className="price-container">
                        <h2>
                            US$ {productState?.price}
                        </h2>
                        <p>Discount percentage: %{productState?.discountPercentage}
                        </p>
                    </div>
                    <div className="buy-container">
                        <button className='buy-now'>
                            Buy Now!
                        </button>
                        <button>
                            Add to cart
                        </button>
                    </div>
                    <div className='obs-container'>
                        <p>Our current inventory is {productState?.stock}</p>
                    </div>
                </div>
            </div>
        </MainScreen>
    )
}
