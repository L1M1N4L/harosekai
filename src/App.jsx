import React, { useState, useEffect } from 'react';
import MagicArea from './MagicArea';
import cafeTable from './assets/Cafe_Table_with_Terminal_LaptopStyle_Urban_0.jpg';
import sereneLandscape from './assets/Default_Create_a_serene_Japanese_animestyle_landscape_backgrou_3.jpg';
import developerSetup from './assets/developer_setup.png';
import mountainRetreat from './assets/Mountain_Retreat_Color_Them_0.jpg';
import officeAtNight from './assets/office_at_night_ins_0.jpg';
import transTelLogo from './assets/experience_logo/TransTel-03.png';
import googleLogo from './assets/experience_logo/sq-google-g-logo-update_dezeen_2364_col_0-852x852.png';
import zioncomLogo from './assets/experience_logo/logo_zioncom.png';
import binusLogo from './assets/experience_logo/-Binus-University-Bina-Nusanta_logo.webp';
import binusAsoLogo from './assets/experience_logo/Logo-Binus-aso.png';
import gdscLogo from './assets/experience_logo/gdg_logo.png';
import sheCodesLogo from './assets/experience_logo/Shecodes_logo.png';
import semestaMedikaLogo from './assets/experience_logo/logo_semesta_medika.png';

// SVG Logo Component with Cover Corp style
const CoverCorpLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="url(#logoGradient)"/>
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ECDC4"/>
        <stop offset="100%" stopColor="#44A08D"/>
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="8" fill="white" opacity="0.9"/>
    <text x="50%" y="54%" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial, sans-serif" dy=".3em" fontWeight="bold">L</text>
  </svg>
);

const projects = [
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

const clients = [
  {
    name: 'TransTel Communications, Inc.',
    logo: transTelLogo,
    description: 'Telecommunications company specializing in VoIP and PABX systems.',
    projects: [
      {
        title: 'Company Website Redesign',
        description: 'Redesigned and modernized the company website, increasing user engagement by 400%.',
        tech: ['React', 'Node.js', 'UI/UX'],
        link: 'https://transtelindonesia.co.id/',
      },
      {
        title: 'HyperTerminal PABX Interface',
        description: 'Developed HyperTerminal, a Java-based PABX interface for system management. (Confidential - source code cannot be disclosed)',
        tech: ['Java', 'PABX', 'System Integration'],
        link: null,
      },
      {
        title: 'VoIP Billing System',
        description: 'Built an automated VoIP billing system using Java and Python. (Confidential - source code cannot be disclosed)',
        tech: ['Java', 'Python', 'Billing System'],
        link: null,
      }
    ]
  },
  {
    name: 'Semesta Medika',
    logo: semestaMedikaLogo,
    description: 'Healthcare platform providing comprehensive medical services and patient management.',
    projects: [
      {
        title: 'Main Website',
        description: 'Modern, responsive website for Semesta Medika with comprehensive information about medical services and facilities.',
        tech: ['React', 'Node.js', 'UI/UX', 'Healthcare'],
        link: 'https://semsestamedikamakmur.com/',
      },
      {
        title: 'Help Desk & Ticketing System',
        description: 'Comprehensive help desk and ticketing system for managing customer support requests and service inquiries.',
        tech: ['React', 'Node.js', 'Database', 'Ticketing System'],
        link: 'https://wads-frontend-alpha.vercel.app/',
      }
    ]
  },
  {
    name: 'Zioncom Technology Ltd',
    logo: zioncomLogo,
    description: 'Technology company focused on security and surveillance systems.',
    projects: [
      {
        title: 'Real-time People Detection System',
        description: 'Built real-time people detection with OpenCV + Python for security monitoring. (Closed source - government requirements)',
        tech: ['Python', 'OpenCV', 'Computer Vision'],
        link: null,
      },
      {
        title: 'Automated Security Monitoring',
        description: 'Integrated ML, DVR systems, and Arduino for automated security monitoring. (Closed source - government requirements)',
        tech: ['Machine Learning', 'DVR', 'Arduino'],
        link: null,
      },
      {
        title: 'Military Security Systems',
        description: 'Confidential military-grade security and surveillance systems (details cannot be disclosed).',
        tech: ['Confidential', 'Military', 'Security'],
        link: null,
      }
    ]
  }
];

const writings = [
  {
    title: 'A Guide to Learning Japanese',
    excerpt: 'Compiled a structured, web-based guide for independent Japanese learners, covering grammar, vocabulary, usage examples, and cultural insights.',
    link: 'https://l1m1n4l.github.io/A-guide-to-learning-Japanese/',
  },
  {
    title: 'COMP6210001 - Ethical Hacking Blog',
    excerpt: 'A comprehensive blog covering cybersecurity fundamentals, penetration testing, OSINT techniques, and ethical hacking methodologies. Features weekly posts on Linux fundamentals, target scoping, Google Fu, and security assessment procedures.',
    link: 'https://comp6210001.wordpress.com',
  },
];

const experience = [
  {
    title: 'Software Engineer',
    company: 'TransTel Communications, Inc.',
    type: 'Contract',
    location: 'United States · Hybrid',
    period: 'Jun 2023 – Present',
    image: transTelLogo,
    bullets: [
      'Redesigned and modernized the company website, increasing user engagement by 400%.',
      'Developed HyperTerminal, a Java-based PABX interface.',
      'Built an automated VoIP billing system using Java and Python.'
    ]
  },
  {
    title: 'Community Organizer',
    company: 'Google',
    type: 'Contract',
    period: 'Oct 2024 – Present',
    location: 'Jakarta, Indonesia',
    image: googleLogo,
    bullets: [
      'Organize and manage GDG on Campus initiatives across universities.',
      'Lead technical workshops, bootcamps, and developer events to promote the adoption of Google technologies.',
      'Mentor student leaders, coordinate with Google teams, and grow local developer ecosystems.',
      'Serve as a key DevRel bridge between Google and the academic developer community.'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'Zioncom Technology Ltd',
    location: 'Jakarta, Indonesia',
    period: 'Apr 2023 – Jun 2023',
    image: zioncomLogo,
    bullets: [
      'Built real-time people detection with OpenCV + Python.',
      'Integrated ML, DVR systems, and Arduino for automated security monitoring.'
    ]
  },
  {
    title: 'Teaching Assistant – Algorithm & Programming (COMP6047001)',
    company: 'BINUS University',
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
    title: 'Subject Matter Expert – Python & UI/UX',
    company: 'BINUS University',
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
    title: 'Technical Developer (Past Role)',
    org: 'Google Developer Student Clubs (GDSC)',
    period: 'Oct 2023 – Oct 2024',
    image: gdscLogo,
    bullets: [
      'Hosted workshops on Flutter, Firebase, and ML.',
      'Built demo apps and learning resources for student developer growth.'
    ]
  },
  {
    title: 'Administrator',
    org: 'SheCodes Society',
    period: 'Jan 2025 – Present',
    image: sheCodesLogo,
    bullets: [
      'Organized events promoting women in tech in collaboration with GDG Campus Indonesia.',
      'Created inclusive workshops and mentorship opportunities for women in STEM.'
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
    output: `Software Engineer @ TransTel Communications, Inc.\n  - Jun 2023–Present\n  Redesigned company website, built PABX interface, VoIP billing\nCommunity Organizer @ Google DevRel\n  - Oct 2024–Present\n  GDG on Campus, workshops, DevRel bridge\nIntern @ Zioncom Technology Ltd\n  - Apr 2023–Jun 2023\n  Real-time people detection, ML, Arduino\nTA @ BINUS University\n  - Aug 2024–Jan 2025\n  Python, data structures, mentoring`,
    sub: '',
  },
  {
    prompt: 'skills',
    output: `Languages: Python, Java, C++, JS\nFrameworks: React, Node.js, Firebase\nSystems: Linux, Compiler Design, OS\nOther: UI/UX, DevRel, Japanese (N1)`,
    sub: '',
  },
  {
    prompt: 'volunteering',
    output: `GDSC Technical Developer\n  - Oct 2023–Oct 2024\n  Flutter, Firebase, ML workshops\nSheCodes Society Admin\n  - Jan 2025–Present\n  Women in tech, inclusive events`,
    sub: '',
  },
  {
    prompt: 'contact',
    output: `Email: your.email@example.com\nLinkedIn: linkedin.com/in/yourprofile\nGitHub: github.com/L1M1N4L`,
    sub: '',
  },
  {
    prompt: 'ls',
    output: `portfolio/          projects/          skills/            experience/\nvolunteering/       writings/          contact/           README.md\nl1m1n4l.exe         debug.log`,
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
      // 80px is a good threshold for when to change nav color
      setScrolled(window.scrollY > window.innerHeight * 0.7);
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
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-mono">
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
        className={`w-full top-0 left-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'fixed bg-white/90 border-b border-slate-200 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80'
            : 'fixed bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
          <h1 className="text-xl sm:text-2xl font-bold tracking-widest">
            <a
              href="#home"
              className={`hover:underline transition-colors duration-150 ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              L1M1N4L
            </a>
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <MagicArea className="flex gap-6 lg:gap-10" highlightClass="bg-white/80 ring-1 ring-slate-300/40">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-2 py-1 text-sm lg:text-base font-medium transition-colors duration-150
                    ${active === link.id
                      ? scrolled
                        ? 'text-slate-900 font-bold is-magic-active'
                        : 'text-white font-bold is-magic-active'
                      : scrolled
                        ? 'text-slate-800 hover:text-slate-900'
                        : 'text-slate-200 hover:text-white'}`}
                  aria-current={active === link.id ? 'page' : undefined}
                  onClick={() => setActive(link.id)}
                >
                  {link.label}
                </a>
              ))}
            </MagicArea>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
              scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              if (mobileMenu) {
                if (mobileMenu.classList.contains('hidden')) {
                  // Show menu with animation
                  mobileMenu.classList.remove('hidden');
                  setTimeout(() => {
                    mobileMenu.style.maxHeight = '200px';
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
        
        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu" 
          className="hidden md:hidden bg-white/95 backdrop-blur-sm border-b border-slate-200 transform transition-all duration-300 ease-in-out origin-top"
          style={{maxHeight: '0px', opacity: '0'}}
        >
          <div className="px-4 py-2 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105
                  ${active === link.id
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'}`}
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
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-0 bg-white relative"
        style={{
          backgroundImage: `url(${heroBackgrounds[currentBgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" style={{zIndex: 1}} />
        <div className="w-full flex flex-col items-center justify-center relative z-10">
          <div
            className={`w-full max-w-sm sm:max-w-md lg:max-w-xl rounded-xl shadow-lg p-0 mb-6 sm:mb-10 font-mono text-left relative overflow-hidden group ${currentTheme.bg}`}
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
                style={{fontFamily: 'inherit'}}
                onClick={() => setInteractiveMode(!interactiveMode)}
                title={interactiveMode ? "Exit interaction mode" : "Enter interaction mode"}
              >
                {interactiveMode ? 'Exit Mode' : 'Interaction Mode'}
              </button>
            </div>
            <div className="px-4 sm:px-6 py-4 sm:py-6 max-h-64 sm:max-h-80 lg:max-h-96 overflow-y-scroll scrollbar-hide">
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
            </div>
          </div>
          <a href="#portfolio" className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-slate-800 text-green-300 font-mono text-xs sm:text-sm tracking-wider rounded border border-slate-700 hover:bg-slate-700 hover:text-green-200 transition-all duration-200 shadow-md">$ view_my_portfolio</a>
        </div>
        
        {/* Settings Button */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 sm:p-3 bg-slate-800 text-slate-300 rounded-lg border border-slate-700 hover:bg-slate-700 transition-all duration-200 hover:scale-110 transform"
            title="Settings"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          
          {/* Settings Modal */}
          {showSettings && (
            <div 
              className="absolute bottom-16 right-0 bg-slate-800/95 border border-slate-700 rounded-lg p-3 sm:p-4 backdrop-blur-sm min-w-48 sm:min-w-56 shadow-xl transform transition-all duration-300 ease-out origin-bottom-right"
              style={{
                animation: 'modalSlideIn 0.3s ease-out'
              }}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <h3 className="text-slate-200 font-semibold text-xs sm:text-sm">Terminal Theme</h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-slate-400 hover:text-slate-200 transition-all duration-200 hover:scale-110 transform"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  {Object.entries(terminalThemes).map(([themeName], index) => (
                    <button
                      key={themeName}
                      onClick={() => setTerminalTheme(themeName)}
                      className={`w-full flex items-center justify-between p-2 sm:p-3 rounded-lg border transition-all duration-200 transform hover:scale-105 ${
                        terminalTheme === themeName
                          ? 'border-green-500 bg-green-500/10'
                          : 'border-slate-600 hover:border-slate-500 hover:bg-slate-700/50'
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: 'themeOptionSlideIn 0.3s ease-out forwards'
                      }}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="flex space-x-1">
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${themeName === 'dracula' ? 'bg-purple-500' : themeName === 'gruvbox' ? 'bg-green-500' : themeName === 'monokai' ? 'bg-pink-500' : themeName === 'nord' ? 'bg-blue-500' : 'bg-slate-500'}`}></div>
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${themeName === 'dracula' ? 'bg-blue-500' : themeName === 'gruvbox' ? 'bg-yellow-500' : themeName === 'monokai' ? 'bg-orange-500' : themeName === 'nord' ? 'bg-cyan-500' : 'bg-slate-400'}`}></div>
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${themeName === 'dracula' ? 'bg-green-500' : themeName === 'gruvbox' ? 'bg-red-500' : themeName === 'monokai' ? 'bg-yellow-500' : themeName === 'nord' ? 'bg-indigo-500' : 'bg-slate-300'}`}></div>
                        </div>
                        <span className={`text-xs sm:text-sm font-medium capitalize transition-all duration-200 ${
                          terminalTheme === themeName ? 'text-green-400' : 'text-slate-300'
                        }`}>
                          {themeName}
                        </span>
                      </div>
                      {terminalTheme === themeName && (
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 transition-all duration-200 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
                {/* Background Selector */}
                <div className="mt-4 flex flex-col items-center">
                  <h4 className="text-slate-200 font-semibold text-xs sm:text-sm mb-2">Homepage Background</h4>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentBgIndex((currentBgIndex - 1 + heroBackgrounds.length) % heroBackgrounds.length)}
                      className="p-1 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-200 disabled:opacity-50"
                      aria-label="Previous background"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <div className={`w-24 h-16 sm:w-32 sm:h-20 rounded border-2 transition-all duration-200 overflow-hidden flex items-center justify-center ${'border-green-400 ring-2 ring-green-300 scale-105'}`}
                      style={{background: `url(${heroBackgrounds[currentBgIndex]}) center/cover no-repeat`}}
                    >
                      <span className="sr-only">Current background</span>
                    </div>
                    <button
                      onClick={() => setCurrentBgIndex((currentBgIndex + 1) % heroBackgrounds.length)}
                      className="p-1 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-200 disabled:opacity-50"
                      aria-label="Next background"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                  <div className="text-xs text-slate-400 mt-2">{currentBgIndex + 1} / {heroBackgrounds.length}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-16 sm:py-24 px-4 border-t border-slate-100 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest mb-8 sm:mb-10 text-center">PROFESSIONAL EXPERIENCE</h2>
          <div className="space-y-8 sm:space-y-10">
            {experience.map((exp, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 border-b border-slate-100 pb-6 sm:pb-8">
                <img src={exp.image} alt={exp.company} className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded bg-slate-100 border border-slate-200 self-start" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-base sm:text-lg">{exp.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 border border-slate-200 ml-2">{exp.company}</span>
                    {exp.type && <span className="text-xs px-2 py-0.5 rounded bg-green-100 border border-green-200 ml-2">{exp.type}</span>}
                  </div>
                  <div className="text-xs text-slate-500 mb-2 flex flex-wrap gap-2 sm:gap-4">
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
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-24 px-4 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest mb-8 sm:mb-10 text-center">PORTFOLIO</h2>
          
          {/* Projects Subsection */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center text-slate-700">PROJECTS</h3>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg p-4 sm:p-6 flex flex-col gap-3 hover:shadow-md transition-shadow bg-white">
                <h3 className="text-base sm:text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs border border-slate-300 rounded bg-slate-50 text-slate-700">{t}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 underline self-start">View Project</a>
                )}
              </div>
            ))}
            </div>
          </div>

          {/* Clients Subsection */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center text-slate-700">CLIENTS & PROJECTS</h3>
            <div className="space-y-12 sm:space-y-16">
              {clients.map((client, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg p-6 sm:p-8 bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <img src={client.logo} alt={client.name} className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded bg-slate-100 border border-slate-200" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{client.name}</h3>
                      <p className="text-slate-600 text-sm sm:text-base">{client.description}</p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {client.projects.map((project, projectIdx) => (
                      <div key={projectIdx} className="border border-slate-200 rounded-lg p-4 sm:p-6 bg-slate-50">
                        <h4 className="text-base sm:text-lg font-semibold mb-2">{project.title}</h4>
                        <p className="text-slate-600 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-2 py-1 text-xs border border-slate-300 rounded bg-white text-slate-700">{tech}</span>
                          ))}
                        </div>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 underline">View Project</a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Qualifications Subsection */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center text-slate-700">QUALIFICATIONS</h3>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {qualifications.map((qual, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg p-4 sm:p-6 bg-white hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">{qual.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded ${
                      qual.type === 'Degree' 
                        ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                        : 'bg-green-100 text-green-700 border border-green-200'
                    }`}>
                      {qual.type}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-2">{qual.institution}</p>
                  <p className="text-slate-500 text-xs mb-3">{qual.period}</p>
                  {qual.credentialId && (
                    <p className="text-xs text-slate-400">Credential ID: {qual.credentialId}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Writings Section */}
      <section id="writings" className="py-16 sm:py-24 px-4 border-t border-slate-100 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest mb-8 sm:mb-10 text-center">WRITINGS</h2>
          <ul className="space-y-6 sm:space-y-8">
            {writings.map((w, idx) => (
              <li key={idx} className="border-b border-slate-200 pb-4 sm:pb-6">
                <a href={w.link} className="text-base sm:text-lg font-semibold hover:underline">{w.title}</a>
                <p className="text-slate-600 text-sm mt-2">{w.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="py-16 sm:py-24 px-4 border-t border-slate-100 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest mb-8 sm:mb-10 text-center">VOLUNTEERING</h2>
          <div className="space-y-8 sm:space-y-10">
            {volunteering.map((vol, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 border-b border-slate-100 pb-6 sm:pb-8">
                <img src={vol.image} alt={vol.org} className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded bg-slate-100 border border-slate-200 self-start" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-base sm:text-lg">{vol.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 border border-slate-200 ml-2">{vol.org}</span>
                  </div>
                  <div className="text-xs text-slate-500 mb-2 flex flex-wrap gap-2 sm:gap-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {vol.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    {vol.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="min-h-screen flex flex-col items-center justify-center px-4 py-0 border-t border-slate-100 bg-white"
      >
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest mb-8 sm:mb-10 text-center text-slate-900">CONTACT</h2>
          
          {/* Simple Contact Form */}
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">Let's Connect</h3>
              <p className="text-slate-600 text-sm">Available daily from 5:00 PM - 11:00 PM (UTC+7)</p>
            </div>
            
            {/* Meeting Scheduler */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-slate-50">
              <h4 className="text-base sm:text-lg font-medium text-slate-900 mb-4 text-center">Schedule a Meeting</h4>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-slate-700 text-sm mb-2">Date</label>
                  <input 
                    type="date" 
                    id="meetingDate"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all duration-200"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <label className="block text-slate-700 text-sm mb-2">Time</label>
                  <select 
                    id="meetingTime"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all duration-200"
                  >
                    <option value="">Select time</option>
                    <option value="17:00">5:00 PM - 6:00 PM</option>
                    <option value="17:30">5:30 PM - 6:30 PM</option>
                    <option value="20:00">8:00 PM - 9:00 PM</option>
                    <option value="20:30">8:30 PM - 9:30 PM</option>
                    <option value="21:00">9:00 PM - 10:00 PM</option>
                    <option value="21:30">9:30 PM - 10:30 PM</option>
                    <option value="22:00">10:00 PM - 11:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-slate-700 text-sm mb-2">Meeting Type</label>
                <select 
                  id="meetingType"
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all duration-200"
                >
                  <option value="">Select meeting type</option>
                  <option value="project">Project Discussion</option>
                  <option value="career">Career Chat</option>
                  <option value="technical">Technical Deep Dive</option>
                  <option value="audio">Audio Engineering</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mt-6 text-center">
                <button 
                  onClick={() => {
                    const date = document.getElementById('meetingDate').value;
                    const time = document.getElementById('meetingTime').value;
                    const type = document.getElementById('meetingType').value;
                    
                    if (!date || !time || !type) {
                      alert('Please fill in all fields');
                      return;
                    }
                    
                    // Check if it's a weekday
                    const selectedDate = new Date(date);
                    const dayOfWeek = selectedDate.getDay();
                    if (dayOfWeek === 0 || dayOfWeek === 6) {
                      alert('Meetings are only available on weekdays (Monday-Friday)');
                      return;
                    }
                    
                    // Create Google Calendar event
                    const eventDate = new Date(`${date}T${time}:00`);
                    const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000); // 1 hour later
                    
                    const calendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=Meeting+with+L1M1N4L+-+${encodeURIComponent(type)}&dates=${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=Meeting+with+L1M1N4L%0A%0AMeeting+Type:+${encodeURIComponent(type)}%0A%0APlease+join+via+Google+Meet&location=Google+Meet&add=your.email%40example.com`;
                    
                    window.open(calendarUrl, '_blank');
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 sm:px-8 py-2 sm:py-3 font-medium transition-all duration-200"
                >
                  Schedule Meeting
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-slate-500 text-xs">Weekdays only • Google Meet included • 1 hour duration</p>
              </div>
            </div>
            
            {/* Quick Contact Links */}
            <div className="grid gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a 
                href="https://github.com/L1M1N4L" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-200"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              
              <span className="flex items-center justify-center gap-3 bg-slate-50 text-slate-600 px-4 sm:px-6 py-3 sm:py-4 rounded-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span>Discord: m.liminal</span>
              </span>
            </div>
            
            {/* Simple Message */}
            <div className="text-center">
              <p className="text-slate-600 text-sm mb-4">
                Feel free to reach out for collaborations, technical discussions, or just to say hello!
              </p>
              <p className="text-slate-500 text-xs">
                Languages: English, Chinese, Indonesian, Japanese
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 text-center text-xs text-slate-500 bg-white">
        &copy; {new Date().getFullYear()} L1M1N4L. All rights reserved.
      </footer>
    </div>
  );
};

export default App;