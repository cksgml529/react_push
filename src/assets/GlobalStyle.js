import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Noto+Sans+KR:wght@300;400;500;600;900&display=swap');

body{
    font-family: 'Noto Sans KR','Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3;
}

`;

export default GlobalStyle;
