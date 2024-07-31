// src/components/HackerLoader.jsx
import React, { useState, useEffect } from 'react';
import './HackerLoader.css';

const commands = [
  'nmap -sP 192.168.1.0/24',  // Scan network
  'ssh user@192.168.1.100',   // SSH into a server
  'cat /etc/shadow',           // View sensitive file
  'run'                        // Command to open the website
];

const HackerLoader = () => {
  const [commandIndex, setCommandIndex] = useState(0);
  const [output, setOutput] = useState([]);
  const [currentText, setCurrentText] = useState('');
  
  // Typing speed (characters per second)
  const typingSpeed = 30;
  // Delay between commands (in milliseconds)
  const commandDelay = 4000;
  // Delay before redirect (in milliseconds)
  const redirectDelay = 4000;

  useEffect(() => {
    if (commandIndex < commands.length) {
      const typingInterval = setInterval(() => {
        setCurrentText(prev => {
          const nextChar = commands[commandIndex][prev.length];
          if (nextChar) {
            return prev + nextChar;
          } else {
            clearInterval(typingInterval);
            setOutput(prevOutput => [...prevOutput, `user@website:~$ ${commands[commandIndex]}`]);
            setCurrentText('');
            setCommandIndex(commandIndex + 1);
            return prev;
          }
        });
      }, 1000 / typingSpeed); // Adjust typing speed here

      return () => clearInterval(typingInterval);
    } else if (commandIndex === commands.length) {
      handleCommand('run');
    }
  }, [commandIndex]);

  const handleCommand = (cmd) => {
    let response;
    switch (cmd.toLowerCase()) {
      case 'run':
        response = 'Opening the website...';
        setOutput(prevOutput => [...prevOutput, `user@website:~$ ${cmd}`, response]);
        setTimeout(() => {
          window.location.href = '#'; // Replace with your actual URL
        }, redirectDelay);
        break;
      default:
        response = 'Command not found. Type "run" to open the website.';
        setOutput(prevOutput => [...prevOutput, `user@website:~$ ${cmd}`, response]);
    }
  };

  return (
    <div className="terminal flex flex-col justify-center items-center h-screen bg-black text-green-500">
      <div className="terminal-container w-full max-w-2xl bg-black p-4 border border-green-600">
        <div className="output">
          {output.map((line, index) => (
            <div key={index} className="line">{line}</div>
          ))}
          {commandIndex < commands.length && (
            <div className="line">
              user@website:~$ {currentText}<span className="blinking-cursor">|</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HackerLoader;
