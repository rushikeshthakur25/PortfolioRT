// src/Contact.jsx
import React from 'react';
import './styles.css'; // Ensure to import the CSS file where the gradient effect is defined

const wallOfFameCompanies = [
  { name: 'Company A', link: 'https://www.companya.com' },
  { name: 'Company B', link: 'https://www.companyb.com' },
  { name: 'Company C', link: 'https://www.companyc.com' },
  { name: 'Company D', link: 'https://www.companyd.com' },
  
];

const bugBountyCompanies = [
  { name: 'Company U' },
  { name: 'Company V' },
  { name: 'Company W' },
  { name: 'Company X' },
  { name: 'Company Y' },
  { name: 'Company Z' },
  { name: 'Company AA' },
  { name: 'Company BB' },
  
];

export default function Contact() {
  return (
    <section className="text-gray-600 body-font bg-black min-h-screen flex flex-col justify-center items-center">
      <div className="container px-5 py-24 mx-auto">
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

        <h2 className="text-3xl sm:text-4xl gradient-text font-extrabold tracking-tight mb-8 text-center mt-16">Bug Bounty</h2>
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
