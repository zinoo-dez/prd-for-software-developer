'use client';

import Link from 'next/link';
import { PenTool, CheckSquare, ImageIcon, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Tools() {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'docs', icon: PenTool, label: t('tl_cat1'),
      tools: [
        { name: t('tl_cat1_1_n'), desc: t('tl_cat1_1_d') },
        { name: t('tl_cat1_2_n'), desc: t('tl_cat1_2_d') },
        { name: t('tl_cat1_3_n'), desc: t('tl_cat1_3_d') },
      ],
    },
    {
      id: 'tickets', icon: CheckSquare, label: t('tl_cat2'),
      intro: t('tl_cat2_intro'),
      tools: [
        { name: t('tl_cat2_1_n'), desc: t('tl_cat2_1_d') },
        { name: t('tl_cat2_2_n'), desc: t('tl_cat2_2_d') },
      ],
    },
    {
      id: 'design', icon: ImageIcon, label: t('tl_cat3'),
      tools: [
        { name: t('tl_cat3_1_n'), desc: t('tl_cat3_1_d') },
        { name: t('tl_cat3_2_n'), desc: t('tl_cat3_2_d') },
      ],
    },
  ];

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('tools_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('tools_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{t('tools_intro')}</p>
      </div>

      {/* Categories */}
      <div className="space-y-5">
        {categories.map(cat => {
          const Icon = cat.icon;
          return (
            <div key={cat.id} className="card">
              {/* Dark header */}
              <div className="card-header">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
                  <Icon size={15} className="text-white" />
                </div>
                <h2 className="font-bold">{cat.label}</h2>
              </div>

              <div className="p-6">
                {cat.intro && (
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>{cat.intro}</p>
                )}
                <div className={`grid gap-4 ${cat.tools.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                  {cat.tools.map(tool => (
                    <motion.div
                      key={tool.name}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="p-4 rounded-xl cursor-pointer"
                      style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}
                    >
                      <h3 className="font-bold text-sm mb-2" style={{ color: '#111827' }}>{tool.name}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{tool.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/templates" className="btn-ghost">{t('back')}</Link>
        <Link href="/mistakes" className="btn-red">{t('tools_nav_mistakes')} <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
