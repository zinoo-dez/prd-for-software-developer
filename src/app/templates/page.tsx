'use client';

import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const templates = [
  {
    id: 'notion', name: 'Notion PRD Template',
    desc: 'The most popular format at modern tech companies. Integrates with databases, Kanban boards, and team wikis.',
    href: 'https://www.notion.so/templates/product-requirements-document',
    label: 'Get Template',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round">
        <rect x="20" y="10" width="60" height="80" rx="4" />
        <path d="M35 35 L65 35 M35 50 L65 50 M35 65 L50 65" />
      </svg>
    ),
  },
  {
    id: 'gdocs', name: 'Google Docs Template',
    desc: 'Simple and powerful for real-time collaboration. Best for inline comments and review workflows.',
    href: 'https://docs.google.com/document/d/1Xy_JpXb04x63d0-wYg_Q0Vv97YvWwD-0_w2uO4Xw9w/template/preview',
    label: 'Get Template',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
        <path fill="#4285F4" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"/>
        <path fill="#90CAF9" d="M40 13L30 13 30 3z"/>
        <path fill="#1976D2" d="M30 13H40L30 3z"/>
        <path fill="#E3F2FD" d="M15 23H33V27H15zM15 31H33V35H15zM15 15H25V19H15z"/>
      </svg>
    ),
  },
  {
    id: 'confluence', name: 'Confluence Template',
    desc: 'The enterprise standard — deeply integrated with Jira for linking requirements to epics and tickets.',
    href: 'https://www.atlassian.com/software/confluence/templates/product-requirements',
    label: 'Get Template',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="#0052CC">
        <path d="M1.2 16.5c-.3.4-.1 1 .4 1.2l6.2 2.8c.4.2 1 0 1.2-.5.5-1.2 1.5-2.3 2.9-3.1 1.5-.8 3.1-1.1 4.5-.8.5.1 1-.2 1.1-.7l1.2-6.5c.1-.5-.2-1-.7-1.1-4.6-1-9.6 1.3-12 5.7-.3.3-.5.6-.8 1z"/>
        <path d="M22.8 7.5c.3-.4.1-1-.4-1.2L16.2 3.5c-.4-.2-1 0-1.2.5-.5 1.2-1.5 2.3-2.9 3.1-1.5.8-3.1 1.1-4.5.8-.5-.1-1 .2-1.1.7L5.3 14.1c-.1.5.2 1 .7 1.1 4.6 1 9.6-1.3 12-5.7.3-.3.5-.6.8-1z"/>
      </svg>
    ),
  },
  {
    id: 'linear', name: 'Linear PRD Doc',
    desc: "Favored by high-velocity product teams. Beautifully minimal and directly linked to cycles and roadmaps.",
    href: 'https://linear.app',
    label: 'Visit Linear',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="#5E6AD2">
        <path d="M3.95 14.52L9.48 20.05a9.3 9.3 0 01-5.53-5.53zm-.54-1.47L14.05 3.41A9.32 9.32 0 004.41 13.05zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
];

export default function Templates() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('templates_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('templates_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{t('templates_intro')}</p>
      </div>

      {/* Template cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {templates.map((tpl, i) => (
          <motion.div 
            key={tpl.id} 
            whileHover={{ y: -5, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="card group bg-white"
          >
            <div className="card-header justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: '#374151' }}
                >
                  {tpl.icon}
                </div>
                <h2 className="font-bold text-white text-sm">{tpl.name}</h2>
              </div>
              <span className="text-xs font-bold" style={{ color: '#DC2626' }}>
                0{i + 1}
              </span>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>{tpl.desc}</p>
              <a
                href={tpl.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold gap-1 transition-colors"
                style={{ color: '#DC2626' }}
              >
                {tpl.label} <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pro tip — dark strip */}
      <div className="rounded-xl p-6" style={{ background: '#111827' }}>
        <p className="font-semibold text-white mb-1">💡 Pro Tip on Using Templates</p>
        <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
          Templates are starting points, not rigid rules. Always adapt them to match your project&apos;s scale — add sections relevant to your context and remove ones that add no value to your team.
        </p>
      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/examples" className="btn-ghost">{t('back')}</Link>
        <Link href="/tools" className="btn-red">Recommended Tools <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
