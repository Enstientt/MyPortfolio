import React, { useContext } from "react";
import { ThemeContext } from "./data";
import { Button, ButtonSwitch, ButtonSwitchLight, HeaderD, HeaderM, MainHeader } from "./Header.styled";

export const Header=(props)=>{
    const theme = useContext(ThemeContext);
    return(
        
        <MainHeader >
            <HeaderD>
                <Button value={theme.theme} to="/"><b>Home</b></Button>
                <Button value={theme.theme} to="/AbouteMe"><b>About</b></Button>
                <Button value={theme.theme} to="/MyResume" ><b>Resume</b></Button>
                <Button value={theme.theme} to="/MyIntranet"><b>Profil</b></Button>
                <ButtonSwitch value={theme.theme} onClick={()=>theme.switchTheme()}/>
                <ButtonSwitchLight value={theme.theme} onClick={()=>theme.switchTheme()}/>

            </HeaderD>
            <HeaderM>
            </HeaderM>
        </MainHeader>
    );
}