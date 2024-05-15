import React, { useState } from 'react';

export default function Security() {
  const [clickedValue, setClickedValue] = useState('');
  const [valueInfo] = useState({
    'Burp Suite': 'Burp Suite - Burp Suite is a leading range of cybersecurity tools, brought to you by PortSwigger.',
    Metasploit: 'Metasploit - Metasploit is a penetration testing platform that enables you to find, exploit, and validate vulnerabilities.',
    'Kali Linux': 'Kali Linux - Kali Linux is a Debian-derived Linux distribution designed for digital forensics and penetration testing.',
    Nmap: 'Nmap - Nmap is a free and open-source network scanner for network discovery and security auditing.',
  });

  const [valueIcons] = useState({
    'Burp Suite': 'https://img.icons8.com/color/48/000000/burp-suite.png',
    Metasploit: 'https://img.icons8.com/color/48/000000/metasploit.png',
    'Kali Linux': 'https://img.icons8.com/color/48/000000/kali-linux.png',
    Nmap: 'https://img.icons8.com/color/48/000000/cable.png',
  });

  const handleClick = (value) => {
    setClickedValue(value);
  };

  return (
    <>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-orange-700 mb-4">Security</h3>
        <div className='grid grid-cols-2 gap-3 place-content-center h-auto'>
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
