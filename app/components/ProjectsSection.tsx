'use client'

export default function ProjectsSection() {
  const projects = [
    {
      title: "工行汽车分期助贷系统",
      description: "为工商银行TOP3合作机构打造的汽车分期助贷平台，支持全流程线上化操作",
      technologies: ["Java", "Spring Boot", "MySQL", "Redis", "Vue.js"],
      stats: {
        users: "50万+",
        transactions: "100亿+",
        uptime: "99.99%"
      },
      color: "from-blue-500 to-cyan-500",
      icon: "fas fa-car"
    },
    {
      title: "智能风控决策引擎",
      description: "基于机器学习的智能风控系统，实现毫秒级风险识别与决策",
      technologies: ["Python", "TensorFlow", "Kafka", "Elasticsearch"],
      stats: {
        accuracy: "98.5%",
        speed: "10ms",
        coverage: "全流程"
      },
      color: "from-purple-500 to-pink-500",
      icon: "fas fa-brain"
    },
    {
      title: "移动端助贷APP",
      description: "面向终端用户的移动应用，提供便捷的贷款申请与管理服务",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
      stats: {
        downloads: "100万+",
        rating: "4.8/5",
        active: "85%"
      },
      color: "from-green-500 to-teal-500",
      icon: "fas fa-mobile-alt"
    },
    {
      title: "数据中台系统",
      description: "统一数据服务平台，支持多源数据整合与实时分析",
      technologies: ["Spark", "Hadoop", "ClickHouse", "Airflow"],
      stats: {
        data: "10TB+",
        latency: "<1s",
        sources: "50+"
      },
      color: "from-orange-500 to-red-500",
      icon: "fas fa-database"
    }
  ]

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        <span className="highlight-text">代表性项目</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bento-item rounded-2xl p-6 gradient-border hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                  <i className={`${project.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            {/* 项目数据统计 */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {Object.entries(project.stats).map(([key, value], statIndex) => (
                <div key={statIndex} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    {key === 'users' && '用户数'}
                    {key === 'transactions' && '交易额'}
                    {key === 'uptime' && '可用性'}
                    {key === 'accuracy' && '准确率'}
                    {key === 'speed' && '响应时间'}
                    {key === 'coverage' && '覆盖范围'}
                    {key === 'downloads' && '下载量'}
                    {key === 'rating' && '评分'}
                    {key === 'active' && '活跃度'}
                    {key === 'data' && '数据量'}
                    {key === 'latency' && '延迟'}
                    {key === 'sources' && '数据源'}
                  </div>
                </div>
              ))}
            </div>
            
            {/* 进度条装饰 */}
            <div className="relative">
              <div className="w-full bg-gray-700 rounded-full h-1">
                <div 
                  className={`h-1 rounded-full bg-gradient-to-r ${project.color}`}
                  style={{ width: '85%' }}
                ></div>
              </div>
              <div className="absolute -top-2 right-0 w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            {/* 装饰性元素 */}
            <div className="absolute top-4 right-4 opacity-20">
              <i className={`${project.icon} text-3xl`}></i>
            </div>
          </div>
        ))}
      </div>
      
      {/* 项目时间线 */}
      <div className="mt-12 bento-item rounded-2xl p-8 gradient-border">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          <i className="fas fa-history mr-3 text-blue-400"></i>
          项目发展历程
        </h3>
        
        <div className="relative">
          {/* 时间线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="space-y-8">
            {[
              { year: "2016", event: "首个助贷系统上线", milestone: "系统初建" },
              { year: "2018", event: "与工行建立合作关系", milestone: "战略合作" },
              { year: "2020", event: "智能风控系统部署", milestone: "技术创新" },
              { year: "2022", event: "移动端应用全面推广", milestone: "移动化转型" },
              { year: "2024", event: "数据中台系统完善", milestone: "数据驱动" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-1/2 pr-8 pl-8">
                  <div className="bento-item rounded-xl p-4 bg-gray-900/50">
                    <div className="text-sm text-blue-400 font-semibold mb-1">{item.year}</div>
                    <div className="text-white font-medium mb-1">{item.event}</div>
                    <div className="text-xs text-gray-400">{item.milestone}</div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                
                <div className="w-1/2 pl-8 pr-8">
                  {/* 空白占位 */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}