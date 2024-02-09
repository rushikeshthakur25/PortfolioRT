import React, { useState } from 'react';

export default function HomePage() {
    const [projects] = useState([
        {
            name: 'Blog App',
            githubLink: 'https://github.com/rushikeshthakur25/Blog_app',
            description: 'A React-based web app for seamless CRUD operations and a user-friendly blogging experience, utilizing React Hooks, Redux,and React Router',
            icon: 'https://img.icons8.com/color/64/000000/blog.png', 
            technologies: [
                'https://img.icons8.com/color/48/000000/react-native.png', 
                'https://img.icons8.com/color/48/000000/html-5.png',
                'https://img.icons8.com/color/48/000000/css3.png',
                'https://img.icons8.com/color/48/000000/javascript.png',
                
            ],
            githubIcon: 'https://img.icons8.com/material-outlined/24/000000/github.png' 
        },
        {
            name: 'Chating App',
            githubLink: 'https://github.com/rushikeshthakur25/chatapp',
            description: 'A Django-based app with JavaScript,Django Channels and WebSockets Bootstrap for an intuitive interface, featuring user login/logout functionality for a secure experience.',
            icon: 'https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-chating-chat-flatart-icons-flat-flatarticons.png', // Icon for Project 2
            technologies: [
                'https://img.icons8.com/color/48/000000/html-5.png',
                'https://img.icons8.com/color/48/000000/css3.png',
                'https://img.icons8.com/color/48/000000/javascript.png',
                'https://img.icons8.com/color/48/000000/django.png'
                
            ],
            githubIcon: 'https://img.icons8.com/material-outlined/24/000000/github.png' 
        },
        {
            name: 'RealTimeXchange',
            githubLink: 'https://github.com/rushikeshthakur25/currencyConvertor',
            description: 'Currency converter project with real-time exchange rates,powered by API integration. Simplify financial transactions with RateSwift.',
            icon: 'https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/external-switch-arrow-flatart-icons-lineal-color-flatarticons-1.png', // Icon for Project 2
            technologies: [
                'https://img.icons8.com/color/48/000000/react-native.png', 
                'https://img.icons8.com/color/48/000000/api-settings.png', 
               
            ],
            githubIcon: 'https://img.icons8.com/material-outlined/24/000000/github.png' 
        },
        
    ]);

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    return (
        <div className="container mx-auto">
            
            <h1 className="text-4xl font-bold text-center text-orange-600 my-8">Projects</h1>
            <p className="text-lg text-gray-700 text-center mb-8">Here's some information about Projects...</p>

            
            <div className="project-slider bg-black p-6 rounded-lg shadow-lg">
                
                <div className="slider-content flex items-center justify-between">
                    <button className="prev-btn px-4 py-2 bg-gray-300 hover:bg-orange-500 text-gray-800 font-semibold rounded-lg" onClick={handlePrevProject}>
                        <img src="https://img.icons8.com/material-outlined/24/000000/chevron-left.png" alt="Previous" />
                    </button>
                    <div className="project-info">
                        <img src={projects[currentProjectIndex].icon} alt={projects[currentProjectIndex].name} className="mb-4 ms-12 ps-3 " />
                        <h3 className="text-xl font-semibold mb-2 text-white">{projects[currentProjectIndex].name}</h3>
                        <p className="text-gray-300">{projects[currentProjectIndex].description}</p>
                        <div className="mt-2 flex flex-wrap items-center">
                            {projects[currentProjectIndex].technologies.map((techIcon, index) => (
                                <img key={index} src={techIcon} alt={`Technology Icon ${index}`} className="w-8 h-8 mr-2 mb-2" />
                            ))}
                        </div>
                        <a href={projects[currentProjectIndex].githubLink} className="bg-orange-500 rounded-lg ms-2 ps-2 w-auto  text-white  hover:text-white flex items-center mt-2">
                            <img src={projects[currentProjectIndex].githubIcon} alt="GitHub Icon" className="w-6 h-6 mr-2 ms-3 " />
                            GitHub Link
                        </a>
                    </div>
                    <button className="next-btn px-4 py-2 bg-gray-300 hover:bg-orange-500 text-gray-800 font-semibold rounded-lg" onClick={handleNextProject}>
                        <img src="https://img.icons8.com/material-outlined/24/000000/chevron-right.png" alt="Next" />
                    </button>
                </div>
            </div>
        </div>
    );
}
