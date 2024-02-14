import React, { createContext } from "react";
import safety from '../assets/safety-react.png'
import fractol from '../assets/fractol.jpg'
import push from '../assets/push_swap.jpg'
import minitalk from '../assets/minitalk.webp'
import philo from '../assets/philosophers.png'
import intra from '../assets/intra.png'
import calculator from '../assets/calReact.png'
import cpge from '../assets/Cpge.webp'
import insea from '../assets/Insea.jpg'
import leet from '../assets/133.jpg'

export const themes ={
lightTheme : {
    body: 'white',
    text: 'black',
    toggleBorder: '#FFF',
    gradient: 'rgba(136, 131, 124, 0.2)',
    background: 'white'
  },
darkTheme:{
    body: 'balck',
    text: 'white',
    toggleBorder: '#6B8096',
    gradient: '#4d4d61',
    background: 'black'
  }
}

export const ThemeContext = React.createContext(themes.darkTheme);
  export const slides = [
    {url:safety,name:"safety_app",name:"safety_app",description:"A baby step toward building a platform  to exchange currencies "
},
{url:intra,name:"42Intra",description:"Since it s restricted for non-student of 42 network to access to the intranet  i m gonna give you a sneak-peek of how intranet looks like"
},
{url:fractol,name:"Fractol",description:"The project was about creating a program on c that draw the famous mandelbrot set with infinit zomming feature "
},
{url:push,name:"Push_swap",description:"A pure algo project that i have the chance to test my logic on problem solving , it s about sorting a stack using a non-classic operations "
},
{url:minitalk,name:"Mini-talk",description:"The project main goal was to creat a server and client process for data transmission"
},
{url:philo,name:"Philosophers",description:"creating a programe on c that  solve the dining philosophers problem (multitasking and synchronistaion issue in Unix)"
}
]

export const parcour=[
  {url:cpge, parcoure:"2015-2017: I started my journey at the Higher School Preparatory Classes :two years of  intensive courses on math, physics and engineering science ",desc:"https://en.wikipedia.org/wiki/Classe_pr%C3%A9paratoire_aux_grandes_%C3%A9coles#:~:text=The%20classes%20pr%C3%A9paratoires%20aux%20grandes,French%20post%2Dsecondary%20education%20system.",name:"CPGE"},
  {url:insea, parcoure:"2017-2020 : I began my career as a Statistical Engineering student at The National Institute of Statistics and Applied Economics (INSEA)",desc:"https://en.wikipedia.org/wiki/National_Institute_of_Statistics_and_Applied_Economics",name:"INSEA"},
  {url:leet, parcoure:"2021-until now: I started an exciting journey at 1337 IT school (42 network) for mor3 info about the school check the link below",desc:"https://1337.ma/en/",name:"1337"}
]