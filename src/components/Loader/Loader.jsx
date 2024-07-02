// src/components/HackerLoader.jsx
import React, { useState, useEffect } from 'react'
import './HackerLoader.css'

const HackerLoader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 50))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="loader flex flex-col justify-center items-center h-screen bg-black text-red-600">
      <div className="alert text-4xl mb-4">Virus downloding...</div>
      <div className="loading-container">
        <div className="loading-parent">
          <div className="loading-child" style={{ transform: `rotate(${progress * 3.6}deg)` }}></div>
          <div className="loading-text text-green-500 text-2xl">
            Accessing the Server...
          </div>
          <div className="progress-text text-red-700 text-lg mt-12">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  )
}

export default HackerLoader
