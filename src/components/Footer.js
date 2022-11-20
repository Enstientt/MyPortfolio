import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./data";
import { FooterContainer, P1 } from "./Footer.styled";
import { Button } from "./Header.styled";
import {BsGithub, BsTwitter} from 'react-icons/bs'
import {FaCodepen, FaFreeCodeCamp} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
	const theme=useContext(ThemeContext);
return (
	<FooterContainer theme={theme.theme}>
	<div style={{marginTop:"3px",display:"flex",width:"100%", flexDirection:"row",flexWrap:"wrap",justifyContent:"center", columnGap:"20px"}}>
	<a href="https://twitter.com/zakaria96114630" target="_blank"><BsTwitter style={{color:theme.theme.text, fontSize:"30px"}} /></a>
	<a href="https://github.com/Enstientt" target="_blank"><BsGithub style={{color:theme.theme.text,fontSize:"30px"}} /></a>
	<a href="https://www.freecodecamp.org/enstientt" target="_blank"><FaFreeCodeCamp style={{color:theme.theme.text,fontSize:"30px"}} /></a>
	<a href="https://codepen.io/enstientt" target="_blank"><FaCodepen style={{color:theme.theme.text,fontSize:"30px"}} /></a>
	<a href="https://www.linkedin.com/in/zakariae-e-180260225/" target="_blank"><AiFillLinkedin style={{color:theme.theme.text,fontSize:"30px"}} /></a>
	</div>
		<p style={{color:theme.theme.text, flexDirection:""}}>© 2022 zakariae essadqui </p>
	</FooterContainer>
)
};
export default Footer;
