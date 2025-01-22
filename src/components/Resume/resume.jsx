import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TimelineSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Timeline Data
  const educationData = [
    { title: "10th Standard", description: "Achieved foundational education.", dotColor: "bg-blue-500" },
    { title: "12th Standard", description: "Specialized in Science stream.", dotColor: "bg-yellow-500" },
    { title: "B.Tech", description: "Graduated in Computer Engineering.", dotColor: "bg-green-500" },
  ];

  const workData = [
    { title: "Intern at ProsperTech", description: "Web development projects.", dotColor: "bg-red-500" },
    { title: "Security Analyst", description: "Worked on penetration testing.", dotColor: "bg-purple-500" },
    { title: "Bug Bounty Hunter", description: "Identified and fixed security vulnerabilities.", dotColor: "bg-teal-500" },
  ];

  // Handle page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Delay for the loading animation (500ms)
    return () => clearTimeout(timer);
  }, []);

  // Render timeline items with scroll animations
  const renderTimelineItem = (item, index) => (
    <motion.div
      key={index}
      className="relative mb-10"
      initial={{ opacity: 0, y: 100 }}  // Initial state (invisible and below)
      whileInView={{ opacity: 1, y: 0 }} // Animate when the item is in the viewport
      viewport={{ once: true }}  // Animation triggers only once when the element comes into view
      transition={{ duration: 0.5, delay: index * 0.2 }} // Delay based on index for staggered animation
    >
      {/* Progress Dot (colored) */}
      <div className={`absolute w-6 h-6 ${item.dotColor} rounded-full -left-6 sm:-left-8`}></div>

      {/* Card Content */}
      <div className="ml-12 sm:ml-16 bg-black border border-gray-400 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-center text-white mt-4">{item.title}</h3>
        <p className="mt-2 text-center text-gray-400">{item.description}</p>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="mt-4 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Education Section */}
      <section className="py-12 px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
        <div className="relative before:absolute before:content-[''] before:w-1 before:h-full before:bg-gray-400 before:left-4 sm:before:left-6">
          {educationData.map(renderTimelineItem)}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-12 px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Work Experience</h2>
        <div className="relative before:absolute before:content-[''] before:w-1 before:h-full before:bg-gray-400 before:left-4 sm:before:left-6">
          {workData.map(renderTimelineItem)}
        </div>
      </section>

      {/* Loader Animation (until page content is visible) */}
      {!isLoaded && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-75 flex justify-center items-center z-50">
          <motion.div
            className="w-12 h-12 bg-red-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default TimelineSection;
