import styled from "styled-components";

export const RedirectButton = styled.button`
width: 220px;
height: 50px;
border: none;
outline: none;
color: #fff;
background: #111;
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