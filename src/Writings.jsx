import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import paperMusicSocial from './assets/music_popularity_paper.pdf';
import paperMonteCarlo from './assets/monte_carlo_paper.pdf';
import paperCognitiveAI from './assets/cognitive_ai_paper.pdf';

const Writings = () => {
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Simulate loading
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(loadTimer);
  }, []);

  // Stagger animation for items
  useEffect(() => {
    if (!loading) {
      const totalItems = blogs.length + academia.length + 6;
      let delay = 0;
      for (let i = 0; i < totalItems; i++) {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, i]);
        }, delay);
        delay += 70;
      }
    }
  }, [loading]);

  const blogs = [
    {
      title: 'COMP6210001 - Ethical Hacking Blog',
      excerpt: 'A comprehensive blog covering cybersecurity fundamentals, penetration testing, OSINT techniques, and ethical hacking methodologies.',
      link: 'https://comp6210001.wordpress.com',
      type: 'Cybersecurity',
      lastUpdated: 'Dec 2024',
    },
    {
      title: 'A Guide to Learning Japanese',
      excerpt: 'Structured guide for independent Japanese learners, covering grammar, vocabulary, and cultural insights.',
      link: '/guide-to-learning-japanese',
      type: 'Education',
      lastUpdated: 'Sep 2024',
    },
  ];

  const academia = [
    {
      title: 'Cognitive AI Approaches to Adaptive Scheduling in Braille Memory Retention',
      excerpt: 'Designed and evaluated a hybrid SM-2 + ML scheduling algorithm, benchmarking long-term retention, review efficiency, and system cost across a 365-day simulation.',
      link: paperCognitiveAI,
      type: 'Research Paper',
      year: '2025',
    },
    {
      title: 'Music Popularity and Social Media',
      excerpt: 'Analysis of how social media signals correlate with music popularity trajectories.',
      link: paperMusicSocial,
      type: 'Research Paper',
      year: '2025',
    },
    {
      title: 'Monte Carlo Simulation of Annealing and Grain Growth',
      excerpt: 'Computational study of microstructure evolution using Monte Carlo methods.',
      link: paperMonteCarlo,
      type: 'Conference Paper',
      year: '2024',
    },
  ];

  // Skeleton loader component
  const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-slate-200 dark:bg-[#2d2f34] rounded ${className}`}></div>
  );

  const SkeletonEntry = () => (
    <div className="mb-10">
      <Skeleton className="h-6 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-1/4" />
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
              <span className="text-[#5865F2]">writings</span>
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
                <Skeleton className="h-10 w-48 mb-3" />
                <Skeleton className="h-5 w-96" />
              </div>

              <div className="mb-16">
                <Skeleton className="h-4 w-20 mb-8" />
                <SkeletonEntry />
                <SkeletonEntry />
              </div>

              <div className="border-t border-slate-200 dark:border-[#2d2f34] my-12"></div>

              <div>
                <Skeleton className="h-4 w-24 mb-8" />
                <SkeletonEntry />
                <SkeletonEntry />
              </div>
            </>
          ) : (
            // Actual Content with Roll Animation
            <>
              {/* Header */}
              <div
                className={`mb-16 transition-all duration-500 ${visibleItems.includes(0)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                  }`}
              >
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Writings</h1>
                <p className="text-slate-500 dark:text-gray-500">Technical writings, research papers, and educational content.</p>
              </div>

              {/* Blogs Section */}
              <section className="mb-16">
                <h2
                  className={`text-xs text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-8 transition-all duration-500 ${visibleItems.includes(1)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                    }`}
                >
                  Blogs
                </h2>

                <div className="space-y-10">
                  {blogs.map((blog, idx) => (
                    <article
                      key={idx}
                      className={`group transition-all duration-500 ${visibleItems.includes(idx + 2)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                        }`}
                    >
                      <div className="flex items-baseline justify-between gap-4 mb-2">
                        {blog.link.startsWith('/') ? (
                          <Link to={blog.link} className="text-lg text-slate-900 dark:text-white font-medium hover:text-[#5865F2] transition-colors">
                            {blog.title}
                          </Link>
                        ) : (
                          <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-lg text-slate-900 dark:text-white font-medium hover:text-[#5865F2] transition-colors">
                            {blog.title}
                          </a>
                        )}
                        <span className="text-xs text-slate-400 dark:text-gray-600 whitespace-nowrap">{blog.lastUpdated}</span>
                      </div>
                      <p className="text-slate-600 dark:text-gray-500 text-sm leading-relaxed mb-2">{blog.excerpt}</p>
                      <span className="text-xs text-slate-400 dark:text-gray-600">{blog.type}</span>
                    </article>
                  ))}
                </div>
              </section>

              {/* Divider */}
              <div
                className={`border-t border-slate-200 dark:border-[#2d2f34] my-12 transition-all duration-500 ${visibleItems.includes(blogs.length + 2)
                  ? 'opacity-100'
                  : 'opacity-0'
                  }`}
              ></div>

              {/* Academia Section */}
              <section>
                <h2
                  className={`text-xs text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-8 transition-all duration-500 ${visibleItems.includes(blogs.length + 3)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                    }`}
                >
                  Research
                </h2>

                <div className="space-y-10">
                  {academia.map((paper, idx) => (
                    <article
                      key={idx}
                      className={`group transition-all duration-500 ${visibleItems.includes(idx + blogs.length + 4)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                        }`}
                    >
                      <div className="flex items-baseline justify-between gap-4 mb-2">
                        <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-lg text-slate-900 dark:text-white font-medium hover:text-[#57F287] transition-colors">
                          {paper.title}
                        </a>
                        <span className="text-xs text-slate-400 dark:text-gray-600 whitespace-nowrap">{paper.year}</span>
                      </div>
                      <p className="text-slate-600 dark:text-gray-500 text-sm leading-relaxed mb-2">{paper.excerpt}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400 dark:text-gray-600">{paper.type}</span>
                        <span className="text-xs text-[#57F287]">↓ PDF</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Back Link */}
              <div
                className={`mt-20 pt-8 border-t border-slate-200 dark:border-[#2d2f34] transition-all duration-500 ${visibleItems.includes(blogs.length + academia.length + 4)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
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

export default Writings;
