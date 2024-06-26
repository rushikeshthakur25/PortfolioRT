import React, { useState } from 'react';

export default function Front() {
  const [clickedValue, setClickedValue] = useState('');
  const [valueInfo] = useState({
    Git:'Git is a distributed version control system used for tracking changes in source code during software development.',
    Github:'GitHub is a web-based version control and collaboration platform for software developers.'
  });

  const [valueIcons] = useState({
    Git:'https://img.icons8.com/color/48/000000/git.png',
    Github:'https://img.icons8.com/color/48/github--v1.png'

  });

  const handleClick = (value) => {
    setClickedValue(value);
  };

  return (
    <>
      <div className="bg-black border border-gray-400 hover:border-gray-500 p-6 rounded-lg w-auto shadow-md">
        <h3 className="text-xl font-semibold text-cyan-700 mb-4"><samp className='font-bold text-4xl font-serif'>V</samp>ersion Control</h3>
        <div className='grid grid-cols-3 gap-3 place-content-center h-auto '>
          {Object.keys(valueInfo).map((value) => (
            <div key={value} onClick={() => handleClick(value)} className={`flex flex-col items-center cursor-pointer transition duration-300 hover:bg-cyan-600 hover:text-white rounded-lg p-2 ${clickedValue === value && 'bg-orange-600 text-white'}`}>
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
