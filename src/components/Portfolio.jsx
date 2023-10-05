import React from 'react'
import Section from './common/Section'
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';

import p1 from "../assets/high five app.gif";
import p2 from "../assets/sma.gif";
import p3 from "../assets/p4.jpg";
import p4 from "../assets/todo.png";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";


const Portfolio = () => {
    const projects = [
        { id:1, image: p4, title : "To-do App", Desc:"A simple todo app to help with productivity.",FrontEnd:"#React.JS",BackEnd:" ",github: "https://github.com/AshaJG/Portfolio_React", demo:"https://ashajg.github.io/TodoApp_React/"},
        { id:2, image: p1, title : "High Five Movie App ",Desc:"Developed for you to view current movies, invite your friends and vote on a movie to watch.", FrontEnd: "#HTML, CSS, JS" ,BackEnd:"#Python, Node.JS, MongoDB" , github: "https://github.com/NickMacris/CSE442-A5-GroupProject"},
        { id:3, image: p2, title : "Social Media App", Desc:"Designed a social media platform for users to create profiles, post pictures and chat online.",FrontEnd:"#HTML, CSS, JS",BackEnd:"#Python, MongoDB",github: "https://github.com/AshaJG/CSE312_304Created",},
        // { id:4, image: p3, title : "Currently: Ecommerce Website ", Desc:"",FrontEnd:"#HTML, CSS Tailwind",BackEnd:"#Django"},
        // { id:6, image: p6, title : "Upcoming", Desc:"",FrontEnd:" ",BackEnd:" ", github: "https://github.com", demo:"https://nodejs.org/en/"},
          // { id:3, image: p3, title : "Messenger App ",Desc:"", FrontEnd:"#HTML, CSS, JS",BackEnd:"#Python",github: "https://github.com", demo:"https://nodejs.org/en/"},
       
    ]

  return (
   <Section title = "Projects"
  
    subtitle ="Some projects are built from scratch with no library or backend framework, while some are built with Frameworks such as Django and React. 
    Projects displayed below are a combination of group projects and personal projects.">

    <div className = "grid gap-8 lg:gap-14 xl:grid-cols-2">
        {projects.map(({id, image, title,Desc,FrontEnd, BackEnd, github, demo}) => (
            <div key={id} className="max-w-xlg flex shadow-lg shadow-blue-600 rounded-2xl overflow-hidden">
                <img src= {image} alt={title} className = "w-2/4"/>
                <div className="w-2/3 flex flex-col items-center justify-evenly p-1">
                    <h2 className="text-blue-700 font-bold text-2xl"> {title} </h2>
                    <p className = "w-2/3 flex flex-col items-center justify-evenly p-1">{Desc}</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">{FrontEnd}</p>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">{BackEnd}</p>
                    {/* <a className= "text-2xl cursor-pointer duration-150 hover:scale-110" href= {github} target="_blank" rel="noopener noreferrer"> <FaGithub/></a>
                    <a className= "text-2xl cursor-pointer duration-150 hover:scale-110" href= {demo} target="_blank" rel="noopener noreferrer"> <FaExternalLinkSquareAlt/></a> */}
                    <div className="flex space-x-4"> {/* This container uses flex layout */}
                        <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={github} target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={demo} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkSquareAlt />
                        </a>
                    </div>
                </div>

            </div>
        ))}

    </div>
     
   </Section>
  )
}

export default Portfolio
