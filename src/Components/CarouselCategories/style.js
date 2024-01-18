import styled from "styled-components";
import Slider from 'react-slick';

import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'

export const CarouselWrapper = styled.div`
    width: auto;
    padding: 25px;
    height: 390px;
    margin-top: 35px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: white;
    


    h2{
      margin-top: 35px;
      display: flex;
      align-items: center;
      justify-content: start;
      width: 100%;
      font-size: 25px;
      font-weight: bold;
    }


`

export const CustomSlider = styled(Slider)`
  *{
    text-decoration: none;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  .slick-prev,
  .slick-next {
    font-size: 0px;
    height:100px;
    background-color: transparent;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 50px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid #C5C5C5;
    transition: all ease 500ms;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: #d9d9d9;

  }

  .slick-prev {
    background-image: url(${arrowLeft});

    display: flex;
    position: absolute;
    left: 0px;
    z-index: 501;
  }

  .slick-next {
  background-image: url(${arrowRight});
  display: flex;
    position: absolute;
    right: 0px;
    z-index: 501;

    

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
  display: flex;
  flex-direction: column; 
  align-items: flex-end; 
  justify-content: flex-end;
  border-radius: 50%;

  .image{
    height: 200px;
    width: 100%;
    background-repeat: no-repeat;
    object-fit: contain;
    border-radius: 50%;

    background-color: #D2D2D2;
    z-index: 500;
      display: flex;
      position: relative;
  }


  .title {    
    display: flex;
    position: relative;

    width: 210px;
    height: 50px;
    background-color: white;
    margin-top: -40px;
    z-index: 501;
    font-size: 20px;
    font-weight: bold;
  }
`;
