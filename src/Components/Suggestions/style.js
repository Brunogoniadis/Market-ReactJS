import styled from "styled-components";

export const MainElement = styled.div`
    width: 100%;
    height: 420px;
    margin-top: 35px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: red;
    overflow: hidden;
    max-width: 1080px;
    margin-bottom: 35px;
    h2{
      max-width: 1080px;
      display: flex;
      align-items: center;
      justify-content: start;
      width: 100%;
      background-color: yellow;
      height: 80px;
      font-size: 25px;
      font-weight: bold;
    }

    .suggestions-wrapper{
        width: 100%;
        height: 80%;
        background-color: green;
    }
    

`