import React, { useContext } from 'react';
import { Econtainer, H1Education, InfoContainer, SchoolImage, SchoolParcour,SubInfoContainer } from './Education.styled';
import { H1Welcome } from './Welcome.styled';
import { parcour, ThemeContext } from './data';
import { P1 } from './Footer.styled';
export const Education =()=>{
    const theme=useContext(ThemeContext);

    return(
        <Econtainer>
            <H1Welcome theme={theme.theme} style={{fontSize:"45px",width:"100%",display:"flex",justifyContent:"center",borderBottom:"1px solid white"}}>Education</H1Welcome>
            <InfoContainer>
            {parcour.map((element)=>{
                return(
                    <SubInfoContainer  src={element.url} key={element.name}>
                    <H1Education >{element.name}</H1Education>
                    <SchoolParcour>
                    <P1 value={theme.theme}>{element.parcoure}<br/> <a style={{color:"gray"}} href={element.desc} target="_blank">{element.name}</a></P1>
                    </SchoolParcour>
                    </SubInfoContainer>
                )
            })}
            </InfoContainer>
        </Econtainer>
        )
}