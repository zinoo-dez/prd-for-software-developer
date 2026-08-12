'use client';

import Link from 'next/link';
import { BookOpen, HelpCircle, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function NccGuide() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">
          <BookOpen size={11} className="mr-1" />
          {t('ncc_badge')}
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('ncc_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{t('ncc_intro')}</p>
      </div>

      <div className="space-y-6">

        {/* 1. Key Question */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <HelpCircle size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('ncc_q_title')}</h2>
          </div>
          <div className="p-6">
            <div className="callout-red shadow-none border-t border-r border-b rounded-r-xl border-gray-100">
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#374151' }}
                dangerouslySetInnerHTML={{ __html: t('ncc_q_body') }}
              />
            </div>
          </div>
        </motion.div>

        {/* 2. Step-by-Step Breakdown */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <Layers size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('ncc_step_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#374151' }}>{t('ncc_step_intro')}</p>
            
            <div className="space-y-4">
              {[
                { title: t('ncc_ch1_title'), body: t('ncc_ch1_body') },
                { title: t('ncc_ch2_title'), body: t('ncc_ch2_body') },
                { title: t('ncc_ch3_title'), body: t('ncc_ch3_body') },
                { title: t('ncc_ch4_title'), body: t('ncc_ch4_body') },
                { title: t('ncc_ch5_title'), body: t('ncc_ch5_body') },
              ].map((ch, idx) => (
                <div key={idx} className="p-5 rounded-xl transition-colors duration-150" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                  <h3 className="font-bold text-sm mb-2" style={{ color: '#111827' }}>{ch.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>{ch.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. Pro Tips */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <CheckCircle2 size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('ncc_tips_title')}</h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: t('ncc_tip1_title'), body: t('ncc_tip1_body') },
                { title: t('ncc_tip2_title'), body: t('ncc_tip2_body') },
                { title: t('ncc_tip3_title'), body: t('ncc_tip3_body') },
                { title: t('ncc_tip4_title'), body: t('ncc_tip4_body') },
              ].map((tip, idx) => (
                <div key={idx} className="p-5 rounded-xl border-t-4" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderTopColor: '#DC2626' }}>
                  <h3 className="font-bold text-sm mb-2" style={{ color: '#111827' }}>💡 {tip.title}</h3>
                  <p 
                    className="text-xs leading-relaxed" 
                    style={{ color: '#6B7280' }}
                    dangerouslySetInnerHTML={{ __html: tip.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/" className="btn-ghost">← {t('back_home')}</Link>
        <Link href="/core-components" className="btn-red">Core Components <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
