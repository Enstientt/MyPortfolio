import styled from "styled-components";
import {VscChevronLeft, VscChevronRight,VscCircleOutline} from 'react-icons/vsc'

export const ImageContainer = styled.div`
height: fit-content;
width:fit-content; ;
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
border-radius: 5%;
row-gap: 10px;
opacity:${props=>props.value.background ==='dark'?'0.7':'1'};
overflow: hidden;
@media screen and (max-width :500px ) {
    width: 100vw;
    height: 30vh;
    row-gap: 0px;
}
`;
export const Image = styled.img`
height:300px;
width: 490px;
border-radius: 0%;
${props=>props.text?'opacity:0.1;':1};
border-radius: 5%;
@media screen and (max-width :500px ) {
    width: 100%;
    height: 30vh;
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
transform: translate(-50%,-50%);
font-size: 45px;
z-index:1;
color: ${(props)=> props.value.text};
cursor: pointer;
`;
export const ArrowRight = styled(VscChevronRight)`
transform: translate(-50%,-50%);
font-size: 45px;
color: ${(props)=> props.value.text};
z-index:1;
cursor: pointer;
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
 ${props=>props.value?'opacity:1;transition-duration:1s;transform:scale(1.08)':1};
 `
export const TextContainer = styled.div`
height: 80%;
width: 70%;
position: absolute;
max-height: 70%;
top:50%;
left:50%;
transform: translate(-50%,-50%);
@media screen and (max-width :500px ) {
    height:fit-content;
    width: fit-content;
}
`
export const Title = styled.h1`
text-align: center;
color:${(props)=> props.value.text};
font-family: 'Permanent Marker', cursive;
${props=>props.text?'transform:scale(1.2); transition:all 1s ease-in-out;opacity:1':'opacity:0;'}
@media screen and (max-width :500px ) {
    font-size: 5px !important;
}
`

export const Text = styled.p`
text-align: center;
font-size: medium;
color:${(props)=>props.value.text};
font-family: 'Permanent Marker', cursive;
${props=>props.text?'transform:scale(1.2); transition:all 1s ease-in-out;opacity:1':'opacity:0'};
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
    row-gap: 3rem;
}
`