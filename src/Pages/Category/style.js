import styled from "styled-components";

export const MainScreen = styled.div`
    width: 100vw;
    height: 85vh;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    .footer-information{
        width: 100vh;
        height: 75px;
        max-width: 1920px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content{
        width: 100vw;
        max-width: 1920px;
        height: 100%;

        display: flex;
        flex-direction: row;



        .aside-filter{
            width: 20%;
            height: 100%;
            background-color: red;
        }
        .main-content{
            
            width: 80%;
            height: 100%;
            background-color: green;
        
            .title-container{
                height: 75px;
                width: 100%;
                background-color: red;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: row;
                padding: 35px;
            
            }
            .product-wrapper{
                display: grid;
                grid-template-columns: auto auto auto auto;
                justify-content: space-around;
            }
        }
    }
`