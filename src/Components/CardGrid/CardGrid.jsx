import React from 'react';
import { MainElement } from './style';

export const CardGrid = (props) => {
  return (
    <MainElement>
      {props.img && (
        <>
          <div className='title'>
            {props.title}
          </div>

          <img className='image-container' src={props.img} loading="lazy" alt="Descrição da imagem" />

          <div className="price">$12,00</div>
        </>
      )}
    </MainElement>
  );
};
