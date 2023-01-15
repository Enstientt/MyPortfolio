import React, { useContext } from 'react';
import {Header, Section, H2, UL, LI, H3, P} from './Myresume.styled.js'

export const MyResume = () => {
  return (
    <div>
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
        <H2>Education</H2>
        <UL>
          <LI>
            <H3>statistics and economics</H3>
            <P>National_Institute_of_Statistics_and_Applied_Economics (INSEA)</P>
            <P>years: 2017-2020</P>
          </LI>
          <LI>
          <H3>mathematics physcis computer science</H3>
          <P>Higher School Preparatory Classes(CPGE)</P>
          <P>years: 2015-2017</P>
        </LI>
        <LI>
        <H3>Computer science</H3>
        <P>UM6P-1337 IT school(42 network)</P>
        <P>years: 2021- </P>
      </LI>
        </UL>
      </Section>
      <Section>
        <H2>Experience</H2>
        <UL>
          <LI>
            <H3>Web Developer</H3>
            <P>safety </P>
            <P>June 2020 - Present</P>
            <UL>
              <LI>Developed and maintained website and web application for online consulting exchange currency </LI>
              <LI>Implemented new features and functionality to improve user experience</LI>
              <LI>Collaborated with designer  to deliver project on time and within budget</LI>
            </UL>
          </LI>
          <LI>
            <H3>IT support</H3>
            <P>ONCF</P>
            <P>May 2022 - August 2022</P>
            <UL>
              <LI>Assisted senior developers with website development and maintenance</LI>
              <LI>Learned and implemented new web development technologies</LI>
            </UL>
          </LI>
        </UL>
      </Section>
    </div>
  );
};

