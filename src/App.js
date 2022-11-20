import React, { useState } from 'react';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import { AbouteMe } from './components/AbouteMe';
import { Header } from './components/Header';
import { Container, Global } from './components/Header.styled';
import Home from './components/Home';
import { Intra42 } from './components/Intra42';
import { MyResume } from './components/MyResume';
import { ThemeContext, themes } from './components/data';
import Footer from './components/Footer';

const App =()=>{

  const switchTheme =(prevThem)=>{
    setWindowThem((prevThem)=> ({theme: prevThem.theme === themes.darkTheme?themes.lightTheme:themes.darkTheme,
        switchTheme }));
    }  
    const [windowTheme, setWindowThem] = useState({theme:themes.darkTheme, switchTheme});
  return(
    <BrowserRouter>
    <Container>
    <ThemeContext.Provider value ={windowTheme}>
    <Global value={windowTheme.theme}/>
    <Header />
    <Routes>
    <Route path='MyPortfolio/' element={<Home />}/>
    <Route path='MyPortfolio/AbouteMe' element={<AbouteMe />}/>
    <Route path='MyPortfolio/MyIntranet' element={<Intra42 />}/>
    <Route path='MyPortfolio/MyResume' element={<MyResume />}/>
    </Routes>
    <Footer style={{gridArea:"footer", border:"1px solid white"}}/>
    </ThemeContext.Provider>
    </Container>
    </BrowserRouter>
  );
}
  
  export default App;