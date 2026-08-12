'use client';

import Link from 'next/link';
import { ArrowRight, Database, Webhook, MonitorPlay, MessageSquareText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function DeepDives() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('deep_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('deep_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{t('deep_intro')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Deep Dive 1: DB */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col h-full rounded-2xl p-6"
          style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#EFF6FF', color: '#3B82F6' }}>
            <Database size={24} />
          </div>
          <h2 className="font-bold text-xl mb-3" style={{ color: '#111827' }}>{t('deep_db_title')}</h2>
          <p className="text-sm leading-relaxed mb-6 grow" style={{ color: '#4B5563' }}>{t('deep_db_desc')}</p>
          <div className="pt-4 border-t flex items-center text-sm font-semibold gap-2 transition-colors cursor-pointer" style={{ borderColor: '#F3F4F6', color: '#3B82F6' }}>
            Read Deep Dive <ArrowRight size={16} />
          </div>
        </motion.div>

        {/* Deep Dive 2: API */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col h-full rounded-2xl p-6"
          style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#FDF4FF', color: '#C026D3' }}>
            <Webhook size={24} />
          </div>
          <h2 className="font-bold text-xl mb-3" style={{ color: '#111827' }}>{t('deep_api_title')}</h2>
          <p className="text-sm leading-relaxed mb-6 grow" style={{ color: '#4B5563' }}>{t('deep_api_desc')}</p>
          <div className="pt-4 border-t flex items-center text-sm font-semibold gap-2 transition-colors cursor-pointer" style={{ borderColor: '#F3F4F6', color: '#C026D3' }}>
            Read Deep Dive <ArrowRight size={16} />
          </div>
        </motion.div>

        {/* Deep Dive 3: Arch */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col h-full rounded-2xl p-6"
          style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#FFFBEB', color: '#D97706' }}>
            <MonitorPlay size={24} />
          </div>
          <h2 className="font-bold text-xl mb-3" style={{ color: '#111827' }}>{t('deep_arch_title')}</h2>
          <p className="text-sm leading-relaxed mb-6 grow" style={{ color: '#4B5563' }}>{t('deep_arch_desc')}</p>
          <div className="pt-4 border-t flex items-center text-sm font-semibold gap-2 transition-colors cursor-pointer" style={{ borderColor: '#F3F4F6', color: '#D97706' }}>
            Read Deep Dive <ArrowRight size={16} />
          </div>
        </motion.div>

        {/* Deep Dive 4: Comm */}
        <motion.div
          whileHover={{ y: -5 }}
          className="flex flex-col h-full rounded-2xl p-6"
          style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#F0FDF4', color: '#15803D' }}>
            <MessageSquareText size={24} />
          </div>
          <h2 className="font-bold text-xl mb-3" style={{ color: '#111827' }}>{t('deep_comm_title')}</h2>
          <p className="text-sm leading-relaxed mb-6 grow" style={{ color: '#4B5563' }}>{t('deep_comm_desc')}</p>
          <div className="pt-4 border-t flex items-center text-sm font-semibold gap-2 transition-colors cursor-pointer" style={{ borderColor: '#F3F4F6', color: '#15803D' }}>
            Read Deep Dive <ArrowRight size={16} />
          </div>
        </motion.div>

      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/core-components" className="btn-ghost">{t('back')}</Link>
        <Link href="/tools" className="btn-red">{t('nav_tools')} <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
