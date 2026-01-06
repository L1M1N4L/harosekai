import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Talks = () => {
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState([]);

  const talks = [
    {
      title: 'Beyond REST: Exploring Modern API Protocols',
      event: 'GDGoC Talk Series #3',
      date: 'Jul 2025',
      type: 'Technical Talk',
      description: 'Moderated a talk featuring Kostya Tysmbal from Google on modern API protocols.',
      attendees: '200+',
      slides: 'https://docs.google.com/presentation/d/1lzenGtBqrcK_3CSNr9z_LvBAtNKvYeKANo7i7DeDJDc/edit?usp=sharing',
      recording: 'https://www.youtube.com/watch?v=ojVh14Hzqfc&t=201s',
      eventPage: 'https://gdg.community.dev/e/m28jr8/',
    },
    {
      title: 'Neural Talks: AI Trends and Career Opportunities',
      event: 'Tech Talk by Experts',
      date: 'Mar 2025',
      type: 'Panel Discussion',
      description: 'Co-moderated a panel on AI trends with experts from United Tractors, CMU, and Firebase.',
      attendees: '120+',
      slides: 'https://docs.google.com/presentation/d/1id1hUdvjHDMQPFj-7ZSafDI3Sjr76Gsnt5YtMWSFIzw/edit?usp=sharing',
      recording: null,
      eventPage: 'https://gdg.community.dev/e/m98md9/',
    },
    {
      title: 'Build with AI: From Ideas to Impact',
      event: 'Google Developer Groups',
      date: 'Feb 2025',
      type: 'Workshop',
      description: 'Workshop on winning APAC Solution Challenge using AI tools.',
      attendees: '60+',
      slides: 'https://docs.google.com/presentation/d/1sQmxACh3P4mS_oxZCAMtyGX7aUATPtNBCeidEoM6ZRc/edit?usp=sharing',
      recording: null,
      eventPage: 'https://gdg.community.dev/e/m6tv27/',
    },
    {
      title: 'Google Summer of Code Information Session',
      event: 'Google Developer Groups',
      date: 'Feb 2025',
      type: 'Info Session',
      description: 'Information session featuring Stephanie Taylor, GSoC Program Lead.',
      attendees: '150+',
      slides: null,
      recording: 'https://www.youtube.com/watch?v=GWrtJZ46V88&t',
      eventPage: 'https://gdg.community.dev/e/mbrd5t/',
    },
    {
      title: 'Data Visualization Fundamentals',
      event: 'SheCodes Workshop Series',
      date: 'Jan 2025',
      type: 'Workshop',
      description: 'Workshop on data visualization principles and Tableau implementation.',
      attendees: '40+',
      slides: null,
      recording: null,
      eventPage: 'https://www.instagram.com/p/DIdn-bMTcGj/?img_index=7',
    },
    {
      title: 'TTT: Training the Trainers',
      event: 'Google Cloud',
      date: 'Nov 2025',
      type: 'Workshop',
      description: 'Google Cloud\'s TTT program for community leaders.',
      attendees: 'Selected',
      slides: null,
      recording: null,
      eventPage: null,
    },
    {
      title: 'Building the Future Together',
      event: 'GDG on Campus',
      date: 'Oct 2024',
      type: 'Info Session',
      description: 'First official event for GDGOC 2024/2025.',
      attendees: '80+',
      slides: null,
      recording: null,
      eventPage: 'https://gdg.community.dev/events/details/google-gdg-on-campus-binus-university-international-jakarta-indonesia-presents-gdgoc-info-session',
    },
    {
      title: 'Flutter App Development Workshop',
      event: 'Study Jam',
      date: 'Nov 2023',
      type: 'Workshop',
      description: 'Teaching participants to build a Flutter shopping app.',
      attendees: '50+',
      slides: 'https://docs.google.com/presentation/d/1IufYk2g41grk6_geMTm_4UPL5kr_eXlWuAUjyV7K1BY/edit?usp=sharing',
      recording: null,
      eventPage: null,
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    if (!loading) {
      let delay = 0;
      for (let i = 0; i <= talks.length + 1; i++) {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, i]);
        }, delay);
        delay += 60;
      }
    }
  }, [loading]);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Workshop': return 'text-[#5865F2]';
      case 'Technical Talk': return 'text-[#57F287]';
      case 'Panel Discussion': return 'text-[#EB459E]';
      default: return 'text-[#FEE75C]';
    }
  };

  // Skeleton components
  const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-slate-200 dark:bg-[#2d2f34] rounded ${className}`}></div>
  );

  const SkeletonEntry = () => (
    <div className="mb-12">
      <div className="flex items-baseline justify-between mb-2">
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-4 w-48 mb-2" />
      <Skeleton className="h-4 w-full mb-3" />
      <div className="flex gap-4">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#18191c] text-slate-900 dark:text-gray-100 font-mono transition-colors duration-300">
      {/* Header */}
      <header className="w-full top-0 left-0 z-30 fixed bg-white/95 dark:bg-[#18191c]/95 border-b border-slate-200 dark:border-[#2d2f34] backdrop-blur-xl transition-colors duration-300">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold tracking-widest">
            <Link to="/" className="text-slate-900 dark:text-white hover:text-[#5865F2] transition-colors">
              L1M1N4L
            </Link>
          </h1>
          <div className="flex items-center gap-6">
            <nav className="flex items-center text-sm text-slate-500 dark:text-gray-500">
              <Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">~</Link>
              <span className="mx-2">/</span>
              <span className="text-[#5865F2]">talks</span>
            </nav>
            <ThemeToggle className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">

          {loading ? (
            // Skeleton Loading State
            <>
              <div className="mb-16">
                <Skeleton className="h-10 w-32 mb-3" />
                <Skeleton className="h-5 w-80 mb-6" />
                <div className="flex gap-6">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>

              {[...Array(5)].map((_, i) => (
                <SkeletonEntry key={i} />
              ))}
            </>
          ) : (
            // Actual Content with Roll Animation
            <>
              {/* Header */}
              <div
                className={`mb-16 transition-all duration-500 ease-out ${visibleItems.includes(0)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
                  }`}
              >
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Talks</h1>
                <p className="text-slate-500 dark:text-gray-500">Technical talks, workshops, and presentations.</p>
                <div className="flex gap-6 mt-6 text-sm">
                  <span className="text-slate-400 dark:text-gray-400"><span className="text-slate-900 dark:text-white font-medium">{talks.length}</span> talks</span>
                  <span className="text-slate-400 dark:text-gray-400"><span className="text-slate-900 dark:text-white font-medium">700+</span> attendees</span>
                </div>
              </div>

              {/* Talks List */}
              <div className="space-y-12">
                {talks.map((talk, idx) => (
                  <article
                    key={idx}
                    className={`group transition-all duration-500 ease-out ${visibleItems.includes(idx + 1)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                      }`}
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <h3 className="text-lg text-slate-900 dark:text-white font-medium">{talk.title}</h3>
                      <span className="text-xs text-slate-400 dark:text-gray-600 whitespace-nowrap">{talk.date}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-slate-500 dark:text-gray-500">{talk.event}</span>
                      <span className="text-slate-300 dark:text-gray-600">·</span>
                      <span className={`text-xs ${getTypeColor(talk.type)}`}>{talk.type}</span>
                      <span className="text-slate-300 dark:text-gray-600">·</span>
                      <span className="text-xs text-slate-400 dark:text-gray-600">{talk.attendees}</span>
                    </div>

                    <p className="text-slate-600 dark:text-gray-500 text-sm leading-relaxed mb-3">{talk.description}</p>

                    {/* Links */}
                    <div className="flex gap-4 text-xs">
                      {talk.eventPage && (
                        <a href={talk.eventPage} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                          Event ↗
                        </a>
                      )}
                      {talk.slides && (
                        <a href={talk.slides} target="_blank" rel="noopener noreferrer" className="text-[#5865F2] hover:underline">
                          Slides
                        </a>
                      )}
                      {talk.recording && (
                        <a href={talk.recording} target="_blank" rel="noopener noreferrer" className="text-[#ED4245] hover:underline">
                          Watch
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              {/* Back Link */}
              <div
                className={`mt-20 pt-8 border-t border-slate-200 dark:border-[#2d2f34] transition-all duration-500 ease-out ${visibleItems.includes(talks.length + 1)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
                  }`}
              >
                <Link to="/" className="text-sm text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                  ← Back
                </Link>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-slate-400 dark:text-gray-600">
        © {new Date().getFullYear()} L1M1N4L
      </footer>
    </div>
  );
};

export default Talks;
