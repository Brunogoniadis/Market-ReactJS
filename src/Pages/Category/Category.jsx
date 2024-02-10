import React, { useState } from 'react'
import { MainScreen } from './style'
import { ProductCard } from '../../Components/ProductCard/ProductCard'

import { UseHookItemsByCategory } from '../../Service/CustomHooks'

export const Category = () => {

    const [paramFilter, setParamFilter] = useState('price')
    const [paramOrder, setParamOrder] = useState('desc')


    const { items, loading, error } = UseHookItemsByCategory('smartphones', true, paramOrder, paramFilter);



    return (
        <MainScreen>
            <div className="footer-information">
                teste
            </div>
            <div className="content">

                <div className="main-content">
                    <div className="title-wrapper">
                        <div className="title-container">
                            <p>teste2</p>
                            <p>teste</p>

                        </div>
                    </div>

                    <div className="product-wrapper">

                        {items.map(item => (
                            <ProductCard
                                key={item.id}
                                brand={item.brand}
                                price={item.price}
                                rating={item.rating}
                                title={item.title}
                                thumbnail={item.thumbnail}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </MainScreen>
    )
}
