import React from 'react'
import { MainElement } from './style'

export const CardGrid = (props) => {
  return (
    <MainElement>
      <div className='title'>
        {props.title}

      </div>
      <div className='image-container'>
        teste
      </div>
    </MainElement>
  )
}
