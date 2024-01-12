import styled from 'styled-components';

export const Main = styled.div`  
    height: 100px;
    width: 100vw;

    background-color: #EFEFEF;
    display: flex;
    align-items: center;
    justify-content: center;

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
                font-size: 20px;
                text-align: center;
            }
        } 
    }
`;
