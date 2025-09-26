'use client'

import { useState, useEffect } from 'react'
import BentoGrid from './components/BentoGrid'
import Header from './components/Header'
import StatsSection from './components/StatsSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className={`container mx-auto px-4 py-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="gradient-border rounded-3xl p-8 mb-8">
            <h1 className="heading-responsive font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              久溢
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              Technology Leader
            </p>
            <p className="text-2xl font-semibold text-white mb-4">
              工行TOP3汽车分期助贷合作机构技术负责人
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              精通从0到1的全链路助贷信息系统设计开发，专注于金融科技领域的创新与数字化转型，
              致力于通过技术驱动业务增长，打造高效、安全、智能的金融服务平台。
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Bento Grid Section */}
        <BentoGrid />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 久溢. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}