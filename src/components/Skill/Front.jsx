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
    Next:'Next.js is a React framework for building server-rendered applications. It s often used for creating fast and scalable web applications, particularly those requiring server-side rendering, static site generation, or hybrid rendering.'
    

  });

  const [valueIcons] = useState({
    HTML: 'https://img.icons8.com/color/48/000000/html-5.png',
    CSS: 'https://img.icons8.com/color/48/000000/css3.png',
    JS: 'https://img.icons8.com/color/48/000000/javascript.png',
    Python: 'https://img.icons8.com/color/48/000000/python.png',
    'React Js': 'https://img.icons8.com/color/48/000000/react-native.png',
    Tailwind: 'https://img.icons8.com/color/48/000000/tailwind-css.png',
    Bootstrap: 'https://img.icons8.com/color/48/000000/bootstrap.png',
    Git:'https://img.icons8.com/color/48/000000/git.png',
    Next:'https://img.icons8.com/color/48/000000/nextjs.png',

  });

  const handleClick = (value) => {
    setClickedValue(value);
  };

  return (
    <>
      <div className="bg-black p-6 rounded-lg w-auto shadow-md">
        <h3 className="text-xl font-semibold text-orange-700 mb-4">Frontend</h3>
        <div className='grid grid-cols-3 gap-3 place-content-center h-auto '>
          {Object.keys(valueInfo).map((value) => (
            <div key={value} onClick={() => handleClick(value)} className={`flex flex-col items-center cursor-pointer transition duration-300 hover:bg-gray-600 hover:text-white rounded-lg p-2 ${clickedValue === value && 'bg-gray-600 text-white'}`}>
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
