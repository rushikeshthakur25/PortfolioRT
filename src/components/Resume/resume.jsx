import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaBug, FaUserShield } from "react-icons/fa";

const TimelineSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const educationData = [
    { title: "10th Standard", description: "Achieved foundational education.", icon: <FaGraduationCap className="text-blue-500 w-6 h-6" /> },
    { title: "12th Standard", description: "Specialized in Science stream.", icon: <FaGraduationCap className="text-yellow-500 w-6 h-6" /> },
    { title: "B.Tech", description: "Graduated in Computer Engineering with a focus on Cybersecurity and Ethical Hacking.", icon: <FaGraduationCap className="text-green-500 w-6 h-6" /> },
    { title: "Certified Ethical Hacker", description: "Completed CEH certification with hands-on labs.", icon: <FaUserShield className="text-indigo-500 w-6 h-6" /> },
  ];

  const workData = [
    { title: "Intern at ProsperTech", description: "Worked on real-time web development projects.", icon: <FaLaptopCode className="text-red-500 w-6 h-6" /> },
    { title: "Security Analyst", description: "Led vulnerability assessments and penetration testing tasks.", icon: <FaUserShield className="text-purple-500 w-6 h-6" /> },
    { title: "Bug Bounty Hunter", description: "Discovered critical vulnerabilities in Fortune 500 companies.", icon: <FaBug className="text-teal-500 w-6 h-6" /> },
    { title: "Freelance Pen Tester", description: "Conducted independent security audits for startups.", icon: <FaBug className="text-pink-500 w-6 h-6" /> },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const renderTimelineItem = (item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gradient-to-br from-zinc-800 to-black rounded-xl border border-gray-600 shadow-2xl p-6 mb-8 w-full hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="flex flex-col items-center">
        <div className="mb-3 animate-pulse">{item.icon}</div>
        <h3 className="text-2xl font-extrabold italic text-orange-400 mb-2 text-center">{item.title}</h3>
        <p className="text-sm text-gray-300 italic text-center">{item.description}</p>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="bg-black text-white px-4 sm:px-8 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10 italic">
          <span className="font-serif text-5xl">E</span>ducation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map(renderTimelineItem)}
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10 italic">
          <span className="font-serif text-5xl">W</span>ork Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workData.map(renderTimelineItem)}
        </div>
      </section>

      {!isLoaded && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-75 flex justify-center items-center z-50">
          <motion.div
            className="w-12 h-12 bg-red-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default TimelineSection;
