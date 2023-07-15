import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  hr {
    opacity: 0.3;
    cursor: pointer;
  }

  html, body, #__next {
    height: 100%;
  }


  body {
    background-color: #F6F6F9;
  }

  .ReactModal__Overlay {
    z-index:9999;
  }

    .ReactModal__Content{
      @media screen and (max-width: 1024px) {
        width: 80% !important;
      }

      @media screen and (max-width: 580px) {
        width: 90% !important;
      }
    }
.icon-spin {
  -webkit-animation: icon-spin 1s infinite linear;
          animation: icon-spin 1s infinite linear;
}

.icon-spin-middle{
  -webkit-animation: icon-spin 1.2s infinite linear;
          animation: icon-spin 1.2s infinite linear;
}

@-webkit-keyframes icon-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}

@keyframes icon-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}


.loading-spinner {
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;
}
.loading-spinner div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 84px;
  height: 84px;
  margin: 8px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: loading-spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #ff0073 transparent transparent transparent;
}
.loading-spinner div:nth-child(1) {
  animation-delay: -0.45s;
}
.loading-spinner div:nth-child(2) {
  animation-delay: -0.3s;
}
.loading-spinner div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loading-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

export default GlobalStyles
