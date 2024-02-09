import React, { useState } from 'react';

export default function Backend() {
  const [clickedValue, setClickedValue] = useState('');
  const [valueInfo] = useState({
    'Express Js': 'Express  - Express.js is a web application framework for Node.js, designed for building web applications and APIs.',
    Django: 'Django - Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
    'Node Js': 'Node.js - Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.',
    API: 'API - An Application Programming Interface (API) is a set of rules and protocols for building and interacting with software applications.',
    Git:'Git is a distributed version control system used for tracking changes in source code during software development.'
  });

  const [valueIcons] = useState({
    'Express Js': 'https://img.icons8.com/color/48/000000/nodejs.png',
    Django: 'https://img.icons8.com/color/48/000000/django.png',
    'Node Js': 'https://img.icons8.com/color/48/000000/nodejs.png',
    API: 'https://img.icons8.com/color/48/000000/api-settings.png',
    Git:'https://img.icons8.com/color/48/000000/git.png'
  });

  const handleClick = (value) => {
    setClickedValue(value);
  };

  return (
    <>
      <div className="bg-black p-6 rounded-lg w-auto shadow-md">
        <h3 className="text-xl font-semibold text-orange-700 mb-4">Backend</h3>
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
            <h4 className="text-lg font-semibold text-gray-300">{clickedValue}</h4>
            <p className="mt-2 text-gray-300">{valueInfo[clickedValue]}</p>
          </div>
        )}
      </div>
    </>
  );
}
