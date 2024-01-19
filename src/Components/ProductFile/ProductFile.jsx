import React from 'react'
import { MainProduct } from './ProductFile'

export const ProductFile = (props) => {
    return (
        <MainProduct>
            <img className='picture'
                src={props.img}
            />

        </MainProduct>
    )
}
