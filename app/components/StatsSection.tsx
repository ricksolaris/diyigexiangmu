'use client'

import { useState, useEffect } from 'react'

export default function StatsSection() {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    systems: 0
  })

  useEffect(() => {
    const targetValues = {
      projects: 50,
      experience: 8,
      clients: 15,
      systems: 12
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      setCounters({
        projects: Math.floor(targetValues.projects * progress),
        experience: Math.floor(targetValues.experience * progress),
        clients: Math.floor(targetValues.clients * progress),
        systems: Math.floor(targetValues.systems * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounters(targetValues)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      icon: 'fas fa-rocket',
      value: counters.projects,
      label: '完成项目',
      suffix: '+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fas fa-calendar-alt',
      value: counters.experience,
      label: '年经验',
      suffix: '+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'fas fa-users',
      value: counters.clients,
      label: '合作客户',
      suffix: '+',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: 'fas fa-server',
      value: counters.systems,
      label: '系统部署',
      suffix: '+',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="stats" className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bento-item rounded-2xl p-6 text-center gradient-border"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center glow-animation`}>
              <i className={`${stat.icon} text-white text-2xl`}></i>
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-gray-300 text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
      
      {/* 数据可视化图表 */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bento-item rounded-2xl p-6 gradient-border">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <i className="fas fa-chart-line text-blue-400 mr-3"></i>
            技术栈分布
          </h3>
          <div className="space-y-4">
            {[
              { name: '后端开发', value: 40, color: 'bg-blue-500' },
              { name: '前端开发', value: 30, color: 'bg-purple-500' },
              { name: '数据库设计', value: 20, color: 'bg-green-500' },
              { name: '系统架构', value: 10, color: 'bg-orange-500' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300">{item.name}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.color} transition-all duration-1000`}
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-medium">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bento-item rounded-2xl p-6 gradient-border">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <i className="fas fa-project-diagram text-purple-400 mr-3"></i>
            项目类型分布
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: '助贷系统', value: 35, icon: 'fas fa-hand-holding-usd', color: 'text-blue-400' },
              { name: '金融平台', value: 25, icon: 'fas fa-chart-pie', color: 'text-purple-400' },
              { name: '移动应用', value: 20, icon: 'fas fa-mobile-alt', color: 'text-green-400' },
              { name: '数据中台', value: 20, icon: 'fas fa-database', color: 'text-orange-400' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-900/50">
                <i className={`${item.icon} ${item.color} text-3xl mb-2`}></i>
                <div className="text-2xl font-bold text-white">{item.value}%</div>
                <div className="text-gray-400 text-sm">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}