import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./data";
import { FooterContainer, P1 } from "./Footer.styled";
import { Button } from "./Header.styled";

const Footer = () => {
	const theme=useContext(ThemeContext);
return (
	<FooterContainer>
		<Button value={theme.theme} to="/"><b>Home</b></Button>
        <Button value={theme.theme} to="/AbouteMe"><b>About</b></Button>
        <Button value={theme.theme} to="/MyResume" ><b>Resume</b></Button>
        <Button value={theme.theme} to="/MyIntranet"><b>Profil </b></Button>
		<p1 style={{color:"white"}}> © 2022 zakariae essadqui </p1>
	</FooterContainer>
)
};
export default Footer;
