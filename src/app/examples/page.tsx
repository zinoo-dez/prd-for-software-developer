'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Examples() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('examples_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('examples_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{t('examples_intro')}</p>
      </div>

      <div className="space-y-5">

        {/* Example 1 — User Stories */}
        <div className="card">
          <div className="card-header">
            <div className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold" style={{ background: '#DC2626' }}>1</div>
            <h2 className="font-bold">Example 1 — Writing User Stories</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              A User Story describes a feature from the user&apos;s perspective. The standard format is:{' '}
              <code
                className="px-2 py-0.5 rounded text-xs font-mono"
                style={{ background: '#FEE2E2', color: '#B91C1C', border: '1px solid #FECACA' }}
              >
                As a [user type], I want to [action] so that [benefit/value].
              </code>
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div
                className="p-5 rounded-xl"
                style={{ background: '#FFF5F5', border: '1px solid #FECACA' }}
              >
                <h3 className="font-bold mb-3 flex items-center gap-2 text-sm" style={{ color: '#B91C1C' }}>
                  <span className="text-lg">❌</span> Poorly Written
                </h3>
                <p className="text-sm" style={{ color: '#7F1D1D' }}>&quot;Add a password reset button to the system.&quot;</p>
                <p className="text-xs mt-2" style={{ color: '#EF4444' }}>(Missing context: who needs it and why?)</p>
              </div>

              <div
                className="p-5 rounded-xl"
                style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}
              >
                <h3 className="font-bold mb-3 flex items-center gap-2 text-sm" style={{ color: '#15803D' }}>
                  <span className="text-lg">✅</span> Well Written
                </h3>
                <p className="text-sm" style={{ color: '#14532D' }}>
                  &quot;As a <strong>registered user</strong>, I want to <strong>reset my password via email</strong> so that <strong>I can regain access if I forget it.</strong>&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Example 2 — Success Metrics */}
        <div className="card">
          <div className="card-header">
            <div className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold" style={{ background: '#DC2626' }}>2</div>
            <h2 className="font-bold">Example 2 — Defining Success Metrics</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              Suppose you are adding a new &quot;Add to Cart&quot; experience to an e-commerce website. Here is how you would define measurable success criteria before development begins:
            </p>
            <div className="space-y-3">
              {[
                { label: 'Conversion Rate', metric: '+15%', body: 'Add-to-cart actions must increase compared to the baseline.' },
                { label: 'Task Success Rate', metric: '90%', body: 'Of new users must successfully complete checkout without assistance.' },
                { label: 'System Performance', metric: '< 1s', body: 'Cart confirmation must appear within 1 second of the button click.' },
              ].map(item => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.015, x: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 p-4 rounded-xl cursor-pointer"
                  style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}
                >
                  <div
                    className="shrink-0 w-14 text-center py-1 rounded-lg font-bold text-sm"
                    style={{ background: '#DC2626', color: '#FFFFFF' }}
                  >
                    {item.metric}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#111827' }}>{item.label}</p>
                    <p className="text-xs" style={{ color: '#6B7280' }}>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Example 3 — Scope */}
        <div className="card">
          <div className="card-header">
            <div className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold" style={{ background: '#DC2626' }}>3</div>
            <h2 className="font-bold">Example 3 — Scope Definition (In vs Out)</h2>
          </div>
          <div className="p-6">
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#374151' }}>
              When launching <strong style={{ color: '#111827' }}>Version 1.0 of a Chat Application</strong>, clearly separate what is included from what is deliberately deferred:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div
                  className="flex items-center gap-2 font-semibold pb-3 mb-3 text-sm"
                  style={{ color: '#111827', borderBottom: '2px solid #DC2626' }}
                >
                  🎯 In-Scope (V1.0)
                </div>
                <ul className="space-y-2">
                  {['1-to-1 text messaging', 'Image sharing', 'Read receipts', 'Push notifications'].map(i => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: '#374151' }}>
                      <span style={{ color: '#DC2626' }}>✓</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div
                  className="flex items-center gap-2 font-semibold pb-3 mb-3 text-sm"
                  style={{ color: '#6B7280', borderBottom: '2px solid #E5E7EB' }}
                >
                  🚫 Out-of-Scope (Future)
                </div>
                <ul className="space-y-2">
                  {['Group chat creation', 'Voice & video calls', 'Stickers & GIFs', 'End-to-end encryption'].map(i => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: '#9CA3AF' }}>
                      <span>×</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/core-components" className="btn-ghost">← {t('back')}</Link>
        <Link href="/templates" className="btn-red">PRD Templates <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
