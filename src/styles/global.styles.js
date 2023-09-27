import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    } 

    @font-face {
        font-family: Roboto;
        src: url('/font/Roboto-Regular.ttf') format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: Readex Pro;
        src: url('/font/ReadexPro-Regular.ttf') format('truetype');
        font-display: swap;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: rgba(0, 0, 0, 0.05);
    }
    :root {
        --rsbs-backdrop-bg: rgba(0, 0, 0, 0.6);
        --rsbs-bg: black;      
        --rsbs-overlay-rounded: 16px;
        --rsbs-handle-bg: #333333;
      }  
      ul{
        list-style: none;
      }
      .ant-table-container{
        color: gray !important;
      }
      .ant-table-thead >tr>th{
        color: gray !important;
      }
`;

export default GlobalStyles;
