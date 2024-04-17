import { css } from '@emotion/react';
import InterBold from '../fonts/Inter-Bold.otf';
import InterMedium from '../fonts/Inter-Medium.otf';
import InterRegular from '../fonts/Inter-Regular.otf';

const GlobalStyles = () => {
  return css`
    :root {
      --button: #e44848;
      --main: #101828;
      --inputs: #f7f7f7;
      --block-features: #f2f4f7;
      --rating: #ffc531;
      --text: #475467;
      --font-family: 'Inter', sans-serif;
    }
    html,
    body {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-style: normal;
      width: 100%;
      height: 100vh;
      margin: 0;
      line-height: 1;
      scroll-behavior: smooth;
      transition: all 0.5s linear;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }
    a {
      color: currentColor;
      text-decoration: none;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
    button {
      cursor: pointer;
      border: none;
      padding: 0;
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 700;
      src: url(${InterBold}) format('truetype');
    }
    @font-face {
      font-family: 'Roboto';
      font-weight: 500;
      src: url(${InterMedium}) format('truetype');
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 400;
      src: url(${InterRegular}) format('truetype');
    }

    * {
      box-sizing: border-box;
    }

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #9ebbff;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
    }

    * {
      scrollbar-color: #9ebbff rgba(239, 237, 232, 0.1);
    }
  `;
};

export default GlobalStyles;
