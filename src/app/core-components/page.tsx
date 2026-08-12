'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function CoreComponents() {
  const { t } = useLanguage();

  const sections = [
    {
      num: 1, title: t('core_s1_title'),
      items: [
        { label: t('core_s1_i1_lbl'), body: t('core_s1_i1_bd') },
        { label: t('core_s1_i2_lbl'), body: t('core_s1_i2_bd') },
        { label: t('core_s1_i3_lbl'), body: t('core_s1_i3_bd') },
        { label: t('core_s1_i4_lbl'), body: t('core_s1_i4_bd') },
      ],
    },
    {
      num: 2, title: t('core_s2_title'),
      items: [
        { label: t('core_s2_i1_lbl'), body: t('core_s2_i1_bd') },
        { label: t('core_s2_i2_lbl'), body: t('core_s2_i2_bd') },
      ],
    },
    {
      num: 3, title: t('core_s3_title'),
      body: t('core_s3_body'),
      note: t('core_s3_note'),
    },
    {
      num: 4, title: t('core_s4_title'),
      items: [
        { label: t('core_s4_i1_lbl'), body: t('core_s4_i1_bd') },
        { label: t('core_s4_i2_lbl'), body: t('core_s4_i2_bd') },
      ],
    },
    {
      num: 5, title: t('core_s5_title'), badge: t('core_s5_badge'),
      items: [
        { label: t('core_s5_i1_lbl'), body: t('core_s5_i1_bd') },
        { label: t('core_s5_i2_lbl'), body: t('core_s5_i2_bd') },
      ],
    },
    {
      num: 6, title: t('core_s6_title'),
      items: [
        { label: t('core_s6_i1_lbl'), body: t('core_s6_i1_bd') },
        { label: t('core_s6_i2_lbl'), body: t('core_s6_i2_bd') },
      ],
    },
    {
      num: 7, title: t('core_s7_title'),
      body: t('core_s7_body'),
      note: t('core_s7_note'),
    },
    {
      num: 8, title: t('core_s8_title'),
      items: [
        { label: t('core_s8_i1_lbl'), body: t('core_s8_i1_bd') },
        { label: t('core_s8_i2_lbl'), body: t('core_s8_i2_bd') },
      ],
    },
  ];

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('core_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('core_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}
          dangerouslySetInnerHTML={{ __html: t('core_intro') }} />
      </div>

      {/* Section list */}
      <div className="space-y-3">
        {sections.map(section => (
          <motion.div 
            key={section.num} 
            whileHover={{ scale: 1.01, x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="card group hover:shadow-md transition-shadow duration-200"
          >
            {/* 30% dark header strip */}
            <div className="flex items-center gap-4 px-6 py-4" style={{ background: '#111827' }}>
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: '#DC2626', color: '#FFFFFF' }}
              >
                {section.num}
              </span>
              <h2 className="font-bold text-white">{section.title}</h2>
              {section.badge && (
                <span
                  className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: '#DC2626', color: '#FFFFFF' }}
                >
                  {section.badge}
                </span>
              )}
            </div>
            {/* 60% white body */}
            <div className="p-6" style={{ background: '#FFFFFF' }}>
              {section.items ? (
                <ul className="space-y-3">
                  {section.items.map(item => (
                    <li key={item.label} className="flex items-start gap-3 text-sm">
                      <span
                        className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: '#DC2626', marginTop: '7px' }}
                      />
                      <span style={{ color: '#374151' }}>
                        <strong style={{ color: '#111827' }}>{item.label}:</strong>{' '}{item.body}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div>
                  <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{section.body}</p>
                  {section.note && (
                    <p className="text-xs mt-2" style={{ color: '#9CA3AF' }}>{section.note}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Nav footer */}
      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/" className="btn-ghost">{t('back')}</Link>
        <Link href="/examples" className="btn-red">{t('core_nav_examples')} <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
