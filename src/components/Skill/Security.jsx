import React, { useState } from 'react';

export default function Security() {
  const [clickedValue, setClickedValue] = useState('');
  const [valueInfo] = useState({
    'Burp Suite': 'Burp Suite - Burp Suite is a leading range of cybersecurity tools, brought to you by PortSwigger.',
    Metasploit: 'Metasploit - Metasploit is a penetration testing platform that enables you to find, exploit, and validate vulnerabilities.',
    'Kali Linux': 'Kali Linux - Kali Linux is a Debian-derived Linux distribution designed for digital forensics and penetration testing.',
    Nmap: 'Nmap - Nmap is a free and open-source network scanner for network discovery and security auditing.',
    Wireshark: 'Wireshark is an open-source network protocol analyzer that helps organizations capture real-time data and track, manage, and analyze network traffic even with minute details.',
    Gobuster:'Gobuster is useful for pentesters, ethical hackers and forensics experts. It also can be used for security tests.',
    Sqlmap:'Attack the given URL (-u “http://192.168.1.250/?p=1&forumaction=search”) and extract the database names (–dbs):',
    Subfinder:'This package contains a subdomain discovery tool that discovers valid subdomains for websites by using passive online sources.',
    Nuclei:'This package contains a fast tool for configurable targeted scanning based on templates offering massive extensibility and ease of use.',
    Ghidra:'This package contains a software reverse engineering (SRE) framework created and maintained by the National Security Agency Research Directorate.',
    Ffuf:'fuf is a fast web fuzzer written in Go that allows typical directory discovery, virtual host discovery (without DNS records) and GET and POST parameter fuzzing.',
    Nikto:'Nikto is a pluggable web server and CGI scanner written in Perl, using rfp’s LibWhisker to perform fast security or informational checks.',
    Ettercap:'Ettercap supports active and passive dissection of many protocols (even encrypted ones) and includes many feature for network and host analysis.',
    Gophish:'This package contains an open-source phishing toolkit designed for businesses and penetration testers. It provides the ability to quickly and easily setup and execute phishing engagements and security awareness training.',
    Amass:'This package contains a tool to help information security professionals perform network mapping of attack surfaces and perform external asset discovery using open source information gathering and active reconnaissance techniques.',

  });

  const [valueIcons] = useState({
    'Burp Suite': 'https://www.kali.org/tools/burpsuite/images/burpsuite-logo.svg',
    Metasploit: 'https://img.icons8.com/color/48/000000/metasploit.png',
    'Kali Linux': 'https://img.icons8.com/color/48/000000/kali-linux.png',
    Nmap: 'https://www.kali.org/tools/nmap/images/nmap-logo.svg',
    Wireshark:'https://www.kali.org/tools/wireshark/images/wireshark-logo.svg',
    Gobuster:'https://www.kali.org/tools/gobuster/images/gobuster-logo.svg',
    Sqlmap:'https://www.kali.org/tools/sqlmap/images/sqlmap-logo.svg',
    Subfinder:'https://www.kali.org/images/kali-tools-icon-missing.svg',
    Nuclei:'https://www.kali.org/images/kali-tools-icon-missing.svg',
    Ghidra:'https://www.kali.org/tools/ghidra/images/ghidra-logo.svg',
    Ffuf:'https://www.kali.org/tools/ffuf/images/ffuf-logo.svg',
    Nikto:'https://www.kali.org/tools/nikto/images/nikto-logo.svg',
    Ettercap:'https://www.kali.org/tools/ettercap/images/ettercap-logo.svg',
    Gophish:'https://www.kali.org/images/kali-tools-icon-missing.svg',
    Amass:'https://www.kali.org/tools/amass/images/amass-logo.svg',

  });

  const handleClick = (value) => {
    setClickedValue(value);
  };

  return (
    <>
      <div className="bg-black border border-gray-400 hover:border-gray-500 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-teal-700 mb-4"><samp className='font-bold text-4xl font-serif'>S</samp>ecurity Tools</h3>
        <div className='grid grid-cols-3 gap-3 place-content-center h-auto'>
          {Object.keys(valueInfo).map((value) => (
            <div key={value} onClick={() => handleClick(value)} className={`flex flex-col items-center cursor-pointer transition duration-300 hover:bg-teal-600 hover:text-white rounded-lg p-2 ${clickedValue === value && 'bg-orange-600 text-white'}`}>
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
