import styled from 'styled-components';

export const FooterContainer = styled.div`
width: 100%;
height:10vh;
border: 0.1px solid ${props=>props.theme.text};
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
justify-content: center;
border-left: none;
border-right: none;
border-bottom:none;
`;

export const P1= styled.p`
margin-top: 0;
height: 100%;
color:black;
flex: 1 1 160px;
text-align: center;
opacity: 0;
padding: 18px 8%;
background-color: white;
overflow-y: scroll;
transition: 0.8s ease;
:hover{
    opacity:1;
    height: ${props=>props.height?props.height:''};
    margin:0;
}
`