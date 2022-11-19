import React,{useContext} from "react";
import { ThemeContext} from "./data";
import { slides } from "./data";
import { ContainerHome } from "./ImageSlider.styled";
import { ImageSlider } from "./ImageSlider";
import { Welcome } from "./Welcome";
import { H1Welcome } from "./Welcome.styled";
import { Education } from "./Education";

const  Home=()=>{
    const theme = useContext(ThemeContext);
    return(
        <ContainerHome>
        <Welcome />
        <H1Welcome theme = {theme.theme} style={{fontSize:"45px", width:"100%", textAlign:"center",borderBottom:"1px solid white",display:"flex", justifyContent:"center"}}>Projects</H1Welcome>
        <ImageSlider id="content2" slides ={slides} />
        <Education />
        </ContainerHome>
    );
}

export default Home;