import React, { useState } from 'react';

export default function Front() {
  const [clickedValue, setClickedValue] = useState('');
  const [valueInfo] = useState({
    HTML: 'Hypertext Markup Language - HTML is the standard markup language for documents designed to be displayed in a web browser.',
    CSS: 'Cascading Style Sheets - CSS is a style sheet language used for describing the presentation of a document written in HTML.',
    JS: 'JavaScript - JS is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and more.',
    Python: 'Python - Python is a high-level, interpreted programming language known for its simplicity and readability.',
    'React Js': 'React.js - React is an open-source, front-end JavaScript library for building user interfaces or UI components.',
    Tailwind: 'Tailwind CSS - Tailwind is a utility-first CSS framework that provides low-level utility classes to build custom designs.',
    Bootstrap: 'Bootstrap - Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
    Git:'Git is a distributed version control system used for tracking changes in source code during software development.',
    NextJs:'Next.js is a React framework for building server-rendered applications. It s often used for creating fast and scalable web applications, particularly those requiring server-side rendering, static site generation, or hybrid rendering.',
    'Express Js': 'Express  - Express.js is a web application framework for Node.js, designed for building web applications and APIs.',
    Django: 'Django - Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
    'Node Js': 'Node.js - Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.',
    API: 'API - An Application Programming Interface (API) is a set of rules and protocols for building and interacting with software applications.',
    Github:'GitHub is a web-based version control and collaboration platform for software developers.',
    MongoDB: 'MongoDB - MongoDB is a cross-platform document-oriented NoSQL database program.',

  });

  const [valueIcons] = useState({
    HTML: 'https://img.icons8.com/color/48/000000/html-5.png',
    CSS: 'https://img.icons8.com/color/48/000000/css3.png',
    JS: 'https://img.icons8.com/color/48/000000/javascript.png',
    Python: 'https://img.icons8.com/color/48/000000/python.png',
    'React Js': 'https://img.icons8.com/color/48/000000/react-native.png',
    Tailwind: 'https://img.icons8.com/fluency/48/tailwind_css.png',
    Bootstrap: 'https://img.icons8.com/color/48/000000/bootstrap.png',
    Git:'https://img.icons8.com/color/48/000000/git.png',
    NextJs:'https://img.icons8.com/color/48/000000/nextjs.png',
    'Express Js': 'data:image/png;base64,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',
    Django: 'https://img.icons8.com/color/48/000000/django.png',
    'Node Js': 'https://img.icons8.com/color/48/000000/nodejs.png',
    API: 'https://img.icons8.com/color/48/000000/api-settings.png',
    Github:'https://img.icons8.com/color/48/github--v1.png',
    MongoDB: 'https://img.icons8.com/color/48/000000/mongodb.png',

  });

  const handleClick = (value) => {
    setClickedValue(value);
  };

  return (
    <>
      <div className="bg-black border border-gray-400 hover:border-gray-500 p-6 rounded-lg w-auto shadow-md">
        <h3 className="text-xl font-semibold text-emerald-700 mb-4"><samp className='font-bold text-4xl font-serif'>W</samp>eb Dev</h3>
        <div className='grid grid-cols-3 gap-3 place-content-center h-auto '>
          {Object.keys(valueInfo).map((value) => (
            <div key={value} onClick={() => handleClick(value)} className={`flex flex-col items-center cursor-pointer transition duration-300 hover:bg-emerald-600 hover:text-white rounded-lg p-2 ${clickedValue === value && 'bg-orange-600 text-white'}`}>
              <img src={valueIcons[value]} alt={value} className="w-12 h-12 mb-1" />
              <p className="text-gray-200">{value}</p>
            </div>
          ))}
        </div>
        {clickedValue && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-200">{clickedValue}</h4>
            <p className="mt-2 text-gray-300">{valueInfo[clickedValue]}</p>
          </div>
        )}
      </div>
    </>
  );
}
