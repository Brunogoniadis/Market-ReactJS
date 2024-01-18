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

`