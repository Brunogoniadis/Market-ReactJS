import styled from "styled-components";

export const MainProduct = styled.div`
    width: 210px;
    height: 230px;


    display: flex;
    flex-direction: column;

    .image-wrapper{
        height: 75%;
        width: 100%;

        background-position: center;
        object-fit: cover;
    }
    .text-wrapper{
        display: flex;
        flex-direction: column;
        margin: 5px;

        
    }
`