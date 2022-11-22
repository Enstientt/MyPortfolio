import { Link, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { MdNightlight, MdOutlineLightMode } from "react-icons/md";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
@import url('https://fonts.cdnfonts.com/css/cera-round-pro');
body{
    background : ${props=>props.value.background};
    color:${props=>props.value.background};
    max-width: 1400px;
    font-family: "Cera Round Pro", sans-serif;
}
`
export const MainHeader = styled.header`
width: 100%;
max-width:800px;
height: fit-content;
display: flex;
justify-content: space-around;
z-index: 9;
`;
export const HeaderD = styled.div`
display: flex;
`
export const Button = styled(Link)`
width: fit-content;
height: fit-content;
font-family: "Cera Round Pro";
padding: 10px;
font-size: small;
color: ${props=>props.value.text};
background-color:${props=>props.value.background};
text-decoration: none;
:hover{
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    background:${props=>props.value.gradient};
    border-radius: 10%;
    color: #000;
}
` 
export const Intra = styled.div`
position: absolute;
width:400px;
height: 300px;
background-image: url(https://biolibre.fr/media/cache/articleMainImg/images/articles/school_42);
top: 0%;
left: 50%;
transform: translate(-50%,50%);
`;

export const Container = styled.div`
user-select:none;
position: absolute;
height:100%;
max-width: 600px;
top:50%;
left:50%;
min-width: 260px;
transform:translate(-50%,-50%);
display: flex;
flex-flow: row wrap;
justify-content: center;
row-gap: 3rem;
@media screen and (max-width: 500px) {
    width: 100vw;
}
`;

export const ButtonSwitch = styled(MdNightlight)`
width: fit-content;
height: fit-content;
padding: 10px;
font-size: 15px;
border-radius:50% ;
background-color:white;
position: relative;
color: black;
cursor: pointer;
margin-left: auto;
display: ${props=>props.value.body==='balck'?'none':'flex'};
@media screen and (max-width :380px ) {
    position: absolute;
    top: 60px;
    right: 40%;
    transform: translate(-50%,-50%);
}
`
export const ButtonSwitchLight = styled(MdOutlineLightMode)`
width: fit-content;
height: fit-content;
padding: 10px;
font-size: 15px;
border-radius:50% ;
background-color:black;
position: relative;
color: white;
cursor: pointer;
margin-left: auto;
display: ${props=>props.value.body==='white'?'none':'flex'};
@media screen and (max-width :380px ) {
    position: absolute;
    top: 60px;
    right: 40%;
    transform: translate(-50%,-50%);
}
`