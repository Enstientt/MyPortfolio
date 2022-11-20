import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./data";
import { FooterContainer, P1 } from "./Footer.styled";
import { Button } from "./Header.styled";

const Footer = () => {
	const theme=useContext(ThemeContext);
return (
	<FooterContainer theme={theme.theme}>
		<Button value={theme.theme} to="MyPortfolio/"><b>Home</b></Button>
        <Button value={theme.theme} to="MyPortfolio/AbouteMe"><b>About</b></Button>
        <Button value={theme.theme} to="MyPortfolio/MyResume" ><b>Resume</b></Button>
        <Button value={theme.theme} to="MyPortfolio/MyIntranet"><b>Profil </b></Button>
		<p style={{color:theme.theme.text}}> © 2022 zakariae essadqui </p>
	</FooterContainer>
)
};
export default Footer;
