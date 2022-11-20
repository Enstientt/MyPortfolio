import React, { useContext, useState } from "react";
import { ThemeContext } from "./data";

import { ImageContainer, Arrow, ArrowRight, DoteCont, Dote, TextContainer, Title, Text, SlidCon} from "./ImageSlider.styled";
import { H1Welcome } from "./Welcome.styled";

export const ImageSlider=({slides})=>{
    const [index, setIndex] = useState(0);
    const [textdesplay, setTextdesplay] = useState(false);
    const theme = useContext(ThemeContext);
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
    return(
        <div style={{width:"100%", display:"flex",flexFlow:"row wrap", justifyContent:"center",overflow:"hidden"}} >
        <H1Welcome theme = {theme.theme} style={{fontSize:"45px", width:"100%", textAlign:"center",borderBottom:"1px solid "+theme.theme.text,display:"flex", justifyContent:"center"}}>Projects</H1Welcome>
        <SlidCon>
        <Arrow onClick={goToPrevious} text={textdesplay} value={theme.theme}/>
        <ImageContainer onTouchStart={(e)=>handleTouchStart(e)} onTouchMove={(e)=>(handleTouchMove(e))} value={textdesplay} src={slides[index].url}>
        {
            slides.map((slide,slideIndex)=>{
                if (index!==slideIndex)
                {
                    return undefined;
                }
                else {

                    return (
                        <div key={slideIndex} >
                        <TextContainer value={textdesplay} onMouseEnter={onHover} onMouseLeave={onHover}>
                        <Title value={theme.theme} text={textdesplay} >{slides[slideIndex].name}</Title>
                        <Text value={theme.theme} text={textdesplay} >{slides[slideIndex].description}</Text>
                        </TextContainer>
                        </div>
                        );
                    }
                    } )
                    
                }
                </ImageContainer>
                <ArrowRight value={theme.theme} onClick={goToNext}/>
                </SlidCon>
                <DoteCont>
                {slides.map((slide,slideIndex)=>{
                    return (
                        <Dote value={theme.theme} key = {slideIndex}  index ={index===slideIndex} onClick={()=>goToSlide(slideIndex)} />
                        )
                    })}
                    </DoteCont>
                    </div>
            );
        }