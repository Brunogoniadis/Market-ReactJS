import styled from "styled-components";

export const MainProduct = styled.div`
    width: 320px;
    height: 430px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 1rem;

    .picture{
        width: 100%;
        height: 250px;

        background-size: contain;
        background-position: center;
        object-fit: cover;
        background-color: red;
    }

    .name{
        width: 100%;
        height: 2ch;
    }
    .price{
        width: 100%;
        margin: 0;
        padding: 0;
        gap: 0;
        height: 40px;
    }

`