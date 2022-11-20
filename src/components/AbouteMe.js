import React, { useContext } from "react";
import { ThemeContext } from "./data";

export const AbouteMe =()=>{
    const theme = useContext(ThemeContext);
    
    return (
        <div style={{width:"100%", height:"100%"}}>
        <h1 style={{color:"white"}}>AbouteMe</h1>
        </div>
        )
}