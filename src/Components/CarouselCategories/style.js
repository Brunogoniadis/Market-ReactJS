import styled from "styled-components";
import Slider from 'react-slick';

import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'

export const CarouselWrapper = styled.div`
    width: 100%;
    height: 420px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: red;
    overflow: hidden;

    h2{
      max-width: 1080px;
      display: flex;
      align-items: center;
      justify-content: start;
      width: 100%;
      background-color: yellow;
      height: 100%;
      font-size: 25px;
      font-weight: bold;
    }

    margin-top: 35px;
`

export const CustomSlider = styled(Slider)`
  *{
    text-decoration: none;
  }


  background-color: green;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


  .slick-prev,
  .slick-next {
    font-size: 0px;
    background-color: red; 
    height:100px;
    background-color: transparent;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 50px;
    border-radius: 5px;
    border: 0px;
    background-color: #f2f2f2;
    transition: all ease 500ms;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: #d9d9d9;

  }

  .slick-prev {
    background-image: url(${arrowLeft});
  }

  .slick-next {
  background-image: url(${arrowRight});
  font-size: 0px;

    

  }

  .slick-next:before,  .slick-prev:before {
      content: '';
    
  }



  .slick-list{
    width: 100vw;
    max-width: 1080px;
    height: 320px;
    overflow: hidden;
    display: grid;

    margin-bottom: 2rem;


    .slick-track{
      background-color: red;
      overflow: hidden;
      width: 1080px;
    }


    div{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        
    }
  }

`

export const Item = styled.div`
  width: 210px;
  height: 210px;
  background-color: red;
  display: flex;
  flex-direction: column; 
  align-items: flex-end; 
  justify-content: flex-end;
  border-radius: 50%;
  overflow: hidden;

  .image{
    height: 160px;
    width: 100%;

  }


  .title {
    width: 210px;
    height: 50px;
    background-color: yellow;
  }
`;
