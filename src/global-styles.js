import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    color: #333333;
    font-size: 16px;
    ::-webkit-scrollbar{
      width: 13px;
  }
  ::-webkit-scrollbar-thumb{
      background: #0DD373;
      height: 20%;
      transition: 0.5s ease;
      &:active{
          background:#3bb78f ;
      }
      
  }
}`;
