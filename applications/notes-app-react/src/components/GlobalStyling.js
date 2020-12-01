import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*, *:before, *:after { 
    box-sizing: border-box;
}

body, html {
    height: 100%;
    margin: 0;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif; background-color: #fff;
    line-height: 1.4;
}

a:link,
a:visited {
    color: #0077cc;
}

a:hover,
a:focus {
    color: #004499;
}

code, pre {
    max-width: 100%; 
}
`;
