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
  Code2,
  Brain,
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
  Download,
  Sun,
  Moon,
  Crosshair,
  Terminal
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
  { label: 'Repositories', value: 33, icon: FolderGit2, color: 'from-blue-500 to-cyan-500' },
  { label: 'Stars Earned', value: 167, icon: Star, color: 'from-yellow-400 to-blue-500' },
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
    company: 'Infiloop',
    period: 'Present',
    url: 'https://infiloop.co/',
    description: 'Quality assurance engineer responsible for automated and manual testing.',
    achievements: [
      'Automated web and mobile testing using Robot Framework and Appium',
      'Executed manual, regression, and data validation,Stress and Load testing K6',
      'Designed and maintained test cases and automation suites',
      'Logged, tracked defects using issue tracking systems and collaborated with development teams',
      'Integrated automated tests into CI/CD pipelines within an Agile development environment'
    ]
  },
  {
    title: 'QA Intern',
    company: 'Zakipoint Health',
    period: 'November 2025 - February 2026',
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
    title: 'ProStrikeGears',
    description: 'Flask-based web application with integrated machine learning models for sports products recommendation system.',
    tags: ['Python', 'Flask', 'Machine Learning'],
    url: 'https://github.com/swarrup17/Seventh-Semester-Project',
    icon: GraduationCap,
  },
  {
    title: 'Flappy Bird Game',
    description: 'Flappy Bird game implementation in Java showcasing game development fundamentals and object-oriented programming concepts.',
    tags: ['Java', 'Game Development', 'OOP'],
    url: 'https://github.com/swarrup17/java/tree/main/javaproject',
    icon: Gamepad2,
  },
  {
    title: 'Shape Shooter',
    description: 'Browser-based shooting game with PHP backend. Features user authentication, leaderboard system, score tracking, and multiple game pages. Built with vanilla JavaScript and CSS.',
    tags: ['JavaScript', 'PHP', 'CSS', 'HTML'],
    url: 'https://github.com/swarrup17/Shape-Shooter',
    icon: Crosshair,
  },
  {
    title: 'Opencode Codex',
    description: 'AI-powered coding assistant codex — a curated knowledge base and tooling reference for the Opencode ecosystem. Includes agent patterns, skill definitions, and configuration guides.',
    tags: ['AI', 'Documentation', 'Tooling'],
    url: 'https://github.com/swarrup17/Portfolio',
    icon: Code2,
  },
  {
    title: 'Antigravity CLI (agy)',
    description: 'A command-line tool that simplifies project scaffolding, dependency management, and development workflows. Built for speed and developer ergonomics.',
    tags: ['Go', 'CLI', 'DevTools'],
    url: 'https://github.com/swarrup17/Portfolio',
    icon: Terminal,
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'cv', 'contact'];
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
    <main className="min-h-screen dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 bg-gradient-to-br from-white via-gray-50 to-white dark:text-white text-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'dark:bg-slate-900/95 bg-white/95 backdrop-blur-md shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <button onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent hover:from-blue-400 hover:to-cyan-500 transition-all font-mono">
                ~/sd
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'CV', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  aria-current={activeSection === item.toLowerCase() ? 'true' : undefined}
                  className={`capitalize transition-all duration-300 relative px-3 py-2 ${activeSection === item.toLowerCase()
                      ? 'text-blue-500'
                      : 'dark:text-gray-300 text-slate-700 dark:hover:text-white hover:text-blue-500'
                    }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg dark:hover:bg-slate-800 hover:bg-slate-200 transition-colors dark:text-gray-400 text-slate-500 hover:text-blue-500"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg dark:hover:bg-slate-800 hover:bg-slate-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden dark:bg-slate-900/95 bg-white/95 backdrop-blur-md border-t dark:border-slate-800 border-slate-200">
            <div className="px-4 py-4 space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'CV', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${activeSection === item.toLowerCase()
                      ? 'bg-blue-500/20 text-blue-500'
                      : 'dark:text-gray-300 text-slate-700 dark:hover:bg-slate-800 hover:bg-slate-100 dark:hover:text-white hover:text-blue-500'
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4">
                <span className="text-gray-500 dark:text-gray-600 font-mono text-sm tracking-wider">// From Nepal</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="block dark:text-white text-slate-900 font-mono">Hey, I'm</span>
                <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent mt-1 font-mono">
                  Swarup Dahal
                </span>
              </h1>

              <p className="text-lg sm:text-xl dark:text-gray-300 text-slate-700 mb-8 max-w-xl leading-relaxed">
                I write code, break things on purpose (QA), and teach machines to think. 
                Currently diving deep into <span className="text-blue-500 font-medium">AI/ML</span> while keeping software honest through testing.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 dark:bg-slate-800/40 bg-white/80 rounded-full dark:text-gray-400 text-slate-500 text-sm">
                  <MapPin size={16} className="text-blue-500" />
                  <span>Nepal</span>
                </div>
                <div className="w-1 h-1 rounded-full dark:bg-slate-600 bg-slate-300" />
                <div className="flex items-center gap-2 dark:text-gray-400 text-slate-500 text-sm">
                  <span>UTC +05:45</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
                >
                  See my work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 dark:bg-slate-800/50 bg-white border border-blue-500/30 rounded-xl font-semibold text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  Say hello
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
                    aria-label={social.name}
                    className={`p-3 dark:bg-slate-800/50 bg-white rounded-xl border dark:border-slate-700 border-slate-200 dark:text-gray-400 text-slate-500 hover:text-white ${social.color} hover:border-transparent transition-all duration-300`}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-30 animate-pulse-slow" />
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-1 bg-gradient-to-r from-blue-600 to-cyan-600">
                  <img
                    src="https://avatars.githubusercontent.com/u/118110852?v=4"
                    alt="Swarup Dahal"
                    className="w-full h-full rounded-full object-cover border-4 dark:border-slate-900 border-slate-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="py-16 dark:bg-slate-900/30 bg-gray-50/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 mb-1`}>
                  {stat.value}
                </div>
                <div className="dark:text-gray-400 text-slate-500 text-sm tracking-wide">{stat.label}</div>
                <div className={`mt-2 w-12 h-0.5 mx-auto rounded-full bg-gradient-to-r ${stat.color}`} />
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
              <div className="inline-block">
                <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">About Me</span>
                <div className="mt-1 h-0.5 w-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 mt-4 mb-6 leading-tight">
                I break things <span className="text-blue-500">for a living</span> — and build them too
              </h2>
              <div className="space-y-4 dark:text-gray-300 text-slate-700 leading-relaxed">
                <p>
                  I'm Swarup, a QA engineer from Nepal who accidentally fell in love with AI/ML along the way. 
                  My days are spent automating tests, breaking software so it can be fixed stronger, 
                  and sneaking in PyTorch tutorials whenever I can.
                </p>
                <p>
                  I started with C and C++ (thanks, university), got hooked on Python, and now I'm that person 
                  who writes Selenium scripts in their sleep. At Infiloop, I build test frameworks. 
                  At night, I teach machines to see and understand.
                </p>
                <p className="dark:text-gray-400 text-slate-500 italic border-l-2 dark:border-slate-600 border-slate-300 pl-4">
                  "The code works but I don't know why. The test fails but I don't know why. 
                  This is my life now and I wouldn't trade it."
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {['AI/ML', 'Data Analysis', 'QA Automation', 'Python', 'C/C++'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-500 text-sm font-medium hover:bg-blue-500/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-blue-400/30 rounded-2xl" />
                <div className="relative dark:bg-slate-800/80 bg-white rounded-2xl p-8 shadow-lg dark:shadow-blue-500/5 shadow-blue-500/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold dark:text-white text-slate-900">What I do</h3>
                      <p className="dark:text-gray-400 text-slate-500 text-sm">The short version</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { title: 'Artificial Intelligence', desc: 'TensorFlow, PyTorch, Computer Vision' },
                      { title: 'Quality Assurance', desc: 'Selenium, Robot Framework, Testing' },
                      { title: 'Data Science', desc: 'NumPy, Pandas, Data Visualization' },
                      { title: 'Software Development', desc: 'C/C++, Python, Java, C#' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl dark:bg-slate-700/30 bg-slate-100 dark:hover:bg-slate-700/50 hover:bg-slate-200 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                        <div>
                          <div className="font-semibold dark:text-white text-slate-900">{item.title}</div>
                          <div className="text-sm dark:text-gray-400 text-slate-500">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-cyan-400/30 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 dark:bg-slate-900/50 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-block">
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">What I Know</span>
              <div className="mt-1 h-0.5 w-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 mt-4 leading-tight">
              Tools I actually <span className="text-blue-500">use</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Programming Languages */}
            <div className="dark:bg-slate-800/50 bg-white rounded-3xl p-8 shadow-lg dark:shadow-blue-500/5 shadow-blue-500/5 dark:border dark:border-slate-700/30 border border-slate-200/50">
              <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                Languages
              </h3>
              <div className="space-y-5">
                {skills.languages.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="dark:text-gray-300 text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-blue-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 dark:bg-slate-700 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML Tools */}
            <div className="dark:bg-slate-800/50 bg-white rounded-3xl p-8 shadow-lg dark:shadow-blue-500/5 shadow-blue-500/5 dark:border dark:border-slate-700/30 border border-slate-200/50">
              <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                AI/ML
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.aiml.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl text-blue-400 font-medium hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t dark:border-slate-700/50 border-slate-200">
                <h4 className="text-base font-bold dark:text-white text-slate-900 mb-4">Dev Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 dark:bg-slate-700/50 bg-slate-100 border dark:border-slate-600/50 border-slate-300 rounded-lg dark:text-gray-300 text-slate-700 text-sm font-medium dark:hover:bg-slate-700 hover:bg-slate-200 hover:border-blue-500/50 transition-all duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Skills - inline style */}
          <div>
            <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-4">Also familiar with</h3>
            <div className="flex flex-wrap gap-2">
              {skills.other.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 dark:bg-slate-800/30 bg-white rounded-lg dark:text-gray-400 text-slate-600 text-sm dark:border dark:border-slate-700/30 border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 lg:py-32 dark:bg-slate-900/50 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
            <div>
              <div className="inline-block">
                <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">My Journey</span>
                <div className="mt-1 h-0.5 w-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 mt-4 leading-tight">
                Where I've <span className="text-blue-500">worked</span>
              </h2>
            </div>
            <p className="dark:text-gray-400 text-slate-500 max-w-md lg:text-right">
              Professional experience in quality assurance and testing
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full" />

                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block ml-8 p-8 dark:bg-slate-800/50 bg-white rounded-2xl dark:border dark:border-slate-700/50 border border-slate-200 hover:border-blue-500/50 dark:hover:bg-slate-800/70 hover:bg-slate-50 transition-all duration-300 group"
                >
                  <div className="absolute left-[-17px] top-8 w-9 h-9 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 border-4 dark:border-slate-900 border-slate-200 group-hover:scale-110 transition-transform duration-300" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold dark:text-white text-slate-900 group-hover:text-blue-500 transition-colors">{job.title}</h3>
                      <p className="text-blue-500 font-semibold mt-1">{job.company}</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center gap-2 dark:text-gray-400 text-slate-500">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{job.period}</span>
                    </div>
                  </div>

                  <p className="dark:text-gray-400 text-slate-500 mb-4">{job.description}</p>

                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 dark:text-gray-300 text-slate-700">
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
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
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
            <div>
              <div className="inline-block">
                <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">My Work</span>
                <div className="mt-1 h-0.5 w-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 mt-4 leading-tight">
                Stuff I've <span className="text-blue-500">built</span>
              </h2>
            </div>
            <p className="dark:text-gray-400 text-slate-500 max-w-md lg:text-right">
              Side projects, assignments, and things I tinkered with
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative dark:bg-slate-800/50 bg-white overflow-hidden dark:border dark:border-slate-700/30 border border-slate-200 transition-all duration-500 hover:scale-[1.02] ${
                  idx % 3 === 0 ? 'rounded-3xl shadow-lg dark:shadow-blue-500/5 shadow-blue-500/5' :
                  idx % 3 === 1 ? 'rounded-xl shadow-md dark:shadow-blue-500/5 shadow-blue-500/5' :
                  'rounded-2xl'
                }`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 transform origin-left transition-transform duration-500 ${
                  idx % 3 === 0 ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3 group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="dark:text-gray-400 text-slate-500 mb-6 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 dark:bg-slate-700/50 bg-slate-100 border dark:border-slate-600/50 border-slate-300 rounded-lg text-xs dark:text-gray-300 text-slate-700 group-hover:border-blue-500/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/swarrup17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 dark:bg-slate-800/50 bg-white border dark:border-slate-700 border-slate-200 rounded-xl font-semibold dark:text-gray-300 text-slate-700 dark:hover:text-white hover:text-slate-900 dark:hover:bg-slate-800 hover:bg-slate-100 hover:border-blue-500/50 transition-all duration-300"
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
          <div className="max-w-2xl mb-16">
            <div className="inline-block">
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">My Resume</span>
              <div className="mt-1 h-0.5 w-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 mt-4 leading-tight">
              The official <span className="text-blue-500">document</span>
            </h2>
            <p className="dark:text-gray-400 text-slate-500 mt-4">
              One-page summary of everything I've done so far
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* CV Image */}
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden border-2 dark:border-slate-700/50 border-slate-200 hover:border-blue-500/50 transition-all duration-300 group dark:bg-slate-800/50 bg-white p-2">
                  <img
                    src="./swarup_dahal_resume_page-0001.jpg"
                    alt="Swarup Dahal Resume"
                    className="w-full h-auto rounded-xl object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* CV Download Card */}
              <div className="flex flex-col gap-6">
                <div className="dark:bg-slate-800/50 bg-white rounded-2xl p-6 border dark:border-slate-700/50 border-slate-200 hover:border-blue-500/50 transition-all duration-300 h-fit">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3">Resume</h3>
                  <p className="dark:text-gray-400 text-slate-500 text-sm mb-6">
                    Download my complete resume with detailed education, experience, skills, and certifications.
                  </p>
                  <a
                    href="./swarup_dahal_resume_page-0001.jpg"
                    download
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <Download size={18} />
                    Download PDF
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="dark:bg-slate-800/50 bg-white rounded-2xl p-6 border dark:border-slate-700/50 border-slate-200 space-y-4">
                  <h4 className="text-lg font-bold dark:text-white text-slate-900 mb-4">Highlights</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold dark:text-white text-slate-900">QA Engineer</div>
                        <div className="text-xs dark:text-gray-400 text-slate-500">Zakipoint Health</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold dark:text-white text-slate-900">B.S. Computer Science</div>
                        <div className="text-xs dark:text-gray-400 text-slate-500">NCCS, Nepal</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TestTube className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold dark:text-white text-slate-900">QA Automation</div>
                        <div className="text-xs dark:text-gray-400 text-slate-500">Robot Framework, Selenium</div>
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
      <section id="contact" className="py-20 lg:py-32 dark:bg-slate-900/50 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-block">
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
              <div className="mt-1 h-0.5 w-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold dark:text-white text-slate-900 mt-4 leading-tight">
              Let's <span className="text-blue-500">talk</span>
            </h2>
            <p className="dark:text-gray-400 text-slate-500 mt-4">
              Whether it's a project, a debug session, or just geeking out about AI — my inbox is open
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="dark:bg-slate-800/50 bg-white backdrop-blur-sm rounded-2xl p-8 sm:p-12 border dark:border-slate-700/50 border-slate-200">
              <div className="space-y-6">
                <a
                  href="mailto:swarupdahal17@gmail.com"
                  className="flex items-center gap-4 p-4 dark:bg-slate-700/30 bg-slate-100 rounded-xl dark:hover:bg-slate-700/50 hover:bg-slate-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm dark:text-gray-400 text-slate-500">Email</div>
                    <div className="dark:text-white text-slate-900 font-medium">swarupdahal17@gmail.com</div>
                  </div>
                </a>

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center gap-4 p-4 dark:bg-slate-700/30 bg-slate-100 rounded-xl dark:hover:bg-slate-700/50 hover:bg-slate-200 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl dark:bg-slate-700 bg-slate-100 border dark:border-slate-600 border-slate-300 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
                      <social.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm dark:text-gray-400 text-slate-500">{social.name}</div>
<div className="dark:text-white text-slate-900 
                      font-medium">@{social.name.toLowerCase()}</div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-blue-500 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t dark:border-slate-800/50 border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="dark:text-gray-400 text-slate-500 text-sm">
              Made with <span className="text-blue-500">&#9829;</span> by Swarup Dahal &mdash; Nepal
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.slice(0, 3).map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="dark:text-gray-400 text-slate-500 hover:text-blue-500 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center sm:text-left">
            <div className="squiggle-divider" />
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
