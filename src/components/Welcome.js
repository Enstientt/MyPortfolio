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
            <PWelcome theme={theme.theme}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting</PWelcome>
        </WelcomeText>
        </WelcomeContainer>
    );
}