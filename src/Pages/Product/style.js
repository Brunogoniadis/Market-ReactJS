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
        flex-direction: column;

    }

    .item-picture{
        height: 500px;
        width: 100%;
        object-fit: cover;
    }
    .item-images-wrapper {
        width: 100%;
        height: 20%;
        display: grid;
        overflow: hidden;
        grid-template-columns: repeat(auto-fill, minmax(20%, 1fr)); /* Colunas automáticas */
        justify-content: space-between;
        align-items: center; 
        gap: 4px;
    }

    .image-container {
        display: flex;
        object-fit: cover;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
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