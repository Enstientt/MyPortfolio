import styled from "styled-components";
import React, { useContext } from "react";
import { ThemeContext } from "./data"; 

export const RedirectButton = styled.button`
width: 220px;
height: 50px;
border: none;
outline: none;
color: #fff;
background: #111;
 user-select: none;
cursor: pointer;
position: relative;
z-index: 0;
border-radius: 10px;
:before {
    content: '';
    background: linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(77,77,97,1) 35%, rgba(0,212,255,1) 100%);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}
:active {
    color: #000
}
:active:after {
    background: transparent;
}
:hover:before {
    opacity: 1;
}
:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
`

const Header = styled.header`
  width: 100%;
align-self: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  text-align: center;
  padding: 20px;
  color: ${() => {
   const theme = useContext(ThemeContext);
    return theme.theme.text;
  }};

`;

const Section = styled.section`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${() => {
     const theme = useContext(ThemeContext);
    return theme.theme.text;
  }};
  @media screen and (max-width :500px ) {
    text-align: center;
}
`;

const H2 = styled.h2`
  margin-bottom: 20px;
  color: ${() => {
      const theme = useContext(ThemeContext);
    return theme.theme.text;
  }};
`;

const UL = styled.ul`
  list-style: none;
  color: ${() => {
     const theme = useContext(ThemeContext);
    return theme.theme.text;
  }};
`;

const LI = styled.li`
  margin-bottom: 10px;
  color: ${() => {
    const theme = useContext(ThemeContext);
    return theme.theme.text;
  }};
  @media screen and (max-width :500px ) {
    text-align: center;
}
`;

const H3 = styled.h3`
  font-size: 24px;
  margin-bottom: 5px;
  color: ${() => {
     const theme = useContext(ThemeContext);
    return theme.theme.text;
  }};
  @media screen and (max-width :500px ) {
    text-align: center;
}
`;

const P = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${() => {
    const theme = useContext(ThemeContext);
    return theme.theme.text;
  }};
`;

export {Header, Section, H2, UL, LI, H3, P};