import { create } from 'domain';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #4F4F4F;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  body html #root {
    height: 100%;
  }
`;
