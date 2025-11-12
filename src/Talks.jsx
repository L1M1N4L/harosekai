import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import gdgLogo from './assets/experience_logo/gdg_logo.png';
import sheCodesLogo from './assets/experience_logo/Shecodes_logo.png';
import placeholderLogo from './assets/placeholder-logo.png';
import tttImage from './assets/events/TTT.jpg';
import restlogo from './assets/events/rest.avif';
import neuraltalks from './assets/events/Neural Talks _ GDGoC TUP x BINTER x UNJ_Zp6mc5e.webp'
import buildwithai from './assets/events/BuildWAI.png'
import gsoc from './assets/events/GSOC.png'
import shecodews from './assets/events/SheCodes.jpg'
const Talks = () => {
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState([]);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Simulate loading time for premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Show all elements immediately after loading
  useEffect(() => {
    if (loading) return;

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => {
      const delay = parseInt(el.dataset.delay) || 0;
      setTimeout(() => {
        setVisibleItems(prev => [...prev, el.id]);
      }, delay);
    });
  }, [loading]);

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 sm:p-6 bg-white dark:bg-slate-800 animate-pulse">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <div className="h-5 bg-slate-200 rounded w-3/4"></div>
          <div className="h-5 bg-slate-200 rounded w-20"></div>
          <div className="h-5 bg-slate-200 rounded w-16"></div>
        </div>
        <div className="flex gap-4">
          <div className="h-3 bg-slate-200 rounded w-24"></div>
          <div className="h-3 bg-slate-200 rounded w-32"></div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-slate-200 rounded w-full"></div>
          <div className="h-3 bg-slate-200 rounded w-5/6"></div>
          <div className="h-3 bg-slate-200 rounded w-4/6"></div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="h-4 bg-slate-200 rounded w-16"></div>
          <div className="h-4 bg-slate-200 rounded w-20"></div>
          <div className="h-4 bg-slate-200 rounded w-14"></div>
        </div>
        <div className="h-4 bg-slate-200 rounded w-24 self-start"></div>
      </div>
    </div>
  );

  // Loading overlay
  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono">
        {/* Sticky Header */}
        <header className="w-full top-0 left-0 z-30 fixed bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
            <h1 className="text-xl sm:text-2xl font-bold tracking-widest">
              <Link to="/" className="text-slate-900 dark:text-slate-100 hover:underline transition-colors duration-150">
                L1M1N4L
              </Link>
            </h1>
            
            <div className="flex items-center gap-2">
              <ThemeToggle className="text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800" />
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg transition-all duration-200 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Loading Content */}
        <main className="pt-20 bg-white dark:bg-slate-900">
          <section className="py-16 sm:py-24 px-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold tracking-widest mb-8 sm:mb-10 text-center">TALKS & PRESENTATIONS</h2>

              {/* Loading Animation */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <span className="text-slate-500 text-sm ml-2">Loading talks...</span>
                </div>
              </div>

              {/* Skeleton Cards */}
              <div className="space-y-6 sm:space-y-8">
                {[...Array(4)].map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
  const upcomingTalks = [
    
  ];

  // Helper function to parse date string and convert to sortable format
  const parseDate = (dateString) => {
    const monthNames = {
      'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
      'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
    };
    const parts = dateString.split(' ');
    if (parts.length === 2) {
      const month = monthNames[parts[0]];
      const year = parseInt(parts[1]);
      if (month && year) {
        return new Date(year, month - 1);
      }
    }
    return new Date(0); // fallback for invalid dates
  };

  const talksUnsorted = [
    {
      title: 'Beyond REST: Exploring Modern API Protocols',
      event: 'GDGoC Talk Series #3',
      date: 'July 2025',
      type: 'Technical Talk',
      description: 'Organized and moderated a technical talk featuring Kostya Tysmbal from Google, exploring modern API protocols including REST evolution, RPC for speed and security, and GraphQL with query languages, schema federation, and real-time subscriptions.',
      attendees: '200+ developers',
      location: 'Online',
      duration: '90 minutes',
      slides: 'https://docs.google.com/presentation/d/1lzenGtBqrcK_3CSNr9z_LvBAtNKvYeKANo7i7DeDJDc/edit?usp=sharing',
      recording: 'https://www.youtube.com/watch?v=ojVh14Hzqfc&t=201s',
      eventPage: 'https://gdg.community.dev/e/m28jr8/',
      tags: ['API Protocols', 'REST', 'RPC', 'GraphQL', 'Organization', 'Moderation'],
      image: restlogo,
    },
    {
      title: 'Neural Talks: AI Trends and Career Opportunities',
      event: 'Tech Talk by Experts',
      date: 'March 2025',
      type: 'Panel Discussion',
      description: 'Co-moderated a panel discussion on AI industry trends and career opportunities, featuring experts from United Tractors, Carnegie Mellon University, and Firebase. Explored practical applications of AI in various industries and career paths for students.',
      attendees: '120+ attendees',
      location: 'Online',
      duration: '3 hours',
      slides: 'https://docs.google.com/presentation/d/1id1hUdvjHDMQPFj-7ZSafDI3Sjr76Gsnt5YtMWSFIzw/edit?usp=sharing',
      recording: null,
      eventPage: 'https://gdg.community.dev/e/m98md9/',
      tags: ['AI', 'Career Development', 'Industry Trends', 'Panel Discussion', 'Machine Learning'],
      image: neuraltalks,
    },
    {
      title: 'Build with AI: From Ideas to Impact',
      event: 'Google Developer Groups',
      date: 'February 2025',
      type: 'Workshop',
      description: 'Conducted a comprehensive workshop on winning APAC Solution Challenge using AI tools. Taught participants how to build real-world projects from concept to deployment, covering ideation, development, and impact measurement.',
      attendees: '60+ participants',
      location: 'Online',
      duration: '4 hours',
      slides: 'https://docs.google.com/presentation/d/1sQmxACh3P4mS_oxZCAMtyGX7aUATPtNBCeidEoM6ZRc/edit?usp=sharing',
      recording: null,
      eventPage: 'https://gdg.community.dev/e/m6tv27/',
      tags: ['AI', 'Solution Challenge', 'Project Development', 'Google Cloud', 'Workshop'],
      image: buildwithai,
    },
    {
      title: 'Google Summer of Code Information Session',
      event: 'Google Developer Groups',
      date: 'February 2025',
      type: 'Info Session',
      description: 'Organized and moderated an exclusive information session featuring Stephanie Taylor, GSoC Program Lead, where participants learned about open source development opportunities and the application process for Google Summer of Code.',
      attendees: '150+ students',
      location: 'Online',
      duration: '90 minutes',
      slides: null,
      recording: 'https://www.youtube.com/watch?v=GWrtJZ46V88&t',
      eventPage: 'https://gdg.community.dev/e/mbrd5t/',
      tags: ['Google Summer of Code', 'Open Source', 'Organization', 'Moderation', 'GSoC'],
      image: gsoc,
    },
    {
      title: 'Data Visualization Fundamentals',
      event: 'SheCodes Workshop Series',
      date: 'January 2025',
      type: 'Workshop',
      description: 'Spoke at a hands-on workshop on data visualization principles and Tableau implementation. Taught participants to transform raw data into compelling visual stories, covering visualization types, best practices, and the "garbage in, garbage out" principle.',
      attendees: '40+ participants',
      location: 'Jakarta, Indonesia',
      duration: '3 hours',
      slides: null,
      recording: null,
      eventPage: 'https://www.instagram.com/p/DIdn-bMTcGj/?img_index=7',
      tags: ['Data Visualization', 'Tableau', 'Data Analysis', 'Workshop', 'SheCodes'],
      image: shecodews,
    },
    {
      title: 'TTT: Training the Trainers Google Cloud Workshop',
      event: 'Google',
      date: 'November 2025',
      type: 'Workshop',
      description: 'Participated in Google Cloud\'s Training the Trainers (TTT) program, a comprehensive workshop designed to equip community leaders and educators with advanced Google Cloud Platform knowledge and teaching methodologies. Covered cloud architecture, best practices, and effective training techniques for delivering technical workshops.',
      attendees: 'Selected trainers',
      location: 'Online',
      duration: 'Full day',
      slides: null,
      recording: null,
      eventPage: null,
      tags: ['Google Cloud', 'Training', 'Workshop', 'Education', 'Cloud Architecture'],
      image: tttImage,
    },
    {
      title: 'Building the Future Together',
      event: 'Google Developer Groups',
      date: 'October 2024',
      type: 'Info Session',
      description: 'Hosted the first official event for GDGOC 2024/2025, introducing new members to Google Developer Group activities and opportunities. Presented the roadmap for the academic year and recruitment for core team positions.',
      attendees: '80+ students',
      location: 'Jakarta, Indonesia',
      duration: '2 hours',
      slides: null,
      recording: null,
      eventPage: 'https://gdg.community.dev/events/details/google-gdg-on-campus-binus-university-international-jakarta-indonesia-presents-gdgoc-info-session',
      tags: ['Google Developer Group', 'Community Building', 'Leadership', 'Recruitment'],
      image: gdgLogo,
    },
    {
      title: 'Flutter App Development: Building Shopping Apps from Ground Up',
      event: 'Study Jam by Tech Devs',
      date: 'November 2023',
      type: 'Workshop',
      description: 'Led an immersive 3-hour technical workshop on Flutter development, teaching participants to build a complete shopping app from scratch. Covered Google\'s cross-platform framework, UI/UX design principles, and native compilation for mobile, web, and desktop.',
      attendees: '50+ tech enthusiasts',
      location: 'Jakarta, Indonesia',
      duration: '3 hours',
      slides: 'https://docs.google.com/presentation/d/1IufYk2g41grk6_geMTm_4UPL5kr_eXlWuAUjyV7K1BY/edit?usp=sharing',
      recording: null,
      eventPage: null,
      tags: ['Flutter', 'Mobile Development', 'Cross-Platform', 'Workshop', 'App Development'],
      image: null,
    }
  ];

  // Sort talks by date (newest first)
  const talks = talksUnsorted.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB - dateA; // descending order (newest first)
  });

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono">
      {/* Minimal Header - Only breadcrumb during loading, full navbar after */}
      <header className="w-full top-0 left-0 z-30 fixed bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
          <h1 className="text-xl sm:text-2xl font-bold tracking-widest">
              <Link to="/" className="text-slate-900 dark:text-slate-100 hover:underline transition-colors duration-150">
                L1M1N4L
              </Link>
            </h1>
            
          <div className="flex items-center gap-4">
            {/* Breadcrumb - Always visible */}
            <nav className="flex items-center">
              <div className="flex items-center space-x-2 text-sm">
                <Link to="/" className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-200">
                  Home
                </Link>
                <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-900 dark:text-slate-100 font-medium">Talks</span>
              </div>
            </nav>
            
            {/* Theme Toggle - Far Right */}
            <div className="flex items-center">
              <ThemeToggle className="text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 bg-white dark:bg-slate-900">
        {/* Talks Section */}
        <section className="py-16 sm:py-24 px-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <div 
              id="title"
              data-animate
              data-delay="0"
              className={`transition-all duration-500 ease-out ${
                visibleItems.includes('title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-widest mb-4 sm:mb-6 text-center text-slate-900 dark:text-slate-100">TALKS & PRESENTATIONS</h2>
              <p className="text-center text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto">
                Technical talks, workshops, and presentations delivered to developer communities
              </p>
            </div>

            {/* Stats */}
            <div 
              id="stats"
              data-animate
              data-delay="100"
              className={`transition-all duration-500 ease-out ${
                visibleItems.includes('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/80 rounded-xl hover:shadow-xl hover:shadow-slate-500/20 dark:hover:shadow-slate-900/40 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">{talks.length}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Talks Given</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/80 rounded-xl hover:shadow-xl hover:shadow-slate-500/20 dark:hover:shadow-slate-900/40 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">400+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Total Attendees</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/80 rounded-xl hover:shadow-xl hover:shadow-slate-500/20 dark:hover:shadow-slate-900/40 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">{upcomingTalks.length}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Upcoming</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-900/80 rounded-xl hover:shadow-xl hover:shadow-slate-500/20 dark:hover:shadow-slate-900/40 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">3</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Cities</div>
                </div>
              </div>
            </div>

            {/* Upcoming Talks */}
            {upcomingTalks.length > 0 && (
              <div 
                id="upcoming-talks"
                data-animate
                data-delay="200"
                className={`mb-16 sm:mb-20 transition-all duration-500 ease-out ${
                  visibleItems.includes('upcoming-talks') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center text-slate-900 dark:text-slate-100">UPCOMING TALKS</h3>
                <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-8">Scheduled events and future presentations</p>
                <div className="space-y-6 sm:space-y-8">
                  {upcomingTalks.map((talk, idx) => (
                    <div 
                      key={idx} 
                      id={`upcoming-talk-${idx}`}
                      data-animate
                      data-delay={250 + (idx * 100)}
                      className={`group transition-all duration-500 ease-out ${
                        visibleItems.includes(`upcoming-talk-${idx}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                    >
                      <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xl dark:shadow-slate-900/50 hover:shadow-2xl dark:hover:shadow-slate-900/70 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] backdrop-blur-sm">
                        {talk.image ? (
                          <div className="relative h-72 overflow-hidden">
                            <img 
                              src={talk.image} 
                              alt={talk.event}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className={`px-3 py-1 text-xs rounded-full font-semibold backdrop-blur-sm ${
                                  talk.status === 'Confirmed' 
                                    ? 'bg-white/20 text-white border border-white/30' 
                                    : 'bg-white/30 text-white border border-white/40'
                                }`}>
                                  {talk.status}
                                </span>
                                <span className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 font-medium">{talk.event}</span>
                              </div>
                              <h3 className="text-xl sm:text-2xl font-bold mb-2 drop-shadow-lg">{talk.title}</h3>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
                                <span className="flex items-center gap-1.5">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                  </svg>
                                  {talk.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                  </svg>
                                  {talk.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="h-72 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                            <div className="text-center p-6">
                              <div className="text-4xl mb-2">📢</div>
                              <div className="text-slate-600 dark:text-slate-400 font-medium">{talk.event}</div>
                            </div>
                          </div>
                        )}
                        <div className="p-6 relative z-10">
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{talk.description}</p>
                          {talk.eventPage && (
                            <a href={talk.eventPage} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-slate-700 dark:hover:text-slate-300 transition-all rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50">
                              Event Page
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Divider */}
            <div 
              id="divider"
              data-animate
              data-delay="400"
              className={`flex items-center justify-center mb-12 sm:mb-16 transition-all duration-500 ease-out ${
                visibleItems.includes('divider') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
              <div className="px-4 sm:px-6">
                <span className="text-slate-400 dark:text-slate-500 text-xs font-medium tracking-wider">PAST TALKS</span>
              </div>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
            </div>

            {/* Past Talks */}
            <div className="space-y-8 sm:space-y-10">
              {talks.map((talk, idx) => (
                <div 
                  key={idx} 
                  id={`past-talk-${idx}`}
                  data-animate
                      data-delay={400 + (idx * 100)}
                      className={`group transition-all duration-500 ease-out ${
                        visibleItems.includes(`past-talk-${idx}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                >
                  <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xl dark:shadow-slate-900/50 hover:shadow-2xl dark:hover:shadow-slate-900/70 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] backdrop-blur-sm">
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/0 to-slate-100/0 dark:from-slate-700/0 dark:to-slate-800/0 group-hover:from-slate-50/50 group-hover:to-slate-100/30 dark:group-hover:from-slate-700/20 dark:group-hover:to-slate-800/30 transition-all duration-500 pointer-events-none"></div>
                    
                    <div className="relative flex flex-col lg:flex-row lg:items-stretch">
                      {talk.image ? (
                        <div className="lg:w-80 lg:flex-shrink-0 relative h-72 lg:h-auto overflow-hidden bg-slate-100 dark:bg-slate-900">
                          <img 
                            src={talk.image} 
                            alt={talk.event}
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                          />
                          <div 
                            className="absolute right-0 top-0 bottom-0 w-40 pointer-events-none"
                            style={{
                            background: 'linear-gradient(to right, transparent 0%, transparent 60%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,0.5) 100%)' 
                            }}
                          ></div>
                          {/* Type badge overlay on image */}
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1.5 text-xs rounded-full font-semibold backdrop-blur-md shadow-lg ${
                              talk.type === 'Workshop' 
                                ? 'bg-blue-500/90 dark:bg-blue-600/90 text-white border border-blue-400/50' 
                                : talk.type === 'Technical Talk'
                                ? 'bg-slate-700/90 dark:bg-slate-600/90 text-white border border-slate-500/50'
                                : talk.type === 'Educational Talk'
                                ? 'bg-purple-500/90 dark:bg-purple-600/90 text-white border border-purple-400/50'
                                : 'bg-orange-500/90 dark:bg-orange-600/90 text-white border border-orange-400/50'
                            }`}>
                              {talk.type}
                            </span>
                          </div>
                        </div>
                        ) : (
                        <div className="lg:w-80 lg:flex-shrink-0 h-72 lg:h-auto bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center relative">
                          <div className="text-center p-4">
                            <div className="text-5xl mb-3 opacity-60">🎤</div>
                            <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">{talk.event}</div>
                          </div>
                          {/* Type badge on placeholder */}
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1.5 text-xs rounded-full font-semibold ${
                              talk.type === 'Workshop' 
                                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800' 
                                : talk.type === 'Technical Talk'
                                ? 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
                                : talk.type === 'Educational Talk'
                                ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                                : 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800'
                            }`}>
                              {talk.type}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex-1 p-6 lg:p-8 relative z-10">
                        <div className="mb-4">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3 leading-tight group-hover:text-slate-800 dark:group-hover:text-slate-50 transition-colors">
                            {talk.title}
                          </h3>
                          {!talk.image && (
                            <span className={`inline-block px-3 py-1.5 text-xs rounded-full font-semibold mb-3 ${
                              talk.type === 'Workshop' 
                                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800' 
                                : talk.type === 'Technical Talk'
                                ? 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
                                : talk.type === 'Educational Talk'
                                ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                                : 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800'
                            }`}>
                              {talk.type}
                            </span>
                          )}
                        </div>
                        
                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-semibold flex items-center gap-2">
                          <svg className="w-4 h-4 text-slate-500 dark:text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          {talk.event}
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">{talk.description}</p>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                          <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <svg className="w-4 h-4 text-slate-500 dark:text-slate-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-slate-700 dark:text-slate-300 font-medium truncate">{talk.date}</span>
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <svg className="w-4 h-4 text-slate-500 dark:text-slate-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-slate-700 dark:text-slate-300 font-medium truncate">{talk.location}</span>
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <svg className="w-4 h-4 text-slate-500 dark:text-slate-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-slate-700 dark:text-slate-300 font-medium truncate">{talk.attendees}</span>
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/60 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <svg className="w-4 h-4 text-slate-500 dark:text-slate-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-slate-700 dark:text-slate-300 font-medium truncate">{talk.duration}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {talk.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="px-3 py-1.5 text-xs bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/60 dark:border-slate-700/60 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                          {talk.eventPage && (
                            <a 
                              href={talk.eventPage} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Event Page
                            </a>
                          )}
                          {talk.slides && (
                            <a 
                              href={talk.slides} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              Slides
                            </a>
                          )}
                          {talk.recording && (
                            <a 
                              href={talk.recording} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                              Recording
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
        &copy; {new Date().getFullYear()} L1M1N4L. All rights reserved.
      </footer>
    </div>
  );
};

export default Talks;

