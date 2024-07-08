// src/components/HackerLoader.jsx
import React, { useState, useEffect } from 'react'
import './HackerLoader.css'

const HackerLoader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 100 : prevProgress + 10))
    }, 100)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="loader flex flex-col justify-center items-center h-screen bg-black text-red-600">
      <div className="loading-container w-full bg-gray-800 h-4 relative">
        <div 
          className="loading-bar h-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

export default HackerLoader
