import styled from "styled-components";

export const MainScreen = styled.div`
    width: 100vw;
    height: 85vh;

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

        @media (max-width: 1366px) {
            height: 500px;
        }

        
    }

    .item-picture-wrapper{
        height: 100%;
        width: 45%;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }

    .item-picture{
        height: 560px;
        width: 100%;
        object-fit: cover;

        @media (max-width: 1366px) {
            height: 380px;
        }
    }
    .item-images-wrapper {
        width: 100%;
        height: 20%;
        display: grid;
        overflow: hidden;
        grid-template-columns: auto auto auto auto;
        justify-content: space-between;
        align-items: center;
    }

    .mini-image-button {
        display: flex;
        object-fit: cover;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100px;
        height: 100px;
        padding: 5px;
        border: solid 3px #f0f0f0;


    }
    .mini-image-button:active {
        border: solid 3px #febd69;
    }

    .description-wrapper{
        width: 50%;
        height: 500px;

        margin: 0px 15px;
        border-radius: 10px;
        border: 1px solid grey;
        align-self: flex-start;

        @media (max-width: 1366px) {
            height: 500px;
        }

        h3{
            font-size: 22px;
        }
        
        h2{
            font-size: 26px;
        }
        
        *{            
            margin: 24px;
        }
        hr{
           
            padding: 0;
        }
        h1,h2,h3,h4,p {
            margin: 0; 
            padding: 0;
        }
        .stars-wrapper{
            width: 150px;
            height: 50px;


            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: start;

            img{
                width: auto;
                height: 15px;
                background-position: center;
                background-size: contain;
                object-fit: contain;
                padding: 0;
                margin: 5px;

            }
        }

        .price-container{
            width: auto;
            height: auto;
            

            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
        }
        .buy-container{
            width: auto;
            height: 100px;

            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
        
            button{

                width: 50%;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50px;
                border: none;
                
            }

            .buy-now{
                background-color: #ffa41c;
            }
            .add-cart{
                background-color: #ffd814;

            }
        }
        .obs-container{
            
            width: auto;
            height: auto;
        }

    }
`