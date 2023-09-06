import {FaPython, FaJava,FaReact, FaDocker, FaGithubSquare, FaDatabase, FaCode } from 'react-icons/fa';
import React from 'react';
import Section from './common/Section';


const Skills = () => {
    const skills = [
        { id: 1, title: "Python",icon:<FaPython/>},
        { id: 2, title: "Java",icon:<FaJava/>},
        { id: 3, title: "Scala",icon:<FaCode/>},
        { id: 4, title: "React",icon:<FaReact/>},
        { id: 5, title: "Github",icon:<FaGithubSquare/>},
        { id: 6, title: "Django",icon:<FaCode/>},
        { id: 7, title: "HTML , CSS ",icon:<FaCode/>},
        { id: 8, title: "Docker ",icon:<FaDocker/>},
        { id: 9, title: "MongoDB , SQL ",icon:<FaDatabase/>},
    ]
   
       

  return (
    

    <Section
    
    title="Skills"
    subtitle="Here are some skills I have learned:"
  >
    <div className="grid gap-3 lg:gap-10 lg:grid-cols-4 xl:grid-cols-4">
   
      {skills.map(({ id, title, icon }) => (
        <div
          key={id}
          className="max-w-xl rounded-xl overflow-hidden shadow-lg p-6 transition duration-300 ease-in-out transform hover:bg-green-700 hover:-translate-y-1 hover:scale-105"
          style={{
            background: 'linear-gradient(to bottom, #090979, #0084d4)',
          }}
        >
          <div className="text-center">
            <p className="text-4xl mb-4">{icon}</p>
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
        </div>
      ))}
    </div>
  
  </Section>

  
  );
};

export default Skills
