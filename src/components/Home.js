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
        <ImageSlider id="content2" slides ={slides} />
        <Education />
        </ContainerHome>
    );
}

export default Home;