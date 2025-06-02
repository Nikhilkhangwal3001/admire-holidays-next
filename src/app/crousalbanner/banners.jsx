'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const images = [
  '/Banner1.png',
  '/banner2.png',
  '/Banner3.png'
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
    <div className="w-full max-w-7xl h-[311px] mx-auto overflow-hidden relative mt-24 rounded-lg">
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
