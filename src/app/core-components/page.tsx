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
        { label: 'Project Name', body: 'The official name of the product or feature' },
        { label: 'Author', body: 'The writer (typically the Product Manager)' },
        { label: 'Status', body: 'Current state (e.g. Draft, In Review, Approved)' },
        { label: 'Target Release Date', body: 'Estimated launch date' },
      ],
    },
    {
      num: 2, title: t('core_s2_title'),
      items: [
        { label: 'Problem Statement', body: 'What specific user pain point is this product solving?' },
        { label: 'Objective/Goal', body: 'What business or user outcome does this product aim to achieve?' },
      ],
    },
    {
      num: 3, title: t('core_s3_title'),
      body: 'Who will use this product? User Personas should be clearly defined with demographic and behavioral context.',
      note: '(e.g. Online shoppers aged 20–35 who prefer mobile-first experiences)',
    },
    {
      num: 4, title: t('core_s4_title'),
      items: [
        { label: 'In-Scope', body: 'What features and functionality will be included in this release?' },
        { label: 'Out-of-Scope', body: 'What is explicitly excluded (deferred to future versions)?' },
      ],
    },
    {
      num: 5, title: t('core_s5_title'), badge: 'Most Critical Section',
      items: [
        { label: 'Functional Requirements', body: 'What must the system do? (e.g. Users can log in via email, reset passwords)' },
        { label: 'Non-functional Requirements', body: 'Performance benchmarks, security standards, scalability expectations' },
      ],
    },
    {
      num: 6, title: t('core_s6_title'),
      items: [
        { label: 'User Journey / User Flow', body: 'Step-by-step walkthrough of how users will interact with the product' },
        { label: 'Designs', body: 'Wireframes, mockups, or Figma design links should be attached or referenced here' },
      ],
    },
    {
      num: 7, title: t('core_s7_title'),
      body: 'How will you measure whether this product is successful after launch?',
      note: '(e.g. Daily Active Users up 20%, Conversion rate improves by 5%, Checkout completion rate ≥ 90%)',
    },
    {
      num: 8, title: t('core_s8_title'),
      items: [
        { label: 'Assumptions', body: 'Conditions presumed to be true when the project begins' },
        { label: 'Constraints', body: 'Known limitations in time, budget, or technology that will affect delivery' },
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
        <Link href="/examples" className="btn-red">Real-World Examples <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
