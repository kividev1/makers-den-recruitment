import { createGlobalStyle } from 'styled-components';
import resetCSS from 'utils/resetStyles';
import theme from 'theme';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: text;
  }

  ::selection {
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    text-shadow: none;
    border-radius: 0;
  }

  ::-moz-selection {
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    text-shadow: none;
    border-radius: 0;
  }

  button,
  input,
  textarea,
  select {
    -webkit-appearance: none;
    background: none;
    font-family: inherit;
    border: none;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-transform: inherit;
    border-radius: 0;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: none; 
  }
   
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary}; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.secondary}; 
  }

  html,
  body {
    width: 100%;
    height: min-content;
  }

  ${resetCSS}
`;
