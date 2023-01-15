import React, { useContext } from 'react';
import {Header, Section, H2, UL, LI, H3, P, RedirectButton} from './Myresume.styled.js'
import resume from '../assets/resume.pdf'
import { ContainerHome } from './ImageSlider.styled.js';

export const MyResume = () => {
  return (
    <ContainerHome>
    <Header>
    <H2>Zakariae Essadqui</H2>
        <P>Web Developer</P>
        <P>Email: zikoessad@gmail.com</P>
        <P>Phone: xxx-xxx-xxx</P>
      </Header>
      <Section>
        <H2>Summary</H2>
        <P>Javascript developer with a passion for front-end development using reactJS, currently studying in 1337 a major school to become a digital technology architect. I am aspiring to boost my skills and learn new ones..</P>
      </Section>
      <Section>
      <a href={resume} download="zakariae-resume"><RedirectButton>CV Download</RedirectButton></a>
      </Section>
    </ContainerHome>
  );
};

