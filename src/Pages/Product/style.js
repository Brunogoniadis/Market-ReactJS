import styled from "styled-components";

export const MainScreen = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    .content{
        width: 1130px;
        height: 700px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;


    }

    .item-picture-wrapper{
        height: 100%;
        width: 45%;
        object-fit: cover;
        display: flex;
        flex-direction: column;

    }

    .item-picture{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .item-images-wrapper {
    width: 100%;
    height: 20%;
    display: grid;
    overflow: hidden;
    grid-template-columns: 22% 22% 22% 22%;
    justify-content: space-evenly;
    align-items: center; 
}

.image-container {
    display: flex;
    object-fit: cover;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
}
    
`