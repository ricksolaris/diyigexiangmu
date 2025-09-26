# 久溢 - 个人介绍页面

基于Next.js构建的个人介绍页面，采用苹果发布会PPT的Bento Grid风格设计，专为金融科技领域技术负责人打造。

## 🚀 特性

- **响应式设计**: 完美支持1920px及以上大屏显示器
- **Bento Grid风格**: 类似苹果发布会的现代化布局
- **科技感视觉**: 高亮色透明度渐变，简洁勾线图形化
- **中英文混排**: 中文大字体粗体，英文小字点缀
- **数据可视化**: 专业图表组件，风格统一
- **动画效果**: 流畅的过渡动画和交互反馈

## 🛠️ 技术栈

- **框架**: Next.js 14.0.0
- **样式**: Tailwind CSS 3.3.0+
- **图标**: Font Awesome 6.4.0 + Material Icons
- **语言**: TypeScript
- **部署**: 支持Vercel等平台

## 📦 快速开始

### 环境要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

访问 http://localhost:3000 查看页面

### 构建生产版本

```bash
npm run build
npm start
# 或
yarn build
yarn start
```

## 🎨 设计特色

### 视觉风格
- **主色调**: 科技蓝 (#0ea5e9) 与渐变色彩
- **字体**: Inter字体家族，中英文完美适配
- **布局**: Bento Grid不规则网格布局
- **动效**: 微交互动画增强用户体验

### 内容结构
1. **头部导航**: 固定导航栏，滚动效果
2. **个人介绍**: 突出显示职位和核心能力
3. **数据统计**: 动画计数器展示关键指标
4. **核心能力**: Bento Grid展示专业技能
5. **技术栈**: 技能水平可视化展示
6. **项目展示**: 代表性项目案例
7. **联系合作**: 联系信息和合作流程

## 📱 响应式适配

- **移动端**: 完美适配手机和平板设备
- **桌面端**: 优化大屏显示体验
- **超宽屏**: 1920px+显示器专属优化

## 🔧 自定义配置

### 修改个人信息
编辑 `app/page.tsx` 中的个人介绍内容：

```tsx
// 修改姓名和职位
<h1 className="heading-responsive font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
  久溢
</h1>
<p className="text-2xl font-semibold text-white mb-4">
  工行TOP3汽车分期助贷合作机构技术负责人
</p>
```

### 调整色彩主题
在 `tailwind.config.js` 中自定义颜色：

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // 主色调
  },
  accent: {
    500: '#d946ef', // 强调色
  }
}
```

### 更新项目数据
修改 `app/components/ProjectsSection.tsx` 中的项目信息：

```tsx
const projects = [
  {
    title: "您的项目名称",
    description: "项目描述...",
    // ...其他属性
  }
]
```

## 📄 页面结构

```
app/
├── components/          # 组件目录
│   ├── Header.tsx      # 头部导航
│   ├── StatsSection.tsx # 数据统计
│   ├── BentoGrid.tsx   # Bento网格
│   ├── SkillsSection.tsx # 技能展示
│   ├── ProjectsSection.tsx # 项目展示
│   └── ContactSection.tsx # 联系信息
├── globals.css         # 全局样式
├── layout.tsx         # 应用布局
└── page.tsx           # 主页面
```

## 🌐 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📞 联系信息

- **姓名**: 久溢
- **职位**: 工行TOP3汽车分期助贷合作机构技术负责人
- **专长**: 从0到1的全链路助贷信息系统设计开发
- **邮箱**: jiuyi@example.com
- **电话**: +86 138-0000-0000

## 📄 许可证

MIT License

---

**Built with ❤️ using Next.js and Tailwind CSS**