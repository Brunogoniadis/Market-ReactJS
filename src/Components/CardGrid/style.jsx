import styled from "styled-components";

export const  MainElement = styled.div`
    width: 310px;
    height: 350px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: red;

    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        font-weight: bold;
    }

    .image-container{
        width: 270px;
        height: 270px; 
        background-color: green;
    }
`