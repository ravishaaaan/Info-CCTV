import React, { useState, useEffect } from 'react';
import { content, diagramInfo } from './data.jsx';

function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const t = content[lang];
  
  const slides = [
    '/images/slide1.png', '/images/slide2.png', '/images/slide3.png',
    '/images/slide4.jpg', '/images/slide5.png', '/images/slide6.jpg'
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Theme Toggle
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Diagram Hotspots (Adjust top/left % based on your specific image)
  const hotspots = [
    { id: 'rawVideo', top: '25%', left: '5%' },
    { id: 'preProcess', top: '25%', left: '25%' },
    { id: 'clips', top: '25%', left: '45%' },
    { id: 'aiModel', top: '25%', left: '65%' },
    { id: 'yolo', top: '25%', left: '85%' },
    { id: 'pose', top: '40%', left: '85%' },
    { id: 'flow', top: '55%', left: '85%' },
    { id: 'fusion', top: '70%', left: '65%' },
    { id: 'rl', top: '70%', left: '45%' },
    { id: 'alert', top: '70%', left: '15%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 transition-all duration-500">
      
      {/* Glassmorphic Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
              CCTV AI
            </span>
          </div>
          <div className="flex gap-3">
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="px-4 py-2 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-600/50 text-sm font-medium shadow-sm hover:shadow-md transition-all cursor-pointer backdrop-blur-sm min-w-[120px]"
              style={{ fontFamily: "'Inter', 'Noto Sans Sinhala', 'Noto Sans Tamil', sans-serif" }}
            >
              <option value="en">English</option>
              <option value="si">සිංහල</option>
              <option value="ta">தமிழ்</option>
            </select>
            <button 
              onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
              className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-600/50 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow-md backdrop-blur-sm"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-cyan-500/5 to-transparent dark:from-blue-500/10 dark:via-cyan-400/10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-500/10 dark:from-blue-400/20 dark:to-cyan-300/20 border border-blue-600/20 dark:border-blue-400/30 backdrop-blur-sm">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent uppercase tracking-wider">
              {t.slogan}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          
          <div className="inline-block p-8 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-slate-300/50 dark:shadow-slate-950/50 border border-slate-200/50 dark:border-slate-700/50">
            <p className="text-base font-semibold text-slate-600 dark:text-slate-300 mb-3 min-h-[3rem] flex items-center justify-center">{t.team}</p>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent min-h-[1.5rem] flex items-center justify-center">
                {t.supervisor}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white min-h-[3rem] flex items-center">{t.introTitle}</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {t.introText.map((p, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-black text-white">{idx + 1}</span>
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Diagram */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white min-h-[3rem] flex items-center">{t.diagramTitle}</h2>
            </div>
          </div>
          
          <div className="relative rounded-2xl md:rounded-3xl overflow-visible md:overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white dark:bg-slate-900">
            <img src="/images/architect.png" alt="Architecture" className="w-full object-contain min-h-[400px] md:min-h-0" />
            
            {hotspots.map((spot) => {
              const leftPos = parseFloat(spot.left);
              const topPos = parseFloat(spot.top);
              const isRightSide = leftPos > 50;
              const isBottomHalf = topPos > 50;
              
              return (
                <div key={spot.id}>
                  <div
                    className="absolute w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-125 active:scale-110 z-10 group"
                    style={{ top: spot.top, left: spot.left }}
                    onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-30 group-hover:opacity-50 animate-pulse"></div>
                    <div className="absolute inset-0.5 md:inset-1 bg-white dark:bg-slate-900 rounded-full border border-blue-500 md:border-2 flex items-center justify-center shadow-lg">
                      <span className="text-[8px] md:text-xs lg:text-sm font-black text-blue-600 dark:text-blue-400">?</span>
                    </div>
                  </div>
                  
                  {activeHotspot === spot.id && (
                    <div 
                      className={`fixed md:absolute left-4 right-4 md:left-auto md:right-auto bottom-4 md:bottom-auto md:top-auto md:w-80 lg:w-96 p-5 md:p-6 rounded-2xl bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl shadow-2xl border-2 border-slate-200 dark:border-slate-700 z-50 animate-fade-in max-h-[70vh] md:max-h-none overflow-y-auto`}
                      style={window.innerWidth >= 768 ? { 
                        [isRightSide ? 'right' : 'left']: isRightSide ? `calc(100% - ${spot.left})` : spot.left,
                        [isBottomHalf ? 'bottom' : 'top']: isBottomHalf ? `calc(100% - ${spot.top})` : spot.top
                      } : {}}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-base md:text-lg font-black bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent capitalize pr-2">
                          {activeHotspot}
                        </h3>
                        <button 
                          onClick={() => setActiveHotspot(null)} 
                          className="flex-shrink-0 text-slate-400 hover:text-red-500 transition-colors text-2xl font-bold leading-none -mt-1"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                        {diagramInfo[activeHotspot][lang]}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full"></div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white min-h-[3rem] flex items-center">{t.resultsTitle}</h2>
                </div>
              </div>
              
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 leading-relaxed min-h-[4rem] flex items-center">{t.resultsText}</p>
              
              <div className="space-y-4">
                <div className="group p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border border-emerald-200 dark:border-emerald-800/50 hover:shadow-lg hover:scale-[1.02] transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <span className="text-xl">✅</span>
                    </div>
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 text-base min-h-[1.5rem] flex items-center">{t.buttons.confirm}</span>
                  </div>
                </div>
                
                <div className="group p-5 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border border-amber-200 dark:border-amber-800/50 hover:shadow-lg hover:scale-[1.02] transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                      <span className="text-xl">⚠️</span>
                    </div>
                    <span className="font-bold text-amber-700 dark:text-amber-400 text-base min-h-[1.5rem] flex items-center">{t.buttons.ignore}</span>
                  </div>
                </div>
                
                <div className="group p-5 rounded-xl bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-950/30 dark:to-red-950/30 border border-rose-200 dark:border-rose-800/50 hover:shadow-lg hover:scale-[1.02] transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/30">
                      <span className="text-xl">🚫</span>
                    </div>
                    <span className="font-bold text-rose-700 dark:text-rose-400 text-base min-h-[1.5rem] flex items-center">{t.buttons.decline}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Carousel */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-900 group border border-slate-200 dark:border-slate-700">
              <img 
                src={slides[currentSlide]} 
                alt="Detection Result" 
                className="w-full h-full object-contain transition-all duration-700"
              />
              
              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full">
                {slides.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === idx 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-400 w-8' 
                        : 'bg-white/40 w-2 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Controls */}
              <button 
                onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
              >
                <span className="text-white text-xl">‹</span>
              </button>
              <button 
                onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
              >
                <span className="text-white text-xl">›</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Google Form */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">User Feedback</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Help us improve by sharing your thoughts</p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfgkmkBx-4AucjlQvb9p-8vRkJ_LGHFySIIJz_gic78wNgyIQ/viewform?embedded=true" 
              width="100%" 
              height="1400"
              className="block h-[1400px] md:h-[1200px]"
              frameBorder="0" 
            >Loading…</iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-gradient-to-br from-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-slate-300 mb-4 min-h-[1.5rem] flex items-center justify-center">{t.footer}</p>
          <div className="flex justify-center gap-6 text-sm text-slate-400">
            <span>© 2024</span>
            <span>•</span>
            <span>University of Ruhuna</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;