import React from 'react'
import { MainProduct } from './style'

import { StarsCalc } from '../../Components/StarsCalc/StarsCalc'

export const ProductCard = (props) => {

    return (
        <MainProduct>
            <img className="image-wrapper"
                src={props.thumbnail}
            />

            <div className="text-wrapper">
                {props.title}

                <StarsCalc rating={props.rating} />
                <p>
                    US$ {props.price}
                </p>
            </div>
        </MainProduct>
    )
}
