import styled from "styled-components";

export const WelcomeContainer = styled.div`
min-height: 100%;
color:black;
display: flex;
flex-direction: row;
box-sizing:border-box; ;
column-gap: 1rem;
@media screen and (max-width :760px ) {
    flex-direction: column;
}
`;

export const MyImage = styled.img`
max-height:300px;
max-width:300vw;
border-radius:4px;
@media screen and (max-width :500px ) {
    align-self: center;
}
`
//https://onlinenotebook.net/WqtiECu7G1M3ojt
export const WelcomeText=styled.div`
text-align:center;
font-size:15px;
align-self: flex-start;
display: flex;
flex-flow: row wrap;
align-content:center;
@media screen and (max-width :500px ) {
    text-align:center;
}
`
export const H1Welcome = styled.h1`
text-align:start;
font-size:medium;
height:fit-content;
font-size: 20px;
color: ${props=>props.theme.text};
 @media screen and (max-width :500px ) {
     width: 100%;
     font-size:small;
    text-align:center;
    font-size: 20px;
}
`

export const PWelcome = styled.p`
width:30%;
text-align:start;
width:100%;
font-size:15px;
font-family: "Cera Round Pro";
color: ${props=>props.theme.text};
@media screen and (max-width :500px ) {
    text-align:center;
    width: 100%;
}
`