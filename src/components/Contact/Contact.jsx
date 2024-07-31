// src/Contact.jsx
import React from 'react';
import './styles.css';


const wallOfFameCompanies = [
  { name: 'N/A', link: 'https://www.companya.com' },
  
];

const bugBountyCompanies = [
  { name: 'github.com' },
  { name: 'oppo.com' },
  
];

export default function Contact() {
  return (
    <section className="text-gray-600 body-font bg-black min-h-screen flex flex-col justify-center items-center">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl sm:text-4xl gradient-text  tracking-tight mb-8 text-center my-8 text-orange-700"><samp className='font-bold text-4xl font-serif'>A</samp>chievements</h1>
        <h2 className="text-3xl sm:text-4xl gradient-text font-extrabold tracking-tight mb-8 text-center">Wall of Fame</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wallOfFameCompanies.map((company, index) => {
            const animationClass = `border-animated-${(index % 4) + 1}`;
            return (
              <div
                className={`p-4 bg-black shadow-md rounded-lg flex flex-col items-center justify-between border border-gray-700 ${animationClass}`}
                key={index}
              >
                <h3 className="text-lg font-bold text-gray-300">{company.name}</h3>
                <a href={company.link} className="text-sm text-blue-500 hover:text-blue-700 mt-2">Visit Website</a>
              </div>
            );
          })}
        </div>

        <h2 className="text-3xl sm:text-4xl gradient-text font-extrabold tracking-tight mb-8 text-center mt-16">Bug Report</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bugBountyCompanies.map((company, index) => {
            const animationClass = `border-animated-${(index % 4) + 1}`;
            return (
              <div
                className={`p-4 bg-black shadow-md rounded-lg flex flex-col items-center justify-between border border-gray-700 ${animationClass}`}
                key={index}
              >
                <h3 className="text-lg font-bold text-gray-300">{company.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
