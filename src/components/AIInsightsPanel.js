'use client';

import { useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronDown, Info } from 'lucide-react';
import { formatNumber } from '@/lib/aadhaarDataService';

export default function AIInsightsPanel({ aiInsight, aiLoading, aiInsightData, showAIInsights, setShowAIInsights }) {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const reasonsRef = useRef(null);
  const actionsRef = useRef(null);
  const buttonRef = useRef(null);
  const glowRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        { y: 30, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(headerRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power2.out' }
      );

      gsap.fromTo(buttonRef.current,
        { x: 20, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.5, delay: 0.3, ease: 'back.out(1.7)' }
      );

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          backgroundPosition: '200% center',
          duration: 3,
          repeat: -1,
          ease: 'none',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!aiInsightData || aiLoading || !showAIInsights) return;

    const ctx = gsap.context(() => {
      if (reasonsRef.current) {
        const items = reasonsRef.current.querySelectorAll('li');
        gsap.fromTo(items,
          { x: -30, opacity: 0, filter: 'blur(4px)' },
          { 
            x: 0, 
            opacity: 1, 
            filter: 'blur(0px)',
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
            delay: 0.1
          }
        );
      }

      if (actionsRef.current) {
        const items = actionsRef.current.querySelectorAll('li');
        gsap.fromTo(items,
          { x: 30, opacity: 0, filter: 'blur(4px)' },
          { 
            x: 0, 
            opacity: 1, 
            filter: 'blur(0px)',
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
            delay: 0.2
          }
        );
      }
    }, contentRef);

    return () => ctx.revert();
  }, [aiInsightData, aiLoading, showAIInsights]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gsap.to(containerRef.current, {
      '--mouse-x': `${x}px`,
      '--mouse-y': `${y}px`,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-white/60 backdrop-blur-xl rounded-3xl border border-white/50 overflow-hidden shadow-[0_8px_32px_rgba(30,58,138,0.12)] hover:shadow-[0_20px_60px_rgba(30,58,138,0.2)] transition-all duration-500"
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' }}
    >
      <div 
        ref={glowRef}
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(30,58,138,0.15) 25%, rgba(217,119,6,0.1) 50%, rgba(30,58,138,0.15) 75%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
      />
      
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(30,58,138,0.06), transparent 40%)',
        }}
      />

      <div ref={headerRef} className="p-3 sm:p-5 border-l-4 border-[#1E3A8A] rounded-l-3xl relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25">
              <Info size={16} className="text-white sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-semibold text-[#1E3A8A] tracking-wide">AI Recommendation</div>
              <div className="text-xs sm:text-sm text-[#64748B] mt-0.5 line-clamp-2 sm:line-clamp-none">
                <strong className="text-[#0F172A]">{aiInsight.district}, {aiInsight.state}</strong> — {formatNumber(aiInsight.updates)} updates
              </div>
            </div>
          </div>
          <button
            ref={buttonRef}
            onClick={() => setShowAIInsights(!showAIInsights)}
            className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 text-[#0F172A] text-[10px] sm:text-xs font-semibold border border-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] w-full sm:w-auto"
          >
            <ChevronDown size={12} className={`transition-transform duration-300 sm:w-[14px] sm:h-[14px] ${showAIInsights ? 'rotate-180' : ''}`} />
            {showAIInsights ? 'Hide' : 'Show'} Details
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showAIInsights && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="px-3 sm:px-5 pb-3 sm:pb-5 pt-0">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/70 shadow-inner">
                {aiLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                        <span className="text-[10px] sm:text-xs font-semibold text-[#64748B] uppercase tracking-wider">Why this is happening</span>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-start gap-2 sm:gap-3">
                            <span className="text-[#64748B] mt-0.5">•</span>
                            <div 
                              className="h-3 sm:h-4 rounded-lg w-full overflow-hidden"
                              style={{
                                background: 'linear-gradient(90deg, #E5E7EB 0%, #F8FAFC 50%, #E5E7EB 100%)',
                                backgroundSize: '200% 100%',
                                animation: `shimmer 1.5s ease-in-out infinite ${i * 0.15}s`,
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#1E3A8A] animate-pulse" />
                        <span className="text-[10px] sm:text-xs font-semibold text-[#64748B] uppercase tracking-wider">Recommended actions</span>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-start gap-2 sm:gap-3">
                            <span className="text-[#64748B] mt-0.5">•</span>
                            <div 
                              className="h-3 sm:h-4 rounded-lg w-full overflow-hidden"
                              style={{
                                background: 'linear-gradient(90deg, #E5E7EB 0%, #F8FAFC 50%, #E5E7EB 100%)',
                                backgroundSize: '200% 100%',
                                animation: `shimmer 1.5s ease-in-out infinite ${i * 0.15 + 0.3}s`,
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : aiInsightData ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#D97706]" />
                        <span className="text-[10px] sm:text-xs font-semibold text-[#64748B] uppercase tracking-wider">Why this is happening</span>
                      </div>
                      <ul ref={reasonsRef} className="space-y-2 sm:space-y-3">
                        {aiInsightData.whyReasons.map((reason, i) => (
                          <li key={i} className="text-xs sm:text-sm text-[#0F172A] flex items-start gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg sm:rounded-xl hover:bg-white/50 transition-colors duration-200">
                            <span className="text-[#D97706] mt-0.5 font-bold">•</span>
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {aiInsightData.actions.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <div className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
                          <span className="text-[10px] sm:text-xs font-semibold text-[#64748B] uppercase tracking-wider">Recommended actions</span>
                        </div>
                        <ul ref={actionsRef} className="space-y-2 sm:space-y-3">
                          {aiInsightData.actions.map((action, i) => (
                            <li key={i} className="text-xs sm:text-sm text-[#0F172A] flex items-start gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg sm:rounded-xl hover:bg-white/50 transition-colors duration-200">
                              <span className="text-[#1E3A8A] mt-0.5 font-bold">•</span>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-4 sm:py-6 text-xs sm:text-sm text-[#64748B]">
                    Click the button above to generate AI insights
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
