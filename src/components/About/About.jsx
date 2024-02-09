import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaLock } from 'react-icons/fa';
import man from '../../assets/img/man.png';

export default function About() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img src={man} alt="image" />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Here's a snapshot of my career and education
                        </h2>
                        <p className="mt-6 text-gray-600">
                            I've had the opportunity to work in various roles and industries, gaining valuable experience and expertise along the way.
                        </p>
                    </div>
                </div>
            </div>

            {/* Slider */}
            <div className="container mx-auto mt-16 px-6 bg-black rounded-lg shadow-md">
                <Slider {...settings}>
                    <div className="px-4">
                        <div className="flex flex-col items-center justify-center">
                            <FaBriefcase className="text-6xl text-orange-600 mb-4" />
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-200">Work Experience</h3>
                                <p className="mt-2 text-gray-400">
                                    Inter at PorsperTech: Developed web projects and gained hands-on experience in web security, including participation in bug bounty programs on platforms like HackerOne and Bugcrowd.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="flex flex-col items-center justify-center">
                            <FaCertificate className="text-6xl text-orange-600 mb-4" />
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-200">Certifications</h3>
                                <p className="mt-2 text-gray-400">
                                    Certified Prasad Computer: Obtained certification in web development, demonstrating proficiency in various web technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="flex flex-col items-center justify-center">
                            <FaLock className="text-6xl text-orange-600 mb-4" />
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-200">Security Experience</h3>
                                <p className="mt-2 text-gray-400">
                                    Participated in bug bounty programs on platforms like HackerOne and Bugcrowd, focusing on identifying and fixing security vulnerabilities in web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="flex flex-col items-center justify-center">
                            <FaGraduationCap className="text-6xl text-orange-600 mb-4" />
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-200">Education</h3>
                                <p className="mt-2 text-gray-400">
                                    B.Tech in Computer Engineering: Acquired comprehensive knowledge in computer science, programming, and engineering principles.
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>       
        </div>
        
    );
}
