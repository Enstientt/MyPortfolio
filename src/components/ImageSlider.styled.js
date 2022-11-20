import styled from "styled-components";
import {VscChevronLeft, VscChevronRight,VscCircleOutline} from 'react-icons/vsc'

export const ImageContainer = styled.div`
height: 320px;
width:90%; 
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
border-radius: 5%;
row-gap: 10px;
background-image: url(${props=>props.src});
background-size: cover;
background-position: center;
${props=>props.value?'background:rgba(0,0,0,1);':1};
overflow: hidden;
@media screen and (max-width :500px ) {
    width: 100vw;
    height: 30vh;
    row-gap: 0px;
}
`;
export const SlideContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin:0 auto;
border-top: 0.1px solid ${props=>props.value.text==='white'?'grey':'grey'};
@media screen and (max-width :500px ) {
    width: 100%;
    height: 100%;
}

`
export const Arrow = styled(VscChevronLeft)`
font-size: 45px;
align-self: flex-start;
position: absolute;
color: ${props=>props.value.text};
cursor: pointer;
@media screen and (max-width :500px ) {
    display: none;
}
`;
export const ArrowRight = styled(VscChevronRight)`
font-size: 45px;
color: ${props=>props.value.text};
align-self: flex-end;
position: absolute;
cursor: pointer;
@media screen and (max-width :500px ) {
    display: none;
}
`;
 export const DoteCont = styled.div`
 display: ${props=>!props.display?'flex':'none'};
 justify-content: center;
 column-gap: 10px;
 width: 100%;
 @media screen and (max-width :500px ) {
    position: relative;
    bottom: 0%;
}
 `
 export const Dote = styled.div`
 transition: all 0.5s ease-in-out;
border-radius: 50%;
height: 10px;
width: 10px;
border: 1px solid ${(props)=> props.value.text} ;
background-color: ${props=>props.index?"grey":"transparent"};

cursor: pointer;
 `

 export const Slidediv = styled.div`
 height:fit-content;
 width: 100%;
 opacity: 0;
 transition: 1s ease;
 `
export const TextContainer = styled.div`
width: 80vw;
height: 10vh;
position: relative;
left: 50%;
transform: translateX(-50%);
border: 1px solid white;
@media screen and (max-width :500px ) {
}
`
export const Title = styled.h1`
text-align: center;
color:${(props)=> props.value.text};
font-family: 'Permanent Marker', cursive;
${props=>props.text?'transform:scale(1.1); transition:all 1s ease-in-out;opacity:1':'opacity:0;'}
@media screen and (max-width :500px ) {
    font-size: 5px !important;
}
`

export const Text = styled.p`
text-align: center;
font-size: medium;
color:${(props)=>props.value.text};
font-family: 'Permanent Marker', cursive;
${props=>props.text===true?'transform:scale(1.1); transition:all 1s ease-in-out;opacity:1':'opacity:0'};
text-rendering: optimizeSpeed;
@media screen and (max-width :500px ) {
    font-size: 8px;
    text-align: center;
}
`
export const ContainerHome = styled.div`
height: fit-content;
display: flex;
max-width: 600px;
flex-flow: row wrap;
justify-items: center;
align-items: center;
row-gap: 2rem;
@media screen and (max-width :500px ) {
    width: 100%;
    row-gap: 1rem;
}
`

export const SlidCon=styled.div`
width:100%;
display:flex;
flex-direction:column;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`