# 🚀 Modern Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Next.js-blue?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

**A cutting-edge, responsive portfolio website built with modern web technologies**

[🌐 Live Demo](https://magfuralam.dev) • [📧 Contact](mailto:magfurrumel@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/magfurrumel)

</div>

---

## ✨ Features

### 🎨 **Design & UI/UX**
- **Modern Glassmorphism Design** - Beautiful glass-like effects with backdrop blur
- **Gradient Animations** - Smooth color transitions and animated backgrounds
- **Particle Background** - Interactive particle system with connection lines
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices

### 🚀 **Performance & Animations**
- **Framer Motion Animations** - Smooth, performant animations throughout
- **Magnetic Button Effects** - Interactive hover effects on buttons
- **Scroll-triggered Animations** - Elements animate as they come into view
- **Typing Animation** - Dynamic typewriter effect for job title
- **Smooth Scrolling** - Seamless navigation between sections

### 📱 **Accessibility & Responsiveness**
- **100% Mobile Responsive** - Perfect experience on all screen sizes
- **Keyboard Navigation** - Full keyboard accessibility support
- **Focus Management** - Clear focus indicators and logical tab order
- **ARIA Labels** - Screen reader friendly with proper semantic HTML
- **Touch-Friendly** - Optimized for touch devices with proper tap targets

### 🔧 **Functionality**
- **Contact Form** - Functional contact form with validation
- **CV Download** - Direct PDF download functionality
- **Social Media Links** - Working links to all social profiles
- **Blog System** - Complete blog with admin panel and authentication
- **Project Showcase** - Interactive project gallery with filtering

---

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### **Backend & Database**
- **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - Serverless API endpoints
- **[JSON File Storage](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)** - Simple file-based data storage
- **[JWT Authentication](https://jwt.io/)** - Secure admin authentication

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/magfurrumel/portfolio-website.git
   cd portfolio-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your environment variables:
   \`\`\`env
   JWT_SECRET=your-super-secret-jwt-key-here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---


## 🎨 Customization

### **Personal Information**
Update your personal details in the respective components:
- `components/sections/Hero.tsx` - Name and title
- `components/sections/About.tsx` - Bio and skills
- `components/sections/Experience.tsx` - Work experience
- `components/sections/Projects.tsx` - Project portfolio

### **Styling**
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font families in `app/layout.tsx`
- **Animations**: Customize animations in individual components

### **Content**
- **CV**: Replace `public/cv/Md_Magfur_Alam_CV.pdf` with your CV
- **Images**: Add your project images to `public/images/`
- **Blog**: Use the admin panel at `/admin` to manage blog posts

---

## 🔐 Admin Panel

### **Access**
- **URL**: `/admin`
- **Default Credentials**:
  - Email: `admin@magfur.dev`
  - Password: `admin123`

### **Features**
- ✅ Create, edit, and delete blog posts
- ✅ Rich text content editing
- ✅ Image upload support
- ✅ Tag management
- ✅ Publish/draft status
- ✅ JWT-based authentication

### **Security**
> ⚠️ **Important**: Change the default admin credentials and JWT secret in production!

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Description |
|--------|------------|-------------|
| Mobile | `< 640px` | Single column layout |
| Tablet | `640px - 1024px` | Condensed navigation |
| Desktop | `> 1024px` | Full layout |
| Large | `> 1280px` | Expanded spacing |

---

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### **Netlify**
1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### **Docker**
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### **Development Workflow**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[Next.js](https://nextjs.org/)** - The React framework for production
- **[Tailwind CSS](https://tailwindcss.com/)** - For the amazing utility classes
- **[Framer Motion](https://www.framer.com/motion/)** - For smooth animations
- **[Lucide React](https://lucide.dev/)** - For beautiful icons
- **[shadcn/ui](https://ui.shadcn.com/)** - For the component library

---

## 📞 Contact

**Md Magfur Alam** - Senior Software Engineer

- 📧 Email: [magfurrumel@gmail.com](mailto:magfurrumel@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/magfurrumel](https://linkedin.com/in/magfurrumel)
- 🐙 GitHub: [github.com/magfurrumel](https://github.com/magfurrumel)
- 🌐 Website: [magfuralam.dev](https://magfuralam.dev)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Md Magfur Alam](https://github.com/magfurrumel)

</div>
