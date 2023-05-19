import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background-image: url("/img/background.jpg");
    background-size:     cover;                      
    background-repeat:   no-repeat;
    background-position: center center;  
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Catarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
