'use client';

import Link from 'next/link';
import { BookOpen, HelpCircle, Layers, CheckCircle2, ArrowRight, Target, CheckSquare, RotateCcw, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function NccGuide() {
  const { t } = useLanguage();
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load state from localStorage on mount (SSR safe)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ncc_checklist_state');
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load checklist state', e);
    }
    setIsLoaded(true);
  }, []);

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev => {
      const updated = { ...prev, [idx]: !prev[idx] };
      try {
        localStorage.setItem('ncc_checklist_state', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save checklist state', e);
      }
      return updated;
    });
  };

  const selectAll = () => {
    const allChecked: Record<number, boolean> = { 0: true, 1: true, 2: true, 3: true };
    setCheckedItems(allChecked);
    try {
      localStorage.setItem('ncc_checklist_state', JSON.stringify(allChecked));
    } catch (e) {}
  };

  const resetAll = () => {
    setCheckedItems({});
    try {
      localStorage.removeItem('ncc_checklist_state');
    } catch (e) {}
  };

  const items = [
    { title: t('ncc_chk_1'), desc: t('ncc_chk_1_desc') },
    { title: t('ncc_chk_2'), desc: t('ncc_chk_2_desc') },
    { title: t('ncc_chk_3'), desc: t('ncc_chk_3_desc') },
    { title: t('ncc_chk_4'), desc: t('ncc_chk_4_desc') },
  ];
  const totalItems = items.length;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalItems) * 100);
  const isAllComplete = completedCount === totalItems;

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

        {/* 2. Marking Criteria Breakdown */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <Target size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('ncc_rubric_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#374151' }}>{t('ncc_rubric_intro')}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: t('ncc_rubric_c1_title'), body: t('ncc_rubric_c1_desc'), color: 'bg-red-50 border-red-100' },
                { title: t('ncc_rubric_c2_title'), body: t('ncc_rubric_c2_desc'), color: 'bg-blue-50 border-blue-100' },
                { title: t('ncc_rubric_c3_title'), body: t('ncc_rubric_c3_desc'), color: 'bg-green-50 border-green-100' },
                { title: t('ncc_rubric_c4_title'), body: t('ncc_rubric_c4_desc'), color: 'bg-yellow-50 border-yellow-100' },
                { title: t('ncc_rubric_c5_title'), body: t('ncc_rubric_c5_desc'), color: 'bg-purple-50 border-purple-100' },
              ].map((c, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${c.color}`}>
                  <h3 className="font-bold text-sm mb-1 text-gray-900">{c.title}</h3>
                  <p className="text-xs text-gray-600">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. Step-by-Step Breakdown */}
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

        {/* 4. Pro Tips */}
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

        {/* 5. Interactive Checklist */}
        <motion.div 
          whileHover={{ scale: 1.005, y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card shadow-sm"
        >
          <div className="card-header flex justify-between items-center flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
                <CheckSquare size={16} className="text-white" />
              </div>
              <h2 className="font-bold">{t('ncc_chk_title')}</h2>
            </div>
            
            {/* Quick Action Controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={selectAll}
                className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <CheckSquare size={13} />
                {t('ncc_chk_select_all')}
              </button>
              <button 
                onClick={resetAll}
                className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw size={13} />
                {t('ncc_chk_reset')}
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{t('ncc_chk_intro')}</p>

            {/* Progress Meter & Bar */}
            <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('ncc_chk_progress')}</span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full transition-colors ${
                    isAllComplete ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-amber-100 text-amber-800 border border-amber-300'
                  }`}>
                    {isAllComplete ? `✓ ${t('ncc_chk_ready')}` : `${completedCount}/${totalItems} (${progressPercent}%)`}
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-800">{progressPercent}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden p-0.5">
                <motion.div 
                  className={`h-full rounded-full transition-colors duration-500 ${
                    isAllComplete ? 'bg-gradient-to-r from-emerald-500 to-green-600' : progressPercent > 50 ? 'bg-gradient-to-r from-amber-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-amber-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                />
              </div>
            </div>

            {/* Completion Banner (Pops up when 100% complete) */}
            {isAllComplete && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-900 shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
                  <Sparkles size={16} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-emerald-950 flex items-center gap-1.5">
                    {t('ncc_chk_ready')}
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {t('ncc_chk_complete_banner')}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Checklist Items */}
            <div className="space-y-3">
              {items.map((item, idx) => {
                const isChecked = checkedItems[idx] || false;
                return (
                  <motion.div 
                    key={idx}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => toggleCheck(idx)}
                    className={`group flex items-start gap-4 p-4 rounded-xl cursor-pointer border transition-all duration-200 select-none ${
                      isChecked 
                        ? 'bg-emerald-50/70 border-emerald-300 shadow-xs' 
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                    }`}
                  >
                    {/* Custom Checkbox Indicator */}
                    <div className="mt-0.5 shrink-0 flex items-center justify-center">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 ${
                        isChecked 
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs' 
                          : 'border-gray-300 group-hover:border-red-400 bg-white'
                      }`}>
                        {isChecked && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                          >
                            <Check size={14} strokeWidth={3} />
                          </motion.div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold transition-colors duration-200 ${
                          isChecked ? 'text-emerald-900 line-through decoration-emerald-500/60' : 'text-gray-900 group-hover:text-red-700'
                        }`}>
                          {item.title}
                        </span>
                        {isChecked && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0 ml-2">
                            Done
                          </span>
                        )}
                      </div>
                      <p className={`text-xs leading-relaxed transition-colors duration-200 ${
                        isChecked ? 'text-emerald-700/80' : 'text-gray-500'
                      }`}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/" className="btn-ghost">← {t('back_home')}</Link>
        <Link href="/core-components" className="btn-red">{t('nav_core')} <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
