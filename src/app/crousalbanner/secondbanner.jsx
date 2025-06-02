'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const images = [
  '/banner4.png',
  '/banner5.png',
  '/Banner1.png'
]

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full mt-24 max-w-7xl h-[311px] mx-auto overflow-hidden relative  rounded-lg">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Banner ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
        />
      ))}
    </div>
  )
}
