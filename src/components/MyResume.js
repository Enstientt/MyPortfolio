import React from "react";
import { RedirectButton } from "./Myresume.styled";

export const MyResume =()=>(
    <div style={{width:"100%",height:"60%", display:"flex", justifyContent:"center", alignContent:"center"}}>
    <a style={{width:"fit-content",position:"absolute",top:"40%", height:"fit-content"}}href="https://myresume.tiiny.site/" target="_blank"><RedirectButton>Check My Resume Here</RedirectButton></a>
    </div>
)