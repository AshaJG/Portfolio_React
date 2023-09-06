import React from 'react';
import Section from "./common/Section";
import { FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';
import contact from '../assets/mobile.png';

const Contact = () => {

    const SOCIAL = [ {id:1, link : "https://www.linkedin.com/in/ashley-joann-grant/", icon:<FaLinkedin/>},
                     {id:2, link : "https://twitter.com", icon:<FaTwitter/>},
                     {id:3, link : "https://discord.com", icon:<FaDiscord/>},
]



  return (
   <Section
    title = "Contact "
    subtitle = "Here is how to contact me">
        <div className = "flex flex-col items-center justify-center gap-8 text-center">
            <div>
                <img src = {contact} alt = "contact information" className ="w-32 h-32" />
            </div>
            <div>   
                <p className = "max-w-xs md:max-w-lg font-extralight">
                    You may connect with me here or leave me a message 😌
                </p>
            </div>
            <div className = "flex w-full ites-center justify-evenly text-3xl">
                {SOCIAL.map(({id, link , icon}) =>(
                    <a href={link} target='_blank' rel='noopener noreferrer' className = 'duration-200 ease-in-out hover:text-yellow-500'>{icon}</a>
                ))}
            </div>
            {/* form  */}
            <div className = "p-8 text-left w-full">
                <form action = "https://getform.io/f/20f124d6-b3c1-434b-989b-af01138b011d" method= "POST">
                    <div className = "gap-4 w-full">
                        <div className = "flex flex-col">
                            <label className = "capitalize text-sm py-2 font-extralight">
                                Name
                            </label>
                            <input type="text" name="name" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"/>
                        </div>
                        <div className = "flex flex-col my-2">
                            <label className = "capitalize text-sm py-2 font-extralight">
                                Phone
                            </label>
                            <input type="text" name="phone" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"/>
                        </div>
                        <div className = "flex flex-col my-2">
                            <label className = "capitalize text-sm py-2 font-extralight">
                                Email
                            </label>
                            <input type="text" name="email" className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"/>
                        </div>
                        <div className = "flex flex-col">
                            <label className = "capitalize text-sm py-2 font-extralight">
                                Message
                            </label>
                            <textarea name = "message" rows="10" className=" border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"></textarea>
                          </div>
                    </div>
                    <div className = "flex items-center justify-center">
                        <button className = "my-8 bg-gradient-to-r from-purple-400 to-pink-700 text-white px-6 py-3 tracking-wider cursor-pointer hover:scale-105 duration-200">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
   </Section>
  );
};

export default Contact
