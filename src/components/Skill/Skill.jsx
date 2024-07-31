import React from 'react'
import Front from './Front'
import Backend from './Backend'
import Database from './Database'
import Security from './Security'
import Version_control from './Version_control'


export default function Skill() {
  return (
    <>
      <section className=" py-16 ">
        <div className="container mx-auto  px-5">
          <h1 className="text-3xl sm:text-4xl gradient-text  tracking-tight mb-8 text-center my-8 text-orange-700"><samp className='font-bold text-4xl font-serif'>S</samp>kills</h1>
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
    


    </>
  )
}
