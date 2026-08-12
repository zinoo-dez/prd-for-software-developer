'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const mistakes = [
  {
    id: 1,
    title: 'Over-specifying Technical Implementation',
    problem: 'Writing things like "Add 3 new columns to the database" or "The API must return a JSON response" is a mistake. These are <strong>how</strong> decisions that belong in a Technical Design Document — not a PRD. A PRD defines <strong>what</strong> and <strong>why</strong>, not how.',
    fix: 'In the PRD, focus on <strong>what the system must do</strong> and <strong>why it matters to the user</strong>. Let engineers decide how to build it.',
  },
  {
    id: 2,
    title: 'Undefined Scope (Scope Creep)',
    problem: 'Failing to explicitly define what is <strong>out of scope</strong> is one of the leading causes of missed deadlines. When boundaries are fuzzy, stakeholders continuously request new features mid-sprint, causing scope creep that derails entire releases.',
    fix: 'Treat the Out-of-Scope list with the same rigor as In-Scope. Every item deferred must be explicitly named and acknowledged by stakeholders.',
  },
  {
    id: 3,
    title: 'Missing Success Metrics',
    problem: 'Shipping a feature without pre-defined success metrics means you have no way to know if it worked. Too many teams build, ship, and then ask "was it successful?" — without any baseline to compare against.',
    fix: 'Define measurable KPIs before writing a single line of code. Set up analytics tracking early so you have baseline data ready at launch.',
  },
  {
    id: 4,
    title: 'Wall-of-Text Format',
    problem: 'A 30–40 page document filled with dense paragraphs will not be read. When team members skip sections due to poor formatting, critical information is missed, leading to misalignment and costly rework.',
    fix: 'Use bullet points, tables, numbered lists, and embedded visuals (wireframes, flow diagrams). A PRD that can be scanned in 5 minutes is far more effective than one that requires 2 hours to read.',
  },
  {
    id: 5,
    title: 'Writing in Isolation (No Stakeholder Input)',
    problem: 'A PRD written by a PM alone — without input from Engineering, Design, or QA — often contains unrealistic requirements or misses critical technical constraints that surface only during development.',
    fix: 'Involve all key stakeholders in the PRD review process before it is finalized. Run a kickoff session to validate requirements and surface constraints early.',
  },
];

export default function Mistakes() {
  const { t } = useLanguage();

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
                  ❌ The Problem
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
                  ✅ The Fix
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
