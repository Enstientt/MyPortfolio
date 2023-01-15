import React,{useContext} from "react";
import { ThemeContext} from "./data";
import { slides } from "./data";
import { ContainerHome } from "./ImageSlider.styled";
import { ImageSlider } from "./ImageSlider";
import { Welcome } from "./Welcome";
import { Education } from "./Education";

const  Home=()=>{
    return(
        <ContainerHome>
        <Welcome />
        <ImageSlider slides ={slides} />
        <Education />
        </ContainerHome>
    );
}

export default Home;