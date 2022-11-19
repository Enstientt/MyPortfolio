import React, { useContext } from "react";
import { ThemeContext } from "./data";

export const AbouteMe =()=>{
    const theme = useContext(ThemeContext);
    
    return (
        <h1>AbouteMe</h1>
        )
}