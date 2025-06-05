import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Bug } from 'lucide-react';

const wallOfFameCompanies = [
  { name: 'N/A', link: 'https://www.companya.com' },
];

const bugBountyCompanies = [
  { name: 'GitHub', icon: 'https://img.icons8.com/ios-filled/50/github.png' },
  { name: 'Oppo', icon: 'https://img.icons8.com/ios-filled/50/security-checked.png' },
];

export default function Contact() {
  return (
    <section className="text-gray-200 body-font bg-black min-h-screen flex flex-col justify-center items-center">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-8">
          <span className='font-serif text-5xl'>A</span>chievements
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6 flex justify-center items-center gap-2">
              <ShieldCheck className="text-cyan-500 w-6 h-6" /> Wall of Fame
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wallOfFameCompanies.map((company, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-zinc-900 border border-gray-700 rounded-xl p-6 text-center shadow-md"
                >
                  <h3 className="text-lg font-bold text-orange-300">{company.name}</h3>
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-600 mt-2 inline-block"
                  >
                    Visit Website
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-pink-400 mb-6 mt-16 flex justify-center items-center gap-2">
            <Bug className="text-pink-500 w-6 h-6" /> Bug Reports
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bugBountyCompanies.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-900 border border-gray-700 rounded-xl p-6 text-center shadow-md"
              >
                {company.icon && (
                  <img
                    src={company.icon}
                    alt={company.name}
                    className="w-12 h-12 mb-2 mx-auto"
                  />
                )}
                <h3 className="text-lg font-bold text-green-300">{company.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}