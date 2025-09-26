'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JY</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              久溢
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#stats" className="text-gray-300 hover:text-white transition-colors">数据</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">技能</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">项目</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">联系</a>
          </div>
          
          <button className="btn-tech">
            <i className="fas fa-paper-plane mr-2"></i>
            开始合作
          </button>
        </div>
      </nav>
    </header>
  )
}