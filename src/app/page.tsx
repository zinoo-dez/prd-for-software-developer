'use client';

import { BookOpen, Target, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in">

      {/* ── Hero ── 60% white bg */}
      <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm">
        <div className="badge-red mb-5">
          <BookOpen size={11} />
          {t('home_badge')}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 leading-[1.1]" style={{ color: '#111827' }}>
          {t('home_h1')}
        </h1>
        <p
          className="text-lg leading-relaxed max-w-3xl mb-8"
          style={{ color: '#374151' }}
          dangerouslySetInnerHTML={{ __html: t('home_intro') }}
        />
        <Link href="/core-components" className="btn-red">
          {t('home_cta')} <ArrowRight size={15} />
        </Link>
      </div>

      {/* ── Analogy callout ── 10% red left-border */}
      <div className="callout-red">
        <h3 className="font-bold mb-2 text-base" style={{ color: '#B91C1C' }}>
          {t('home_analogy_title')}
        </h3>
        <p
          className="leading-relaxed"
          style={{ color: '#374151' }}
          dangerouslySetInnerHTML={{ __html: t('home_analogy_body') }}
        />
      </div>

      {/* ── Why Write a PRD ── 30% dark header + 60% white cards */}
      <div>
        {/* Dark section header — 30% */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 rounded-full" style={{ background: '#DC2626' }} />
          <h2 className="text-2xl font-bold" style={{ color: '#111827' }}>
            {t('home_why_title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Users,      title: t('home_card1_title'), body: t('home_card1_body'), num: '01' },
            { icon: Target,     title: t('home_card2_title'), body: t('home_card2_body'), num: '02' },
            { icon: BookOpen,   title: t('home_card3_title'), body: t('home_card3_body'), num: '03' },
            { icon: ArrowRight, title: t('home_card4_title'), body: t('home_card4_body'), num: '04' },
          ].map(card => (
            <motion.div 
              key={card.num} 
              whileHover={{ y: -5, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card p-6 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: '#FEE2E2' }}
                >
                  <card.icon size={18} style={{ color: '#DC2626' }} />
                </div>
                <span className="text-xs font-bold" style={{ color: '#D1D5DB' }}>{card.num}</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#111827' }}>{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Dark strip CTA ── 30% dark */}
      <div className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ background: '#111827' }}>
        <div>
          <p className="font-bold text-white text-lg">Ready to write your first PRD?</p>
          <p className="text-sm mt-1" style={{ color: '#9CA3AF' }}>Start with core components and build from there.</p>
        </div>
        <Link href="/core-components" className="btn-red shrink-0">
          Get Started <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
}
