'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, LayoutTemplate, PenTool, AlertTriangle,
  Lightbulb, BookOpen, Layers, BarChart3, ShieldCheck, Cpu,
  Menu, X, ChevronDown, Globe, Microscope, Database
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const MyanmarFlag = ({ className = "w-4 h-3" }: { className?: string }) => (
  <svg viewBox="0 0 18 12" className={`${className} rounded-[2px] overflow-hidden inline-block shrink-0 shadow-xs`} aria-hidden="true">
    <rect width="18" height="4" y="0" fill="#FECB00" />
    <rect width="18" height="4" y="4" fill="#34B233" />
    <rect width="18" height="4" y="8" fill="#EA2839" />
    <polygon points="9,2.5 10.1,5.8 13.6,5.8 10.8,7.9 11.9,11.2 9,9.1 6.1,11.2 7.2,7.9 4.4,5.8 7.9,5.8" fill="#FFFFFF" />
  </svg>
);

const UKFlag = ({ className = "w-4 h-3" }: { className?: string }) => (
  <svg viewBox="0 0 60 30" className={`${className} rounded-[2px] overflow-hidden inline-block shrink-0 shadow-xs`} aria-hidden="true">
    <clipPath id="uk-flag-clip-nav">
      <rect width="60" height="30" />
    </clipPath>
    <g clipPath="url(#uk-flag-clip-nav)">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const getCoreNavItems = (t: ReturnType<typeof useLanguage>['t']) => [
  { name: t('nav_home'), path: '/', icon: BookOpen },
  { name: t('nav_core'), path: '/core-components', icon: FileText },
  { name: t('nav_examples'), path: '/examples', icon: Lightbulb },
  { name: t('nav_templates'), path: '/templates', icon: LayoutTemplate },
  { name: t('nav_deep_dives'), path: '/deep-dives', icon: Microscope },
  { name: t('nav_tools'), path: '/tools', icon: PenTool },
  { name: t('nav_mistakes'), path: '/mistakes', icon: AlertTriangle },
];

const getDeliverableNavItems = (t: ReturnType<typeof useLanguage>['t']) => [
  { name: t('nav_ux'), path: '/ux-architecture', icon: Layers },
  { name: t('nav_tech'), path: '/tech-strategy', icon: Cpu },
  { name: t('nav_api'), path: '/api-database', icon: Database },
  { name: t('nav_gtm'), path: '/gtm-plan', icon: BarChart3 },
  { name: t('nav_risk'), path: '/risk-management', icon: ShieldCheck },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t, toggleLanguage, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [deliverablesOpen, setDeliverablesOpen] = useState(false);
  const [fundamentalsOpen, setFundamentalsOpen] = useState(false);

  const coreNavItems = getCoreNavItems(t);
  const deliverableNavItems = getDeliverableNavItems(t);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDeliverablesOpen(false);
    setFundamentalsOpen(false);
  }, [pathname]);

  const isDeliverablePath = deliverableNavItems.some(i => i.path === pathname);
  const isFundamentalsPath = coreNavItems.some(i => i.path === pathname);
  const isNccPath = pathname === '/ncc-guide';

  return (
    <>
      {/* ===== NAVBAR ===== */}
      {/* 30% dark top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
          scrolled ? 'shadow-lg' : 'shadow-none'
        }`}
        style={{ background: '#111827' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                style={{ background: '#DC2626' }}
              >
                <FileText size={15} className="text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-sm text-white leading-none">{t('site_title')}</p>
                <p className="text-[10px] mt-0.5" style={{ color: '#9CA3AF' }}>{t('site_subtitle')}</p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden xl:flex items-center gap-1.5">
              {/* NCC Guide */}
              <Link
                href="/ncc-guide"
                className="relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-150"
                style={{
                  color: isNccPath ? '#FFFFFF' : '#9CA3AF',
                  background: isNccPath ? '#DC2626' : 'transparent',
                }}
                onMouseEnter={e => { if (!isNccPath) (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
                onMouseLeave={e => { if (!isNccPath) (e.currentTarget as HTMLElement).style.color = '#9CA3AF'; }}
              >
                {t('nav_ncc')}
              </Link>

              {/* PRD Fundamentals Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setFundamentalsOpen(p => !p);
                    setDeliverablesOpen(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                  style={{
                    color: isFundamentalsPath ? '#FFFFFF' : '#9CA3AF',
                    background: isFundamentalsPath ? '#DC2626' : 'transparent',
                  }}
                >
                  {t('nav_fundamentals')}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${fundamentalsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {fundamentalsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full mt-2 left-0 w-56 rounded-xl overflow-hidden shadow-xl"
                      style={{ background: '#1F2937', border: '1px solid #374151' }}
                    >
                      {coreNavItems.map(item => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;
                        return (
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setFundamentalsOpen(false)}
                            className="flex items-center gap-2.5 px-4 py-3 text-sm transition-colors duration-150"
                            style={{
                              color: isActive ? '#FFFFFF' : '#9CA3AF',
                              background: isActive ? '#DC2626' : 'transparent',
                            }}
                          >
                            <Icon size={14} />
                            {item.name}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Deliverables Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setDeliverablesOpen(p => !p);
                    setFundamentalsOpen(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150"
                  style={{
                    color: isDeliverablePath ? '#FFFFFF' : '#9CA3AF',
                    background: isDeliverablePath ? '#DC2626' : 'transparent',
                  }}
                >
                  {t('nav_deliverables')}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${deliverablesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {deliverablesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full mt-2 right-0 w-52 rounded-xl overflow-hidden shadow-xl"
                      style={{ background: '#1F2937', border: '1px solid #374151' }}
                    >
                      {deliverableNavItems.map(item => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;
                        return (
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setDeliverablesOpen(false)}
                            className="flex items-center gap-2.5 px-4 py-3 text-sm transition-colors duration-150"
                            style={{
                              color: isActive ? '#FFFFFF' : '#9CA3AF',
                              background: isActive ? '#DC2626' : 'transparent',
                            }}
                          >
                            <Icon size={14} />
                            {item.name}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Language Flag Selector */}
              <div
                id="lang-toggle-container"
                className="flex items-center p-0.5 rounded-lg border text-xs font-semibold"
                style={{ borderColor: '#374151', background: '#111827' }}
              >
                <button
                  id="lang-en-btn"
                  onClick={() => language !== 'en' && toggleLanguage()}
                  aria-label="Switch to English"
                  title="English"
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all duration-150 ${
                    language === 'en'
                      ? 'bg-red-600 text-white font-bold shadow-xs'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <UKFlag className="w-4 h-3" />
                  <span className="hidden sm:inline">EN</span>
                </button>
                <button
                  id="lang-mm-btn"
                  onClick={() => language !== 'mm' && toggleLanguage()}
                  aria-label="Switch to Myanmar"
                  title="မြန်မာ"
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all duration-150 ${
                    language === 'mm'
                      ? 'bg-red-600 text-white font-bold shadow-xs'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <MyanmarFlag className="w-4 h-3" />
                  <span className="hidden sm:inline">MM</span>
                </button>
              </div>

              {/* Mobile hamburger */}
              <button
                id="mobile-menu-btn"
                onClick={() => setMenuOpen(p => !p)}
                aria-label="Toggle menu"
                className="xl:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-150"
                style={{ border: '1px solid #374151', color: '#D1D5DB' }}
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.span key="x"
                      initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.12 }}>
                      <X size={16} />
                    </motion.span>
                  ) : (
                    <motion.span key="menu"
                      initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.12 }}>
                      <Menu size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="xl:hidden overflow-hidden"
              style={{ background: '#1F2937', borderTop: '1px solid #374151' }}
            >
              <div className="px-4 py-4 space-y-1">
                <Link
                  href="/ncc-guide"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors mb-3"
                  style={{
                    background: isNccPath ? '#DC2626' : 'transparent',
                    color: isNccPath ? '#FFFFFF' : '#9CA3AF',
                  }}
                >
                  <FileText size={14} />
                  {t('nav_ncc')}
                </Link>

                <p className="text-[10px] font-bold uppercase tracking-widest px-3 pb-2 border-t pt-3" style={{ color: '#6B7280', borderColor: '#374151' }}>
                  {t('nav_fundamentals')}
                </p>
                {coreNavItems.map(item => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors"
                      style={{
                        background: isActive ? '#DC2626' : 'transparent',
                        color: isActive ? '#FFFFFF' : '#9CA3AF',
                      }}
                    >
                      <Icon size={14} />
                      {item.name}
                    </Link>
                  );
                })}
                <div className="pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest px-3 pb-2" style={{ color: '#6B7280' }}>
                    {t('nav_deliverables')}
                  </p>
                  {deliverableNavItems.map(item => {
                    const Icon = item.icon;
                    const isActive = pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors"
                        style={{
                          background: isActive ? '#DC2626' : 'transparent',
                          color: isActive ? '#FFFFFF' : '#9CA3AF',
                        }}
                      >
                        <Icon size={14} />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile Language Switcher */}
                <div className="pt-4 border-t mt-3 px-1 flex items-center justify-between" style={{ borderColor: '#374151' }}>
                  <span className="text-xs font-medium text-gray-400">Language / ဘာသာစကား</span>
                  <div
                    className="flex items-center p-0.5 rounded-lg border text-xs font-semibold"
                    style={{ borderColor: '#374151', background: '#111827' }}
                  >
                    <button
                      onClick={() => language !== 'en' && toggleLanguage()}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all duration-150 ${
                        language === 'en'
                          ? 'bg-red-600 text-white font-bold shadow-xs'
                          : 'text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <UKFlag className="w-4 h-3" />
                      <span>English</span>
                    </button>
                    <button
                      onClick={() => language !== 'mm' && toggleLanguage()}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all duration-150 ${
                        language === 'mm'
                          ? 'bg-red-600 text-white font-bold shadow-xs'
                          : 'text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <MyanmarFlag className="w-4 h-3" />
                      <span>မြန်မာ</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {(deliverablesOpen || fundamentalsOpen) && (
        <div className="fixed inset-0 z-40" onClick={() => {
          setDeliverablesOpen(false);
          setFundamentalsOpen(false);
        }} />
      )}
    </>
  );
}
