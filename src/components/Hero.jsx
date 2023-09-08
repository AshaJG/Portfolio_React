import {React, useEffect} from 'react';
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
            my name is Ashley Grant. I graduated with a bachelor degree in Computer Science in June 2022 and a master in Management of Information Systems in June 2023.<br/>  <br/>
            While completing my undergraduate and graduate studies, I was a Teaching Assistant for Introduction to Computer Science 2 and Web Applications courses. <br/>  <br/>
             In this position, I could assist other students in succeeding in the classes by offering office hours to troubleshoot problems that 
             may arise in completing projects and reviewing computer science concepts and materials provided through the courses. It also allowed me to continously contribute to the projects code repositories and improve my debugging and testing skills.</p>
             {/* .<br/>.<br/>While doing that job, I was learning new things each semester and consistently growing my skills, and I loved it.
             .<br/>It also made me a problem-solver who loves to engage with others in finding problems, debugging their code, and succeeding. This also gave me new opportunities to contribute to past courses by updating project repository codes and adding new project features to work on to improve the student experience.
        </p>
        social icons  */}
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
             <a href= "/Ashley_Grant_Resume_2023.pdf" download = {true} className = "flex items-center justify-center mt-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg"> Resume </a>

        </div>
           {/* arrow down annimation */}
           <div className = "mt-10 down-arrow">
            <FaArrowDown className = "text-purple-700 animate-ping"/>

           </div>

    </section>
  )
}

export default Hero
