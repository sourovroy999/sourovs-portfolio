import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  ExternalLink,
  ChevronDown,
  Star,
  Coffee,
  Zap,
  Heart,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  Award,
  Users,
  Clock
} from 'lucide-react';
import { Link } from 'react-router';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeClasses = isDark 
    ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white'
    : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900';

  const cardClasses = isDark
    ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-xl'
    : 'bg-white/80 border-gray-200/50 backdrop-blur-xl shadow-xl';

  const skills = [
    { name: 'React', level: 95, icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 90, icon: '🟨', color: 'from-yellow-500 to-orange-500' },
    { name: 'TypeScript', level: 85, icon: '🔷', color: 'from-blue-600 to-blue-700' },
    { name: 'Tailwind CSS', level: 92, icon: '🎨', color: 'from-teal-500 to-green-500' },
    { name: 'Next.js', level: 88, icon: '▲', color: 'from-gray-800 to-black' },
    { name: 'Vue.js', level: 75, icon: '💚', color: 'from-green-500 to-emerald-500' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern payment integration, real-time inventory management, and advanced analytics dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
      category: 'Full Stack',
      duration: '3 months',
      team: '4 developers'
    },
    {
      title: 'Task Management Suite',
      description: 'Comprehensive project management platform with team collaboration, time tracking, and automated reporting features.',
      tech: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
      image: '📋',
      category: 'Frontend',
      duration: '2 months',
      team: 'Solo project'
    },
    {
      title: 'AI-Powered Dashboard',
      description: 'Modern analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics.',
      tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
      image: '📊',
      category: 'Full Stack',
      duration: '4 months',
      team: '6 developers'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '3+', label: 'Years Experience', icon: Clock },
    { number: '25+', label: 'Happy Clients', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
  ];

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Modern Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? `${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-xl border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} shadow-lg`
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div 
            //   whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold`}>
                S
              </div>
              <span className="text-xl font-bold">Sourov</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  href={`#${item.toLowerCase()}`}
                  className={`relative font-medium transition-colors hover:text-blue-500 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                // whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-colors ${
                  isDark ? 'bg-gray-800 ' : 'bg-gray-100 '
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none"
              >
                <Download size={16} />
                <Link to={`https://drive.google.com/uc?export=download&id=1B3LgLG6D8ApvtC-VRf9WMYo6sJwn6MHj
`}>
                Resume
                </Link>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-colors ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-xl transition-colors ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMenuOpen ? 1 : 0, 
              height: isMenuOpen ? 'auto' : 0 
            }}
            className="md:hidden overflow-hidden"
          >
            <div className={`py-4 space-y-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 font-medium transition-colors hover:text-blue-500 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item}
                </a>
              ))}
              <button className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white border-none w-full mt-4">
                <Download size={16} />
                Resume
              </button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse ${
            isDark ? 'bg-blue-500' : 'bg-blue-300'
          }`} />
          <div className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000 ${
            isDark ? 'bg-purple-500' : 'bg-purple-300'
          }`} />
          <div className={`absolute bottom-1/4 left-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000 ${
            isDark ? 'bg-pink-500' : 'bg-pink-300'
          }`} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl shadow-2xl">
                👨‍💻
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Sourov
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">
                Frontend Developer
              </h2>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I create beautiful, responsive, and user-friendly web applications using modern technologies. 
                Passionate about clean code, pixel-perfect designs, and exceptional user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none btn-lg"
              >
                <Mail size={20} />
                Let's Connect
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`btn btn-outline btn-lg ${
                  isDark ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'
                }`}
              >
                <ExternalLink size={20} />
                View Portfolio
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center space-x-6"
            >
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:sourov@example.com', label: 'Email' }
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    cardClasses
                  } hover:shadow-lg`}
                >
                  <Icon size={24} className="text-blue-500" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
            >
              <ChevronDown size={32} className="text-blue-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl ${cardClasses} hover:shadow-xl transition-all duration-300`}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={`rounded-2xl p-8 ${cardClasses}`}>
                <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm a passionate Frontend Developer with 3+ years of experience creating engaging and responsive web applications. 
                  I specialize in the React ecosystem and modern JavaScript frameworks, always staying up-to-date with the latest industry trends.
                </p>
                <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  My journey began with curiosity about how websites work, and it has evolved into a deep passion for creating 
                  digital experiences that not only look great but also provide exceptional user experiences and solve real-world problems.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Coffee, text: 'Coffee Enthusiast' },
                    { icon: Code, text: 'Clean Code Advocate' },
                    { icon: Zap, text: 'Performance Optimizer' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-blue-500">
                      <item.icon size={20} />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Code, title: 'Clean Code', desc: 'Writing maintainable & scalable applications', color: 'from-blue-500 to-cyan-500' },
                { icon: Smartphone, title: 'Responsive Design', desc: 'Mobile-first approach for all devices', color: 'from-green-500 to-emerald-500' },
                { icon: Palette, title: 'UI/UX Focus', desc: 'Beautiful and intuitive user interfaces', color: 'from-purple-500 to-pink-500' },
                { icon: Globe, title: 'Modern Web', desc: 'Latest technologies and best practices', color: 'from-orange-500 to-red-500' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-xl text-center ${cardClasses} hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${cardClasses} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className={`w-full rounded-full h-2 mb-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                  />
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{skill.level}% proficiency</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`rounded-xl overflow-hidden ${cardClasses} group hover:shadow-2xl transition-all duration-500`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                    <div className="text-4xl">{project.image}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-blue-500" />
                      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-blue-500" />
                      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{project.team}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full ${
                          isDark 
                            ? 'bg-blue-500/20 text-blue-300' 
                            : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none btn-sm flex-1"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`btn btn-outline btn-sm ${
                        isDark ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      <Github size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className={`text-xl mb-12 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Ready to bring your ideas to life? Let's discuss how we can create something amazing together 
              with clean, efficient, and beautiful code.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="mailto:sourov@example.com"
                className="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none btn-lg"
              >
                <Heart size={20} />
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 Sourov. Built with <span className="text-red-400">♥</span> using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;