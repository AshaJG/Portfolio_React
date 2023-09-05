import React from 'react';
import {FaTwitter,FaFacebook, FaLinkedin, FaArrowDown, FaGithub} from 'react-icons/fa';
import avatar from "../assets/avatar.png";

const Hero = () => {
    const SOCIAL =[
        {id:1, link: 'https://twitter.com', icon:<FaTwitter/>,},
        {id:2, link: 'https://facebook.com', icon:<FaFacebook/>,},
        {id:3, link:'https://www.linkedin.com/in/ashley-joann-grant/', icon:<FaLinkedin/>},
        {id:2, link: 'https://github.com/AshaJG', icon:<FaGithub/>,},
    ];
  
    // window.addEventListener('scroll', function() {
    //     const downArrow = document.querySelector(".down-arrow");
    //     if (this.scrollY >= 2) downArrow.classList.add("hide-down-arrow");
    //     else downArrow.classList.remove("hide-down-arrow");
    // });

  return (
    <section className = "min-h-screen flex flex-col justify-start items-center p-5 text-center">
        <h2 className="text-5xl text-purple-900 uppercase font-bold"> Ashley Grant </h2>
        <h3 className = "py-3 text-2xl"> Software Engineer </h3>
        <p className = "max-w-xl font-light text-gray-500"> 
            Hi <span className = "animate-pulse text-4xl"> 🖐️ </span>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Natus sunt nesciunt 
            fuga rem odio in voluptates aliquid, 
            aspernatur quibusdam ad! Hic aliquam quo 
            consequatur odio assumenda corrupti. Obcaecati, 
            ullam distinctio?
        </p>
        {/* social icons  */}
        <div className = "flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
            {SOCIAL.map(({ id, link , icon}) => (< a href = {link} key={id} 
                target = '_blank'
                rel = 'noopener noreferrer'
                className = "cursor-pointer duration-300 hover:text-blue-400">
                {icon}</a>) )}
        </div>

        {/* avatar and resume section  */}
        <div>
             <img src={avatar} alt="avatar" className = "w-50 h-50 md:w-62 md:h-62 object cover object top bg-gradient-to-b from-purple-800 rounded-xl pt-5" />
             <a href= "/yash-resume.pdf" download = {true} className = "flex items-center justify-center mt-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg"> Resume </a>

        </div>
           {/* arrow down annimation */}
           <div className = "mt-10 down-arrow">
            <FaArrowDown className = "text-purple-700 animate-ping"/>

           </div>

    </section>
  )
}

export default Hero
