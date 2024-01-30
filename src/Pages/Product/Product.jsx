import React from 'react'
import { MainScreen } from './style'
import { UseHookProduct } from '../../Service/CustomHooks'


export const Product = () => {

    const { productState, loading, error } = UseHookProduct(4);

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
            </div>
        </MainScreen>
    )
}
