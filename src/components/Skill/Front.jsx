import React from 'react';
import { motion } from 'framer-motion';

export default function Front() {
  const skills = [
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript.png' },
    { name: 'Python', icon: 'https://img.icons8.com/color/48/python.png' },
    { name: 'React Js', icon: 'https://img.icons8.com/color/48/react-native.png' },
    { name: 'Tailwind', icon: 'https://img.icons8.com/fluency/48/tailwind_css.png' },
    { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/bootstrap.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/48/git.png' },
    { name: 'NextJs', icon: 'https://img.icons8.com/color/48/nextjs.png' },
    { name: 'Express Js', icon: 'https://img.icons8.com/color/48/express-js.png' },
    { name: 'Django', icon: 'https://img.icons8.com/color/48/django.png' },
    { name: 'Node Js', icon: 'https://img.icons8.com/color/48/nodejs.png' },
    { name: 'API', icon: 'https://img.icons8.com/color/48/api-settings.png' },
    { name: 'Github', icon: 'https://img.icons8.com/color/48/github--v1.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/mongodb.png' },
  ];

  return (
    <div className="bg-black border border-gray-400 hover:border-gray-500 p-6 rounded-lg w-auto shadow-md">
      <h3 className="text-xl font-semibold text-emerald-700 mb-6 text-center">
        <samp className="font-bold text-4xl font-serif">W</samp>eb Dev
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 place-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-gray-200 p-3 rounded-lg bg-zinc-900 border border-gray-700 hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-1" />
            <p className="text-sm text-center font-medium text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
