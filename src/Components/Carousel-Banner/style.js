import styled from "styled-components";
import Slider from 'react-slick';

export const CarouselWrapper = styled.div`
    width: 100%;
    height: 720px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
`

export const CustomSlider = styled(Slider)`
  *{
    text-decoration: none;
  }
  width: 100vw;


    height: 720px;

  .slick-list{
    width: 100vw;
    max-width: 1920px;
    height: 100%;

    display: grid;

    margin-bottom: 2rem;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        width: 100%;
      height: 720px;
      }
  }

`

export const ImageWrapper = styled.img`
      width: 100%;
      height: 720px;

      display: flex;
      align-items: center;
      justify-content: center;

      
`
