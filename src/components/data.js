import React, { createContext } from "react";

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
    {url:"https://i.ibb.co/fNPYmY3/safety-react.png",name:"safety_app",name:"safety_app",description:"A baby step toward building a platform  to exchange currencies "
},
{url:"https://i.ibb.co/1Jjz3zY/intra.png",name:"42Intra",description:"Since it s restricted for non-student of 42 network to access to the intranet  i m gonna give you a sneak-peek of how intranet looks like"
},
{url:"https://www.teahub.io/photos/full/9-91386_1920x1080-the-julia-set-data-id-250616-data.jpg",name:"Fractol",description:"The project was about creating a program on c that draw the famous mandelbrot set with infinit zomming feature "
},
{url:"https://c4.wallpaperflare.com/wallpaper/586/447/591/fantasy-art-digital-art-science-fiction-artwork-wallpaper-preview.jpg",name:"Push_swap",description:"A pure algo project that i have the chance to test my logic on problem solving , it s about sorting a stack using a non-classic operations "
},
{url:"https://files.realpython.com/media/An-Overview-of-Concurrency-in-Python_Watermarked.c54c399ccb32.jpg",name:"Mini-talk",description:"The project main goal was to creat a server and client process for data transmission"
},
{url:"https://www.interviewbit.com/blog/wp-content/uploads/2021/10/Banner-Dining-Philosophers-Problem.png",name:"Philosophers",description:"creating a programe on c that  solve the dining philosophers problem (  multitasking and synchronistaion issue in Unix)"
},
{url:"https://i.ibb.co/7j7F9HW/calReact.png",name:"react_calculator",description:"calculator App built using ReactJs library , the first step toward learning the basics of react"
}
]

export const parcour=[
  {url:"https://i.f1g.fr/media/eidos/805x453_crop/2021/02/05/XVM701f7d7e-5b36-11eb-9ad1-c52cc1cea18c.jpg", parcoure:"2015-2017: I start my journey at the Higher School Preparatory Classes :two years of  intensive courses on math and physics and enginnering science ",desc:"https://en.wikipedia.org/wiki/Classe_pr%C3%A9paratoire_aux_grandes_%C3%A9coles#:~:text=The%20classes%20pr%C3%A9paratoires%20aux%20grandes,French%20post%2Dsecondary%20education%20system.",name:"CPGE"},
  {url:"https://i1.hespress.com/wp-content/uploads/2021/03/Institut-national-de-statistique-et-d-economie-appliquee.jpg", parcoure:"2017-2020 : I begun my career as a statistical student enginner at The National Institute of Statistics and Applied Economics (INSEA)",desc:"https://en.wikipedia.org/wiki/National_Institute_of_Statistics_and_Applied_Economics",name:"INSEA"},
  {url:"https://i.ytimg.com/vi/-qo0aC0koPw/maxresdefault.jpg", parcoure:"2021-until now: I started an exciting journey at 1337 IT school (42 network) for mor3 info about the school check the link below",desc:"https://1337.ma/en/",name:"1337"}
]