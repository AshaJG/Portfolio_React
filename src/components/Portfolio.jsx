import React from 'react'
import Section from './common/Section'
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";


const Portfolio = () => {
    const projects = [
        { id:1, image: p1, title : "Social Media App", FrontEnd: "#Vanilla HTML ,CSS,JS" ,BackEnd:"#Python,MongoDB" , github: "https://github.com", demo:"https://nodejs.org/en/"},
        { id:2, image: p2, title : "Best App", FrontEnd:"HTML, CSS, JS",BackEnd:"Python",github: "https://github.com", demo:"https://nodejs.org/en/"},
        { id:3, image: p3, title : "Best App", FrontEnd:"HTML, CSS, JS",BackEnd:"Python",github: "https://github.com", demo:"https://nodejs.org/en/"},
        { id:4, image: p4, title : "Best App", FrontEnd:"HTML, CSS, JS",BackEnd:"Python",github: "https://github.com", demo:"https://nodejs.org/en/"},
        { id:5, image: p5, title : "Best App", FrontEnd:"HTML, CSS, JS",BackEnd:"Python", github: "https://github.com", demo:"https://nodejs.org/en/"},
        { id:6, image: p6, title : "Best App", FrontEnd:"HTML, CSS, JS",BackEnd:"Python", github: "https://github.com", demo:"https://nodejs.org/en/"},
    ]

  return (
   <Section title = "Portfolio "
   subtitle =  "These are some of my projects that I have worked and are currently working on Some are developed with Vanilla CSS,HTML and Javascript for their frontend , while some use frontend Framework like React.JS. Some projects backend are built from scratch with no library or backend framework, while some are built with the Django Framework. Projects displayed below are a combination of group projects and personal projects" >
    <div className = "grid gap-8 lg:gap-14 xl:grid-cols-2">
        {projects.map(({id, image, title,FrontEnd, BackEnd, github, demo}) => (
            <div key={id} className="max-w-lg flex shadow-lg shadow-blue-600 rounded-2xl overflow-hidden">
                <img src= {image} alt={title} className = "w-2/3"/>
                <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                    <h2 className="text-blue-500 font-bold"> {title} </h2>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">{FrontEnd}</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">{BackEnd}</p>
                    <a className= "text-2xl cursor-pointer duration-150 hover:scale-110" href= {github} target="_blank" rel="noopener noreferrer"> <FaGithub/></a>
                    <a className= "text-2xl cursor-pointer duration-150 hover:scale-110" href= {demo} target="_blank" rel="noopener noreferrer"> <FaExternalLinkSquareAlt/></a>
                    </div>
            </div>
        ))}

    </div>
     
   </Section>
  )
}

export default Portfolio
