import { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  MapPin,
  Star,
  GitFork,
  FolderGit2,
  Users,
  Mail,
  ExternalLink,
  ChevronDown,
  Code2,
  Brain,
  Database,
  TestTube,
  Sparkles,
  Menu,
  X,
  Mountain,
  BookOpen,
  GraduationCap,
  Gamepad2,
  Briefcase,
  Calendar,
  FileText,
  Download
} from 'lucide-react';

const skills = {
  languages: [
    { name: 'Python', level: 90 },
    { name: 'C/C++', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'C#', level: 70 },
    { name: 'PHP', level: 65 },
  ],
  aiml: ['TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib'],
  tools: ['GitHub', 'VS Code', 'PyCharm', 'Visual Studio', 'Selenium', 'Robot Framework', 'Flask', '.NET'],
  other: ['HTML5', 'CSS3', 'Figma', 'Canva', 'JDK', 'JDBC'],
};

const stats = [
  { label: 'Repositories', value: 33, icon: FolderGit2, color: 'from-cyan-400 to-blue-500' },
  { label: 'Stars Earned', value: 167, icon: Star, color: 'from-yellow-400 to-orange-500' },
  { label: 'Followers', value: 29, icon: Users, color: 'from-green-400 to-emerald-500' },
  { label: 'Following', value: 33, icon: GitFork, color: 'from-pink-400 to-rose-500' },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/swarrup17', color: 'hover:bg-gray-800' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/swarup-dahal-b9a65225a', color: 'hover:bg-blue-600' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/Swarupdahal1', color: 'hover:bg-sky-500' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/_swarup_dahal_', color: 'hover:bg-pink-600' },
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/swarupd.17', color: 'hover:bg-blue-700' },
];

const experience = [
  {
    title: 'QA Engineer',
    company: 'Zakipoint Health',
    period: 'Present',
    duration: 'Currently employed',
    url: 'https://www.zakipointhealth.com/',
    description: 'Quality assurance engineer responsible for automated and manual testing of healthcare applications.',
    achievements: [
      'Automated web and mobile testing using Robot Framework and Appium',
      'Executed manual, regression, and data validation testing using SQL',
      'Designed and maintained test cases and automation suites for healthcare applications',
      'Logged, tracked defects using issue tracking systems and collaborated with development teams',
      'Integrated automated tests into CI/CD pipelines within an Agile development environment'
    ]
  },
  {
    title: 'QA Intern',
    company: 'Zakipoint Health',
    period: 'November 2025 - February 2026',
    duration: '4 months',
    url: 'https://www.zakipointhealth.com/',
    description: 'Quality Assurance intern gaining hands-on experience in web automation and healthcare application testing.',
    achievements: [
      'Automated different demo applications using Robot Framework during internship',
      'Developed reusable test automation frameworks and libraries for web application testing',
      'Created comprehensive test suites covering various healthcare workflows',
      'Collaborated with QA team to identify and document defects'
    ]
  }
];

const projects = [
  {
    title: 'TrailQuest - Test Suite',
    description: 'UI automation test suite for TrailQuest web application using Robot Framework and SeleniumLibrary. Covers trek packages, wellness retreats, heritage tours, and nature-based travel experiences.',
    tags: ['Robot Framework', 'Selenium', 'HTML'],
    url: 'https://github.com/swarrup17/trail-quest',
    icon: Mountain,
  },
  {
    title: 'Python Learning Repository',
    description: 'Comprehensive collection of Python materials including data structures, OOP, machine learning implementations (linear regression, deep learning), search algorithms, and data analysis resources.',
    tags: ['Python', 'Jupyter', 'Machine Learning'],
    url: 'https://github.com/swarrup17/Python',
    icon: BookOpen,
  },
  {
    title: 'Seventh Semester Project',
    description: 'Flask-based web application with integrated machine learning models for data analysis and prediction.',
    tags: ['Python', 'Flask', 'Machine Learning'],
    url: 'https://github.com/swarrup17/Seventh-Semester-Project',
    icon: GraduationCap,
  },
  {
    title: 'Java Game Development',
    description: 'Flappy Bird game implementation in Java showcasing game development fundamentals and object-oriented programming concepts.',
    tags: ['Java', 'Game Development', 'OOP'],
    url: 'https://github.com/swarrup17/java/tree/main/javaproject',
    icon: Gamepad2,
  },
  {
    title: 'Matrix Operations',
    description: 'Matrix addition and multiplication implementation in C programming language',
    tags: ['C', 'Mathematics', 'Linear Algebra'],
    url: 'https://github.com/swarrup17/matrix-addition-and-multiplication-in-c-',
    icon: Database,
  },
  {
    title: 'C Programming Projects',
    description: 'Collection of C programming projects including algorithms and data structures implementations',
    tags: ['C', 'Algorithms', 'Data Structures'],
    url: 'https://github.com/swarrup17/C-',
    icon: Code2,
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <button onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all">
                SD
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'CV', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`capitalize transition-all duration-300 relative px-3 py-2 ${activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <div className="px-4 py-4 space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'CV', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${activeSection === item.toLowerCase()
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <Sparkles size={18} className="text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">Currently Studying</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="block text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mt-2">
                  Swarup Dahal
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl">
                QA and Data | <span className="text-cyan-400">AI/ML Enthusiast</span> | Tech Enthusiast
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={20} className="text-cyan-400" />
                  <span>Nepal</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <div className="flex items-center gap-2 text-gray-400">
                  <span>UTC +05:45</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-xl font-semibold text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
                >
                  Get in Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-10">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800/50 rounded-xl border border-slate-700 text-gray-400 hover:text-white ${social.color} hover:border-transparent transition-all duration-300`}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse-slow" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-r from-cyan-500 to-blue-600">
                  <img
                    src="https://avatars.githubusercontent.com/u/118110852?v=4"
                    alt="Swarup Dahal"
                    className="w-full h-full rounded-full object-cover border-4 border-slate-900"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <Brain size={18} className="text-white" />
                    <span className="text-white font-semibold text-sm">AI/ML</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <Database size={18} className="text-white" />
                    <span className="text-white font-semibold text-sm">Data</span>
                  </div>
                </div>
                <div className="absolute top-1/2 -right-8 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2">
                    <TestTube size={18} className="text-white" />
                    <span className="text-white font-semibold text-sm">QA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollToSection('about')} className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="py-16 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <stat.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">About Me</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
                Passionate about <span className="text-cyan-400">Technology</span> and Innovation
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a dedicated tech enthusiast from Nepal with a passion for Quality Assurance, Data Analysis,
                  and Artificial Intelligence. Currently pursuing my studies while actively exploring the
                  intersection of AI/ML and practical applications.
                </p>
                <p>
                  My journey in technology has led me to work with diverse programming languages and frameworks,
                  from C and C++ for systems programming to Python for AI/ML applications. I believe in
                  continuous learning and building projects that make a difference.
                </p>
                <p>
                  With 33 repositories and 167 stars on GitHub, I'm constantly working on new projects
                  and contributing to the open-source community. My goal is to leverage AI and data-driven
                  solutions to solve real-world problems.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {['AI/ML', 'Data Analysis', 'QA Automation', 'Python', 'C/C++'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">My Focus Areas</h3>
                      <p className="text-gray-400 text-sm">What I'm passionate about</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { title: 'Artificial Intelligence', desc: 'TensorFlow, PyTorch, Computer Vision' },
                      { title: 'Quality Assurance', desc: 'Selenium, Robot Framework, Testing' },
                      { title: 'Data Science', desc: 'NumPy, Pandas, Data Visualization' },
                      { title: 'Software Development', desc: 'C/C++, Python, Java, C#' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                        <div>
                          <div className="font-semibold text-white">{item.title}</div>
                          <div className="text-sm text-gray-400">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">What I Know</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
              Skills & <span className="text-cyan-400">Expertise</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A diverse skill set spanning programming languages, AI/ML tools, and development frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Programming Languages */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Code2 className="text-cyan-400" />
                Programming Languages
              </h3>
              <div className="space-y-5">
                {skills.languages.map((skill, i) => (
                  <div key={skill.name} style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML Tools */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="text-cyan-400" />
                AI/ML Libraries
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.aiml.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl text-cyan-300 font-medium hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-bold text-white mt-8 mb-4">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-gray-300 text-sm font-medium hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-6">Other Skills & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.other.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-xl text-gray-300 text-sm font-medium hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 lg:py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">My Journey</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
              Work <span className="text-cyan-400">Experience</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Professional experience in quality assurance and testing
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600" />

                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block ml-8 p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/70 transition-all duration-300 group"
                >
                  <div className="absolute left-[-17px] top-8 w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 border-4 border-slate-900 group-hover:scale-110 transition-transform duration-300" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{job.title}</h3>
                      <p className="text-cyan-400 font-semibold mt-1">{job.company}</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{job.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{job.description}</p>

                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">My Work</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A selection of projects showcasing my skills in various domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-lg text-xs text-gray-300 group-hover:border-cyan-500/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/swarrup17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-xl font-semibold text-gray-300 hover:text-white hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">My Resume</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
              Curriculum <span className="text-cyan-400">Vitae</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              View my detailed resume and qualifications
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* CV Image */}
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group bg-slate-800/50 p-2">
                  <img
                    src="./public/swarup_dahal_resume_page-0001.jpg"
                    alt="Swarup Dahal Resume"
                    className="w-full h-auto rounded-xl object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* CV Download Card */}
              <div className="flex flex-col gap-6">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 h-fit">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Resume</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Download my complete resume with detailed education, experience, skills, and certifications.
                  </p>
                  <a
                    href="./public/swarup_dahal_resume_page-0001.jpg"
                    download
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <Download size={18} />
                    Download PDF
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 space-y-4">
                  <h4 className="text-lg font-bold text-white mb-4">Highlights</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-white">QA Engineer</div>
                        <div className="text-xs text-gray-400">Zakipoint Health</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-white">B.S. Computer Science</div>
                        <div className="text-xs text-gray-400">NCCS, Nepal</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TestTube className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-white">QA Automation</div>
                        <div className="text-xs text-gray-400">Robot Framework, Selenium</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-slate-700/50">
              <div className="space-y-6">
                <a
                  href="mailto:swarupdahal17@gmail.com"
                  className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-medium">swarupdahal17@gmail.com</div>
                  </div>
                </a>

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                      <social.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400">{social.name}</div>
                      <div className="text-white font-medium">@{social.name.toLowerCase()}</div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              Built with passion by Swarup Dahal
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.slice(0, 3).map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
