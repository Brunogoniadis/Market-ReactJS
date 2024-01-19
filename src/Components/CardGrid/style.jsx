import styled, { keyframes } from "styled-components";


export const blurAfter = keyframes`
    0% {
        backdrop-filter: blur(1px);
    }
    35% {
        backdrop-filter: blur(10px);
    }
    50% {
        backdrop-filter: blur(0px);
    }
`;

export const SidePrice = keyframes`
    0%{
        left: 35%;
        bottom: 40%;
        font-size: 26px;
        background-color: transparent;

    }
    
    80%{
        left: 35%;
        bottom: 40%;
        transform: scale(1.5);
        font-weight: bolder;
        background-color: transparent;

    }
    100%{
        left: 15%;
        bottom: 10%;
        transform: scale(1);
        background-color: #ffffff60;


    }
`
export const ColorFont = keyframes`
    0%{
        color: white;
    }
    100%{
        color: black;
    }
`

export const MainElement = styled.div`
    width: 310px;
    height: 350px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
    position: relative;
    .title{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        font-size: 26px;
        font-weight: bold;
        padding-left: 22px;
        
        animation: ${ColorFont} 850ms ease;
    }

    .image-container{
        width: 270px;
        height: 270px;
        background-size: cover;
        object-fit: cover;
        z-index: 500;
    }
    &::after{
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        
        z-index: 501;

        animation: ${blurAfter} 2s ease-out;
    }
    .price{
        position: absolute;
        left: 15%;
        bottom: 10%;
        color: black;
        font-size: 26px;
        font-weight: bold;
        z-index: 503;
        animation: ${SidePrice} 1s ease;
        background-color: #ffffff60;
        padding: 2%;
        display: flex;
        border-radius: 5px;
    }

`
