import React from 'react'
import { MainElement } from './style'
import { ProductFile } from '../ProductFile/ProductFile.jsx'
export const Suggestions = () => {
  return (
    <MainElement>
      <h2>Suggestions</h2>
      <div className='suggestions-wrapper'>
        <ProductFile img='https://cdn.dummyjson.com/product-images/2/1.jpg' id={2} />
        <ProductFile img="https://cdn.dummyjson.com/product-images/4/1.jpg" id={4}/>
        <ProductFile img="https://cdn.dummyjson.com/product-images/54/thumbnail.jpg" id={54}/>

      </div>
    </MainElement>
  )
}
