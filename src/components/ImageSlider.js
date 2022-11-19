import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./data";

import { ImageContainer , Image, Arrow, ArrowRight, DoteCont, Dote,Slidediv, TextContainer, Title, Text} from "./ImageSlider.styled";
import { H1Welcome } from "./Welcome.styled";

export const ImageSlider=({slides})=>{
    const [index, setIndex] = useState(5);
    const [textdesplay, setTextdesplay] = useState(false);
    const theme = useContext(ThemeContext);
    const [dotshow, setdotshow] = useState(true);
    const [touchPosition, setTouchPosition] = useState(null);

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }
    const handleTouchMove = (e) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        console.log(currentTouch);
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            goToNext();
        }
    
        if (diff < -5) {
            goToPrevious();
        }
    
        setTouchPosition(null)
    }
    const goToPrevious=()=>{
        const firstIndex = index === 0;
        const newIndex = firstIndex?slides.length - 1:index-1;
        setIndex(newIndex);
    }
    const goToNext=()=>{
        const lastIndex = index === slides.length - 1;
        const newIndex = lastIndex? 0 :index + 1;
        setIndex(newIndex);
    }
    const goToSlide=(slideIndex)=>{
        setIndex(slideIndex);
    }
    const onHover = ()=>{
        setTextdesplay(!textdesplay);
    }
    const detectSize = () => {
        let intViewportWidth = window.innerWidth;
        if (intViewportWidth >= 500) {
          setdotshow(true);
        }
        if (intViewportWidth < 500) {
          setdotshow(true);
        }
      };
    return(
        <div style={{width:"100%", display:"flex",flexFlow:"row wrap", justifyContent:"center"}} >
        <H1Welcome theme = {theme.theme} style={{fontSize:"45px", width:"100%", textAlign:"center",borderBottom:"1px solid white",display:"flex", justifyContent:"center"}}>Projects</H1Welcome>
        <ImageContainer value={theme.theme}>
        {
            slides.map((slide,slideIndex)=>{
                return (
                    <Slidediv onTouchStart={(e)=>handleTouchStart(e)} onTouchMove={(e)=>(handleTouchMove(e))} key={slideIndex} value={slideIndex===index}>
                    {slideIndex===index &&  <Image desplay={slideIndex===index} text={textdesplay} src={slides[slideIndex].url} alt={slides[slideIndex].name}  />}
                    {slideIndex===index && (
                        <TextContainer value={textdesplay}  onMouseEnter={onHover} onMouseLeave={onHover}>
                            <Title value={theme.theme} text={textdesplay} >{slides[slideIndex].name}</Title>
                            <Text value={theme.theme} text={textdesplay} >{slides[slideIndex].description}</Text>
                        </TextContainer>
                        )}
                    </Slidediv>
                );
            } )
            
        }
        </ImageContainer>
        <DoteCont>
        {slides.map((slide,slideIndex)=>{
            console.log(slideIndex===index);
            return (
            <Dote value={theme.theme} key = {slideIndex}  index ={index===slideIndex} onClick={()=>goToSlide(slideIndex)} />
            )
        })}
            </DoteCont>
        </div>
            );
        }