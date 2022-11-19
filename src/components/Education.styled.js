import styled from "styled-components";

export const Econtainer = styled.div`
width: 100%;
height:fit-content;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

export const InfoContainer=styled.div`
width: 100%;
height: fit-content;
display: flex;
flex-direction: row;
justify-content: space-around;
column-gap:10px ;
@media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    row-gap:30px ;
}
`
export const SubInfoContainer=styled.div`
max-height: 100%;
max-width: 33.33333%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
background-image: url(${props=>props.src});
background-size:cover;
border-radius: 5%;
overflow: hidden;
@media screen and (max-width: 500px) {
    max-width: 100%;
}
`
export const SchoolImage = styled.img`

`
export const SchoolParcour=styled.div`
`
export const H1Education=styled.h1`
border-radius:10%;
color :white;
margin-top:0;
text-align:center;
height: fit-content;
width: 100%;
background-color:rgba(0,0,0,.5);
`