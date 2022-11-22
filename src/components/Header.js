import React, { useContext } from "react";
import { ThemeContext } from "./data";
import { Button, ButtonSwitch, ButtonSwitchLight, HeaderD, MainHeader } from "./Header.styled";

export const Header=(props)=>{
    const theme = useContext(ThemeContext);
    return(
        
        <MainHeader >
            <HeaderD>
                <Button value={theme.theme} to="MyPortfolio/"><b>Home</b></Button>
                <Button value={theme.theme} to="MyPortfolio/AbouteMe"><b>About</b></Button>
                <Button value={theme.theme} to="MyPortfolio/MyResume" ><b>Resume</b></Button>
                <Button value={theme.theme} to="MyPortfolio/MyIntranet"><b>Profil</b></Button>
                <ButtonSwitch value={theme.theme} onClick={()=>theme.switchTheme()}/>
                <ButtonSwitchLight value={theme.theme} onClick={()=>theme.switchTheme()}/>
            </HeaderD>
        </MainHeader>
    );
}