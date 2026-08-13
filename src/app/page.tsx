'use client';

import { 
  BookOpen, Target, Users, ArrowRight, CheckCircle2, Layers, 
  Wrench, FileCode, ShieldAlert, Sparkles, Compass, Cpu, 
  Layout, Activity, Rocket, CheckSquare, ChevronRight, Zap
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'meta' | 'stories' | 'api' | 'metrics'>('meta');
  const [activeStage, setActiveStage] = useState<number>(0);

  const anatomyTabs = [
    { id: 'meta' as const, title: t('home_anatomy_meta'), icon: FileCode, tip: t('home_anatomy_meta_tip') },
    { id: 'stories' as const, title: t('home_anatomy_stories'), icon: CheckSquare, tip: t('home_anatomy_stories_tip') },
    { id: 'api' as const, title: t('home_anatomy_api'), icon: Cpu, tip: t('home_anatomy_api_tip') },
    { id: 'metrics' as const, title: t('home_anatomy_metrics'), icon: Activity, tip: t('home_anatomy_metrics_tip') },
  ];

  const lifecycleStages = [
    { title: t('home_life_s1'), desc: t('home_life_s1_desc'), color: 'bg-red-500 text-white' },
    { title: t('home_life_s2'), desc: t('home_life_s2_desc'), color: 'bg-amber-500 text-white' },
    { title: t('home_life_s3'), desc: t('home_life_s3_desc'), color: 'bg-blue-500 text-white' },
    { title: t('home_life_s4'), desc: t('home_life_s4_desc'), color: 'bg-purple-500 text-white' },
    { title: t('home_life_s5'), desc: t('home_life_s5_desc'), color: 'bg-emerald-500 text-white' },
  ];

  return (
    <div className="space-y-10 animate-in">

      {/* ── 1. Hero Banner ── */}
      <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute -right-12 -top-12 opacity-5 pointer-events-none text-red-600">
          <BookOpen size={300} />
        </div>
        
        <div className="badge-red mb-5 inline-flex items-center">
          <Sparkles size={12} className="mr-1.5" />
          {t('home_badge')}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 leading-[1.15] text-gray-900 max-w-4xl">
          {t('home_h1')}
        </h1>

        <p
          className="text-lg leading-relaxed max-w-3xl mb-8 text-gray-700"
          dangerouslySetInnerHTML={{ __html: t('home_intro') }}
        />

        <div className="flex flex-wrap gap-4 items-center">
          <Link href="/tools/prd-builder" className="btn-red flex items-center gap-2 shadow-xs">
            <Wrench size={16} />
            Generate PRD Now
          </Link>
          <Link href="/core-components" className="btn-ghost flex items-center gap-1.5">
            {t('home_cta')} <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* ── 2. Impact Statistics Bar ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { val: t('home_stat1_val'), lbl: t('home_stat1_lbl'), icon: Users, color: 'text-red-600 bg-red-50 border-red-200' },
          { val: t('home_stat2_val'), lbl: t('home_stat2_lbl'), icon: Zap, color: 'text-amber-600 bg-amber-50 border-amber-200' },
          { val: t('home_stat3_val'), lbl: t('home_stat3_lbl'), icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
        ].map((st, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -3 }}
            className={`p-6 rounded-2xl border flex items-center gap-4 ${st.color} shadow-2xs`}
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs">
              <st.icon size={22} className="shrink-0" />
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight">{st.val}</div>
              <div className="text-xs font-semibold text-gray-700 leading-tight mt-0.5">{st.lbl}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── 3. Blueprint Analogy Callout ── */}
      <div className="callout-red shadow-none">
        <h3 className="font-bold mb-2 text-base text-red-700 flex items-center gap-2">
          <Compass size={18} />
          {t('home_analogy_title')}
        </h3>
        <p
          className="leading-relaxed text-sm text-gray-700"
          dangerouslySetInnerHTML={{ __html: t('home_analogy_body') }}
        />
      </div>

      {/* ── 4. Interactive Anatomy of a World-Class PRD ── */}
      <motion.div 
        whileHover={{ scale: 1.005, y: -2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="card shadow-sm"
      >
        <div className="card-header">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-600">
            <Layers size={16} className="text-white" />
          </div>
          <h2 className="font-bold text-gray-900">{t('home_anatomy_title')}</h2>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-sm leading-relaxed text-gray-700">{t('home_anatomy_intro')}</p>

          {/* Interactive Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {anatomyTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-3 rounded-xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-2 ${
                    isActive 
                      ? 'bg-red-600 text-white border-red-600 shadow-sm' 
                      : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200'
                  }`}
                >
                  <tab.icon size={18} className={isActive ? 'text-white' : 'text-red-600'} />
                  <span className="text-xs font-bold leading-snug">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Explanation Preview */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3">
            {anatomyTabs.map((tab) => {
              if (tab.id !== activeTab) return null;
              return (
                <motion.div 
                  key={tab.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  <h4 className="font-bold text-sm text-gray-900 flex items-center gap-2">
                    <tab.icon size={16} className="text-red-600" />
                    {tab.title} Best Practice
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed font-mono bg-white p-3 rounded-lg border border-gray-200">
                    💡 {tab.tip}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* ── 5. The 5-Stage PRD Development Lifecycle ── */}
      <motion.div 
        whileHover={{ scale: 1.005, y: -2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="card shadow-sm"
      >
        <div className="card-header">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-600">
            <Rocket size={16} className="text-white" />
          </div>
          <h2 className="font-bold text-gray-900">{t('home_life_title')}</h2>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-sm leading-relaxed text-gray-700">{t('home_life_intro')}</p>

          {/* Stage Stepper Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {lifecycleStages.map((st, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                    isSelected ? 'bg-gray-900 text-white border-gray-900 shadow-xs' : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                  }`}
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Stage 0{idx + 1}</div>
                  <div className="text-xs font-bold line-clamp-1">{st.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Details */}
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${lifecycleStages[activeStage].color}`}>
                Stage 0{activeStage + 1}
              </span>
              <h4 className="font-bold text-sm text-gray-900">{lifecycleStages[activeStage].title}</h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {lifecycleStages[activeStage].desc}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── 6. Why Write a PRD ── */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 rounded-full bg-red-600" />
          <h2 className="text-2xl font-bold text-gray-900">
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
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card p-6 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-50 text-red-600">
                  <card.icon size={18} />
                </div>
                <span className="text-xs font-bold text-gray-300">{card.num}</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">{card.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── 7. Resource & Tools Hub Grid ── */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 rounded-full bg-red-600" />
          <h2 className="text-2xl font-bold text-gray-900">
            {t('home_hub_title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'PRD Builder Generator', desc: 'Interactive form to build & copy standard Markdown PRDs.', link: '/tools/prd-builder', icon: Wrench, badge: 'Interactive Tool' },
            { title: 'NCC Project & Exam Guide', desc: 'Grade predictor, rubric breakdown & Given-When-Then matrix.', link: '/ncc-guide', icon: BookOpen, badge: 'Student Guide' },
            { title: 'API & Database Specs', desc: 'REST/GraphQL contracts, JSON schema payloads, and ERD rules.', link: '/api-database', icon: Cpu, badge: 'Technical Spec' },
            { title: 'UX Architecture & Flows', desc: 'Wireframing guidelines, sequence diagrams, and layout principles.', link: '/ux-architecture', icon: Layout, badge: 'Design Spec' },
            { title: 'Go-To-Market (GTM) Plan', desc: 'Launch checklists, user persona targeting, and telemetry metrics.', link: '/gtm-plan', icon: Rocket, badge: 'Strategy' },
            { title: 'Common PRD Mistakes', desc: 'Top traps to avoid: scope creep, vague specs, and missing NFRs.', link: '/mistakes', icon: ShieldAlert, badge: 'Best Practice' },
          ].map((item, idx) => (
            <Link key={idx} href={item.link}>
              <motion.div 
                whileHover={{ y: -3, scale: 1.01 }}
                className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-red-300 transition-all duration-200 flex flex-col justify-between space-y-4 h-full shadow-2xs group"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                      <item.icon size={18} />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold text-red-600 gap-1 pt-2 border-t border-gray-100">
                  Explore <ChevronRight size={14} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── 8. Bottom CTA Banner ── */}
      <div className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-900 text-white shadow-md">
        <div className="space-y-1">
          <p className="font-bold text-xl text-white">Ready to write a world-class PRD?</p>
          <p className="text-sm text-gray-400">Use our interactive PRD Builder tool or copy production-ready templates.</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link href="/tools/prd-builder" className="btn-red shrink-0 shadow-xs">
            PRD Builder <Wrench size={14} />
          </Link>
          <Link href="/templates" className="px-4 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold transition-colors shrink-0">
            View Templates
          </Link>
        </div>
      </div>

    </div>
  );
}
