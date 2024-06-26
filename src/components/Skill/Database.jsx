import React, { useState } from 'react';

export default function Database() {
  const [clickedValue, setClickedValue] = useState('');
  const [valueInfo] = useState({
    MySql: 'MySQL - MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL).',
    MongoDB: 'MongoDB - MongoDB is a cross-platform document-oriented NoSQL database program.',
  });

  const [valueIcons] = useState({
    MySql: 'https://img.icons8.com/color/48/000000/mysql.png',
    MongoDB: 'https://img.icons8.com/color/48/000000/mongodb.png',
  });

  const handleClick = (value) => {
    setClickedValue(value);
  };

  return (
    <>
      <div className="bg-black border border-gray-400 hover:border-gray-500 p-6 rounded-lg w-auto shadow-md">
        <h3 className="text-xl font-semibold text-lime-700 mb-4"><samp className='font-bold text-4xl font-serif'>D</samp>atabase</h3>
        <div className='grid grid-cols-2 gap-2 place-content-center h-auto'>
          {Object.keys(valueInfo).map((value) => (
            <div key={value} onClick={() => handleClick(value)} className={`flex flex-col items-center cursor-pointer transition duration-300 hover:bg-lime-600 hover:text-white rounded-lg p-2 ${clickedValue === value && 'bg-orange-600 text-white'}`}>
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
