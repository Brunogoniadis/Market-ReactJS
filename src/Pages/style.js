import styled from "styled-components";


export const MainDiv = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .grid-items{
        width: 100%;
        max-width: 1080px;
        display: grid;
        grid-template-columns: 310px 310px 310px;
        align-items: center;
        justify-content: space-between;

        margin-top: -15vh;

    }
`