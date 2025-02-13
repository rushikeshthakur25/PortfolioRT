import React, { useState } from 'react';
import blog from '../../assets/img/blog.png';
import photo from '../../assets/img/photo.png'
import chat from '../../assets/img/chat.png';
import news from '../../assets/img/news.png';
import xss from '../../assets/img/xss.png'
import fai from '../../assets/img/fai.png'
export default function HomePage() {
    const [projects] = useState([
        {
            name: 'Blog Hub',
            githubLink: 'https://github.com/rushikeshthakur25/Blog_app',
            link: 'https://bloger-hub.netlify.app',
            description: 'A React-based web app for seamless CRUD operations and a user-friendly blogging experience, utilizing React Hooks, Redux,and React Router',
            icon: blog,
            technologies: [
                'https://img.icons8.com/color/48/000000/html-5.png',
                'https://img.icons8.com/color/48/000000/css3.png',
                'https://img.icons8.com/color/48/000000/javascript.png',
                'https://img.icons8.com/color/48/000000/react-native.png',
                'https://img.icons8.com/fluency/48/tailwind_css.png'

            ],
            githubIcon: 'https://img.icons8.com/material-outlined/24/000000/github.png',
            demo: 'https://img.icons8.com/fluency-systems-regular/48/trial-version.png'
        },
        {
            name: 'Photography Studio',
            githubLink: 'https://github.com/rushikeshthakur25/PHOTOGRAPHY_STUDIO',
            link: 'https://photography-capturing.netlify.app',
            description: 'Our website frontend is crafted with Next.js, leveraging its server-side rendering and seamless client-side navigation capabilities. Built upon React, our interfaces are dynamic and interactive.',
            icon: photo,
            technologies: [
                'https://img.icons8.com/color/48/000000/html-5.png',
                'https://img.icons8.com/color/48/000000/css3.png',
                'https://img.icons8.com/color/48/000000/javascript.png',
                'https://img.icons8.com/color/48/000000/react-native.png',
                'https://img.icons8.com/fluency/48/node-js.png',
                'https://img.icons8.com/fluency/48/tailwind_css.png'

            ],
            githubIcon: 'https://img.icons8.com/material-outlined/24/000000/github.png',
            demo: 'https://img.icons8.com/fluency-systems-regular/48/trial-version.png'
        },
        {
            name: 'Finaci-ai',
            githubLink: 'https://github.com/rushikeshthakur25/Finaci-ai',
            description: 'Predicting stock prices is a cumbersome task as it does not follow any specific pattern. Changes in the stock prices are purely based on supply and demand during a period of time. In order to learn the specific characteristics of a stock price',
            icon: fai,
            technologies: [
                'https://img.icons8.com/color/48/000000/html-5.png',
                'https://img.icons8.com/color/48/000000/css3.png',
                'https://img.icons8.com/color/48/000000/javascript.png',
                'https://img.icons8.com/color/48/000000/django.png',
                'https://img.icons8.com/color/48/000000/api-settings.png',
                'https://img.icons8.com/fluency/48/tailwind_css.png',

            ],
            githubIcon: 'https://img.icons8.com/material-outlined/24/000000/github.png',
        },
        {
            name: 'Chating App',
            githubLink: 'https://github.com/rushikeshthakur25/chatapp',
            description: 'A Django-based app with JavaScript,Django Channels and WebSockets Bootstrap for an intuitive interface, featuring user login/logout functionality for a secure experience.',
            icon: chat,
            technologies: [
                'https://img.icons8.com/color/48/000000/html-5.png',
                'https://img.icons8.com/color/48/000000/css3.png',
                'https://img.icons8.com/color/48/000000/javascript.png',
                'https://img.icons8.com/color/48/000000/django.png',
                'https://img.icons8.com/color/48/000000/bootstrap.png'

            ],
            githubIcon: 'https://img.icons8.com/material-outlined/24/000000/github.png'
        },
        {
            name: 'xss-payload-generator',
            githubLink: 'https://github.com/rushikeshthakur25/xss-payload-generator',
            link: 'https://xss-payload-generator.netlify.app',
            description: '🔍 Dive into my latest project: the XSS Payload Generator! Built using React.js & Tailwind CSS, this tool empowers developers to create and test XSS payloads effectively.🛡️ Understand web security better with practical application.🔒 Remember, this is an educational tool intended for learning purposes only. Use responsibly!',
            icon: xss,
            technologies: [
                'https://img.icons8.com/color/48/000000/react-native.png',
                'https://img.icons8.com/fluency/48/tailwind_css.png',

            ],
            githubIcon: 'https://img.icons8.com/material-outlined/24/000000/github.png',
            demo: 'https://img.icons8.com/fluency-systems-regular/48/trial-version.png'
            
        },
        {
            name: 'Security-news',
            githubLink: 'https://github.com/rushikeshthakur25/cybersecurity-news',
            link: 'https://security-news.netlify.app',
            description: 'I am thrilled to share my new project with you all: Cybersecurity News and Hacking Tools! 🛡️This project is a one-stop destination for the latest news in cybersecurity and essential hacking tools. Whether you re a seasoned cybersecurity professional or just starting out, this site has something for everyone. Here are some of the key features🔍 Daily Cyber Tips Stay updated with the latest tips and tricks to enhance your cybersecurity skills',
            icon: news,
            technologies: [
                'https://img.icons8.com/color/48/000000/react-native.png',
                'https://img.icons8.com/color/48/crane-hook.png',
                'https://img.icons8.com/color/48/000000/api-settings.png',
                'https://img.icons8.com/fluency/48/tailwind_css.png'

            ],
            githubIcon: 'https://img.icons8.com/material-outlined/24/000000/github.png',
            demo: 'https://img.icons8.com/fluency-systems-regular/48/trial-version.png'
        },

    ]);

    return (
        <>
        <div className="container mx-auto ">
            <h1 className="text-3xl sm:text-4xl gradient-text tracking-tight mb-8 text-center my-8 text-orange-700"><samp className='font-bold text-4xl font-serif'>P</samp>rojects</h1>
            <p className="text-lg text-gray-700 text-center mb-8">Here's some information about Projects...</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="bg-black p-6 rounded-md shadow-lg border border-gray-400 hover:border-gray-500 transition duration-300">
                        <img src={project.icon} alt={project.name} className="w-30 h-30 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap justify-center">
                            {project.technologies.map((techIcon, techIndex) => (
                                <img key={techIndex} src={techIcon} alt={`Technology Icon ${techIndex}`} className="w-8 h-8 mr-2 mb-2" />
                            ))}
                        </div>
                        <div className="flex justify-center mt-4 space-x-4">
                            <a href={project.githubLink} className="bg-orange-500 px-4 py-2 rounded-md text-white hover:bg-orange-600">
                                <img src={project.githubIcon} alt="GitHub Icon" className="w-6 h-6 mr-2" />
                                Source Code 
                            </a>
                            {project.link && (
                                <a href={project.link} className="bg-orange-500 px-4 py-2 rounded-md text-white hover:bg-orange-600">
                                    <img src={project.demo} alt="Demo Icon" className="w-6 h-6 mr-2" />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>



      {projects.map((project, index)=>{

<div key={index} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

    <a class="p-8 max-w-sm mt-5 border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
        href="#">
        <img src={project.icon} alt={projects.name} class="shadow rounded-lg overflow-hidden border" />
        <div class="mt-8">
            <h4 class="font-bold text-white text-xl">{project.name}</h4>
            <p class="mt-2 text-gray-600">{project.description}</p>
            <div class="mt-5">
                <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
            </div>
            <div class="mt-5">
                <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
            </div>
        </div>
    </a>



</div>
      })}
</>

    );
}