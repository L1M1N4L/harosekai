import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MagicArea from './MagicArea';
import ThemeToggle from './ThemeToggle';
import cafeTable from './assets/nachi_waterfall.jpg';
import sereneLandscape from './assets/glico.jpg';
import developerSetup from './assets/osaka_meow.jpg';
import mountainRetreat from './assets/kyoto_kyomizu.jpg';
import officeAtNight from './assets/meow.jpg';
import transTelLogo from './assets/experience_logo/TransTel-03.png';
import googleLogo from './assets/experience_logo/sq-google-g-logo-update_dezeen_2364_col_0-852x852.png';
import hikvisionLogo from './assets/experience_logo/hikvision.png';
import binusLogo from './assets/experience_logo/-Binus-University-Bina-Nusanta_logo.webp';
import binusAsoLogo from './assets/experience_logo/Logo-Binus-aso.png';
import gdscLogo from './assets/experience_logo/gdg_logo.png';
import sheCodesLogo from './assets/experience_logo/Shecodes_logo.png';
import cognitiveAiPaper from './assets/cognitive_ai_paper.pdf';
// import semestaMedikaLogo from './assets/experience_logo/logo_semesta_medika.png';

// SVG Logo Component with Cover Corp style
const CoverCorpLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="url(#logoGradient)" />
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ECDC4" />
        <stop offset="100%" stopColor="#44A08D" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="8" fill="white" opacity="0.9" />
    <text x="50%" y="54%" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial, sans-serif" dy=".3em" fontWeight="bold">L</text>
  </svg>
);

const projects = [
  {
    title: 'Cognitive AI Approaches to Adaptive Scheduling in Braille Memory Retention',
    description: 'Designed and evaluated a hybrid SM-2 + ML scheduling algorithm, benchmarking long-term retention, review efficiency, and system cost across a 365-day simulation. Demonstrates interpretable AI integration into adaptive learning systems.',
    tech: ['Python', 'Machine Learning', 'Adaptive Algorithms', 'Cognitive Science'],
    link: cognitiveAiPaper,
  },
  {
    title: 'LOKS: Custom Scripting Language and Toolchain',
    description: 'Developed an interpreter, compiler, and code editor for LOKS, a dynamically typed, imperative scripting language designed for education and experimentation in compiler theory.',
    tech: ['Python', 'Compiler Design', 'AST', 'Interpreter'],
    link: 'https://github.com/L1M1N4L/LOKS',
  },
  {
    title: 'Onigiri: Japanese Learning Platform',
    description: 'Created a dynamic website to assist learners in studying Japanese through interactive lessons, quizzes, and progress tracking. Features Firebase authentication and real-time database functionality.',
    tech: ['React', 'TypeScript', 'Firebase', 'Human-Computer Interaction'],
    link: 'https://github.com/L1M1N4L/Onigiri',
  },
  {
    title: 'Enemy Spawning System Optimization',
    description: 'Designed and analyzed advanced enemy spawning algorithms for video games. Optimized for balance, unpredictability, and computational efficiency as part of an Algorithm Design & Analysis project.',
    tech: ['Python', 'Algorithms', 'Game Development'],
    link: 'https://github.com/L1M1N4L/ADAFinalProj',
  },
  {
    title: 'Metal Annealing Simulation with Monte Carlo Methods',
    description: 'Simulated grain growth and microstructure evolution during metal annealing using Monte Carlo algorithms. Modeled physical processes for a final Computational Physics course project.',
    tech: ['Python', 'Computational Physics', 'Monte Carlo'],
    link: 'https://github.com/L1M1N4L/comp-phys-final-annealing',
  },
  {
    title: 'Hāfu no Ramen: Educational Visual Novel',
    description: 'An interactive visual novel that teaches Japanese through immersive storytelling. Includes vocabulary pop-ups, grammar tips, and culturally rich narratives to support contextual learning.',
    tech: ['Ren\'Py', 'Python', 'Game Development', 'Japanese Education'],
    link: 'https://github.com/L1M1N4L/Half-Assed-Ramen',
  },
  {
    title: 'A Guide to Learning Japanese',
    description: 'Compiled a structured, web-based guide for independent Japanese learners, covering grammar, vocabulary, usage examples, and cultural insights.',
    tech: ['HTML', 'Language Education'],
    link: 'https://github.com/L1M1N4L/A-guide-to-learning-Japanese  ',
  },
  {
    title: 'LibraHub: Modular Backend and Data Utilities',
    description: 'Built a collection of backend and data processing utilities to assist with scripting, automation, and modular application development.',
    tech: ['Python', 'Data Engineering'],
    link: 'https://github.com/L1M1N4L/LibraHub',
  },
  {
    title: 'Arduino Smart Systems',
    description: 'Automatic Blind System: Controls blinds using IR sensors and servo motors. Heat Alarm System: Detects abnormal heat levels using temperature sensors, buzzers, and LCD output.',
    tech: ['C++', 'Embedded Systems', 'IoT'],
    link: 'https://www.tinkercad.com/things/8r7LqSb2DHe-basic-arduino-programming-and-electrical-science?sharecode=JdasrXFCk3ZAxGIllSyQIgINMypWXnfefiJnI1bRulM',
  },
  {
    title: 'Flutter Shopping App for GDG Workshop',
    description: 'Built a cross-platform shopping app with Firebase integration to demonstrate Flutter development in a Google Developer Groups (GDG) educational workshop.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Mobile Development'],
    link: 'https://github.com/L1M1N4L/boba-shopping-app',
  },
];

// Clients data removed as per design simplification

const featuredWritings = [
  {
    title: 'COMP6210001 - Ethical Hacking Blog',
    excerpt: 'A comprehensive blog covering cybersecurity fundamentals, penetration testing, OSINT techniques, and ethical hacking methodologies.',
    link: 'https://comp6210001.wordpress.com',
    type: 'Cybersecurity Blog',
  },
  {
    title: 'A Guide to Learning Japanese',
    excerpt: 'Compiled a structured, web-based guide for independent Japanese learners, covering grammar, vocabulary, usage examples, and cultural insights.',
    link: '/guide-to-learning-japanese',
    type: 'Educational Blog',
  },
];

const featuredTalks = [
  {
    title: 'JuaraGCP: Vertex AI Study Jam',
    event: 'GDG on Campus Binus University International',
    date: 'Jan 2026',
    type: 'Workshop',
    description: 'Hands-on workshop exploring Google Cloud\'s Vertex AI features, empowering participants to build and deploy ML models.',
    attendees: '84+',
    slides: null,
    recording: null,
    eventPage: 'https://gdg.community.dev/events/details/google-gdg-on-campus-binus-university-international-jakarta-indonesia-presents-juaragcp-vertex-ai-study-jam/',
  },
  {
    title: 'Beyond REST: Exploring Modern API Protocols',
    event: 'GDGoC Talk Series #3',
    date: 'July 2025',
    type: 'Technical Talk',
    attendees: '200+ developers',
  },
  {
    title: 'Build with AI: From Ideas to Impact',
    event: 'Google Developer Groups',
    date: 'February 2025',
    type: 'Workshop',
    attendees: '60+ participants',
  },
  {
    title: 'Data Visualization Fundamentals',
    event: 'SheCodes Workshop Series',
    date: 'January 2025',
    type: 'Workshop',
    attendees: '40+ participants',
  },
];

const experience = [
  {
    title: 'Software Engineer (Contract-based)',
    company: 'TRANSTEL COMMUNICATIONS PVT. LTD.',
    type: 'Contract',
    location: 'Florida, USA',
    period: 'Jun 2022 – Present',
    image: transTelLogo,
    bullets: [
      'Engineered performance-critical data parsers and migrated legacy serial I/O systems to TCP/IP-based communication, improving throughput by 43% and reducing processing overhead by 40%.',
      'Rebuilt and architected the company website into a scalable, dynamic platform, improving customer interaction flows and resulting in a 3× increase in sales click-throughs.',
      'Collaborated with global stakeholders to translate business requirements into scalable technology solutions, ensuring alignment with strategic objectives.'
    ]
  },
  {
    title: 'Community Organizer',
    company: 'Google for Developers',
    type: 'Contract',
    period: 'Sep 2024 – Present',
    location: 'Singapore, Singapore',
    image: googleLogo,
    bullets: [
      'Spearheaded regional Developer Relations execution across APAC, supporting flagship programs such as DevFest and IOX, and kickstarting Google Summer of Code (GSoC) initiatives.',
      'Delivered large-scale developer events and hackathons, engaging 1,000+ students across Asia Pacific in hands-on learning.',
      'Championed adoption of Google technologies (Cloud, Gemini, Flutter) through high-impact workshops and community programs, fostering a thriving developer ecosystem.'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'Hikvision',
    location: '广州, 中国',
    period: 'Mar 2023 – Jul 2023',
    image: hikvisionLogo,
    bullets: [
      'Engineered a real-time computer vision monitoring system using OpenCV (Python), achieving ~90% detection accuracy on resource-constrained embedded devices.',
      'Orchestrated the integration of ML models, DVR systems, and Arduino automation into a robust end-to-end alert pipeline, slashing incident response times by 35%.'
    ]
  },
  {
    title: 'Teaching Assistant',
    company: 'BINUS University International',
    period: 'Aug 2024 – Jan 2025',
    location: 'Jakarta, Indonesia',
    image: binusLogo,
    bullets: [
      'Assisted with teaching Python, data structures, and algorithm design.',
      'Led lab sessions and provided individualized mentoring.',
      'Delivered Python coding and design workshops for K–12 students.',
      'Focused on hands-on programming and visual design fundamentals.'
    ]
  },
  {
    title: 'Subject Matter Expert',
    company: 'BINUS University International',
    period: 'Aug 2024 – Present',
    location: 'Jakarta, Indonesia',
    image: binusLogo,
    bullets: [
      'Developed comprehensive modules for data structures and algorithm programming.',
      'Created educational content and curriculum materials for computer science courses.',
      'Designed interactive learning materials for programming fundamentals.',
      'Collaborated with faculty to enhance course delivery and student engagement.'
    ]
  },
  {
    title: 'Japanese Language Instructor',
    company: 'BINUS ASO School of Engineering',
    period: 'Sep 2024 – Present',
    location: 'Jakarta, Indonesia',
    image: binusAsoLogo,
    bullets: [
      'Taught JLPT N3–N1 level Japanese to engineering students.',
      'Developed curriculum including technical and workplace Japanese.',
      'Supported student internship prep for Japanese companies.'
    ]
  }
];

const volunteering = [
  {
    title: 'Technical Developer',
    org: 'Google Developer Student Clubs (GDSC)',
    period: 'Oct 2023 – Oct 2024',
    image: gdscLogo,
    bullets: [
      'Hosted workshops on Flutter, Firebase, and ML.',
      'Built demo apps and learning resources for student developer growth.'
    ]
  },
  {
    title: 'Community Manager',
    org: 'SheCodes Society (British Council Funded)',
    period: 'Jan 2025 – Present',
    image: sheCodesLogo,
    bullets: [
      'Mentor high school to university women in STEM on data visualization and data cleaning using Tableau and Python.',
      'Drive community engagement by coordinating initiatives through Google Classroom and WhatsApp.',
      'Advocate for Google technologies through inclusive workshops and events.'
    ]
  }
];

const qualifications = [
  {
    title: 'Bachelor of Science',
    institution: 'England',
    period: '07/2023 - 07/2027',
    type: 'Degree',
    credentialId: null,
  },
  {
    title: 'Sarjana Komputer',
    institution: 'Indonesia',
    period: '07/2023 - 07/2027',
    type: 'Degree',
    credentialId: null,
  },
  {
    title: 'Advanced Arduino Programming and Electrical Science',
    institution: 'BINUS University',
    period: '03/2022',
    type: 'Certificate',
    credentialId: null,
  },
  {
    title: 'Basic Arduino Programming and Electrical Science',
    institution: 'BINUS University',
    period: '03/2022',
    type: 'Certificate',
    credentialId: null,
  },
  {
    title: 'Java (Basic) Certificate',
    institution: 'HackerRank',
    period: '2022',
    type: 'Certificate',
    credentialId: '90767b4a55a0',
  },
  {
    title: 'Problem Solving (Basic) Certificate',
    institution: 'HackerRank',
    period: '2022',
    type: 'Certificate',
    credentialId: '301adf5b8078',
  },
  {
    title: 'Python (Basic) Certificate',
    institution: 'HackerRank',
    period: '2022',
    type: 'Certificate',
    credentialId: '8fa62f0f7570',
  },
  {
    title: '日本語能力試験１級 (JLPT N1)',
    institution: 'The Japan Foundation',
    period: '12/2022',
    type: 'Certificate',
    credentialId: null,
  },
  {
    title: 'LRSM in Piano Performance',
    institution: 'Associated Board of the Royal Schools of Music',
    period: 'A.Y 2021-2022',
    type: 'Certificate',
    credentialId: null,
  },
];

const NAV_LINKS = [
  { id: 'home', label: 'HOME' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'portfolio', label: 'PORTFOLIO' },
  { id: 'writings', label: 'WRITINGS' },
  { id: 'volunteering', label: 'VOLUNTEERING' },
  { id: 'talks', label: 'TALKS' },
  { id: 'contact', label: 'CONTACT' },
];

const TERMINAL_COMMANDS = [
  {
    prompt: 'whoami',
    output: 'L1M1N4L',
    sub: 'Backend Engineer | Compiler Enthusiast | Systems & OS | DevRel',
  },
  {
    prompt: 'experience',
    output: `Software Engineer @ TransTel Communications, Inc.\n  - Jun 2023–Present\n  Redesigned company website, built PABX interface, VoIP billing\nCommunity Organizer @ Google DevRel\n  - Oct 2024–Present\n  GDG on Campus, workshops, DevRel bridge\nIntern @ Hikvision\n  - Mar 2023–Jul 2023\n  Real-time people detection, ML, Arduino\nTA @ BINUS University\n  - Aug 2024–Jan 2025\n  Python, data structures, mentoring`,
    sub: '',
  },
  {
    prompt: 'skills',
    output: `Languages: Python, Java, C++, JS\nFrameworks: React, Node.js, Firebase\nSystems: Linux, Compiler Design, OS\nOther: UI/UX, DevRel, Japanese (N1)`,
    sub: '',
  },
  {
    prompt: 'talks',
    output: `Recent Talks & Presentations:\n  - Introduction to Flutter Development (GDSC BINUS)\n  - Building Cross-Platform Apps with Firebase (GDG Campus)\n  - Japanese Language Learning Strategies (BINUS ASO)\n\nTotal: 3 talks, 180+ attendees`,
    sub: '',
  },
  {
    prompt: 'volunteering',
    output: `GDSC Technical Developer\n  - Oct 2023–Oct 2024\n  Flutter, Firebase, ML workshops\nSheCodes Society Admin\n  - Jan 2025–Present\n  Women in tech, inclusive events`,
    sub: '',
  },
  {
    prompt: 'contact',
    output: `Email: your.email@example.com\nLinkedIn: linkedin.com/in/jonathan-leewin\nGoogle Dev Profile: g.dev/l1m1n4l\nGitHub: github.com/L1M1N4L`,
    sub: '',
  },
  {
    prompt: 'ls',
    output: `portfolio/          projects/          skills/            experience/\nvolunteering/       writings/          talks/              contact/\nREADME.md           l1m1n4l.exe        debug.log`,
    sub: '',
  },
];

const HERO_PROMPT = 'whoami';
const HERO_OUTPUT = 'L1M1N4L';
const HERO_TAGLINE = 'Backend Engineer | Compiler Enthusiast | Systems & OS | DevRel';
const HERO_OS = 'Linux l1m1n4l 6.6.0-portfolio #1 SMP PREEMPT x86_64 GNU/Linux';
const HERO_UPTIME = 'up 42 days, 13:37, 3 users, load average: 0.42, 0.13, 0.01';
const HERO_LASTLOGIN = 'Last login: Fri Jun 28 10:00:00 2025 from 192.168.1.42';
const HERO_MOTD = 'Welcome to the L1M1N4L portfolio OS!';

const TYPING_SPEED = 40;

const App = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [typedPrompt, setTypedPrompt] = useState('');
  const [typedOutput, setTypedOutput] = useState('');
  const [typedLines, setTypedLines] = useState([]);
  const [interactiveMode, setInteractiveMode] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [terminalTheme, setTerminalTheme] = useState('default');
  const [showSettings, setShowSettings] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllQualifications, setShowAllQualifications] = useState(false);
  const [time, setTime] = useState(new Date());
  const [clientName, setClientName] = useState('Unknown Browser');
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080
  });

  useEffect(() => {
    // Handle Window Resize
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    // Detect Client Browser on Mount
    const ua = navigator.userAgent;
    let browser = "Unknown Client";
    if (ua.includes('Firefox')) browser = 'Mozilla Firefox';
    else if (ua.includes('SamsungBrowser')) browser = 'Samsung Internet';
    else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';
    else if (ua.includes('Trident')) browser = 'Internet Explorer';
    else if (ua.includes('Edge')) browser = 'Microsoft Edge (Legacy)';
    else if (ua.includes('Edg')) browser = 'Microsoft Edge';
    else if (ua.includes('Chrome')) browser = 'Google Chrome';
    else if (ua.includes('Safari')) browser = 'Apple Safari';
    setClientName(browser);

    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Hero background options
  const heroBackgrounds = [
    cafeTable, // Current anime background
    sereneLandscape, // Cyberpunk city
    developerSetup, // Space/nebula
    mountainRetreat, // Mountain landscape
    officeAtNight, // Blurred version
  ];

  // Set initial background to random
  const getRandomBgIndex = () => Math.floor(Math.random() * heroBackgrounds.length);
  const [currentBgIndex, setCurrentBgIndex] = useState(getRandomBgIndex());

  // Terminal theme configurations
  const terminalThemes = {
    default: {
      bg: 'bg-slate-800/90',
      text: 'text-slate-200',
      barBg: 'bg-slate-700/80',
      barBorder: 'border-slate-700',
      promptText: 'text-slate-400',
      buttonBg: 'bg-slate-600/60',
      buttonBorder: 'border-slate-500',
      buttonHover: 'hover:bg-slate-700'
    },
    dracula: {
      bg: 'bg-[#282a36]/90',
      text: 'text-[#f8f8f2]',
      barBg: 'bg-[#44475a]/80',
      barBorder: 'border-[#6272a4]',
      promptText: 'text-[#bd93f9]',
      buttonBg: 'bg-[#44475a]/60',
      buttonBorder: 'border-[#6272a4]',
      buttonHover: 'hover:bg-[#6272a4]'
    },
    gruvbox: {
      bg: 'bg-[#282828]/90',
      text: 'text-[#ebdbb2]',
      barBg: 'bg-[#3c3836]/80',
      barBorder: 'border-[#504945]',
      promptText: 'text-[#b8bb26]',
      buttonBg: 'bg-[#3c3836]/60',
      buttonBorder: 'border-[#504945]',
      buttonHover: 'hover:bg-[#504945]'
    },
    monokai: {
      bg: 'bg-[#272822]/90',
      text: 'text-[#f8f8f2]',
      barBg: 'bg-[#3e3d32]/80',
      barBorder: 'border-[#75715e]',
      promptText: 'text-[#f92672]',
      buttonBg: 'bg-[#3e3d32]/60',
      buttonBorder: 'border-[#75715e]',
      buttonHover: 'hover:bg-[#75715e]'
    },
    nord: {
      bg: 'bg-[#2e3440]/90',
      text: 'text-[#eceff4]',
      barBg: 'bg-[#3b4252]/80',
      barBorder: 'border-[#4c566a]',
      promptText: 'text-[#88c0d0]',
      buttonBg: 'bg-[#3b4252]/60',
      buttonBorder: 'border-[#4c566a]',
      buttonHover: 'hover:bg-[#4c566a]'
    }
  };

  const currentTheme = terminalThemes[terminalTheme];

  useEffect(() => {
    const onScroll = () => {
      // Change nav color when scrolled halfway through the viewport
      setScrolled(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-highlight nav based on section in view
  useEffect(() => {
    const handleScroll = () => {
      const offsets = NAV_LINKS.map((link) => {
        const el = document.getElementById(link.id);
        if (!el) return { id: link.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: link.id, top: Math.abs(rect.top) };
      });
      // Find the section closest to the top
      const inView = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(inView.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only start terminal typing animation after loader is gone
  useEffect(() => {
    if (!loaderVisible) {
      let isMounted = true;
      setTypedPrompt('');
      setTypedOutput('');
      setTypedLines([]);
      let p = 0, o = 0, l = 0;
      const extraLines = [
        { text: HERO_TAGLINE, className: 'text-slate-400 text-sm mb-2' },
        { text: `$ uname -a`, className: 'text-xs text-slate-500 mb-0' },
        { text: HERO_OS, className: 'text-xs text-slate-300 mb-0' },
        { text: `$ uptime`, className: 'text-xs text-slate-500 mb-0' },
        { text: HERO_UPTIME, className: 'text-xs text-slate-300 mb-0' },
        { text: HERO_LASTLOGIN, className: 'text-xs text-slate-400 mb-0' },
        { text: `motd: ${HERO_MOTD}`, className: 'text-xs text-green-300 mb-0' },
      ];
      const typePrompt = () => {
        if (!isMounted) return;
        if (p < HERO_PROMPT.length) {
          setTypedPrompt(HERO_PROMPT.slice(0, p + 1));
          p++;
          setTimeout(typePrompt, TYPING_SPEED);
        } else {
          setTimeout(typeOutput, 400);
        }
      };
      const typeOutput = () => {
        if (!isMounted) return;
        if (o < HERO_OUTPUT.length) {
          setTypedOutput(HERO_OUTPUT.slice(0, o + 1));
          o++;
          setTimeout(typeOutput, TYPING_SPEED);
        } else {
          setTimeout(typeLines, 400);
        }
      };
      const typeLines = () => {
        if (!isMounted) return;
        if (l < extraLines.length) {
          if (extraLines[l] && extraLines[l].className) {
            setTypedLines((lines) => {
              if (lines.length > 0 && lines[lines.length - 1] === extraLines[l]) return lines;
              return [...lines, extraLines[l]];
            });
          }
          l++;
          setTimeout(typeLines, 350);
        }
      };
      typePrompt();
      return () => { isMounted = false; };
    }
  }, [loaderVisible]);

  useEffect(() => {
    if (!loading) {
      // Wait for fade-out transition before removing loader
      const timeout = setTimeout(() => setLoaderVisible(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  useEffect(() => {
    let loaded = false;
    const onLoad = () => {
      if (!loaded) {
        setLoading(false);
        loaded = true;
      }
    };
    window.addEventListener('load', onLoad);
    // Fallback: hide loader after 5s if load event never fires
    const fallback = setTimeout(onLoad, 5000);
    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, []);

  // Command processing function
  const processCommand = (command) => {
    const cmd = command.trim().toLowerCase();
    const foundCommand = TERMINAL_COMMANDS.find(c => c.prompt.toLowerCase() === cmd);

    if (foundCommand) {
      return {
        prompt: command,
        output: foundCommand.output,
        sub: foundCommand.sub
      };
    }

    // Handle ls -la for hidden files easter egg
    if (cmd === 'ls -la' || cmd === 'ls -a') {
      return {
        prompt: command,
        output: `total 42\ndrwxr-xr-x  2 l1m1n4l l1m1n4l 4096 Jun 28 10:00 .\ndrwxr-xr-x  3 l1m1n4l l1m1n4l 4096 Jun 28 10:00 ..\n-rw-r--r--  1 l1m1n4l l1m1n4l  512 Jun 28 10:00 .bashrc\n-rw-r--r--  1 l1m1n4l l1m1n4l  256 Jun 28 10:00 .profile\n-rw-r--r--  1 l1m1n4l l1m1n4l  128 Jun 28 10:00 .hidden_secret\n-rw-r--r--  1 l1m1n4l l1m1n4l  256 Jun 28 10:00 .easter_egg\n-rw-r--r--  1 l1m1n4l l1m1n4l  512 Jun 28 10:00 .vimrc\n-rw-r--r--  1 l1m1n4l l1m1n4l  128 Jun 28 10:00 .gitignore\ndrwxr-xr-x  2 l1m1n4l l1m1n4l 4096 Jun 28 10:00 portfolio/\ndrwxr-xr-x  2 l1m1n4l l1m1n4l 4096 Jun 28 10:00 projects/\ndrwxr-xr-x  2 l1m1n4l l1m1n4l 4096 Jun 28 10:00 skills/\ndrwxr-xr-x  2 l1m1n4l l1m1n4l 4096 Jun 28 10:00 experience/\ndrwxr-xr-x  2 l1m1n4l l1m1n4l 4096 Jun 28 10:00 volunteering/\ndrwxr-xr-x  2 l1m1n4l l1m1n4l 4096 Jun 28 10:00 writings/\ndrwxr-xr-x  2 l1m1n4l l1m1n4l 4096 Jun 28 10:00 contact/\ndrwxr-xr-x  2 l1m1n4l l1m1n4l 4096 Jun 28 10:00 streaming_setup/\ndrwxr-xr-x  2 l1m1n4l l1m1n4l 4096 Jun 28 10:00 vtuber_projects/\ndrwxr-xr-x  2 l1m1n4l l1m1n4l 4096 Jun 28 10:00 matcha_obsession/\n-rw-r--r--  1 l1m1n4l l1m1n4l 1024 Jun 28 10:00 README.md\n-rwxr-xr-x  1 l1m1n4l l1m1n4l 2048 Jun 28 10:00 l1m1n4l.exe\n-rwxr-xr-x  1 l1m1n4l l1m1n4l 4096 Jun 28 10:00 ihatemalwares.exe\n-rw-r--r--  1 l1m1n4l l1m1n4l 2048 Jun 28 10:00 kernel_module.ko\n-rw-r--r--  1 l1m1n4l l1m1n4l 1536 Jun 28 10:00 systems_design.pdf\n-rw-r--r--  1 l1m1n4l l1m1n4l 1536 Jun 28 10:00 compiler_nerd.py\n-rw-r--r--  1 l1m1n4l l1m1n4l 3072 Jun 28 10:00 audio_mix.wav\n-rw-r--r--  1 l1m1n4l l1m1n4l  512 Jun 28 10:00 terminal_theme.css\n-rw-r--r--  1 l1m1n4l l1m1n4l  768 Jun 28 10:00 japanese_notes.txt\n-rw-r--r--  1 l1m1n4l l1m1n4l 1024 Jun 28 10:00 piano_sheet.pdf\n-rw-r--r--  1 l1m1n4l l1m1n4l  512 Jun 28 10:00 matcha_powder.jpg\n-rw-r--r--  1 l1m1n4l l1m1n4l  256 Jun 28 10:00 matchaamilktea.txt\n-rw-r--r--  1 l1m1n4l l1m1n4l  128 Jun 28 10:00 debug.log`,
        sub: 'Hidden files revealed! 🕵️'
      };
    }

    // Handle background cycling commands
    if (cmd === 'bg' || cmd === 'background') {
      const nextIndex = (currentBgIndex + 1) % heroBackgrounds.length;
      setCurrentBgIndex(nextIndex);
      const bgNames = ['Anime Landscape', 'Cyberpunk City', 'Space Nebula', 'Mountain View', 'Blurred Mountains'];
      return {
        prompt: command,
        output: `Background changed to: ${bgNames[nextIndex]}`,
        sub: `Background ${nextIndex + 1}/${heroBackgrounds.length}`
      };
    }

    // Handle man command for any command
    if (cmd.startsWith('man ')) {
      const commandName = cmd.split(' ')[1];

      if (commandName === 'bg' || commandName === 'background') {
        const bgNames = ['Anime Landscape', 'Cyberpunk City', 'Space Nebula', 'Mountain View', 'Blurred Mountains'];
        return {
          prompt: command,
          output: `BG(1)                    User Commands                    BG(1)

NAME
       bg - cycle through hero backgrounds

SYNOPSIS
       bg

DESCRIPTION
       Cycles through available hero background images.

AVAILABLE BACKGROUNDS
${bgNames.map((name, i) => `       ${i + 1}. ${name}`).join('\n')}

EXAMPLES
       bg          # Cycle to next background

SEE ALSO
       help(1)`,
          sub: ''
        };
      }

      if (commandName === 'help') {
        return {
          prompt: command,
          output: `HELP(1)                  User Commands                   HELP(1)

NAME
       help - show available commands

SYNOPSIS
       help

DESCRIPTION
       Displays a list of all available terminal commands.

EXAMPLES
       help        # Show all commands

SEE ALSO
       man(1)`,
          sub: ''
        };
      }

      if (commandName === 'clear') {
        return {
          prompt: command,
          output: `CLEAR(1)                 User Commands                  CLEAR(1)

NAME
       clear - clear terminal screen

SYNOPSIS
       clear

DESCRIPTION
       Clears the terminal command history and output.

EXAMPLES
       clear       # Clear terminal

SEE ALSO
       help(1)`,
          sub: ''
        };
      }

      return {
        prompt: command,
        output: `No manual entry for ${commandName}`,
        sub: 'Try: help'
      };
    }

    // Handle unknown commands
    if (cmd === 'clear') {
      return { prompt: command, output: '', sub: '', clear: true };
    }

    if (cmd === 'help') {
      return {
        prompt: command,
        output: `Available commands:\n${TERMINAL_COMMANDS.map(c => `  ${c.prompt}`).join('\n')}\n  ls -la - Show hidden files\n  bg - Cycle background\n  man <command> - Show manual\n  clear - Clear terminal\n  help - Show this help`,
        sub: ''
      };
    }

    // Handle background cycling and direct selection
    if (cmd.startsWith('bg')) {
      const parts = cmd.split(' ');
      const bgNames = [
        'Cafe Table',
        'Serene Landscape',
        'Developer Setup',
        'Mountain Retreat',
        'Office at Night',
      ];
      if (parts.length === 2 && /^\d+$/.test(parts[1])) {
        const idx = parseInt(parts[1], 10) - 1;
        if (idx >= 0 && idx < heroBackgrounds.length) {
          setCurrentBgIndex(idx);
          return {
            prompt: command,
            output: `Background set to: ${bgNames[idx]}`,
            sub: `Background ${idx + 1}/${heroBackgrounds.length}`
          };
        } else {
          return {
            prompt: command,
            output: `Invalid background index. Choose 1-${heroBackgrounds.length}.`,
            sub: ''
          };
        }
      } else if (parts.length === 1) {
        const nextIndex = (currentBgIndex + 1) % heroBackgrounds.length;
        setCurrentBgIndex(nextIndex);
        return {
          prompt: command,
          output: `Background changed to: ${bgNames[nextIndex]}`,
          sub: `Background ${nextIndex + 1}/${heroBackgrounds.length}`
        };
      }
    }

    return {
      prompt: command,
      output: `Command not found: ${command}. Type 'help' for available commands.`,
      sub: ''
    };
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!userInput.trim()) return;

      const result = processCommand(userInput);

      if (result.clear) {
        setCommandHistory([]);
      } else {
        setCommandHistory(prev => [...prev, result]);
      }

      setUserInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setUserInput(commandHistory[commandHistory.length - 1 - newIndex].prompt);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setUserInput(commandHistory[commandHistory.length - 1 - newIndex].prompt);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setUserInput('');
      }
    }
  };

  // Loader boot lines
  const bootLines = [
    'Booting L1M1N4L OS...',
    '[ OK ] Loading kernel modules...',
    '[ OK ] Mounting /home...',
    '[ OK ] Starting X server...',
    '[ OK ] Initializing portfolio...',
    '[ OK ] Network online',
    '[ OK ] Ready.'
  ];
  const [bootIndex, setBootIndex] = useState(0);

  useEffect(() => {
    if (loading && bootIndex < bootLines.length) {
      const t = setTimeout(() => setBootIndex(bootIndex + 1), 80);
      return () => clearTimeout(t);
    }
  }, [loading, bootIndex]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#18191c] text-slate-900 dark:text-slate-100 font-mono">
      {/* Loader Overlay */}
      {loaderVisible && (
        <div className={`fixed inset-0 z-50 flex flex-col items-start justify-center bg-black transition-opacity duration-500 px-8 sm:px-24 ${loading ? 'opacity-100' : 'opacity-0'}`}>
          <div className="font-mono text-green-400 text-base sm:text-lg leading-relaxed whitespace-pre">
            {bootLines.slice(0, bootIndex).map((line, i) => (
              <div key={i} className={i === 0 ? 'text-white' : ''}>
                {i === 0 ? <span className="text-white">{line}</span> : line}
              </div>
            ))}
            {bootIndex >= bootLines.length && (
              <div><span className="text-green-400">l1m1n4l@portfolio:~$ <span className='boot-cursor'>█</span></span></div>
            )}
          </div>
        </div>
      )}
      {/* Sticky Header */}
      <header
        className={`w-full top-0 left-0 z-30 transition-all duration-300 ${scrolled
          ? 'fixed bg-white/90 dark:bg-[#18191c]/95 border-b border-slate-200 dark:border-[#2d2f34] shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-[#18191c]/90'
          : 'fixed bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
          <h1 className="text-xl sm:text-2xl font-bold tracking-widest">
            <a
              href="#home"
              className={`hover:underline transition-colors duration-150 ${scrolled ? 'text-slate-900 dark:text-slate-100' : 'text-white'}`}
            >
              L1M1N4L
            </a>
          </h1>

          <div className="hidden md:flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="flex items-center">
              <MagicArea className="flex gap-6 lg:gap-10" highlightClass="bg-white/80 ring-1 ring-slate-300/40">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`px-2 py-1 text-sm lg:text-base font-medium transition-colors duration-150
                      ${active === link.id
                        ? scrolled
                          ? 'text-slate-900 dark:text-slate-100 font-bold is-magic-active'
                          : 'text-white font-bold is-magic-active'
                        : scrolled
                          ? 'text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
                          : 'text-slate-200 hover:text-white'}`}
                    aria-current={active === link.id ? 'page' : undefined}
                    onClick={() => setActive(link.id)}
                  >
                    {link.label}
                  </a>
                ))}
              </MagicArea>
            </nav>

            {/* Theme Toggle - Far Right */}
            <div className="flex items-center">
              <ThemeToggle className={scrolled ? 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle className={scrolled ? 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'} />
            <button
              className={`p-2 rounded-lg transition-all duration-200  ${scrolled ? 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'
                }`}
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  if (mobileMenu.classList.contains('hidden')) {
                    // Show menu with animation
                    mobileMenu.classList.remove('hidden');
                    setTimeout(() => {
                      mobileMenu.style.maxHeight = '400px';
                      mobileMenu.style.opacity = '1';
                    }, 10);
                  } else {
                    // Hide menu with animation
                    mobileMenu.style.maxHeight = '0px';
                    mobileMenu.style.opacity = '0';
                    setTimeout(() => {
                      mobileMenu.classList.add('hidden');
                    }, 300);
                  }
                }
              }}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className="hidden md:hidden bg-white/95 dark:bg-[#18191c]/95 backdrop-blur-sm border-b border-slate-200 dark:border-[#2d2f34] transform transition-all duration-300 ease-in-out origin-top"
          style={{ maxHeight: '0px', opacity: '0', overflow: 'hidden' }}
        >
          <div className="px-4 py-2 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 transform 
                  ${active === link.id
                    ? 'text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                aria-current={active === link.id ? 'page' : undefined}
                onClick={() => {
                  setActive(link.id);
                  // Hide mobile menu after selection with animation
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                    mobileMenu.style.maxHeight = '0px';
                    mobileMenu.style.opacity = '0';
                    setTimeout(() => {
                      mobileMenu.classList.add('hidden');
                    }, 300);
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Home Section (Fullscreen Terminal/OS style hero with anime background) */}
      <section
        id="home"
        className="snap-section min-h-screen flex flex-col items-center justify-center text-center px-4 py-0 bg-white relative"
        style={{
          backgroundImage: `url(${heroBackgrounds[currentBgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md dark:bg-[#18191c]/80" style={{ zIndex: 1 }} />
        <div className="w-full flex flex-col items-center justify-center relative z-10">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl mb-6 sm:mb-10">
            <div
              className={`w-full rounded-xl shadow-lg p-0 font-mono text-left relative overflow-hidden group ${currentTheme.bg}`}
            >
              {/* Terminal window bar */}
              <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-t-xl border-b relative ${currentTheme.barBg} ${currentTheme.barBorder}`}>
                <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400 inline-block"></span>
                <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-300 inline-block"></span>
                <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400 inline-block"></span>
                <span className={`ml-2 sm:ml-4 text-xs select-none ${currentTheme.promptText}`}>l1m1n4l@portfolio:~</span>
                {/* Interaction Mode toggle */}
                <button
                  className={`ml-auto text-xs px-2 sm:px-3 py-1 rounded border transition ${currentTheme.buttonBg} ${currentTheme.buttonBorder} ${currentTheme.buttonHover} ${currentTheme.text}`}
                  style={{ fontFamily: 'inherit' }}
                  onClick={() => setInteractiveMode(!interactiveMode)}
                  title={interactiveMode ? "Exit interaction mode" : "Enter interaction mode"}
                >
                  {interactiveMode ? 'Exit Mode' : 'Interaction Mode'}
                </button>
                {/* Settings Dropdown Button */}
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className={`text-xs px-2 py-1.5 rounded border transition ${currentTheme.buttonBg} ${currentTheme.buttonBorder} ${currentTheme.buttonHover} ${currentTheme.text}`}
                  title="Terminal Settings"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </button>
              </div>

              <div className="px-4 sm:px-6 py-4 sm:py-6 min-h-[16rem] max-h-64 sm:max-h-80 lg:max-h-96 overflow-y-scroll scrollbar-hide relative">

                {/* Regular Terminal Interfaces */}
                {!interactiveMode ? (
                  <>
                    <div className="text-green-300 text-xs sm:text-sm mb-2 select-none">
                      l1m1n4l@portfolio:~$ <span className={currentTheme.text}>{typedPrompt}</span>
                    </div>
                    {typedOutput && (
                      <div className="text-base sm:text-lg md:text-2xl font-bold text-slate-100 mb-2 flex items-center">{typedOutput}</div>
                    )}
                    {typedLines.filter(line => line && line.className).map((line, i) => (
                      <div key={i} className={`${line.className} text-xs sm:text-sm`}>{line.text}</div>
                    ))}
                  </>
                ) : (
                  <>
                    {/* Command History */}
                    {commandHistory.map((cmd, idx) => (
                      <div key={idx} className="mb-2">
                        <div className="text-green-300 text-xs sm:text-sm select-none">
                          l1m1n4l@portfolio:~$ <span className={currentTheme.text}>{cmd.prompt}</span>
                        </div>
                        {cmd.output && (
                          <div className={`${currentTheme.text} text-xs sm:text-sm mt-1 whitespace-pre-line`}>{cmd.output}</div>
                        )}
                        {cmd.sub && (
                          <div className={`${currentTheme.text} text-xs sm:text-sm mt-1 opacity-70`}>{cmd.sub}</div>
                        )}
                      </div>
                    ))}

                    {/* Current Input */}
                    <div className="flex items-center">
                      <span className="text-green-300 text-xs sm:text-sm select-none">l1m1n4l@portfolio:~$ </span>
                      <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className={`flex-1 bg-transparent text-xs sm:text-sm outline-none border-none ml-1 placeholder-slate-500 ${currentTheme.text}`}
                        placeholder="Type 'help' for available commands"
                        autoFocus
                      />
                    </div>
                  </>
                )}

                {/* Sleek Settings Overlay inside Terminal */}
                <div
                  className={`absolute inset-0 ${currentTheme.bg.replace('/90', '')}/95 backdrop-blur-md z-20 flex flex-col p-6 transition-all duration-300 ${showSettings ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                >
                  <div className={`flex items-center justify-between mb-6 pb-2 border-b ${currentTheme.barBorder}`}>
                    <h3 className={`${currentTheme.text} font-mono text-xs sm:text-sm tracking-widest font-bold`}>SYSTEM SETTINGS</h3>
                    <button onClick={() => setShowSettings(false)} className={`${currentTheme.promptText} hover:${currentTheme.text.split(' ')[0]} transition-colors hover:rotate-90 transform duration-200`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>

                  <div className="space-y-6 overflow-y-auto scrollbar-hide flex-1">
                    {/* Theme */}
                    <div>
                      <h4 className={`${currentTheme.promptText} font-mono text-[10px] sm:text-xs tracking-widest mb-3 opacity-80`}>TERMINAL THEME</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-sm">
                        {Object.entries(terminalThemes).map(([themeName]) => (
                          <button
                            key={themeName}
                            onClick={() => setTerminalTheme(themeName)}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg border transition-all duration-200 ${terminalTheme === themeName
                              ? 'border-green-500/50 bg-green-500/10 text-green-400 shadow-[inset_0_0_10px_rgba(74,222,128,0.1)]'
                              : `${currentTheme.barBorder} ${currentTheme.barBg} ${currentTheme.promptText} ${currentTheme.buttonHover} hover:${currentTheme.text.split(' ')[0]}`
                              }`}
                          >
                            <span className="text-xs sm:text-sm font-medium capitalize font-sans">{themeName}</span>
                            {terminalTheme === themeName && (
                              <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Wallpaper */}
                    <div>
                      <h4 className={`${currentTheme.promptText} font-mono text-[10px] sm:text-xs tracking-widest mb-3 opacity-80`}>HERO WALLPAPER</h4>
                      <div className="grid grid-cols-5 gap-2 max-w-sm">
                        {heroBackgrounds.map((bg, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentBgIndex(idx)}
                            className={`relative h-12 sm:h-14 rounded-lg border overflow-hidden transition-all duration-200 ${currentBgIndex === idx ? 'border-green-500/70 shadow-[0_0_12px_rgba(74,222,128,0.3)]' : `${currentTheme.barBorder} opacity-60 hover:opacity-100 hover:${currentTheme.buttonBorder}`}`}
                          >
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}></div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#portfolio" className="inline-block mt-4 sm:mt-6 text-slate-300 hover:text-green-300 font-mono text-xs sm:text-sm tracking-widest transition-all duration-200 underline underline-offset-4 decoration-slate-600 hover:decoration-green-400">$ view_my_portfolio</a>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="snap-section py-16 sm:py-24 px-4 border-t border-slate-100 dark:border-[#2d2f34] bg-white dark:bg-[#18191c]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest mb-8 sm:mb-10">PROFESSIONAL EXPERIENCE</h2>
          <div className="space-y-8 sm:space-y-10">
            {experience.map((exp, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 border-b border-slate-100 dark:border-slate-800 pb-6 sm:pb-8">
                <img src={exp.image} alt={exp.company} className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 self-start" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100">{exp.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ml-2 text-slate-700 dark:text-slate-300">{exp.company}</span>
                    {exp.type && <span className="text-xs px-2 py-0.5 rounded bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 ml-2 text-green-700 dark:text-green-300">{exp.type}</span>}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 flex flex-wrap gap-2 sm:gap-4">
                    {exp.location && (
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {exp.location}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1">
                    {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="snap-section py-16 sm:py-24 px-4 border-t border-slate-100 dark:border-[#2d2f34] bg-white dark:bg-[#18191c]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest mb-8 sm:mb-10">PORTFOLIO</h2>

          {/* Projects Subsection */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-slate-700 dark:text-slate-300">PROJECTS</h3>
            <ul className="space-y-6 sm:space-y-8">
              {(showAllProjects ? projects : projects.slice(0, 4)).map((project, idx) => (
                <li key={idx} className="pb-6 sm:pb-8 border-b border-slate-200 dark:border-slate-800 last:border-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-semibold hover:underline text-slate-900 dark:text-slate-100">
                            {project.title}
                          </a>
                        ) : (
                          <span className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</span>
                        )}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-1 text-xs rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300">{t}</span>
                        ))}
                      </div>
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 dark:text-blue-400 underline whitespace-nowrap mt-1">Open</a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            {projects.length > 4 && (
              <div className="mt-4">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 underline"
                >
                  {showAllProjects ? 'Show less projects' : `View more projects (${projects.length - 4}) →`}
                </button>
              </div>
            )}
          </div>

          {/* Clients Subsection - removed as per request */}

          {/* Qualifications Subsection */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-slate-700 dark:text-slate-300">QUALIFICATIONS</h3>
            <ul className="space-y-6 sm:space-y-8">
              {(showAllQualifications ? qualifications : qualifications.slice(0, 6)).map((qual, idx) => (
                <li key={idx} className="pb-6 sm:pb-8 border-b border-slate-200 dark:border-slate-800 last:border-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">{qual.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{qual.institution}</p>
                      <p className="text-slate-500 dark:text-slate-500 text-xs mt-1">{qual.period}</p>
                      {qual.credentialId && (
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Credential ID: {qual.credentialId}</p>
                      )}
                    </div>
                    <span className="px-2 py-1 text-xs rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 whitespace-nowrap ml-4">{qual.type}</span>
                  </div>
                </li>
              ))}
            </ul>
            {qualifications.length > 6 && (
              <div className="mt-4">
                <button
                  onClick={() => setShowAllQualifications(!showAllQualifications)}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 underline"
                >
                  {showAllQualifications ? 'Show less qualifications' : `View more qualifications (${qualifications.length - 6}) →`}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Writings Section */}
      <section id="writings" className="snap-section py-16 sm:py-24 px-4 border-t border-slate-100 dark:border-[#2d2f34] bg-white dark:bg-[#18191c]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-widest">WRITINGS</h2>
            <Link
              to="/writings"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 underline transition-colors duration-200"
            >
              View All →
            </Link>
          </div>

          <ul className="space-y-6 sm:space-y-8">
            {featuredWritings.map((w, idx) => (
              <li key={idx} className="border-b border-slate-200 dark:border-slate-800 pb-4 sm:pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {w.link.startsWith('/') ? (
                        <Link to={w.link} className="text-base sm:text-lg font-semibold hover:underline text-slate-900 dark:text-slate-100">{w.title}</Link>
                      ) : (
                        <a href={w.link} className="text-base sm:text-lg font-semibold hover:underline text-slate-900 dark:text-slate-100" target="_blank" rel="noopener noreferrer">{w.title}</a>
                      )}
                      <span className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-700">
                        {w.type}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{w.excerpt}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <Link
              to="/writings"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 underline"
            >
              View all writings →
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="snap-section py-16 sm:py-24 px-4 border-t border-slate-100 dark:border-[#2d2f34] bg-white dark:bg-[#18191c]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest mb-8 sm:mb-10">VOLUNTEERING</h2>
          <div className="space-y-8 sm:space-y-10">
            {volunteering.map((vol, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 border-b border-slate-100 dark:border-slate-800 pb-6 sm:pb-8">
                <img src={vol.image} alt={vol.org} className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 self-start" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100">{vol.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ml-2 text-slate-700 dark:text-slate-300">{vol.org}</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 flex flex-wrap gap-2 sm:gap-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {vol.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1">
                    {vol.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talks Section */}
      <section id="talks" className="snap-section py-16 sm:py-24 px-4 border-t border-slate-100 dark:border-[#2d2f34] bg-white dark:bg-[#18191c]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-widest text-slate-900 dark:text-slate-100">TALKS</h2>
            <Link
              to="/talks"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 underline transition-colors duration-200"
            >
              View All →
            </Link>
          </div>

          <ul className="space-y-6 sm:space-y-8">
            {featuredTalks.map((talk, idx) => (
              <li key={idx} className="border-b border-slate-200 dark:border-slate-800 pb-4 sm:pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {talk.eventPage ? (
                        <a href={talk.eventPage} className="text-base sm:text-lg font-semibold hover:underline text-slate-900 dark:text-slate-100" target="_blank" rel="noopener noreferrer">{talk.title}</a>
                      ) : (
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">{talk.title}</h3>
                      )}
                      {talk.type && (
                        <span className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                          {talk.type}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-mono text-[11px] sm:text-xs">
                      {talk.event} • {talk.date} {talk.attendees && `• ${talk.attendees}`}
                    </div>
                    {talk.description && (
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{talk.description}</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* Contact Section - Modern Minimalist Theme */}
      <section
        id="contact"
        className="snap-section min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-24 border-t border-slate-100 dark:border-[#2d2f34] bg-white dark:bg-[#18191c] relative overflow-hidden"
      >
        <div className="w-full max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">

            {/* Left Column: Info & Text */}
            <div className="flex-1 space-y-8 w-full">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-widest text-slate-900 dark:text-slate-100 mb-6">LET'S CONNECT.</h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether it's a technical challenge, a product discussion, or just geeking out about audio engineering, I'm just a meeting away.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Available from 17:00 - 23:00 (UTC+7) daily</span>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-semibold tracking-wider text-slate-900 dark:text-slate-100">SOCIAL PROFILES</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="https://github.com/L1M1N4L" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm transition-all text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/jonathan-leewin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm transition-all text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    LinkedIn
                  </a>
                  <a href="https://g.dev/l1m1n4l" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm transition-all text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg>
                    Google Dev
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" /></svg>
                  Discord: <span className="text-slate-800 dark:text-slate-200 ml-1">m.liminal</span>
                </span>
              </div>
            </div>

            {/* Right Column: Outline Scheduler Form */}
            <div className="flex-1 w-full max-w-md mx-auto md:max-w-none">
              <div className="border border-slate-900 dark:border-white p-6 sm:p-8 bg-transparent">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Book a Session</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Select a convenient time for a 1-hour Google Meet call.</p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">Date</label>
                    <input
                      type="date"
                      id="meetingDate"
                      className="w-full bg-transparent border border-slate-300 dark:border-slate-700 rounded-none px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white focus:border-slate-900 dark:focus:border-white transition-all transition-colors"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">Time Slot</label>
                    <div className="relative">
                      <select
                        id="meetingTime"
                        className="w-full bg-transparent border border-slate-300 dark:border-slate-700 rounded-none px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white focus:border-slate-900 dark:focus:border-white transition-all appearance-none cursor-pointer transition-colors"
                      >
                        <option value="" className="bg-white dark:bg-slate-900">Select time</option>
                        <option value="17:00" className="bg-white dark:bg-slate-900">5:00 PM - 6:00 PM</option>
                        <option value="17:30" className="bg-white dark:bg-slate-900">5:30 PM - 6:30 PM</option>
                        <option value="20:00" className="bg-white dark:bg-slate-900">8:00 PM - 9:00 PM</option>
                        <option value="20:30" className="bg-white dark:bg-slate-900">8:30 PM - 9:30 PM</option>
                        <option value="21:00" className="bg-white dark:bg-slate-900">9:00 PM - 10:00 PM</option>
                        <option value="21:30" className="bg-white dark:bg-slate-900">9:30 PM - 10:30 PM</option>
                        <option value="22:00" className="bg-white dark:bg-slate-900">10:00 PM - 11:00 PM</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">Discussion Topic</label>
                    <div className="relative">
                      <select
                        id="meetingType"
                        className="w-full bg-transparent border border-slate-300 dark:border-slate-700 rounded-none px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white focus:border-slate-900 dark:focus:border-white transition-all appearance-none cursor-pointer transition-colors"
                      >
                        <option value="" className="bg-white dark:bg-slate-900">Select topic</option>
                        <option value="project" className="bg-white dark:bg-slate-900">Project Work</option>
                        <option value="career" className="bg-white dark:bg-slate-900">Career / Networking</option>
                        <option value="technical" className="bg-white dark:bg-slate-900">Technical Discussion</option>
                        <option value="audio" className="bg-white dark:bg-slate-900">Audio Engineering</option>
                        <option value="other" className="bg-white dark:bg-slate-900">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        const date = document.getElementById('meetingDate').value;
                        const time = document.getElementById('meetingTime').value;
                        const type = document.getElementById('meetingType').value;

                        if (!date || !time || !type) {
                          alert('Please fill in all the details before scheduling.');
                          return;
                        }

                        const selectedDate = new Date(date);
                        const dayOfWeek = selectedDate.getDay();
                        if (dayOfWeek === 0 || dayOfWeek === 6) {
                          alert('Hey! Bookings are currently only available on weekdays (Mon-Fri).');
                          return;
                        }

                        const eventDate = new Date(`${date}T${time}:00`);
                        const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000);

                        const calendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=Chat+with+L1M1N4L+-+${encodeURIComponent(type)}&dates=${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=Topic:+${encodeURIComponent(type)}%0A%0ALooking+forward+to+our+chat!&location=Google+Meet&add=your.email%40example.com`;

                        window.open(calendarUrl, '_blank');
                      }}
                      className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-none font-semibold transition-all hover:bg-slate-800 dark:hover:bg-slate-200 active:scale-[0.98]"
                    >
                      Schedule via Calendar
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-4">
                      Weekdays only • Google Meet generated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyberpunk HUD Footer Overlay */}
      <div className="hidden md:flex fixed bottom-0 left-0 w-full pointer-events-none z-50 p-4 sm:p-6 justify-between items-end font-mono text-[9px] sm:text-[10px] text-white mix-blend-difference font-bold tracking-widest leading-tight">
        {/* Left Side HUD */}

        <div className="flex gap-4">
          <div className="flex flex-col gap-1 origin-bottom-left scale-90 sm:scale-100">
            <div className="flex items-center gap-2">
              <span className="opacity-60">CLIENT:</span>
              <span>{clientName}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <span className="opacity-60">VIEWPORT:</span>
                <span>{windowSize.width}x{windowSize.height}</span>
              </div>
              <div className="flex gap-2 hidden md:flex">
                <span className="opacity-60">SCREEN:</span>
                <span>{typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : '1920x1080'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-60">DEPTH:</span>
              <span>{typeof window !== 'undefined' ? window.screen.colorDepth : 32}BIT</span>
            </div>
          </div>
        </div>

        {/* Right Side HUD */}
        <div className="flex flex-col items-end gap-1 origin-bottom-right scale-90 sm:scale-100">
          <div className="flex items-center gap-4">
            <div className="flex gap-2 hidden md:flex">
              <span className="opacity-60">UTC:</span>
              {time.toISOString().substring(11, 19)}
            </div>
            <div className="flex gap-2">
              <span className="opacity-60">LOCAL:</span>
              {time.toLocaleTimeString('en-US', { hour12: false })}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <span className="opacity-60">UNIX:</span>
              <span>{Math.floor(time.getTime() / 1000)}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <span className="opacity-60">ZONE:</span>
              <span>
                {(() => {
                  const offset = -new Date().getTimezoneOffset() / 60;
                  return `GMT${offset >= 0 ? '+' : ''}${offset}`;
                })()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-60">STATUS:</span>
              <span className="text-[#0f0] animate-pulse">●</span>
              <span>ON</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;