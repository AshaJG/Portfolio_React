import {React, useEffect} from 'react';
import ReactGA from 'react-ga';
import {FaTwitter,FaFacebook, FaLinkedin, FaArrowDown, FaGithub} from 'react-icons/fa';
import avatar from "../assets/ai2_50.jpg";

const Hero = () => {
    const SOCIAL =[
        
        {id:1, link:'https://www.linkedin.com/in/ashley-joann-grant/', icon:<FaLinkedin/>},
        {id:2, link: 'https://github.com/AshaJG', icon:<FaGithub/>},
        {id:3, link: 'https://twitter.com', icon:<FaTwitter/>},
        {id:4, link: 'https://facebook.com', icon:<FaFacebook/>},
    ];

    useEffect(() => {
      // non interation , just visits
      ReactGA.pageview(window.location.pathname);
    },[]);

    const cardData = [
      { id: 1, title: 'Backend Developement' },
      { id: 2, title: 'Frontend Developement' },
    
    ];

  return (
    <section className = "min-h-screen flex flex-col justify-start items-center p-5 text-center">
        <h2 className="text-5xl text-purple-600 uppercase font-bold"> Ashley Grant </h2>
        <h3 className = "py-3 text-2xl"> Software Engineer </h3>
        <p className = "max-w-xl font-light text-gray-500"> 
            Hi <span className = "animate-pulse text-4xl"> 🖐️ </span>
            my name is Ashley Grant. I am recent college graduate with a degree in Computer Science and Managemnt of Information Systems. <br/><br/> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️<br/><br/>
            During my undergrad and graduate studies I was an Undergrad Teaching Assistant for Introduction to Computer Science 2 and Web Application courses. <br/> <br/> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️<br/><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-2xl"> I am trying to code the Meta-Verse</span>
            <span className = "animate-spin text-4xl inline-block"> 🧚  🌎 </span>
        </p>
        {/* <div className="flex flex-wrap justify-center py-8 lg:py-16 w-full">
          {cardData.map(({ id, title }) => (
            <div
              key={id}
              className="w-30 h-20 p-4 m-4 bg-gradient-to-r from-blue-700 to-purple-500 dark:shadow-yellow-500  hover:shadow-lg rounded-md transition duration-300 ease-in-out transform hover:translate-x-2 cursor-pointer"
            >
              <h2 className="text-white text-lg font-semibold">{title}</h2>
            </div>
          ))}
      </div> */}
        <div className = "flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
            {SOCIAL.map(({ id, link , icon}) => (< a href = {link} key={id} 
                target = '_blank'
                rel = 'noopener noreferrer'
                className = "cursor-pointer duration-300 hover:text-blue-400">
                {icon}</a>) )}
        </div>

        {/* avatar and resume section  */}
        <div>
              <img src={avatar} alt="avatar" className = "w-50 h-50 md:w-25 md:h-25 shadow-lg dark:shadow-purple-600  rounded-xl pt-2" />
             {/* <img src={avatar} alt="avatar" className = "w-50 h-50 md:w-25 md:h-25 object cover object top bg-gradient-to-b from-purple-800 rounded-xl pt-5" /> */}
             <a href= "../assets/Ashley_Grant_Resume_2023.pdf" download = {true} className = "flex items-center justify-center mt-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg"> Download my Resume </a>

        </div>
           {/* arrow down annimation */}
           <div className = "mt-10 down-arrow">
            <FaArrowDown className = "text-purple-700 animate-ping"/>

           </div>

    </section>
  )
}

export default Hero
