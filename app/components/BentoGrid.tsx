'use client'

export default function BentoGrid() {
  const bentoItems = [
    {
      title: "技术领导力",
      description: "带领技术团队完成多个大型金融系统开发",
      icon: "fas fa-crown",
      color: "from-blue-500 to-cyan-500",
      size: "col-span-1 row-span-1",
      stats: "15+ 团队成员"
    },
    {
      title: "全链路设计",
      description: "从需求分析到系统上线的完整开发流程",
      icon: "fas fa-sitemap",
      color: "from-purple-500 to-pink-500",
      size: "col-span-1 row-span-1",
      stats: "100% 项目交付"
    },
    {
      title: "金融科技",
      description: "专注于助贷领域的科技创新",
      icon: "fas fa-chart-line",
      color: "from-green-500 to-teal-500",
      size: "col-span-1 row-span-2",
      stats: "8年 行业经验"
    },
    {
      title: "系统架构",
      description: "高可用、高并发的分布式系统设计",
      icon: "fas fa-server",
      color: "from-orange-500 to-red-500",
      size: "col-span-1 row-span-1",
      stats: "99.9% 可用性"
    },
    {
      title: "技术创新",
      description: "持续探索前沿技术在金融领域的应用",
      icon: "fas fa-lightbulb",
      color: "from-indigo-500 to-blue-500",
      size: "col-span-1 row-span-1",
      stats: "10+ 技术专利"
    },
    {
      title: "团队协作",
      description: "敏捷开发与高效的项目管理",
      icon: "fas fa-users",
      color: "from-pink-500 to-rose-500",
      size: "col-span-1 row-span-1",
      stats: "50+ 成功项目"
    }
  ]

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        <span className="highlight-text">核心能力</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        {bentoItems.map((item, index) => (
          <div
            key={index}
            className={`bento-item rounded-2xl p-6 gradient-border ${item.size} hover:scale-105 transition-all duration-300`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 float-animation`}>
                  <i className={`${item.icon} text-white text-xl`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-lg font-semibold text-white">
                  {item.stats}
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* 装饰性元素 */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
              <div className={`w-full h-full bg-gradient-to-br ${item.color} rounded-full`}></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* 技术亮点展示 */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bento-item rounded-2xl p-6 gradient-border text-center">
          <i className="fas fa-shield-alt text-blue-400 text-4xl mb-4"></i>
          <h4 className="text-lg font-bold text-white mb-2">安全合规</h4>
          <p className="text-gray-400 text-sm">符合金融行业最高安全标准</p>
        </div>
        
        <div className="bento-item rounded-2xl p-6 gradient-border text-center">
          <i className="fas fa-bolt text-purple-400 text-4xl mb-4"></i>
          <h4 className="text-lg font-bold text-white mb-2">高性能</h4>
          <p className="text-gray-400 text-sm">支持百万级并发交易处理</p>
        </div>
        
        <div className="bento-item rounded-2xl p-6 gradient-border text-center">
          <i className="fas fa-expand-arrows-alt text-green-400 text-4xl mb-4"></i>
          <h4 className="text-lg font-bold text-white mb-2">可扩展</h4>
          <p className="text-gray-400 text-sm">模块化设计支持快速业务扩展</p>
        </div>
      </div>
    </section>
  )
}