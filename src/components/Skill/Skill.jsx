import React from 'react'
import Front from './Front'
import Backend from './Backend'
import Database from './Database'
import Security from './Security'
import Version_control from './Version_control'
import res from "../../assets/img/resume.png";


export default function Skill() {
  return (
    <>
      <section className=" py-16 ">
        <div className="container mx-auto  px-5">
          <h1 className="text-3xl  text-center text-orange-600 my-8"><samp className='font-bold text-4xl font-serif'>S</samp>kills</h1>
          <p className="text-lg text-gray-700 text-center mb-8">Here's some Develops Skills...</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Front />
            <Backend />
            <Database />
            <Version_control/>
            <Security />
          </div>
        </div>
      </section>
      <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl"> My Resume</span>
                        </h2>

                        <a
                            href={res}  
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            download  
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </a>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src={res} alt="image1" />
                </div>
            </aside>


    </>
  )
}
