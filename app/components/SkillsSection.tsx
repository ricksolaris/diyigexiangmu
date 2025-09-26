'use client'

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "后端技术",
      icon: "fas fa-code",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Java/Spring Boot", level: 95, icon: "fab fa-java" },
        { name: "Python/Django", level: 90, icon: "fab fa-python" },
        { name: "Node.js", level: 85, icon: "fab fa-node-js" },
        { name: "微服务架构", level: 92, icon: "fas fa-cubes" },
        { name: "API设计", level: 88, icon: "fas fa-code-branch" }
      ]
    },
    {
      title: "前端技术",
      icon: "fas fa-desktop",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React/Next.js", level: 90, icon: "fab fa-react" },
        { name: "Vue.js", level: 85, icon: "fab fa-vuejs" },
        { name: "TypeScript", level: 88, icon: "fas fa-code" },
        { name: "Tailwind CSS", level: 92, icon: "fas fa-palette" },
        { name: "移动端开发", level: 80, icon: "fas fa-mobile" }
      ]
    },
    {
      title: "数据库与云",
      icon: "fas fa-database",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "MySQL/PostgreSQL", level: 90, icon: "fas fa-database" },
        { name: "Redis/MongoDB", level: 85, icon: "fas fa-memory" },
        { name: "AWS/Aliyun", level: 82, icon: "fab fa-aws" },
        { name: "Docker/K8s", level: 78, icon: "fab fa-docker" },
        { name: "CI/CD", level: 85, icon: "fas fa-sync-alt" }
      ]
    }
  ]

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        <span className="highlight-text">技术栈与专业技能</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={categoryIndex}
            className="bento-item rounded-2xl p-6 gradient-border"
          >
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                <i className={`${category.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <i className={`${skill.icon} text-gray-400 group-hover:text-white transition-colors`}></i>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-white font-medium">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 装饰性进度环 */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-20 h-20">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="8" 
                    fill="none"
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    stroke={`url(#gradient-${categoryIndex})`} 
                    strokeWidth="8" 
                    fill="none"
                    strokeDasharray="251.2"
                    strokeDashoffset="50.24"
                    transform="rotate(-90 50 50)"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id={`gradient-${categoryIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`${category.icon} text-white text-lg`}></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* 专业技能亮点 */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "系统架构设计",
            description: "高可用分布式系统架构",
            icon: "fas fa-archway",
            color: "text-blue-400"
          },
          {
            title: "性能优化",
            description: "系统性能调优与监控",
            icon: "fas fa-tachometer-alt",
            color: "text-purple-400"
          },
          {
            title: "安全合规",
            description: "金融级安全标准实施",
            icon: "fas fa-shield-alt",
            color: "text-green-400"
          },
          {
            title: "团队管理",
            description: "敏捷开发与项目管理",
            icon: "fas fa-users-cog",
            color: "text-orange-400"
          }
        ].map((item, index) => (
          <div 
            key={index}
            className="bento-item rounded-2xl p-6 text-center gradient-border hover:scale-105 transition-transform duration-300"
          >
            <i className={`${item.icon} ${item.color} text-4xl mb-4`}></i>
            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}