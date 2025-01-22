import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className=" ">
            <div className="mx-auto  max-w-screen-xl  p-4  lg:py-8">
                
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between ">
                    <span className="text-sm text-gray-500 sm:text-center">
                    Personally Crafted 🎨 By <samp></samp>
                        <a href="/" className=" text-orange-400 font-bold hover:underline">
                            Rushikesh Thakur 
                        </a>
                          . Cyber Security Researcher
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="linkedin.com/in/rushikeshthakur25/" className="text-orange-600 hover:text-gray-900">
                            <img src="https://img.icons8.com/fluency/48/linkedin-circled.png"width={25} alt="linkedin" />
                            <span className="sr-only">LinkedIn page</span>
                        </Link>
                        <Link to="https://github.com/rushikeshthakur25" className="text-orange-600">
                            <img src="https://img.icons8.com/color/48/github--v1.png" width={25} alt="Github" srcset="" />
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="mailto:rushikeshthakur32@gmail.com" className="text-orange-600">
                            <img src="https://img.icons8.com/fluency/48/circled-envelope.png" width={25} alt="email" srcset="" />
                            <span className="sr-only">Email page</span>
                        </Link>
                        <Link to="https://www.twitter.com/tw/rushikesh25" className="text-orange-600">
                            <img src="https://img.icons8.com/fluency/48/twitter-circled.png" width={25} alt="X" srcset="" />
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="https://tryhackme.com/p/cyberip" className="text-orange-600">
                            <img src="https://img.icons8.com/stickers/100/hacker.png" width={25} alt="X" srcset="" />
                            <span className="sr-only">TryHackme page</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
