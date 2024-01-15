import styled from "styled-components";
import Slider from 'react-slick';

export const CarouselWrapper = styled.div`
    width: 100%;
    height: 396px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: red;
    overflow: hidden;
`

export const CustomSlider = styled(Slider)`
  *{
    text-decoration: none;
  }
  background-color: green;
  .slick-list{
    width: 100vw;
    max-width: 1920px;
    height: 396px;

    display: grid;

    margin-bottom: 2rem;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;

    }


  }



`