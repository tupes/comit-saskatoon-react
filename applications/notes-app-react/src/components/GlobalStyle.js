import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    box-sizing: border-box;
  
    --med-size: 1em;
    --small-size: calc(var(--med-size) / 2);
    --tiny-size: calc(var(--small-size) / 2);
    --large-size: calc(var(--med-size) * 2);
    --huge-size: calc(var(--med-size) * 3);
  
    --med-border-radius: 0.4em;
    --large-border-radius: calc(var(--med-border-radius) * 2);
  
    /* CSS in Depth */
    --brand-green: #076448;
    --dark-green: #099268;
    --medium-green: #20c997;
    --black: #212529;
    --gray: #868e96;
    --light-gray: #f1f3f5;
    --extra-light-gray: #f8f9fa;
    --white: #fff;
  
    /* Bootstrap buttons*/
    --primary-button: #337ab7;
    --success-button: #5cb85c;
    --info-button: #5bc0de;
    --warning-button: #f0ad4e;
    --danger-button: #d9534f;
  
    /* Bootstrap background colors */
    --primary-background: #337ab7;
    --success-background: #dff0d8;
    --info-background: #d9edf7;
    --warning-background: #fcf8e3;
    --danger-background: #f2dede;
  }
  
  * {
    box-sizing: inherit;
  }
  
  body,
  h1,
  h2,
  h3,
  p,
  ul {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: "Roboto", sans-serif;
    background-color: var(--black);
    color: var(--white);
    line-height: 1.4;
    letter-spacing: 0.01em;
  }
  
  h1,
  h2,
  h3,
  h4 {
    font-family: "Sansita", serif;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  li {
    list-style-type: none;
  }
  
  button {
    cursor: pointer;
    font-size: 1rem;
  }
  
  a {
    font-family: "Roboto", sans-serif;
    text-decoration: none;
  }

  a:link,
  a:visited {
    color: #0077cc;
  }
  
  a:hover,
  a:focus {
    color: #004499;
  }
`;
