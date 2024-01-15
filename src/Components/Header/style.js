import styled from 'styled-components';

export const Main = styled.div`  
    height: 80px;
    width: 100vw;

    background-color: #131921;
    display: flex;
    align-items: center;
    justify-content: center;

    div div{
        color: white;
    }

    .content{
        width: 100%;
        max-width: 1080px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
        .title{
            font-size: 26px;
            font-weight: bold;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;

            h6{
                color: #febd69;
                font-size: 26px;
            }
        }

        .nav-container{
            width: auto;
            height: 100%;
            gap: 2rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;

            a{
                font-size: 18px;
                text-align: center;
            }
        } 
    }
`;
