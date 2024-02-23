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




        .main-content{
            
            width: 100%;
            height: 100%;
            background-color: #e3e6e6;
            display: flex;
            flex-direction: column;
            align-items: center;
        
            .title-wrapper{
                height: 75px;
                width: 100%;
                background-color: #e3e6e6;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
                border-top: 1px solid black;
                border-right: 0;
                border-bottom: 1px solid black;
                border-left: 0;

                .title-container{
                    width: 1130px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-direction: row;
                    padding: 0px 35px 0px 35px;
                    height: 100%;
                .order-containers{
                    display: flex;
                    flex-direction: row;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    height: 100%;

                }
                .select-wrapper{
                    display: flex;
                        height: 100%;

                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }
                }
            }
            .product-wrapper{
                display: grid;
                grid-template-columns: auto auto auto auto;
                padding: 5px;
                gap: 15px;
                width: 1000px;
                justify-content: space-around;
            }
        }
    }
`