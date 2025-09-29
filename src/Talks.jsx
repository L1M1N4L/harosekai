import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="border border-slate-200 rounded-lg p-4 sm:p-6 bg-white animate-pulse">
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
      <div className="min-h-screen bg-white text-slate-900 font-mono">
        {/* Sticky Header */}
        <header className="w-full top-0 left-0 z-30 fixed bg-white/90 border-b border-slate-200 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
            <h1 className="text-xl sm:text-2xl font-bold tracking-widest">
              <Link to="/" className="text-slate-900 hover:underline transition-colors duration-150">
                L1M1N4L
              </Link>
            </h1>
            
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg transition-all duration-200  text-slate-900 hover:bg-slate-100"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Loading Content */}
        <main className="pt-20">
          <section className="py-16 sm:py-24 px-4 border-t border-slate-100 bg-white">
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
    {
      title: 'Machine Learning in Production',
      event: 'AI/ML Indonesia Conference',
      date: 'March 2025',
      type: 'Technical Talk',
      description: 'Scheduled to present on deploying machine learning models in production environments, covering MLOps practices and real-world case studies.',
      location: 'Jakarta, Indonesia',
      status: 'Confirmed',
      eventPage: 'https://aiml-indonesia.org/conference-2025/',
    },
    {
      title: 'Open Source Contributions Workshop',
      event: 'GDSC National Summit',
      date: 'April 2025',
      type: 'Workshop',
      description: 'Planning to conduct a workshop on contributing to open source projects, covering Git workflows, code review processes, and community engagement.',
      location: 'Bandung, Indonesia',
      status: 'Tentative',
      eventPage: 'https://gdsc.community.dev/national-summit-2025/',
    },
  ];

  const talks = [

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
    },
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
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-mono">
      {/* Minimal Header - Only breadcrumb during loading, full navbar after */}
      <header className="w-full top-0 left-0 z-30 fixed bg-white/90 border-b border-slate-200 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
          <h1 className="text-xl sm:text-2xl font-bold tracking-widest">
            <Link to="/" className="text-slate-900 hover:underline transition-colors duration-150">
              L1M1N4L
            </Link>
          </h1>
          
          {/* Breadcrumb - Always visible */}
          <nav className="flex items-center">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-slate-500 hover:text-slate-700 transition-colors duration-200">
                Home
              </Link>
              <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-900 font-medium">Talks</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Talks Section */}
        <section className="py-16 sm:py-24 px-4 border-t border-slate-100 bg-white">
          <div className="max-w-4xl mx-auto">
            <div 
              id="title"
              data-animate
              data-delay="0"
              className={`transition-all duration-500 ease-out ${
                visibleItems.includes('title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-widest mb-8 sm:mb-10 text-center">TALKS & PRESENTATIONS</h2>
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
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-lg hover:shadow-slate-500/10 transition-all duration-500 transform  hover:-translate-y-1 border border-slate-200/50">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{talks.length}</div>
                  <div className="text-sm text-slate-600 font-medium">Talks Given</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-lg hover:shadow-slate-500/10 transition-all duration-500 transform  hover:-translate-y-1 border border-slate-200/50">
                  <div className="text-3xl font-bold text-slate-900 mb-2">400+</div>
                  <div className="text-sm text-slate-600 font-medium">Total Attendees</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-lg hover:shadow-slate-500/10 transition-all duration-500 transform  hover:-translate-y-1 border border-slate-200/50">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{upcomingTalks.length}</div>
                  <div className="text-sm text-slate-600 font-medium">Upcoming</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-lg hover:shadow-slate-500/10 transition-all duration-500 transform  hover:-translate-y-1 border border-slate-200/50">
                  <div className="text-3xl font-bold text-slate-900 mb-2">3</div>
                  <div className="text-sm text-slate-600 font-medium">Cities</div>
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
                <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center text-slate-700">UPCOMING TALKS</h3>
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
                      <div className="relative border border-slate-200 rounded-xl p-6 sm:p-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex flex-col gap-4">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="font-semibold text-lg sm:text-xl text-slate-900">{talk.title}</span>
                            <span className="text-xs px-3 py-1 rounded-full bg-slate-100 border border-slate-200 font-medium">{talk.event}</span>
                            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                              talk.status === 'Confirmed' 
                                ? 'bg-green-100 text-green-700 border border-green-200' 
                                : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                            }`}>
                              {talk.status}
                            </span>
                          </div>
                          <div className="text-sm text-slate-500 mb-3 flex flex-wrap gap-4">
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                              </svg>
                              {talk.date}
                            </span>
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              {talk.location}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">{talk.description}</p>
                          {talk.eventPage && (
                            <a href={talk.eventPage} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 underline hover:text-blue-700 transition-colors self-start font-medium">Event Page →</a>
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
              <div className="flex-1 h-px bg-slate-200"></div>
              <div className="px-4 sm:px-6">
                <span className="text-slate-400 text-xs font-medium tracking-wider">PAST TALKS</span>
              </div>
              <div className="flex-1 h-px bg-slate-200"></div>
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
                  <div className="relative border border-slate-200 rounded-xl p-6 sm:p-8 bg-gradient-to-br from-white to-slate-50/50 hover:shadow-xl hover:shadow-slate-500/20 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{talk.title}</h3>
                          <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                            talk.type === 'Workshop' 
                              ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                              : talk.type === 'Technical Talk'
                              ? 'bg-green-100 text-green-700 border border-green-200'
                              : talk.type === 'Educational Talk'
                              ? 'bg-purple-100 text-purple-700 border border-purple-200'
                              : 'bg-orange-100 text-orange-700 border border-orange-200'
                          }`}>
                            {talk.type}
                          </span>
                        </div>
                        
                        <div className="text-sm sm:text-base text-slate-600 mb-4 font-medium">
                          {talk.event}
                        </div>
                        
                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">{talk.description}</p>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                          <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                            <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-slate-600 font-medium">{talk.date}</span>
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                            <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-slate-600 font-medium">{talk.location}</span>
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                            <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-slate-600 font-medium">{talk.attendees}</span>
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                            <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs text-slate-600 font-medium">{talk.duration}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {talk.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="px-3 py-1 text-xs bg-slate-100 text-slate-700 rounded-full border border-slate-200 font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {talk.eventPage && (
                            <a 
                              href={talk.eventPage} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                              </svg>
                              Event Page
                            </a>
                          )}
                          {talk.slides && (
                            <a 
                              href={talk.slides} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md"
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
                              className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md"
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
      <footer className="py-8 border-t border-slate-200 text-center text-xs text-slate-500 bg-white">
        &copy; {new Date().getFullYear()} L1M1N4L. All rights reserved.
      </footer>
    </div>
  );
};

export default Talks;

