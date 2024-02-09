import React from 'react';
import Svg from '../Svg/Svg';
import { FaCode, FaPalette, FaShieldAlt } from 'react-icons/fa';


export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl ">
            <div className="grid  place-items-center sm:mt-20">
                <Svg/>
            </div>

            <div className="mx-auto w-full max-w-7xl">
            <div className="grid place-items-center sm:mt-20">
                <FaCode size={64} color="#FFA500" className="mb-4" />
            </div>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-8 text-orange-500">Hi, Rushikesh Thakur</h2>
                <p className="text-lg text-gray-700">Versatile software engineer skilled in full-stack development with expertise in React.js, Python, Django, and web security. Proven ability to design and implement scalable solutions. Enthusiastic about staying current with emerging technologies and collaborating across teams for innovative product delivery.</p>
            </div>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-8">What I Do?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-black rounded-lg shadow-md flex flex-col items-center justify-center p-6 transform hover:-translate-y-1 transition-transform duration-300">
                            <FaCode size={48} color="#FFA500" className="mb-4" />
                            <h3 className="text-xl font-semibold text-gray-200 mb-4">Web Development</h3>
                            <p className="text-gray-400">Experienced in creating dynamic and responsive web applications, with a focus on user-friendly interfaces and efficient functionality</p>
                        </div>
                        <div className="bg-black rounded-lg shadow-md flex flex-col items-center justify-center p-6 transform hover:-translate-y-1 transition-transform duration-300">
                            <FaPalette size={48} color="#FFA500" className="mb-4" />
                            <h3 className="text-xl font-semibold text-gray-200 mb-4">Design</h3>
                            <p className="text-gray-400">Skilled in incorporating design elements that enhance user experience and promote accessibility across different devices and platforms</p>
                        </div>
                        <div className="bg-black rounded-lg shadow-md flex flex-col items-center justify-center p-6 transform hover:-translate-y-1 transition-transform duration-300">
                            <FaShieldAlt size={48} color="#FFA500" className="mb-4" />
                            <h3 className="text-xl font-semibold text-gray-200 mb-4">Security</h3>
                            <p className="text-gray-400">Proficient in implementing security best practices such as input validation, authentication mechanisms, and encryption to protect against common threats like SQL injection, cross-site scripting (XSS), and CSRF attacks.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            


            
        </div>
    );
}
