import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const JapaneseGuide = () => {
  const [currentSection, setCurrentSection] = useState('introduction');
  const [loading, setLoading] = useState(true);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [bootIndex, setBootIndex] = useState(0);
  // Add a state to control mobile menu
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const sections = {
    introduction: {
      title: "Introduction",
      description: "Understanding the journey ahead and common pitfalls",
      subsections: ["HARDSTUCK?", "Fudge Japanese courses", "You Might Not Be as Good as You Think", "Immersive Language Learning Journey"]
    },
    gettingStarted: {
      title: "Getting Started", 
      description: "Foundation: Writing systems and basic concepts",
      subsections: ["A Beginner's Path to Learning Japanese", "The Japanese Writing System", "Hiragana", "Katakana", "Mastering the Kana: A Step-by-Step Guide", "Kanji", "Introduction to Japanese Grammar"]
    },
    languageImmersion: {
      title: "Language Immersion",
      description: "Practical strategies for immersing yourself in Japanese",
      subsections: ["Grasping Comprehensible Input", "Crafting Enjoyable Immersion", "Utilizing Dictionaries", "Selecting Immersion Content", "Engaging with Listening Immersion", "Active versus Passive Listening", "Embracing Reading Immersion", "Striving for an Optimal Listening-to-Reading Ratio", "Comprehensive Reading Immersion: From Beginner to Fluency", "Reading vs. Listening Immersion: Complementary Approaches", "Essential Tools for Reading Immersion", "The Reading Process", "Content Guide: What to Read", "Building Habits That Last", "Your Reading Journey", "Integrating Reading into Your Overall Immersion Strategy"]
    },
    postBeginner: {
      title: "Beyond Beginner",
      description: "Advanced concepts: Output, pronunciation, and community",
      subsections: ["Introduction to Output", "Pronunciation, Pitch Accent & Phonetics", "Your Journey Begins with Community"]
    },
    grammar: {
      title: "Grammar Study",
      description: "Comprehensive grammar framework",
      subsections: ["Grammar foundations and comprehensive lessons"]
    }
  };

  const sectionOrder = ['introduction', 'gettingStarted', 'languageImmersion', 'postBeginner', 'grammar'];

  // Loader boot lines
  const bootLines = [
    'Booting Japanese Learning Guide...',
    '[ OK ] Loading grammar resources...',
    '[ OK ] Mounting study materials...',
    '[ OK ] Starting language modules...',
    '[ OK ] Initializing guide content...',
    '[ OK ] Network online',
    '[ OK ] Ready.'
  ];

  // Loader effects
  useEffect(() => {
    if (loading && bootIndex < bootLines.length) {
      const t = setTimeout(() => setBootIndex(bootIndex + 1), 80);
      return () => clearTimeout(t);
    }
  }, [loading, bootIndex]);

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
    // Fallback: hide loader after 3s if load event never fires
    const fallback = setTimeout(onLoad, 3000);
    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {/* Loader Overlay */}
        {loaderVisible && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: 'black',
            transition: 'opacity 0.5s',
            opacity: loading ? 1 : 0,
            padding: '2rem'
          }}>
            <div style={{
              fontFamily: 'monospace',
              color: '#4ade80',
              fontSize: '1rem',
              lineHeight: '1.6',
              whiteSpace: 'pre'
            }}>
              {bootLines.slice(0, bootIndex).map((line, i) => (
                <div key={i} style={{ color: i === 0 ? 'white' : '#4ade80' }}>
                  {i === 0 ? <span style={{ color: 'white' }}>{line}</span> : line}
                </div>
              ))}
              {bootIndex >= bootLines.length && (
                <div>
                  <span style={{ color: '#4ade80' }}>
                    learner@japanese-guide:~$ <span style={{
                      fontWeight: 'bold',
                      fontSize: '1.2em',
                      animation: 'bootBlink 0.5s steps(1) infinite'
                    }}>█</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
        <main style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem',
          minHeight: '100vh'
        }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '2rem',
          alignItems: 'flex-start'
        }}>
          <div className="title" style={{
            fontSize: '2.5rem',
            margin: 0,
            fontWeight: 'bold',
            color: '#333'
          }}>
            A Guide to Learning Japanese
          </div>
          {/* Mobile chapter selector at the top */}
          {isMobile && (
            <div style={{ width: '100%', marginTop: '1rem' }}>
              <select
                value={currentSection}
                onChange={e => setCurrentSection(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  fontSize: '1rem',
                  border: '1px solid #333',
                  background: 'white',
                  color: '#333',
                  borderRadius: 6
                }}
              >
                {sectionOrder.map(sectionKey => (
                  <option key={sectionKey} value={sectionKey}>
                    {sections[sectionKey].title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        
        <div className="date" style={{
          color: '#666',
          marginBottom: '2rem'
        }}>
          May 10, 2024
        </div>

        <div style={{
          marginBottom: '3rem',
          padding: '1.5rem',
          background: '#f9f9f9',
          borderRadius: '4px',
          borderLeft: '4px solid #333'
        }}>
          <p style={{ margin: 0, fontSize: '1rem' }}>
            Welcome to the Learn Japanese Guide, your go-to resource for mastering Japanese. Whether you're a beginner or looking to refine your skills, this guide offers a structured approach to language learning.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="desktop-layout" style={{
          display: isMobile ? 'block' : 'flex',
          gap: isMobile ? 0 : '3rem',
          alignItems: isMobile ? 'stretch' : 'flex-start'
        }}>
          {/* Sidebar */}
          {!isMobile && (
            <div style={{
              width: '280px',
              position: 'sticky',
              top: '20px',
              flexShrink: 0
            }}>
              <div style={{
                padding: '1.5rem',
                borderLeft: '3px solid #333'
              }}>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  color: '#333'
                }}>
                  Chapters
                </div>
                
                {sectionOrder.map((sectionKey) => {
                  const section = sections[sectionKey];
                  const isCurrent = currentSection === sectionKey;
                  
                  return (
                    <div
                      key={sectionKey}
                      onClick={() => setCurrentSection(sectionKey)}
                      style={{
                        padding: '1rem',
                        marginBottom: '0.75rem',
                        background: isCurrent ? '#333' : 'transparent',
                        color: isCurrent ? 'white' : '#333',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        borderBottom: isCurrent ? '2px solid #333' : '1px solid transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (!isCurrent) {
                          e.target.style.background = '#f8f8f8';
                          e.target.style.borderBottom = '1px solid #ccc';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isCurrent) {
                          e.target.style.background = 'transparent';
                          e.target.style.borderBottom = '1px solid transparent';
                        }
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        <span style={{ fontSize: '1rem', fontWeight: isCurrent ? 'bold' : 'normal' }}>
                          {section.title}
                        </span>
                      </div>
                      <div style={{
                        fontSize: '0.85rem',
                        opacity: 0.8,
                        lineHeight: '1.4'
                      }}>
                        {section.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Main Content */}
          <div style={{
            flex: 1,
            minWidth: 0,
            width: isMobile ? '100%' : undefined,
            padding: isMobile ? '0' : undefined
          }}>
            <div className="content" style={{
              marginBottom: '4rem',
              padding: isMobile ? '0.5rem' : undefined
            }}>
              {/* Section Header */}
              <div style={{
                marginBottom: '2rem',
                paddingBottom: '1.5rem',
                borderBottom: '2px solid #ddd'
              }}>
                <h1 style={{ 
                  fontSize: '2.5rem', 
                  margin: 0,
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  {sections[currentSection].title}
                </h1>
                <p style={{
                  margin: 0,
                  color: '#666',
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}>
                  {sections[currentSection].description}
                </p>
              </div>
              
              {/* Section Contents */}
              <div style={{
                marginBottom: '2rem',
                padding: '1rem 0',
                fontSize: '0.95rem',
                color: '#555',
                lineHeight: '1.6'
              }}>
                <strong style={{ color: '#333' }}>In this chapter:</strong>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0.5rem 0 0 0'
                }}>
                  {sections[currentSection].subsections.map((subsection, index) => (
                    <li key={index} style={{ 
                      marginBottom: '0.25rem',
                      paddingLeft: '1rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        color: '#999'
                      }}>
                        —
                      </span>
                      {subsection}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Content Placeholder */}
              <div style={{
                padding: '2rem',
                minHeight: '400px',
                borderTop: '1px solid #eee'
              }}>
                {currentSection === 'introduction' ? (
                  <div style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#333'
                  }}>
                    <div style={{
                      marginBottom: '2rem',
                      padding: '1.5rem',
                      borderLeft: '3px solid #007acc',
                      background: '#f8f9fa'
                    }}>
                      <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.6' }}>
                        Welcome to the Learn Japanese Guide, your go-to resource for mastering Japanese. Whether you're a beginner or looking to refine your skills, this guide offers a structured approach to language learning.
                      </p>
                      <p style={{ margin: '1rem 0 0 0', fontSize: '1rem', lineHeight: '1.6' }}>
                        Created from extensive research and personal experience, this guide provides a comprehensive framework for success. As a language enthusiast and educator, I've curated this resource to address common questions and challenges faced by learners.
                      </p>
                      <p style={{ margin: '1rem 0 0 0', fontSize: '1rem', lineHeight: '1.6' }}>
                        Whether your goals include passing exams, preparing for university, or simply speaking fluently, this guide is designed to support your journey. Let's embark on this adventure together and unlock the full potential of your Japanese proficiency!
                      </p>
                    </div>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>HARDSTUCK?</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Let's start with the definition of HARDSTUCK: <em>hardstuck (comparative more hardstuck, superlative most hardstuck) (video games, slang)</em> refers to a person who is firmly stuck at a particular rank or Elo level; unable to progress in skill.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Many Japanese students aim for goals like being able to speak the language fluently to enjoy untranslated Japanese media like anime or literature. However, despite years of study, many people get HARDSTUCK in reaching their goals. The issue might not be the difficulty of the language itself or a lack of effort on the part of the learners. Instead, the traditional methods of Japanese language learning often lack what is most important in the world of language acquisition: <strong>immersion</strong>.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Immersion refers to exposing oneself to native content designed for native speakers, such as watching anime without subtitles or reading Japanese books and articles. By not incorporating immersion into their study routines, learners are missing out on a vital component that can impact their progress towards achieving fluency and the ability to understand and enjoy native Japanese content.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The traditional methods of language learning, which may rely heavily on textbooks, grammar exercises, and classroom instruction, are not sufficient on their own (this doesn't mean that it is not important) to reach these goals. Incorporating immersion through exposure to native materials is crucial for developing a deeper understanding and fluency in the language.
                    </p>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Fudge "Japanese courses"</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Language courses for Japanese are utterly failing their students. The traditional curriculum they force-feed to learners is nothing but institutionalized sabotage, dooming prospective speakers to years of busywork before any meaningful engagement with the real language.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      It starts with their obsession over rote memorization of hiragana, katakana, and thousands of individualized kanji. As if getting bogged down in scratching out physically demanding writing systems is the most crucial first step to fluency.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      From there, courses have you mindlessly parroting set phrases like "How are you?" (お元気ですか) and "My name is..." (私の名前は。。。) ad nauseam. Brainless repetition as if imitating a broken record will somehow prepare you for the beautifully freeform reality of conversation.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      But the real punchline is their fixation on tediously overexplaining grammatical rules and structures. Endless charts, tables, exceptions piled on exceptions - they act like Japanese is some Frankenstein construct rather than an organically evolved, malleable language shaped by millions over centuries.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Their crime is making language acquisition a chore - an endless slog through arid textbooks, drills, and scripted call-and-response when it should be a vibrant, experiential journey from day one. Languages don't truly exist in books; they live and breathe through the real conversations of native speakers steeped in cultural context.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Languishing in classroom prisons, divorced from immersive experiences and authentic usage, is profoundly ineffective for gaining true fluency. It's like trying to learn swimming...by doing arm circles in the basement. You're not actually swimming! You need to cannonball into the damn pool on day one.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      One purported "benefit" of these Japanese courses is the pressure and accountability from teachers and classmates. They claim the fear of disappointing others or falling behind motivates students to stay diligent with the busywork. Yet this manufactured pressure simply perpetuates the cycle of languishing in beginner purgatory.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      These courses deliberately trap learners in safe, sterile boxes, forever gatekeeping the only form of practice that can actually forge true proficiency - authentic immersion in the living language. They have a vested financial interest in artificially dragging out the process for as many years as possible through tedious drills and curricula disconnected from reality.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The truth is, there's no substitute for ALL-IN immersion - embracing the initial chaos and confusion, accepting you'll make embarrassing mistakes, but ultimately acquiring skills through real-world struggle. Absorbing the rhythms, idioms, and slang. Observing how words get filtered through cultural context. Realizing how grammar "rules" are more like fickle guidelines.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Well, I've got news for you: <strong>Fudge your tedious, rigid, procrastination-promoting courses.</strong>
                    </p>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>You Might Not Be as Good as You Think</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      It's a harsh reality, but the truth is that most of us tend to overestimate our abilities when it comes to learning a new skill. We often have a false sense of confidence, thinking that we're better than we actually are. This illusion can be detrimental to our progress, as it prevents us from acknowledging our weaknesses and addressing them effectively.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      When you start learning something new, whether it's a language, a musical instrument, or a coding language, you might feel like you're grasping the basics relatively quickly. However, this initial ease can be misleading. As you delve deeper into the subject, you'll realize that there are layers of complexity that you hadn't anticipated, and your initial confidence might start to waver.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      This phenomenon is known as the "beginner's bubble," where beginners overestimate their abilities due to the simplicity of the initial stages. As you progress, the learning curve steepens, and you're faced with challenges that expose your true level of proficiency.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Language learning is a prime example of this. Language is huge – there's so much to it that far exceeds the limitations of a classroom or app-based approach trying to teach via simplistic rules like "x is y." X は Yです Mastering a language requires enormous amounts of experience reading and listening to native speakers' actual usage.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      It's often difficult to grasp why natives tend to use certain phrases in particular contexts, or one word over another synonymous option. This creates a barrier, as you can't just study grammar and vocabulary to achieve native-like fluency. Without prerequisite immersive experience, attempting to construct sentences leads to unnatural phrasing. Lack of experience with real language use also makes it difficult to understand natives due to unfamiliarity with idioms and patterns outside a textbook's scope.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      That's why immersion – reading and listening to authentic native content – is crucial. Language acquisition happens by subconsciously internalizing patterns from comprehensible input. When you understand the immersive content, your brain stores those language patterns for later retrieval. Your fluent reading ability stems from vast prior experience – your brain recognizes "there's pattern a used with z and c!" You grasp contexts, tones, and connections between sentences not from intentionally studying rules, but from amassing exposure to language in use.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      It's important to recognize the tendency to overestimate your abilities and approach your learning journey with humility. Acknowledge that you might not be as good as you think, and be prepared to encounter difficulties along the way. Embrace that learning is a continuous process with always more room for improvement.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Accepting you're not as skilled as initially believed can be humbling, but it's an opportunity for growth. When you confront weaknesses, you can seek out guidance, adjust techniques, and develop a growth mindset. True mastery comes from perseverance, dedication, and willingness to confront limitations. Embrace challenges, and don't let overconfidence derail your progress. Stay humble, keep immersing and learning, and you'll make remarkable strides.
                    </p>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Immersive Language Learning Journey</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Immersion is the act of engaging with natural, authentic content in your target language - the kind of material intended for native speakers, not simplified or curated specifically for learners. If you're studying English, reading this very guide counts as English immersion since it's written for a proficient, native-level audience.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The immersion approach represents a paradigm shift from traditional academic learning. Rather than striving for perfectionism and total comprehension from the outset, effective language acquisition requires getting comfortable with uncertainty. You must make peace with not understanding everything fully, at least initially.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      This top-down philosophy contrasts starkly with the typical school experience, where you're rewarded for memorizing prescribed knowledge and acing exams. With language learning, however, the "test" is the real-world usage of the language by natives, which cannot be fully accounted for in textbooks or classroom materials.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      When first exposed to native-level content like books, movies, podcasts, and music, you may struggle to understand even basic phrases. That discomfort isn't a bad sign; it's a natural part of the process. Don't let confusion discourage you! The key lies in fostering an environment of continual exposure.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The more you surround yourself with the target language through enjoyable mediums, the more your brain starts to recognize and decipher patterns and vocabulary. This indirect input primes you to absorb language naturally - even when comprehension feels elusive.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Choose content that excites you. If you love anime, dive into your favorite shows without subtitles. Watch Japanese movies, read manga, or listen to music. Follow online personalities or streamers who create content in your target language. Anything that resonates with you will encourage consistency, making it easier to integrate learning into your daily routine.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Over time, your capacity to grasp the language will evolve. The initial struggle gives way to increasingly sophisticated understanding as you soak up idiomatic expressions, contextual nuances, and cultural references. You won't just memorize rules; you'll feel the language's rhythm and flow.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Each day you immerse yourself, you're building a reservoir of experience that prepares you for more complex structures. You'll eventually find yourself thinking in the target language, responding naturally to questions without overanalyzing grammar.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Your ultimate goal should be to establish a sustainable, enjoyable immersion routine. Language acquisition is not a sprint; it's a marathon requiring sustained engagement over time. Embrace the messy, imperfect process and allow yourself to experiment, play, and make mistakes.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The real magic lies in stepping beyond the conventional classroom and into the vibrant, unpredictable world of the target language. By immersing yourself in real content made for real speakers, you pave the way for genuine fluency. Language isn't just learned; it's lived!
                    </p>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Conclusion</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Language learning is a lifelong journey filled with challenges, triumphs, and surprises. Recognizing that traditional learning methods may not suffice allows you to explore innovative strategies that incorporate immersive experiences. By engaging with authentic materials, embracing uncertainty, and remaining humble about your progress, you can break free from the limitations that may have previously held you back.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Remember, the path to fluency isn't linear. Be patient with yourself and trust the process. The more you immerse yourself in the language and culture, the more progress you'll make. With dedication and enthusiasm, you can conquer your language-learning challenges and truly enjoy the richness of the language you're studying.
                    </p>
                  </div>
                ) : currentSection === 'gettingStarted' ? (
                  <div style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#333'
                  }}>
                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>A Beginner's Path to Learning Japanese</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      For those starting their journey with the Japanese language, the process typically involves:
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Learning hiragana and katakana, the two essential writing systems.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Building a basic vocabulary and understanding the corresponding kanji (logographic characters).</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Studying Japanese grammar through structured lessons (which later will be provided in this guide).</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Immersing oneself in easy content with high repetition. This step will consume a significant amount of time and effort.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>The Japanese Writing System</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      When starting to learn Japanese, mastering the three writing systems is important. These systems, hiragana, katakana, and kanji, each serve distinct purposes and play vital roles in reading, writing, and understanding the language.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The Japanese writing system is unique and comprises three distinct character sets: hiragana, katakana, and kanji. Unlike alphabets, where each character represents a single vowel or consonant, the Japanese system is more accurately described as a syllabary, where each character represents an entire syllable (mora).
                    </p>
                    
                    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                      <img 
                        src="https://github.com/L1M1N4L/A-guide-to-learning-Japanese/assets/127649044/6e7f91d0-c57a-4672-a6ba-8dfb6c824488" 
                        alt="Japanese Writing Systems" 
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Hiragana</strong> is a set of 46 characters that represent the basic sounds of the Japanese language. These characters are primarily used for particles, native Japanese words, and portions of words. Hiragana is essential for expressing the pronunciation of Japanese words and sentences correctly.
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Katakana</strong> is another set of characters that serves a specific purpose: representing loanwords from other languages, primarily English. When you see a word written in katakana, it's likely a foreign term adapted into Japanese.
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Kanji</strong>, which are logographic characters adopted from Chinese. Kanji characters represent entire words or concepts rather than individual sounds. While it is possible to write Japanese entirely in kana, this is not the norm. Instead, Japanese writing typically employs a combination of kana (hiragana and katakana) and kanji.
                      </li>
                    </ul>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Hiragana</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Hiragana is one of the two primary syllabary (kana) systems in Japanese writing, along with katakana. Its elegant, flowing curves give it a distinctive aesthetic appeal.
                    </p>
                    
                    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                      <img 
                        src="https://github.com/L1M1N4L/A-guide-to-learning-Japanese/assets/127649044/b672a43f-8f51-46d9-8fa9-1aab9e2fa7cc" 
                        alt="Hiragana Chart" 
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>
                    
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Key uses of hiragana include:
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Representing grammatical particles and verb conjugations</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Writing native Japanese words without kanji counterparts</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Denoting personal names and honorifics</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Transcribing words when kanji is unavailable or impractical</li>
                    </ul>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Katakana</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Katakana is the angular and pointed variant of the Japanese kana syllabary. Its key uses include:
                    </p>
                    
                    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                      <img 
                        src="https://github.com/L1M1N4L/A-guide-to-learning-Japanese/assets/127649044/44b22130-828a-4e22-afab-536305f41f4a" 
                        alt="Katakana Chart" 
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Transcribing foreign loanwords from languages like English</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Representing onomatopoeic words mimicking sounds and actions</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Writing slang terms, informal expressions, and colloquialisms</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Transliterating foreign names, especially non-Japanese ones</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Acts as exaggeration like capital letters</li>
                    </ul>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Mastering the Kana: A Step-by-Step Guide</h2>
                    
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Step 1 - Familiarize Yourself with the Kana Charts</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Begin your journey by studying the comprehensive kana charts. These charts serve as invaluable references, visually representing the entire hiragana and katakana syllabaries.
                    </p>
                    
                    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                      <img 
                        src="https://github.com/L1M1N4L/A-guide-to-learning-Japanese/assets/127649044/1897d841-1c80-4cd3-b850-92bf92343063" 
                        alt="Kana Charts" 
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>
                    
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Familiarize yourself with these charts, as they will become your companions in learning to read and write kana. Observe the organization of consonants and vowels, and take note of the stroke order for each character.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Step 2 - External Interactive Learning Tools</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Watch the video <a href="https://www.youtube.com/watch?v=_wZHqOghvSs" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>"Learn ALL Hiragana in 1 Hour - How to Write and Read Japanese"</a> for a comprehensive introduction to the hiragana syllabary. This video provides a structured approach to learning the characters and their pronunciation.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Step 3 - Practice, Practice, Practice</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Once you have gained a basic understanding of the kana, reinforce your knowledge through the <a href="https://kana-quiz.tofugu.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>Tofugu Kana Quiz</a> and challenge yourself.
                    </p>
                    
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>How to play</h4>
                    <ul style={{ 
                      marginBottom: '1rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Click "All Kana" for Hiragana.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Start guessing how the hiragana are pronounced using romaji.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Repeat until confident (may take a few days or weeks).</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Do it with all "Katakana" also checked.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Repeat until confident (may take a few days or weeks).</li>
                    </ul>
                    
                    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                      <img 
                        src="https://github.com/L1M1N4L/A-guide-to-learning-Japanese/assets/127649044/660c7c35-6d9d-4db3-ab64-c1516bf10e59" 
                        alt="Tofugu Kana Quiz - Hiragana" 
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          marginBottom: '1rem'
                        }}
                      />
                      <img 
                        src="https://github.com/L1M1N4L/A-guide-to-learning-Japanese/assets/127649044/870bfd19-2a81-48fb-83c1-a302de4d00f4" 
                        alt="Tofugu Kana Quiz - Katakana" 
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Step 4 - Embrace Immersion</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Immerse yourself in Japanese media and culture. Try reading household Japanese items, such as product labels or instructions, to expose yourself to kana in everyday contexts. Additionally, what helps immensely in memorizing the kana is reading sentences written entirely in kana. While not everything in Japanese is written in kana, and you may have trouble reading most materials without kanji knowledge at this point, sometimes kana is provided over kanji to aid reading. This is known as furigana. For example: <ruby>切磋琢磨<rt>せっさたくま</rt></ruby>, which means "cultivating one's character by studying hard."
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      To practice your kana reading skills, consider Tadoku graded readers, which you can find <a href="https://tadoku.org/japanese/free-books/#l0" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>here</a>.
                    </p>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Kanji: The Logographic Chinese Characters in Japanese Writing</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      One of the most unique and challenging aspects of Japanese for learners is the integration of kanji - Chinese logographic characters adapted for use in the Japanese writing system. While hiragana and katakana represent sounds, kanji characters represent whole words or morphemes and convey meaning directly.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Origins and Development</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The earliest kanji were adopted from China over 1,500 years ago when the Japanese had no writing system of their own. Over many centuries, these logographic characters became integrated into Japanese in unique ways. Some characters took on different pronunciations and meanings from their original Chinese usage. New characters were also created in Japan for native words.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Number of Kanji</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      There are thousands of kanji characters, with most estimates putting the number used in modern Japanese between 2,000-3,000 commonly occurring characters. This is a vast visual vocabulary compared to the 50 basic hiragana and katakana characters.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      However, kanji are not memorized through rote repetition like kana. Instead, they are learned gradually through vocabulary acquisition. As learners encounter new words, they look up the kanji and associated readings/meanings, progressively building recognition.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Components and Radicals</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      One key to mastering kanji is understanding how they are constructed from recurring components and radicals. These function almost like ROOT words in English. For example, the radical 木 means "tree/wood" and appears in kanji like 松 (pine), 林 (woods), 森 (forest), etc.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      By analyzing the radicals/components, learners can disambiguate between similar-looking kanji and make educated guesses about meanings and readings. Components also serve as memory aids.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Readings: On'yomi and Kun'yomi</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Kanji characters can have two types of readings:
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>On'yomi (Sino-Japanese):</strong> These readings are based on the original Chinese pronunciations of the characters. They were introduced to Japan along with the characters themselves. When a kanji is used in combination with other characters to form compound words, on'yomi readings are often used. For example, in the word 音楽 (ongaku, meaning "music"), both 音 and 楽 are read with on'yomi readings.
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Kun'yomi (Native Japanese):</strong> These readings are assigned when kanji are used to represent native Japanese words. They are typically used when a kanji appears by itself or at the beginning of a word. For instance, in the word 楽しい (tanoshii, meaning "fun"), the kanji 楽 is read with a kun'yomi reading.
                      </li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Guide to Writing Chinese Characters Effectively</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Writing Chinese characters requires attention to detail and adherence to certain principles to ensure clarity and consistency. Here's a guide to help you master the art of writing Chinese characters effectively:
                    </p>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>1. Uniform Size</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Maintaining uniformity in character size is crucial for readability and aesthetic appeal. Follow these guidelines:
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Relative Size:</strong> Practice writing characters within an imaginary square or circle to ensure uniformity in size. For instance, the 2-stroke character 力 (りょく) should occupy a similar space as the 15-stroke character 論 (ろん).
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Special Cases:</strong> Certain characters may vary in size depending on their usage. For example, the character 言 (げん、ごん) should be written larger when used independently (meaning "speech" or "word") compared to when it appears as a radical/component in a more complex character like 論 (ろん).
                      </li>
                    </ul>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>2. Stroke Order</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Correct stroke order contributes to the legibility and elegance of Chinese characters. Follow these principles when writing characters:
                    </p>
                    <ul style={{ 
                      marginBottom: '1rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Consistency:</strong> Chinese characters consist of various numbers of strokes, but they should always be written following a specific stroke order.
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Priority in Stroke Order:</strong> Certain strokes take precedence over others. Here's a general guide to stroke order priority.
                      </li>
                    </ul>
                    
                    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                      <img 
                        src="https://github.com/L1M1N4L/A-guide-to-learning-Japanese/assets/127649044/dd19de39-b95e-46f9-b44c-eede35a82afa" 
                        alt="Stroke Order Guide 1" 
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          marginBottom: '1rem'
                        }}
                      />
                      <img 
                        src="https://github.com/L1M1N4L/A-guide-to-learning-Japanese/assets/127649044/991efed8-9a21-4bb6-91f7-92e5371e31d3" 
                        alt="Stroke Order Guide 2" 
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          marginBottom: '1rem'
                        }}
                      />
                      <img 
                        src="https://github.com/L1M1N4L/A-guide-to-learning-Japanese/assets/127649044/df1029bd-94f3-4f0b-9547-0605b0f8597c" 
                        alt="Stroke Order Guide 3" 
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          marginBottom: '1rem'
                        }}
                      />
                      <img 
                        src="https://github.com/L1M1N4L/A-guide-to-learning-Japanese/assets/127649044/9eb0b749-93d8-45bd-90a2-87ebceec76c7" 
                        alt="Stroke Order Guide 4" 
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      />
                    </div>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>3. Practice and Patience</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Writing Chinese characters proficiently requires consistent practice and patience. Here are some tips to enhance your writing skills:
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Regular Practice:</strong> Dedicate regular practice sessions to writing characters, focusing on size uniformity and stroke order.
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Use Writing Tools:</strong> Experiment with different writing tools, such as brush pens or calligraphy brushes, to develop your handwriting style.
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Seek Feedback:</strong> Share your written work with peers, teachers, or native speakers to receive constructive feedback and improve your skills.
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Be Patient:</strong> Learning to write Chinese characters is a gradual process. Embrace mistakes as learning opportunities and stay committed to your practice routine.
                      </li>
                    </ul>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      By following these guidelines and investing time and effort into practice, you'll gradually become more proficient in writing Chinese characters effectively. Keep challenging yourself and enjoy the journey of mastering this beautiful and intricate writing system!
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Learning and Using Kanji</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      While kanji were historically acquired through laborious hours of practice writing, modern technologies provide tools like digital dictionaries and spaced repetition software to facilitate studying kanji vocabulary efficiently.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Knowing kanji is essential for full Japanese literacy. It allows precise and unambiguous representation of words, where homophones written in kana alone would be unclear. Newspapers, novels, and most literature for native adults is written using a mix of kanji and kana.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      With patience, efficient study methods, and lots of reading practice, learners can develop skilled literacy in recognizing and producing the kanji writing system integrated so uniquely within Japanese.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>TLDR</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Some key things to understand about kanji:
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Kanji represent meaning, not just sounds like kana</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Kanji should be learned alongside vocabulary words, not in isolation</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Components like radicals can help distinguish between similar kanji</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Looking up words in a dictionary is crucial for learning readings and meaning</li>
                    </ul>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Introduction to Japanese Grammar</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Learning Japanese grammar is essential but can feel daunting, especially for beginners. There are many resources out there, but this comprehensive guide aims to be your ultimate solution. Later in this guide, all the important grammar points will be thoroughly explained in a clear, structured manner with examples. No need to juggle multiple outside resources - this single guide will cover everything you need to build a solid foundation in Japanese grammar from the ground up. The explanations will be straightforward yet detailed, allowing you to master the grammar through the lessons contained here. It's prime time to start your Japanese grammar learning journey through the focused curriculum in this guide.
                    </p>
                  </div>
                ) : currentSection === 'languageImmersion' ? (
                  <div style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#333'
                  }}>
                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Beginner's Guide to Language Immersion</h2>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Grasping Comprehensible Input</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Comprehensible input denotes content that matches your current proficiency level, containing just a few challenging parts per sentence that you can deduce from context. For novices, finding such content can be hard since everything appears incomprehensible. Although grappling with incomprehensible input has its merits, overcoming this initial hurdle is tough.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Crafting Enjoyable Immersion</h3>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Opt for entertaining media regardless of language complexity. Fun immersion ensures consistent engagement and motivation.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>As you progress, understanding will naturally increase, rendering the content more comprehensible over time.</li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Utilizing Dictionaries</h3>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Use <a href="https://jisho.org" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>Jisho.org</a> to look up unfamiliar words individually.</li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Selecting Immersion Content</h3>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Choose content based on personal interests, such as anime, movies, dramas, novels, manga, visual novels, games, or YouTube videos.</li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Engaging with Listening Immersion</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Listening involves a top-down, intuitive method. Avoid overthinking and simply go with the flow.
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Level 1:</strong> Listen without interruptions.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Level 2:</strong> Identify standout words and look them up while continuing to listen.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Level 3:</strong> Pause to search for every unknown word (not recommended for beginners/intermediates).</li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Active versus Passive Listening</h3>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Active listening:</strong> Concentrate fully on the audio/video.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Passive listening:</strong> Let the audio play in the background while multitasking.</li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Embracing Reading Immersion</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Reading follows a bottom-up, analytical approach. Take your time with each sentence, looking up unfamiliar words as needed.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Process: Read → Look up word → Understand → Continue reading → Repeat.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Begin with content containing visuals (e.g., anime subtitles, manga, visual novels) to ease into reading.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Striving for an Optimal Listening-to-Reading Ratio</h3>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>In the beginner stage, aim for a 7:3 ratio, prioritizing listening for its natural language exposure.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>As proficiency improves, transition to a 5:5 ratio, balancing listening and reading time.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Comprehensive Reading Immersion: From Beginner to Fluency</h2>

                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Reading immersion represents the most powerful method for developing genuine Japanese language proficiency. While listening immersion builds your auditory comprehension and natural speech patterns, reading immersion develops your vocabulary, grammar understanding, and cultural knowledge simultaneously. This comprehensive guide will transform your approach to Japanese reading from a frustrating exercise into an engaging journey toward fluency.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      It's important to acknowledge that not everyone has the opportunity to study in Japan or interact regularly with native speakers. While some learners are fortunate enough to get direct immersion through living in Japan, most people need to compensate for this lack of natural exposure. Reading immersion, combined with the tools and methods outlined in this guide, provides a powerful alternative that can bridge this gap and create authentic language learning experiences regardless of your location.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The reading immersion approach differs fundamentally from traditional study methods. Instead of memorizing isolated vocabulary lists or studying grammar rules in abstract, you'll learn Japanese through authentic content that interests you. This method mirrors how native speakers acquire language - through meaningful, contextual exposure rather than rote memorization.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      This guide covers everything from setting up your reading environment with essential tools to developing sustainable reading habits that will carry you from your first Japanese sentence to reading complex literature with ease. Whether you're a complete beginner or an intermediate learner looking to break through to advanced levels, this comprehensive approach will accelerate your Japanese learning journey.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Core Philosophy: Why Reading Immersion Works</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Reading Japanese isn't just about understanding words - it's about rewiring your brain to think in Japanese patterns. When you read authentic content, you're not just learning vocabulary in isolation. You're absorbing how Japanese people actually express ideas, handle cultural concepts, and structure their thoughts.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The harsh truth is that your first book will be brutally difficult. This isn't because you're not ready or because you haven't studied enough vocabulary. It's because reading comprehension and vocabulary size are different skills entirely. You can memorize 5,000 words and still struggle with basic sentences when you start reading.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      But here's the encouraging part: the difficulty curve is exponential in reverse. Your first book might take 6 months and feel impossible. Your second book will be noticeably easier. By your fifth book, you'll wonder why reading ever felt so hard. This dramatic improvement happens because reading teaches you things that vocabulary lists cannot:
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>What reading actually teaches you:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>How words combine naturally in context</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Cultural assumptions that aren't explained in dictionaries</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Sentence patterns and rhythms of natural Japanese</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>How to understand meaning from partial information</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Reading stamina and processing speed</li>
                    </ul>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The key mindset shift is this: <strong>enjoyment always beats efficiency</strong>. If you have to choose between something easy but boring or something challenging but interesting, pick the challenging content every time. Your motivation and engagement matter more than perfect comprehension.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Critical rule: Never use machine translation.</strong> Google Translate, DeepL, and ChatGPT will give you wrong or unnatural interpretations that actually hurt your learning. The struggle of figuring things out yourself is where the real learning happens.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Reading vs. Listening Immersion: Complementary Approaches</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Reading and listening immersion work together synergistically to develop different aspects of your Japanese ability. Understanding how they complement each other helps you create a balanced immersion strategy.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Reading immersion advantages:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '1rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Allows you to process language at your own pace</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Provides visual reinforcement of vocabulary and grammar patterns</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Enables detailed analysis of sentence structure and word usage</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Builds kanji recognition and understanding</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Creates stronger memory associations through visual processing</li>
                    </ul>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Listening immersion advantages:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Develops natural pronunciation and intonation</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Trains your brain to process spoken Japanese in real-time</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Exposes you to natural speech patterns and contractions</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Builds listening stamina and comprehension speed</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Provides emotional and contextual cues through tone and delivery</li>
                    </ul>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The most effective approach combines both methods. Start with a 7:3 listening-to-reading ratio as a beginner, gradually shifting to 5:5 as your skills develop. Reading the same content you've listened to (or vice versa) creates powerful reinforcement, as you'll encounter the same vocabulary and grammar patterns through different modalities.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Essential Tools for Reading Immersion</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Before diving into reading content, you need to set up your digital environment with the right tools. These tools will transform reading from a frustrating dictionary-hopping experience into a smooth, enjoyable learning process.
                    </p>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Anki: Building Your Vocabulary Foundation</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      For a comprehensive, step-by-step Anki setup guide including installation, configuration, add-ons, and optimal settings, check out the <a href="https://donkuri.github.io/learn-japanese/setup/#adding-dictionaries" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>detailed Anki setup guide</a> by Don Kuri.
                    </p>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Understanding Spaced Repetition</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Anki isn't just digital flashcards - it's a memory system based on cognitive science. The program tracks how well you know each word and shows you difficult words more often while spacing out words you know well. This "spaced repetition" creates much stronger memories than traditional study methods.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Think of it this way: your brain naturally forgets information over time, but each time you successfully recall something, you strengthen that memory pathway. Anki calculates the optimal moment to test you - right before you would forget, but not so often that it wastes your time.
                    </p>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>The Kaishi 1.5k Deck</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      This deck contains 1,500 of the most common Japanese words, selected based on frequency analysis of anime, manga, light novels, and other media. These aren't random words - they're specifically the vocabulary you need for reading Japanese content.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Getting the deck:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Search for "Kaishi 1.5k" on <a href="https://ankiweb.net/shared/decks/" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>AnkiWeb shared decks</a></li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Download the .apkg file</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>In Anki, click "Import File" and select the downloaded file</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>The deck appears in your main window</li>
                    </ul>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Avoiding the "Anki Hellhole"</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Disclaimer:</strong> If you think you can handle 10-20-30 cards per day consistently, please skip this section. But if you've decided you can't maintain that pace, feel free to come back to this alternative approach.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Many learners experience what's known as the "Anki hellhole" - a situation where you're adding more cards than you can review, leading to overwhelming daily sessions that feel endless. This happens when you encounter 20+ new words daily but only review 10, creating an ever-growing backlog that becomes demotivating.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The problem isn't that SRS doesn't work, but that many people simply can't maintain the habit of daily reviews when sessions become too long or overwhelming. This creates a cycle where you avoid Anki, fall further behind, and eventually abandon it entirely.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>The 390 Deck Solution:</strong>
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      For those who struggle with traditional Anki usage, consider the "390 deck" approach: a 390-card deck that you complete by adding only 2 new cards per day, taking about 6 months to finish. This creates strict, achievable limits with a clear end date.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Key principles of the 390 deck:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Add only 2 new cards per day maximum</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Keep daily review sessions under 10 minutes</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Focus on completing the deck rather than endless expansion</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Use simple card formats - don't overcomplicate</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Start a new 390 deck only after completing the current one</li>
                    </ul>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The goal isn't to learn every word you encounter, but to build a sustainable habit that provides clear, measurable progress. Even learning 390 words can dramatically improve your reading comprehension, as these words will appear frequently in your content and create a foundation for natural acquisition of additional vocabulary.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Yomitan: Your Digital Dictionary</h3>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>What Yomitan Does</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <a href="https://github.com/themoeway/yomitan" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>Yomitan</a> is a browser extension that instantly looks up Japanese words when you hover over them. It's the modern version of Yomichan and works with comprehensive dictionaries to give you detailed information about any word you encounter while reading online.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      This tool transforms reading from a frustrating experience of constantly switching between tabs to a smooth flow where you can look up unknown words without breaking your reading rhythm.
                    </p>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Essential Dictionaries to Install</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The best collection is <a href="https://drive.google.com/drive/folders/1tTdLppnqMfVC5otPlX_cs4ixlIgjv_lH" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>Shoui's Yomitan Dictionary Collection</a> which contains everything you need. This comprehensive collection includes bilingual, monolingual, grammar, kanji, frequency, and pitch accent dictionaries organized in folders for easy navigation. The dictionary files will also be available in this repository for easy download and installation.
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Jitendex</strong> - Your main Japanese-English dictionary. This is built on the same data as Jisho.org but optimized for Yomitan.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>新和英 (Shinwaei)</strong> - A Japanese-English dictionary made by Japanese people for Japanese people. It includes tons of example sentences.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>KANJIDIC</strong> - Essential for kanji information. When you click on individual kanji characters, this shows you readings, meanings, stroke count, and radical information.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Dictionary of Japanese Grammar</strong> - Based on the famous grammar reference series. This helps you understand grammar patterns and sentence structures.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>アクセント辞典v2</strong> - Shows pitch accent patterns for proper pronunciation.</li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>The Reading Process</h3>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>The Right Mindset</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Reading comprehension isn't about understanding every single word perfectly. Native speakers regularly encounter unfamiliar words and figure out meaning from context. Your goal is understanding the general meaning and emotional content of what you're reading, not achieving perfect comprehension.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>The comprehension hierarchy:</strong>
                    </p>
                    <ol style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'decimal',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>What's the overall situation or scene?</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Who's doing what to whom?</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>What's the emotional tone?</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>What are the specific details?</li>
                    </ol>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Step-by-Step Reading Method</h4>
                    <ol style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'decimal',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Read the sentence once without looking anything up</strong> - Get a general impression of what might be happening.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Look up unknown words systematically</strong> - Use Yomitan to look up every word you don't know.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Try to understand the sentence structure</strong> - Identify the main verb, subject, particles, and grammar patterns.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Attempt to understand the overall meaning</strong> - Put the pieces together and grasp what the sentence is saying.</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Move to the next sentence</strong> - Don't get stuck on individual sentences.</li>
                    </ol>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Content Guide: What to Read</h3>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Visual Novels: The Gateway Medium</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Visual novels offer the ideal introduction to Japanese reading because they combine text with visual context, voice acting, and consistent character vocabulary. The images and audio provide comprehension support while you're building text processing skills.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Why visual novels work well for learners:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Visual context helps clarify confusing passages</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Character consistency in vocabulary and speech patterns</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Often simpler sentence structures than literature</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Engaging stories maintain motivation through difficult parts</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Save/load functionality lets you take breaks easily</li>
                    </ul>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Light Novels and Web Novels</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Light novels represent the sweet spot between accessibility and authentic Japanese literature. They're written for teenage and young adult audiences, so they avoid the most complex literary language while still offering sophisticated storytelling.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Reading platforms and formats:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong><a href="https://reader.ttsu.app" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>ッツ Reader</a></strong> for EPUB and HTMLZ files - integrates well with Yomitan</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong><a href="https://bookwalker.jp/" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>BookWalker</a></strong> for legal digital purchases</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Web novel sites</strong> like <a href="https://syosetu.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>Syosetu</a> and <a href="https://kakuyomu.jp/" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>Kakuyomu</a> for free content</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong><a href="https://bookmeter.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>Bookmeter</a></strong> for tracking your reading progress and finding recommendations</li>
                    </ul>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Manga: Visual Context Advantages</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Manga provides excellent reading practice because the visual storytelling supports text comprehension. Facial expressions, action sequences, and visual metaphors help clarify dialogue and narration that might be confusing in pure text.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Technical solutions for manga:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong><a href="https://reader.mokuro.app" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>Mokuro Catalog</a></strong> has pre-processed manga with selectable text for Yomitan</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong><a href="https://github.com/kha-white/mokuro" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>Mokuro</a></strong> software for processing your own manga files</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong><a href="https://github.com/matt-m-o/YomiNinja" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>YomiNinja</a></strong> as an alternative processing tool</li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Building Habits That Last</h3>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Starting Small and Scaling Up</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Drawing from James Clear's <em>Atomic Habits</em>, the key to building lasting reading habits is to begin with a commitment so small it feels impossible to fail. This might be reading just one sentence per day or spending five minutes with Japanese text. The goal isn't learning huge amounts immediately - it's establishing the daily pattern that will compound over time.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Effective scaling strategies:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Week 1-2: 5-10 minutes daily</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Week 3-4: 10-15 minutes daily</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Month 2: 15-20 minutes daily</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Month 3+: 20-30 minutes or more as comfortable</li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Your Reading Journey</h3>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>The First Book Milestone</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Completing your first Japanese book represents the single most important milestone in your reading development. This achievement typically takes several months and feels impossibly difficult throughout most of the process. Every page requires constant dictionary consultation, every sentence presents multiple unknowns, and comprehension feels frustratingly incomplete.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      But finishing that first book creates a dramatic shift in reading ability. The second book will feel noticeably easier, not because you've learned exponentially more vocabulary, but because you've internalized Japanese text patterns, sentence structures, and reading strategies. Your brain has developed the neural pathways necessary for processing Japanese text efficiently.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>What the first book teaches you:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>How to maintain comprehension despite incomplete understanding</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Japanese sentence rhythm and flow patterns</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Context-based meaning inference skills</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Reading stamina and persistence</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Confidence that you can understand authentic Japanese content</li>
                    </ul>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>Long-term Goals and Milestones</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Short-term milestones (first year):</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '1rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Complete your first book or visual novel</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Read consistently for 30+ days without breaking the habit</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Understand a manga chapter without looking up any words</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Finish a light novel volume</li>
                    </ul>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Medium-term goals (1-3 years):</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '1rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Read fluently in your preferred genres</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Complete 10+ books across different formats</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Understand cultural references and humor in context</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Read news articles and contemporary content</li>
                    </ul>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Long-term vision (3+ years):</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Read anything that interests you without significant difficulty</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Appreciate literary style and authorial voice</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Engage with Japanese content as entertainment rather than study</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Use reading as a gateway to deeper cultural understanding</li>
                    </ul>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#333' }}>The Transformation Process</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Learning to read Japanese changes more than your language ability - it transforms your relationship with Japanese culture and media. What begins as a difficult academic exercise evolves into genuine entertainment and cultural connection.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The process requires patience with yourself during the inevitable periods of frustration and confusion. Every reader goes through phases of feeling overwhelmed, questioning their progress, and wondering if fluency is achievable. These feelings are temporary and normal parts of the development process.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      The reward for persistence is access to an entire universe of content, perspectives, and cultural experiences that remain invisible to non-readers. Japanese literature, from ancient classics to contemporary web novels, offers insights into Japanese thought patterns, social structures, and aesthetic principles that no translation can fully convey.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Remember these core principles:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Consistency beats intensity - daily practice creates lasting results</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Engagement beats efficiency - choose content you genuinely enjoy</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Progress is often invisible until sudden breakthroughs occur</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Every sentence you read contributes to your growing ability</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>The struggle is temporary, but the access to Japanese culture is permanent</li>
                    </ul>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Your reading journey is unique to your interests, goals, and learning style. Trust the process, maintain your daily habits, and celebrate the small victories that accumulate into genuine fluency over time.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Integrating Reading into Your Overall Immersion Strategy</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Reading immersion doesn't exist in isolation - it's part of a comprehensive language learning ecosystem. The most successful learners integrate reading with listening, speaking, and writing practice to create a well-rounded Japanese ability.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Creating your personalized immersion routine:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Morning routine:</strong> 15-20 minutes of reading with Anki reviews</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Commute time:</strong> Passive listening to content you've read</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Evening relaxation:</strong> Active reading of new content</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}><strong>Weekend deep dive:</strong> Longer reading sessions with complex material</li>
                    </ul>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Cross-media reinforcement strategies:</strong>
                    </p>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Read a light novel, then watch its anime adaptation</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Listen to a podcast, then read the transcript</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Read manga, then listen to the drama CD</li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Study news articles, then watch news broadcasts on the same topics</li>
                    </ul>

                  </div>
                ) : currentSection === 'grammar' ? (
                  <div style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#333'
                  }}>
                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Grammar Study Resources</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Grammar study is essential for understanding Japanese sentence structure and communication patterns. Unlike many traditional textbooks that teach Japanese through English translations, the resources below approach grammar from a Japanese perspective, building a solid foundation for natural language use.
                    </p>
                    
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Primary Grammar Resources</h3>
                    <div style={{
                      marginBottom: '2rem',
                      padding: '1.5rem',
                      borderLeft: '3px solid #007acc',
                      background: '#f8f9fa'
                    }}>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#333' }}>Tae Kim's Grammar Guide</h4>
                      <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <a href="https://guidetojapanese.org/learn/grammar" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline', fontWeight: 'bold' }}>guidetojapanese.org</a> - This comprehensive resource explains Japanese grammar from a Japanese point of view, systematically building up grammatical structures that make sense in Japanese rather than forcing English concepts onto Japanese.
                      </p>
                      <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Key Features:</strong>
                      </p>
                      <ul style={{ 
                        marginBottom: '1rem', 
                        paddingLeft: '2rem',
                        listStyleType: 'disc',
                        listStylePosition: 'outside'
                      }}>
                        <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Explains grammar from Japanese perspective, not English</li>
                        <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Systematic building of grammatical foundations</li>
                        <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Covers fundamental concepts first, then builds complexity</li>
                        <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Available as free online guide, paperback book, and mobile apps</li>
                      </ul>
                    </div>

                    <div style={{
                      marginBottom: '2rem',
                      padding: '1.5rem',
                      borderLeft: '3px solid #007acc',
                      background: '#f8f9fa'
                    }}>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#333' }}>Yokubi Grammar Guide</h4>
                      <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <a href="https://yoku.bi/Introduction.html" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline', fontWeight: 'bold' }}>yoku.bi</a> - A community-maintained grammar guide that provides a complete rewrite and rearrangement of grammar concepts, offering an alternative approach to understanding Japanese grammar.
                      </p>
                      <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Key Features:</strong>
                      </p>
                      <ul style={{ 
                        marginBottom: '1rem', 
                        paddingLeft: '2rem',
                        listStyleType: 'disc',
                        listStylePosition: 'outside'
                      }}>
                        <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Community-driven content and updates</li>
                        <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Reorganized grammar concepts for better understanding</li>
                        <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Comprehensive coverage of grammatical structures</li>
                        <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>Free online resource with detailed explanations</li>
                      </ul>
                    </div>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Additional Grammar Resources</h3>
                    <ul style={{ 
                      marginBottom: '2rem', 
                      paddingLeft: '2rem',
                      listStyleType: 'disc',
                      listStylePosition: 'outside'
                    }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Dictionary of Japanese Grammar Series</strong> - Three comprehensive volumes (Basic, Intermediate, Advanced) by Seiichi Makino and Michio Tsutsui. Essential reference books for serious learners.
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Japanese: A Comprehensive Grammar</strong> by Stefan Kaiser - A detailed reference grammar covering all aspects of Japanese grammar.
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
                        <strong>Japanese Grammar Guide</strong> by Tae Kim (Paperback) - The physical book version of the online guide, available on Amazon.
                      </li>
                    </ul>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>Study Approach Recommendations</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Start with fundamentals:</strong> Begin with basic sentence structure, particles, and verb conjugations. These form the foundation for all other grammar concepts.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Learn through context:</strong> Don't just memorize rules - see how grammar patterns work in real Japanese sentences and conversations.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Practice regularly:</strong> Use grammar concepts in your own sentences and identify them in your immersion content.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      <strong>Reference when needed:</strong> Use these resources as references when you encounter unfamiliar grammar patterns in your reading and listening.
                    </p>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#333' }}>About This Guide's Grammar Content</h3>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      I may be adding some simple must-know grammar concepts to this guide, but the grammar section is still unfinished and was recently updated after Firokara on Discord suggested I update this guide despite not touching it for several months.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      I'm gonna actually make it someday if I don't forget LOLOLOL
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      For comprehensive grammar study, I strongly recommend using the resources above, as they provide more detailed and complete coverage of Japanese grammatical concepts than what I can include in this guide.
                    </p>
                  </div>
                ) : currentSection === 'postBeginner' ? (
                  <div style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#333'
                  }}>
                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Introduction to Output</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Many believe that speaking a language frequently leads to fluency. However, true progress comes from absorbing input—listening and observing native speakers. While speaking and writing may not directly improve proficiency, they play a vital role in solidifying understanding and applying what we've learned.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Consistent practice with both input and output is key. Despite some methods advocating for delaying output until proficiency is high, I disagree. Waiting too long can fuel a fear of making mistakes, which hampers progress. Through my work with students, I've noticed a lack of confidence in output. This reluctance often stems from a fear of speaking incorrectly or being judged, fostering a harmful perfectionist mindset that slows language acquisition.
                    </p>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Pronunciation, Pitch Accent & Phonetics</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      In Japanese, there is an important concept called pitch accent that affects pronunciation. While not strictly necessary for conversational ability, studying pitch accent can help learners achieve truly excellent pronunciation.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      This guide will include a section teaching the fundamentals of pitch accent for those looking to master Japanese pronunciation at a higher level. However, pitch accent study is optional - it is not required for basic communication in Japanese.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      For learners focused solely on conversation, putting extensive effort into pronunciation may not be essential. But for those dedicated to attaining native-like pronunciation skills, this guide provides the opportunity to dive into the mechanics of pitch accent.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      For pitch accent study, there are several good books which I can recommend: <strong>NHK日本語発音アクセント新辞典</strong> by NHK放送文化研究所, available on <a href="https://www.amazon.co.jp/dp/4140113458" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'underline' }}>Amazon</a>.
                    </p>

                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#333', fontWeight: 'bold' }}>Your Journey Begins with Community</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      As you begin your journey into the world of Japanese language learning, it's important to remember that you're not alone. Learning a new language can present challenges, but there's a vast community of learners and enthusiasts ready to support you every step of the way.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      As you dive into this guide, keep in mind that seeking assistance is always an option. Whether you're struggling with a grammar concept, confused about pronunciation, or simply need some motivation, find a community where you can connect with fellow learners, ask questions, share experiences, and receive guidance from more experienced learners and language experts.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      Don't let obstacles deter you from your language learning goals. Embrace challenges as opportunities for growth, and remember that every question asked is a step closer to mastery. Together, we'll navigate the complexities of Japanese language and culture, supporting each other along the way.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                      So, as you embark on this exciting journey, know that you have a supportive community behind you. May your Japanese learning experience be enriching, fulfilling, and enjoyable. Happy learning!
                    </p>
                  </div>
                ) : (
                  <div className="note" style={{
                    padding: '2rem',
                    margin: '0',
                    borderLeft: '3px solid #007acc'
                  }}>
                    <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.5rem', color: '#333' }}>Chapter Content</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}><strong>This section will contain the complete original content for:</strong></p>
                    <p style={{ 
                      fontSize: '1.3rem', 
                      fontWeight: 'bold', 
                      color: '#333',
                      margin: '1.5rem 0',
                      padding: '1rem',
                      textAlign: 'center',
                      borderBottom: '2px solid #333'
                    }}>
                      "{sections[currentSection].title}"
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>Including all subsections, examples, images, and detailed explanations exactly as written in the source material, maintaining the same formatting and Japanese text examples.</p>
                    
                    <div style={{
                      marginTop: '2rem',
                      padding: '1.5rem',
                      borderLeft: '3px solid #007acc',
                      borderTop: '1px solid #eee'
                    }}>
                      <p style={{ margin: 0, fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
                        <strong>Development Note:</strong> Each chapter will be populated with the exact content from your original guide, preserving all formatting, code examples, links, and instructional material.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Navigation */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid #ddd'
              }}>
                <div style={{ 
                  color: '#666', 
                  fontSize: '1rem',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}>
                  Chapter {sectionOrder.indexOf(currentSection) + 1} of {sectionOrder.length}
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  <div>
                    {sectionOrder.indexOf(currentSection) > 0 && (
                      <button
                        onClick={() => setCurrentSection(sectionOrder[sectionOrder.indexOf(currentSection) - 1])}
                        style={{
                          color: '#333',
                          textDecoration: 'none',
                          fontSize: '1rem',
                          transition: 'all 0.3s',
                          background: 'transparent',
                          border: '1px solid #333',
                          cursor: 'pointer',
                          padding: '0.75rem 1.5rem',
                          fontWeight: '500'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#333';
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#333';
                        }}
                      >
                        ← {sections[sectionOrder[sectionOrder.indexOf(currentSection) - 1]].title}
                      </button>
                    )}
                  </div>

                  <div>
                    {sectionOrder.indexOf(currentSection) < sectionOrder.length - 1 && (
                      <button
                        onClick={() => setCurrentSection(sectionOrder[sectionOrder.indexOf(currentSection) + 1])}
                        style={{
                          color: '#333',
                          textDecoration: 'none',
                          fontSize: '1rem',
                          transition: 'all 0.3s',
                          background: 'transparent',
                          border: '1px solid #333',
                          cursor: 'pointer',
                          padding: '0.75rem 1.5rem',
                          fontWeight: '500'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#333';
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#333';
                        }}
                      >
                        {sections[sectionOrder[sectionOrder.indexOf(currentSection) + 1]].title} →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default JapaneseGuide; 