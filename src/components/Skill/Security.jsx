import React from 'react';
import { motion } from 'framer-motion';

export default function SecurityTools() {
  const tools = [
    { name: 'Burp Suite', icon: 'https://www.kali.org/tools/burpsuite/images/burpsuite-logo.svg' },
    { name: 'Metasploit', icon: 'https://img.icons8.com/color/48/000000/metasploit.png' },
    { name: 'Kali Linux', icon: 'https://img.icons8.com/color/48/000000/kali-linux.png' },
    { name: 'Nmap', icon: 'https://www.kali.org/tools/nmap/images/nmap-logo.svg' },
    { name: 'Wireshark', icon: 'https://www.kali.org/tools/wireshark/images/wireshark-logo.svg' },
    { name: 'Gobuster', icon: 'https://www.kali.org/tools/gobuster/images/gobuster-logo.svg' },
    { name: 'Sqlmap', icon: 'https://www.kali.org/tools/sqlmap/images/sqlmap-logo.svg' },
    { name: 'Subfinder', icon: 'https://www.kali.org/images/kali-tools-icon-missing.svg' },
    { name: 'Nuclei', icon: 'https://www.kali.org/images/kali-tools-icon-missing.svg' },
    { name: 'Ghidra', icon: 'https://www.kali.org/tools/ghidra/images/ghidra-logo.svg' },
    { name: 'Ffuf', icon: 'https://www.kali.org/tools/ffuf/images/ffuf-logo.svg' },
    { name: 'Nikto', icon: 'https://www.kali.org/tools/nikto/images/nikto-logo.svg' },
    { name: 'Ettercap', icon: 'https://www.kali.org/tools/ettercap/images/ettercap-logo.svg' },
    { name: 'Gophish', icon: 'https://www.kali.org/images/kali-tools-icon-missing.svg' },
    { name: 'Amass', icon: 'https://www.kali.org/tools/amass/images/amass-logo.svg' },
  ];

  return (
    <div className="bg-black border border-gray-400 hover:border-gray-500 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-teal-700 mb-6 text-center">
        <samp className="font-bold text-4xl font-serif">S</samp>ecurity Tools
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 place-items-center">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-gray-200 p-3 rounded-lg bg-zinc-900 border border-gray-700 hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-1" />
            <p className="text-sm text-center font-medium text-gray-300">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
