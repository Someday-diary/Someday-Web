import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
  font-family: Noto Sans;
  src: url('/fonts/NotoSans-Regular.ttf') format('woff');
  }
  @font-face {
    font-family: AppleSDGothicBold;
    src: url('/fonts/AppleSDGothicNeoB.woff') format('woff');
  }
  @font-face {
    font-family: AppleSDGothicMedium;
    src: url('/fonts/AppleSDGothicNeoM.woff') format('woff');
  }
  @font-face {
    font-family: Pretendard100;
    src: url('/fonts/Pretendard-Thin.woff') format('woff');
  }
  @font-face {
    font-family: Pretendard200;
    src: url('/fonts/Pretendard-ExtraLight.woff') format('woff');
  }
  @font-face {
    font-family: Pretendard300;
    src: url('/fonts/Pretendard-Light.woff') format('woff');
  }
  @font-face {
    font-family: Pretendard400;
    src: url('/fonts/Pretendard-Regular.woff') format('woff');
  }
  @font-face {
    font-family: Pretendard500;
    src: url('/fonts/Pretendard-Medium.woff') format('woff');
  }
  @font-face {
    font-family: Pretendard600;
    src: url('/fonts/Pretendard-SemiBold.woff') format('woff');
  }
  @font-face {
    font-family: Pretendard700;
    src: url('/fonts/Pretendard-Bold.woff') format('woff');
  }
  @font-face {
    font-family: Pretendard800;
    src: url('/fonts/Pretendard-ExtraBold.woff') format('woff');
  }
  @font-face {
    font-family: Pretendard900;
    src: url('/fonts/Pretendard-Black.woff') format('woff');
  }

  html{
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Noto Sans, -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    overflow-x: hidden;
    min-height: 100vh;
  }
  a {
    color: inherit;
    padding: 0;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: -apple-system, sans-serif;
  }
  ul, li {
    list-style: none;
  }

  #__next {
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }
`;

export default GlobalStyle;