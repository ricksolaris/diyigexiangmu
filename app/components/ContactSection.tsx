'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData)
    alert('感谢您的留言！我会尽快回复您。')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: '邮箱联系',
      value: 'jiuyi@example.com',
      color: 'from-blue-500 to-cyan-500',
      action: 'mailto:jiuyi@example.com'
    },
    {
      icon: 'fas fa-phone',
      title: '电话咨询',
      value: '+86 138-0000-0000',
      color: 'from-purple-500 to-pink-500',
      action: 'tel:+8613800000000'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: '工作地点',
      value: '北京市朝阳区金融科技园区',
      color: 'from-green-500 to-teal-500',
      action: '#'
    },
    {
      icon: 'fas fa-clock',
      title: '工作时间',
      value: '周一至周五 9:00-18:00',
      color: 'from-orange-500 to-red-500',
      action: '#'
    }
  ]

  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        <span className="highlight-text">联系与合作</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 联系信息 */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            <i className="fas fa-comments mr-3 text-blue-400"></i>
            联系方式
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bento-item rounded-2xl p-6 gradient-border hover:scale-105 transition-all duration-300 block"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                    <i className={`${method.icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{method.title}</div>
                    <div className="text-white font-medium">{method.value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* 社交媒体 */}
          <div className="mt-8 bento-item rounded-2xl p-6 gradient-border">
            <h4 className="text-lg font-bold text-white mb-4">社交媒体</h4>
            <div className="flex space-x-4">
              {[
                { icon: 'fab fa-linkedin', color: 'text-blue-400', label: 'LinkedIn' },
                { icon: 'fab fa-github', color: 'text-gray-400', label: 'GitHub' },
                { icon: 'fab fa-weixin', color: 'text-green-400', label: '微信' },
                { icon: 'fab fa-twitter', color: 'text-blue-300', label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors ${social.color} hover:scale-110 transform duration-200`}
                  title={social.label}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* 联系表单 */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            <i className="fas fa-paper-plane mr-3 text-purple-400"></i>
            发送消息
          </h3>
          
          <form onSubmit={handleSubmit} className="bento-item rounded-2xl p-6 gradient-border">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="请输入您的姓名"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  邮箱地址
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="请输入您的邮箱"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  留言内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="请简要描述您的需求或问题"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-tech py-4 rounded-lg text-lg font-semibold"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                发送消息
              </button>
            </div>
          </form>
          
          {/* 合作优势 */}
          <div className="mt-6 bento-item rounded-2xl p-6 gradient-border">
            <h4 className="text-lg font-bold text-white mb-4">合作优势</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'fas fa-rocket', text: '快速响应', color: 'text-blue-400' },
                { icon: 'fas fa-shield-alt', text: '专业可靠', color: 'text-green-400' },
                { icon: 'fas fa-lightbulb', text: '创新方案', color: 'text-purple-400' },
                { icon: 'fas fa-handshake', text: '长期合作', color: 'text-orange-400' }
              ].map((advantage, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <i className={`${advantage.icon} ${advantage.color}`}></i>
                  <span className="text-gray-300 text-sm">{advantage.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* 合作流程 */}
      <div className="mt-12 bento-item rounded-2xl p-8 gradient-border">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          <i className="fas fa-cogs mr-3 text-teal-400"></i>
          合作流程
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "需求沟通",
              description: "深入理解业务需求",
              icon: "fas fa-comments"
            },
            {
              step: "02",
              title: "方案设计",
              description: "定制化技术方案",
              icon: "fas fa-pencil-alt"
            },
            {
              step: "03",
              title: "开发实施",
              description: "高质量代码交付",
              icon: "fas fa-code"
            },
            {
              step: "04",
              title: "持续支持",
              description: "长期维护与优化",
              icon: "fas fa-headset"
            }
          ].map((stage, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {stage.step}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{stage.title}</h4>
              <p className="text-gray-400 text-sm">{stage.description}</p>
              <i className={`${stage.icon} text-blue-400 text-2xl mt-3 block`}></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}