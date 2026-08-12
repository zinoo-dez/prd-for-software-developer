'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Mistakes() {
  const { t } = useLanguage();

  const mistakes = [
    {
      id: 1,
      title: t('ms1_t'),
      problem: t('ms1_p'),
      fix: t('ms1_f'),
    },
    {
      id: 2,
      title: t('ms2_t'),
      problem: t('ms2_p'),
      fix: t('ms2_f'),
    },
    {
      id: 3,
      title: t('ms3_t'),
      problem: t('ms3_p'),
      fix: t('ms3_f'),
    },
    {
      id: 4,
      title: t('ms4_t'),
      problem: t('ms4_p'),
      fix: t('ms4_f'),
    },
    {
      id: 5,
      title: t('ms5_t'),
      problem: t('ms5_p'),
      fix: t('ms5_f'),
    },
  ];

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('mistakes_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('mistakes_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{t('mistakes_intro')}</p>
      </div>

      {/* Mistakes list */}
      <div className="space-y-4">
        {mistakes.map(m => (
          <motion.div 
            key={m.id} 
            whileHover={{ scale: 1.01, x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="card overflow-hidden"
          >
            {/* Dark header */}
            <div className="flex items-center gap-4 px-6 py-4" style={{ background: '#111827' }}>
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0 font-bold"
                style={{ background: '#DC2626', color: '#FFFFFF' }}
              >
                {m.id}
              </span>
              <h2 className="font-bold text-white">{m.title}</h2>
            </div>

            {/* White body */}
            <div className="p-6 space-y-4">
              {/* Problem */}
              <div
                className="p-4 rounded-xl"
                style={{ background: '#FFF5F5', border: '1px solid #FECACA' }}
              >
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#DC2626' }}>
                  {t('ms_problem')}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#7F1D1D' }}
                  dangerouslySetInnerHTML={{ __html: m.problem }}
                />
              </div>

              {/* Fix */}
              <div
                className="p-4 rounded-xl"
                style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}
              >
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#15803D' }}>
                  {t('ms_fix')}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#14532D' }}
                  dangerouslySetInnerHTML={{ __html: m.fix }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/tools" className="btn-ghost">{t('back')}</Link>
        <Link href="/" className="btn-ghost">{t('back_home')} <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
