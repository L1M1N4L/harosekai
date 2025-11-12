import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import paperMusicSocial from './assets/A7_Music_Popularity_and_Social_Media (3).pdf';
import paperMonteCarlo from './assets/MonteCarloSimulationofAnnealingandGrainGrowth.pdf';

const Writings = () => {
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

  // Data arrays
  const blogs = [
    {
      title: 'COMP6210001 - Ethical Hacking Blog',
      excerpt: 'A comprehensive blog covering cybersecurity fundamentals, penetration testing, OSINT techniques, and ethical hacking methodologies. Features weekly posts on Linux fundamentals, target scoping, Google Fu, and security assessment procedures.',
      link: 'https://comp6210001.wordpress.com',
      type: 'Cybersecurity Blog',
      lastUpdated: 'December 2024',
      postCount: '15+ posts',
      tags: ['Cybersecurity', 'Ethical Hacking', 'Penetration Testing', 'OSINT'],
    },
    {
      title: 'A Guide to Learning Japanese',
      excerpt: 'Compiled a structured, web-based guide for independent Japanese learners, covering grammar, vocabulary, usage examples, and cultural insights.',
      link: '/guide-to-learning-japanese',
      type: 'Educational Blog',
      lastUpdated: 'September 2024',
      postCount: '50+ pages',
      tags: ['Japanese Education', 'Language Learning', 'Cultural Studies', 'Grammar'],
    },
  ];

  const academia = [
    {
      title: 'Music Popularity and Social Media',
      excerpt: 'An analysis of how social media signals, engagement, and platform dynamics correlate with the popularity trajectories of music and artists.',
      link: paperMusicSocial,
      type: 'Research Paper',
      published: '2025',
      pages: 'PDF',
      tags: ['Data Analysis', 'Social Media', 'Music Industry', 'Trends'],
    },
    {
      title: 'Monte Carlo Simulation of Annealing and Grain Growth',
      excerpt: 'Computational study of microstructure evolution during annealing using Monte Carlo methods, modeling grain growth and thermodynamic behavior.',
      link: paperMonteCarlo,
      type: 'Conference Paper',
      published: '2024',
      pages: 'PDF',
      tags: ['Computational Physics', 'Monte Carlo', 'Materials Science', 'Simulation'],
    },
  ];

  const technicalWritings = [
    {
      title: 'Building Scalable Backend Systems with Python',
      excerpt: 'Technical guide covering best practices for building scalable backend systems, including database optimization, caching strategies, and microservices architecture.',
      link: 'https://tech-guide.example.com/scalable-backend',
      type: 'Technical Guide',
      published: 'December 2024',
      length: '25 min read',
      tags: ['Python', 'Backend Development', 'Scalability', 'Architecture'],
    },
    {
      title: 'Firebase Integration Patterns for Cross-Platform Apps',
      excerpt: 'Comprehensive guide on integrating Firebase services in cross-platform mobile applications, covering authentication, real-time databases, and cloud functions.',
      link: 'https://firebase-guide.example.com',
      type: 'Technical Guide',
      published: 'November 2024',
      length: '20 min read',
      tags: ['Firebase', 'Mobile Development', 'Cross-Platform', 'Cloud Services'],
    },
  ];

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 sm:p-6 bg-white dark:bg-slate-800 animate-pulse">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <div className="h-5 bg-slate-200 rounded w-3/4"></div>
          <div className="h-5 bg-slate-200 rounded w-20"></div>
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
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          {/* Writings Section */}
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
                <h2 className="text-xl sm:text-2xl font-bold tracking-widest mb-8 sm:mb-10 text-center">WRITINGS & PUBLICATIONS</h2>
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
                  <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl hover:shadow-lg hover:shadow-slate-500/10 dark:hover:shadow-slate-900/20 transition-all duration-500 transform  hover:-translate-y-1 border border-slate-200/50 dark:border-slate-700/50">
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{blogs.length}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Blogs</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl hover:shadow-lg hover:shadow-slate-500/10 dark:hover:shadow-slate-900/20 transition-all duration-500 transform  hover:-translate-y-1 border border-slate-200/50 dark:border-slate-700/50">
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{academia.length}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Academic Papers</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl hover:shadow-lg hover:shadow-slate-500/10 dark:hover:shadow-slate-900/20 transition-all duration-500 transform  hover:-translate-y-1 border border-slate-200/50 dark:border-slate-700/50">
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{technicalWritings.length}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Technical Guides</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl hover:shadow-lg hover:shadow-slate-500/10 dark:hover:shadow-slate-900/20 transition-all duration-500 transform  hover:-translate-y-1 border border-slate-200/50 dark:border-slate-700/50">
                    <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">35+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Total Articles</div>
                  </div>
                </div>
              </div>

              {/* Blogs Section */}
              <div 
                id="blogs-section"
                data-animate
                data-delay="200"
                className={`mb-16 sm:mb-20 transition-all duration-500 ease-out ${
                  visibleItems.includes('blogs-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center text-slate-700 dark:text-slate-300">BLOGS</h3>
                <div className="space-y-6 sm:space-y-8">
                  {blogs.map((blog, idx) => (
                    <div 
                      key={idx} 
                      id={`blog-${idx}`}
                      data-animate
                      data-delay={250 + (idx * 100)}
                      className={`group transition-all duration-500 ease-out ${
                        visibleItems.includes(`blog-${idx}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                    >
                      <div className="relative border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-900/50 hover:shadow-xl hover:shadow-slate-500/20 dark:hover:shadow-slate-900/30 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-slate-600/5 dark:from-slate-400/5 dark:to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex flex-col gap-4">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="font-semibold text-lg sm:text-xl text-slate-900 dark:text-slate-100">{blog.title}</span>
                            <span className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full border border-slate-200 dark:border-slate-700 font-medium">
                              {blog.type}
                            </span>
                          </div>
                          <div className="text-sm text-slate-500 dark:text-slate-400 mb-3 flex flex-wrap gap-4">
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                              </svg>
                              {blog.lastUpdated}
                            </span>
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                              {blog.postCount}
                            </span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{blog.excerpt}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags.map((tag, tagIdx) => (
                              <span key={tagIdx} className="px-3 py-1 text-xs border border-slate-300 dark:border-slate-700 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">{tag}</span>
                            ))}
                          </div>
                          {blog.link.startsWith('/') ? (
                            <Link to={blog.link} className="text-sm text-blue-600 underline hover:text-blue-700 transition-colors self-start font-medium">Read Blog →</Link>
                          ) : (
                            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 underline hover:text-blue-700 transition-colors self-start font-medium">Visit Blog →</a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

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
                  <span className="text-slate-400 text-xs font-medium tracking-wider">ACADEMIA</span>
                </div>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              {/* Academia Section */}
              <div 
                id="academia-section"
                data-animate
                data-delay="500"
                className={`transition-all duration-500 ease-out ${
                  visibleItems.includes('academia-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center text-slate-700 dark:text-slate-300">ACADEMIA & RESEARCH</h3>
                <div className="space-y-6 sm:space-y-8">
                  {academia.map((paper, idx) => (
                    <div 
                      key={idx} 
                      id={`paper-${idx}`}
                      data-animate
                      data-delay={500 + (idx * 100)}
                      className={`group transition-all duration-500 ease-out ${
                        visibleItems.includes(`paper-${idx}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                    >
                      <div className="relative border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-900/50 hover:shadow-xl hover:shadow-slate-500/20 dark:hover:shadow-slate-900/30 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-slate-600/5 dark:from-slate-400/5 dark:to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex flex-col gap-4">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="font-semibold text-lg sm:text-xl text-slate-900 dark:text-slate-100">{paper.title}</span>
                            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                              paper.type === 'Research Paper'
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' 
                                : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                            }`}>
                              {paper.type}
                            </span>
                          </div>
                          <div className="text-sm text-slate-500 dark:text-slate-400 mb-3 flex flex-wrap gap-4">
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                              </svg>
                              {paper.published}
                            </span>
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                              {paper.pages}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">{paper.excerpt}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {paper.tags.map((tag, tagIdx) => (
                              <span key={tagIdx} className="px-3 py-1 text-xs border border-slate-300 rounded-full bg-slate-50 text-slate-700 font-medium">{tag}</span>
                            ))}
                          </div>
                          {paper.link && paper.link.endsWith('.pdf') ? (
                            <a href={paper.link} download className="text-sm text-blue-600 underline hover:text-blue-700 transition-colors self-start font-medium">Download PDF →</a>
                          ) : paper.link && paper.link.startsWith('/') ? (
                            <Link to={paper.link} className="text-sm text-blue-600 underline hover:text-blue-700 transition-colors self-start font-medium">Read Paper →</Link>
                          ) : (
                            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 underline hover:text-blue-700 transition-colors self-start font-medium">View Publication →</a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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

  // (Removed duplicated data array declarations below)

  return (
    <div className="min-h-screen bg-white text-slate-900 font-mono">
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
                <span className="text-slate-900 dark:text-slate-100 font-medium">Writings</span>
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
      <main className="pt-20">
        {/* Writings Section */}
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
              <h2 className="text-xl sm:text-2xl font-bold tracking-widest mb-8 sm:mb-10 text-center">WRITINGS & PUBLICATIONS</h2>
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
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl hover:shadow-lg hover:shadow-slate-500/10 dark:hover:shadow-slate-900/20 transition-all duration-500 transform  hover:-translate-y-1 border border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{blogs.length}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Blogs</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl hover:shadow-lg hover:shadow-slate-500/10 dark:hover:shadow-slate-900/20 transition-all duration-500 transform  hover:-translate-y-1 border border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{academia.length}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Academic Papers</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl hover:shadow-lg hover:shadow-slate-500/10 dark:hover:shadow-slate-900/20 transition-all duration-500 transform  hover:-translate-y-1 border border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{technicalWritings.length}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Technical Guides</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl hover:shadow-lg hover:shadow-slate-500/10 dark:hover:shadow-slate-900/20 transition-all duration-500 transform  hover:-translate-y-1 border border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">35+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Total Articles</div>
                </div>
              </div>
            </div>

            {/* Blogs Section */}
            <div 
              id="blogs-section"
              data-animate
              data-delay="200"
              className={`mb-16 sm:mb-20 transition-all duration-500 ease-out ${
                visibleItems.includes('blogs-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center text-slate-700">BLOGS</h3>
              <div className="space-y-6 sm:space-y-8">
                {blogs.map((blog, idx) => (
                  <div 
                    key={idx} 
                    id={`blog-${idx}`}
                    data-animate
                    data-delay={250 + (idx * 100)}
                    className={`group transition-all duration-500 ease-out ${
                      visibleItems.includes(`blog-${idx}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="relative border border-slate-200 rounded-xl p-6 sm:p-8 bg-gradient-to-br from-white to-slate-50/50 hover:shadow-xl hover:shadow-slate-500/20 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex flex-col gap-4">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="font-semibold text-lg sm:text-xl text-slate-900">{blog.title}</span>
                          <span className="px-3 py-1 text-xs bg-slate-100 text-slate-600 rounded-full border border-slate-200 font-medium">
                            {blog.type}
                          </span>
                        </div>
                        <div className="text-sm text-slate-500 mb-3 flex flex-wrap gap-4">
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {blog.lastUpdated}
                          </span>
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            {blog.postCount}
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{blog.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="px-3 py-1 text-xs border border-slate-300 dark:border-slate-700 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">{tag}</span>
                          ))}
                        </div>
                        {blog.link.startsWith('/') ? (
                          <Link to={blog.link} className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors self-start font-medium">Read Blog →</Link>
                        ) : (
                          <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors self-start font-medium">Visit Blog →</a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                <span className="text-slate-400 dark:text-slate-500 text-xs font-medium tracking-wider">ACADEMIA</span>
              </div>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
            </div>

            {/* Academia Section */}
            <div 
              id="academia-section"
              data-animate
              data-delay="500"
              className={`transition-all duration-500 ease-out ${
                visibleItems.includes('academia-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center text-slate-700">ACADEMIA & RESEARCH</h3>
              <div className="space-y-6 sm:space-y-8">
                {academia.map((paper, idx) => (
                  <div 
                    key={idx} 
                    id={`paper-${idx}`}
                    data-animate
                    data-delay={500 + (idx * 100)}
                    className={`group transition-all duration-500 ease-out ${
                      visibleItems.includes(`paper-${idx}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="relative border border-slate-200 rounded-xl p-6 sm:p-8 bg-gradient-to-br from-white to-slate-50/50 hover:shadow-xl hover:shadow-slate-500/20 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex flex-col gap-4">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="font-semibold text-lg sm:text-xl text-slate-900">{paper.title}</span>
                          <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                            paper.type === 'Research Paper'
                              ? 'bg-green-100 text-green-700 border border-green-200' 
                              : 'bg-purple-100 text-purple-700 border border-purple-200'
                          }`}>
                            {paper.type}
                          </span>
                        </div>
                        <div className="text-sm text-slate-500 mb-3 flex flex-wrap gap-4">
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {paper.published}
                          </span>
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            {paper.pages}
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{paper.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {paper.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="px-3 py-1 text-xs border border-slate-300 dark:border-slate-700 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">{tag}</span>
                          ))}
                        </div>
                        {paper.link.startsWith('/') ? (
                          <Link to={paper.link} className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors self-start font-medium">Read Paper →</Link>
                        ) : (
                          <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors self-start font-medium">View Publication →</a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

export default Writings;
