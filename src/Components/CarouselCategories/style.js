import styled from "styled-components";
import Slider from 'react-slick';

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
    background-color: blue;

  }


  .title {
    width: 210px;
    height: 50px;
    background-color: yellow;
  }
`;
