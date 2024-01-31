import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');

  :root {
    font-size: 60%;
    font-family: 'Rubik', sans-serif;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 15px;
    box-sizing: border-box;
  }

  body, html {
    width: 100vw;
    height: 100vh;
    
    &:after {
      content: '';
      position: fixed;
      bottom: 0%;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
  }

  body {
    font-family: 'Rubik', sans-serif;
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow-y: overlay;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    font-family: 'Rubik', sans-serif;

  }

  h1, h2, h3, h4, strong {
    font-weight: 500;
    text-decoration: none;
  }

  
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 14px;
  }
  h4 {
    font-size: 12px;
  }

  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  /*  Scrollbar  */

  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color:#131921 #e3e6e6;
  }

  /* Chrome, Edge,  Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #e3e6e6;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #131921;
    border-radius: 10px;
    border: 3px solid #e3e6e6;
  }
`;
