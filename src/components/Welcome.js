import React, { useContext } from "react";
import { ThemeContext } from "./data";
import { H1Welcome, MyImage, PWelcome, WelcomeContainer, WelcomeText } from "./Welcome.styled";
import me from '../assets/me.jpeg'

export const Welcome =()=>{
    const theme = useContext(ThemeContext);
    return (
        <WelcomeContainer>
        <MyImage src={me} />
        <WelcomeText >
            <H1Welcome theme={theme.theme}><b>👋I’m Zakariae Essadqui</b></H1Welcome>
            <PWelcome theme={theme.theme}>Javascript developer with a passion for front-end development using reactJS, currently studying at
            1337 a major school to become a senior programmer. I am aspiring to boost my skills and learn new
            ones.</PWelcome>
        </WelcomeText>
        </WelcomeContainer>
    );
}