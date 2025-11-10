import React, { useState, useEffect, useMemo, useRef } from 'react';

const CognitiveBrailleSM2 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [loading, setLoading] = useState(true);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');
  const [hoveredCard, setHoveredCard] = useState(null);

  const sectionIds = useMemo(() => ['overview', 'signals', 'pseudo', 'evaluation', 'resources'], []);
  const sectionRefs = useRef({});

  useEffect(() => {
    let loaded = false;
    const onLoad = () => {
      if (!loaded) {
        setLoading(false);
        loaded = true;
      }
    };
    window.addEventListener('load', onLoad);
    const fallback = setTimeout(onLoad, 800);
    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => setLoaderVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reading progress
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length > 0) {
        const id = visible[0].target.getAttribute('id');
        if (id) setActiveSection(id);
      }
    }, { root: null, rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] });

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const publishedDate = new Date().toISOString().slice(0, 10);

  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: 'monospace',
      lineHeight: 1.6,
      color: '#333',
      background: 'white',
      fontSize: '1.2rem',
      minHeight: '100vh'
    }}>
      {/* Hero Header */}
      <header style={{
        background: 'linear-gradient(90deg, #f8fafc, #eef2ff)',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#1f2937' }}>
              Cognitive-AI Approaches to Adaptive Scheduling in Braille Memory Retention Using Hybrid SM-2 Models
            </div>
            <div style={{ color: '#475569' }}>Published: {publishedDate}</div>
          </div>
        </div>
      </header>
      {/* Progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, background: 'transparent', zIndex: 60 }}>
        <div style={{ width: scrollProgress + '%', height: '100%', background: '#000000', transition: 'width 0.1s linear' }} />
      </div>

      {/* Loader Overlay (subtle, to match JapaneseGuide feel) */}
      {loaderVisible && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'black', transition: 'opacity 0.4s', opacity: loading ? 1 : 0
        }}>
          <div style={{ fontFamily: 'monospace', color: '#ffffff', fontSize: '1rem' }}>
            Loading article...
          </div>
        </div>
      )}

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', minHeight: '100vh' }}>
        <div style={{ marginBottom: '3rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '4px', borderLeft: '4px solid #333' }}>
          <p style={{ margin: 0, fontSize: '1rem' }}>
            This note explores a hybrid SM-2 spaced repetition variant augmented with cognitive-AI heuristics for Braille learners. The goal is to improve long-term retention while reducing cognitive load and tactile fatigue.
          </p>
        </div>

        {/* Content */}
        <div style={{ display: isMobile ? 'block' : 'flex', gap: isMobile ? 0 : '3rem', alignItems: isMobile ? 'stretch' : 'flex-start' }}>
          {/* Sidebar placeholder (kept minimal for single-article structure) */}
          {!isMobile && (
            <div style={{ width: '280px', position: 'sticky', top: '20px', flexShrink: 0 }}>
              <div style={{ padding: '1.5rem', borderLeft: '3px solid #333' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#333' }}>
                  Sections
                </div>
                <nav style={{ fontSize: '1rem', color: '#333' }}>
                  {sectionIds.map(id => (
                    <a
                      key={id}
                      href={'#' + id}
                      onClick={(e) => handleNavClick(e, id)}
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        color: activeSection === id ? '#000000' : '#1f2937',
                        textDecoration: 'none',
                        fontWeight: activeSection === id ? 700 : 500
                      }}
                    >
                      {id === 'overview' ? 'Overview' : id === 'signals' ? 'Cognitive-AI Signals' : id === 'pseudo' ? 'Pseudo-logic' : id === 'evaluation' ? 'Evaluation' : 'Resources'}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}

          {/* Mobile TOC */}
          {isMobile && (
            <div style={{ marginBottom: '1rem' }}>
              <select
                value={activeSection}
                onChange={(e) => handleNavClick(e, e.target.value)}
                style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', border: '1px solid #333', background: 'white', color: '#333', borderRadius: 6 }}
              >
                <option value="overview">Overview</option>
                <option value="signals">Cognitive-AI Signals</option>
                <option value="pseudo">Pseudo-logic</option>
                <option value="evaluation">Evaluation</option>
                <option value="resources">Resources</option>
              </select>
            </div>
          )}

          <article style={{ flex: 1, minWidth: 0 }}>
            <h2 id="overview" style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: 0 }}>Overview</h2>
            <p style={{ lineHeight: 1.8 }}>
              We adapt the classic SM-2 algorithm by incorporating tactile complexity, recent-slip penalties, and fatigue-aware pacing. This hybrid approach personalizes review intervals to tactile recognition challenges specific to Braille.
            </p>

            <h2 id="signals" style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '1.5rem' }}>Cognitive-AI Signals</h2>
            <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.8, marginTop: '0.5rem' }}>
              <li>Tactile complexity score derived from dot density and common confusions.</li>
              <li>Temporal fatigue inferred from streak length and slowed response times.</li>
              <li>Slip rate: consecutive near-misses reduce intervals even after correct recalls.</li>
            </ul>

            <h2 id="pseudo" style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '1.5rem' }}>Pseudo-logic</h2>
            <pre style={{ background: '#f1f5f9', padding: '1rem', borderRadius: 8, overflowX: 'auto' }}>
{`grade = userResponse(0..5)
complexity = tactileComplexity(card)
fatigue = inferFatigue(sessionStats)
slipRate = recentSlipRate(card)

EF = updateEasiness(EF, grade)
I = updateInterval(I, repetitions, EF)

// Cognitive-AI adjustments
I *= (1 - 0.15 * complexity)
I *= (1 - 0.10 * fatigue)
I *= (1 - 0.10 * slipRate)

schedule(nextReview = now + I)`}
            </pre>

            <h2 id="evaluation" style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '1.5rem' }}>Evaluation</h2>
            <p style={{ lineHeight: 1.8 }}>
              Compare vanilla SM-2 vs. hybrid on 7/30-day retention, average review time, user comfort, and confusion matrices for visually similar dot patterns. Expect efficiency gains and targeted error reduction.
            </p>

            <h2 id="resources" style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem' }}>Resources</h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1rem', marginTop: '0.75rem' }}>
              <div
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '1rem', background: '#fff', transition: 'box-shadow 120ms ease, transform 120ms ease', boxShadow: hoveredCard === 0 ? '0 6px 20px rgba(2,6,23,0.12)' : '0 1px 2px rgba(2,6,23,0.06)', transform: hoveredCard === 0 ? 'translateY(-1px)' : 'none' }}
              >
                <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Research Proposal</div>
                <div style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '0.75rem' }}>Detailed study plan and methodology.</div>
                <a href="/resources/braille-sm2/proposal.pdf" style={{ display: 'inline-block', padding: '0.5rem 0.75rem', border: '1px solid #334155', color: '#334155', textDecoration: 'none', borderRadius: 6 }}>Download PDF</a>
              </div>
              <div
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '1rem', background: '#fff', transition: 'box-shadow 120ms ease, transform 120ms ease', boxShadow: hoveredCard === 1 ? '0 6px 20px rgba(2,6,23,0.12)' : '0 1px 2px rgba(2,6,23,0.06)', transform: hoveredCard === 1 ? 'translateY(-1px)' : 'none' }}
              >
                <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Research Paper</div>
                <div style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '0.75rem' }}>Final paper (coming soon after publication).</div>
                <button disabled style={{ padding: '0.5rem 0.75rem', border: '1px solid #cbd5e1', color: '#94a3b8', background: '#f8fafc', borderRadius: 6 }}>Coming Soon</button>
              </div>
              <div
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: '1rem', background: '#fff', transition: 'box-shadow 120ms ease, transform 120ms ease', boxShadow: hoveredCard === 2 ? '0 6px 20px rgba(2,6,23,0.12)' : '0 1px 2px rgba(2,6,23,0.06)', transform: hoveredCard === 2 ? 'translateY(-1px)' : 'none' }}
              >
                <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Pipeline Diagram</div>
                <div style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '0.75rem' }}>High-level training/evaluation pipeline.</div>
                <a href="/pipeline" style={{ display: 'inline-block', padding: '0.5rem 0.75rem', border: '1px solid #334155', color: '#334155', textDecoration: 'none', borderRadius: 6 }}>Open Flowchart</a>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default CognitiveBrailleSM2;

