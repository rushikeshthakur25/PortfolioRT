import React from 'react';
import { motion } from 'framer-motion';
import man from '../../assets/img/man.png';
import Resume from '../Resume/resume';
import {
  FaShieldAlt,
  FaNetworkWired,
  FaTerminal,
  FaMobileAlt,
  FaUserSecret,
  FaBug
} from 'react-icons/fa';

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <FaUserSecret size={64} className="text-orange-500 mb-4 animate-bounce" />
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-sky-400 text-transparent bg-clip-text">
            Rushikesh Thakur
          </h2>
          <p className="text-lg mt-4 max-w-3xl text-gray-300 px-4">
            I am an <span className="text-blue-400">Application Security Engineer</span> and
            <span className="text-orange-400"> Bug Bounty Hunter</span>, specializing in
            <span className="text-red-400"> Mobile app security</span>,
            <span className="text-green-400"> Web security</span>,
            <span className="text-purple-400"> API security</span>, and
            <span className="text-cyan-400"> Network VAPT</span>. With <span className="text-indigo-400">3 years</span> experience,
            I identify vulnerabilities & contribute to a <span className="text-yellow-400">Security-first mindset</span>.
          </p>
        </motion.div>
      </div>
        {/* What I do */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
            <span className="font-serif">What I Do</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'WebApp Pentesting',
                icon: <FaShieldAlt size={48} className="text-orange-400" />,
                color: 'orange',
                level: '100%',
                desc: 'Identifying vulnerabilities in web apps simulating real-world threats.'
              },
              {
                title: 'API Pentesting',
                icon: <FaNetworkWired size={48} className="text-cyan-400" />,
                color: 'cyan',
                level: '75%',
                desc: 'Mitigating API vulnerabilities like auth bypass & data leaks.'
              },
              {
                title: 'Network VAPT',
                icon: <FaTerminal size={48} className="text-green-400" />,
                color: 'green',
                level: '88%',
                desc: 'Pen-testing & vulnerability assessment of enterprise networks.'
              },
              {
                title: 'Mobile App Pentesting',
                icon: <FaMobileAlt size={48} className="text-pink-400" />,
                color: 'pink',
                level: '59%',
                desc: 'Security assessments for iOS/Android to prevent unauthorized access.'
              },
            ].map(({ title, icon, color, level, desc }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-900 border border-gray-700 p-6 rounded-xl shadow-md text-center"
              >
                <div className="mb-4">{icon}</div>
                <h3 className={`text-xl font-semibold text-${color}-400 mb-2`}>{title}</h3>
                <p className="text-gray-400 mb-3">{desc}</p>
                <div className="h-2 rounded-full bg-gray-800">
                  <div className={`h-full bg-${color}-400`} style={{ width: level }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 text-gray-300">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.img
            src={man}
            alt="Rushikesh"
            className="rounded-3xl w-64 md:w-80 opacity-70 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl text-orange-400 font-bold mb-4">
              Here's a snapshot of my career & education
            </h2>
            <p className="text-gray-400">
              Experience in offensive security, full-stack development & educational journey in Computer Engineering.
            </p>
          </motion.div>
        </div>
      </div>

      <Resume />
    </div>
  );
}