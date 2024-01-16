import React from 'react'
import { MainElement } from './style'
import {ProductFile} from '../ProductFile/ProductFile.jsx'
export const Suggestions = () => {
  return (
    <MainElement>
      <h2>Suggestions</h2>
      <div className='suggestions-wrapper'>
        <ProductFile/>
      </div>
    </MainElement>
  )
}
