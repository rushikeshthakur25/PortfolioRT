import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import blog from '../../assets/img/blog.png';
import photo from '../../assets/img/photo.png';
import chat from '../../assets/img/chat.png';
import news from '../../assets/img/news.png';
import xss from '../../assets/img/xss.png';
import fai from '../../assets/img/fai.png';

export default function ProjectsSection() {
  const [projects] = useState([
    {
      name: 'Blog Hub',
      githubLink: 'https://github.com/rushikeshthakur25/Blog_app',
      description: 'A React-based web app for seamless CRUD operations and a user-friendly blogging experience.',
      icon: blog,
      technologies: [
        { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5.png' },
        { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' },
        { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript.png' },
        { name: 'React', icon: 'https://img.icons8.com/color/48/react-native.png' },
        { name: 'Tailwind', icon: 'https://img.icons8.com/fluency/48/tailwind_css.png' },
      ]
    },
    {
      name: 'Photography Studio',
      githubLink: 'https://github.com/rushikeshthakur25/PHOTOGRAPHY_STUDIO',
      description: 'Frontend crafted with Next.js, dynamic and interactive UI with React.',
      icon: photo,
      technologies: [
        { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5.png' },
        { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' },
        { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript.png' },
        { name: 'React', icon: 'https://img.icons8.com/color/48/react-native.png' },
        { name: 'Node.js', icon: 'https://img.icons8.com/fluency/48/node-js.png' },
        { name: 'Tailwind', icon: 'https://img.icons8.com/fluency/48/tailwind_css.png' },
      ]
    },
    {
      name: 'Finaci-ai',
      githubLink: 'https://github.com/rushikeshthakur25/Finaci-ai',
      description: 'Predicting stock prices using ML and Django stack.',
      icon: fai,
      technologies: [
        { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5.png' },
        { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' },
        { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript.png' },
        { name: 'Django', icon: 'https://img.icons8.com/color/48/django.png' },
        { name: 'API', icon: 'https://img.icons8.com/color/48/api-settings.png' },
        { name: 'Tailwind', icon: 'https://img.icons8.com/fluency/48/tailwind_css.png' },
      ]
    },
    {
      name: 'Chating App',
      githubLink: 'https://github.com/rushikeshthakur25/chatapp',
      description: 'Django-based app using WebSockets and Channels with Bootstrap.',
      icon: chat,
      technologies: [
        { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5.png' },
        { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' },
        { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript.png' },
        { name: 'Django', icon: 'https://img.icons8.com/color/48/django.png' },
        { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/bootstrap.png' },
      ]
    },
    {
      name: 'xss-payload-generator',
      githubLink: 'https://github.com/rushikeshthakur25/xss-payload-generator',
      description: 'React + Tailwind-based XSS payload tool for ethical hackers.',
      icon: xss,
      technologies: [
        { name: 'React', icon: 'https://img.icons8.com/color/48/react-native.png' },
        { name: 'Tailwind', icon: 'https://img.icons8.com/fluency/48/tailwind_css.png' },
      ]
    },
    {
      name: 'Security-news',
      githubLink: 'https://github.com/rushikeshthakur25/cybersecurity-news',
      description: 'News & tools portal for cybersecurity enthusiasts.',
      icon: news,
      technologies: [
        { name: 'React', icon: 'https://img.icons8.com/color/48/react-native.png' },
        { name: 'API', icon: 'https://img.icons8.com/color/48/api-settings.png' },
        { name: 'Tailwind', icon: 'https://img.icons8.com/fluency/48/tailwind_css.png' },
      ]
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-center font-bold text-orange-500 mb-4">Projects</h1>
      <p className="text-lg text-center text-gray-300 mb-8">Explore a few of my recent works</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 rounded-xl border border-gray-600 hover:border-orange-500 shadow-md p-6 hover:shadow-orange-400 transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={project.icon} alt={project.name} className="rounded-md mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-3 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, idx) => (
                <img key={idx} src={tech.icon} alt={tech.name} title={tech.name} className="w-6 h-6" />
              ))}
            </div>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-orange-400 hover:text-orange-600"
            >
              <FaGithub className="mr-2" /> Source Code
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}