'use client';

import Link from 'next/link';
import { ArrowRight, DollarSign, Megaphone, BarChart3, Target } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function GtmPlan() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('gtm_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('gtm_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{t('gtm_intro')}</p>
      </div>

      <div className="space-y-6">

        {/* 1. Competitive Positioning */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <Target size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('gtm_pos_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {t('gtm_pos_intro')}
            </p>
            
            <div className="relative p-6 rounded-xl border flex justify-center items-center h-64" style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}>
              {/* Matrix Axes */}
              <div className="absolute inset-x-8 top-1/2 h-px bg-gray-300"></div>
              <div className="absolute inset-y-8 left-1/2 w-px bg-gray-300"></div>
              
              <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-semibold text-gray-500 whitespace-nowrap">{t('gtm_pos_matrix_y')}</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-500">{t('gtm_pos_matrix_x')}</div>

              {/* Competitors */}
              <div className="absolute top-1/4 right-1/4 p-2 rounded-lg bg-red-100 border border-red-200 shadow-sm text-center transform translate-x-1/2 -translate-y-1/2">
                <span className="text-sm font-bold text-red-700 whitespace-nowrap">✨ {t('gtm_pos_our_product')}</span>
              </div>
              <div className="absolute top-1/4 left-1/4 p-2 rounded text-center opacity-60">
                <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{t('gtm_pos_legacy')}</span>
              </div>
              <div className="absolute bottom-1/4 left-1/4 p-2 rounded text-center opacity-60">
                <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{t('gtm_pos_cheap')}</span>
              </div>
              <div className="absolute bottom-1/4 right-1/4 p-2 rounded text-center opacity-60">
                <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{t('gtm_pos_niche')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Monetization */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <DollarSign size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('gtm_monetization_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {t('gtm_monetization_intro')}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: '🔄', name: t('gtm_mon_saas'),
                  desc: t('gtm_mon_saas_desc'),
                  tiers: [{ label: t('gtm_mon_saas_t1'), price: '$9/mo' }, { label: t('gtm_mon_saas_t2'), price: '$29/mo' }, { label: t('gtm_mon_saas_t3'), price: 'Custom' }],
                  tierTitle: t('gtm_mon_saas_tier')
                },
                {
                  icon: '🆓', name: t('gtm_mon_free'),
                  desc: t('gtm_mon_free_desc'),
                  decisions: [t('gtm_mon_free_d1'), t('gtm_mon_free_d2'), t('gtm_mon_free_d3')],
                  decTitle: t('gtm_mon_free_dec')
                },
                {
                  icon: '⚡', name: t('gtm_mon_pay'),
                  desc: t('gtm_mon_pay_desc'),
                  decisions: [t('gtm_mon_pay_d1'), t('gtm_mon_pay_d2'), t('gtm_mon_pay_d3')],
                  decTitle: t('gtm_mon_pay_dec')
                },
              ].map(model => (
                <div key={model.name} className="p-4 rounded-xl border" style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{model.icon}</span>
                    <h3 className="font-bold text-sm" style={{ color: '#111827' }}>{model.name}</h3>
                  </div>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: '#6B7280' }}>{model.desc}</p>
                  {model.tiers && (
                    <div className="space-y-1">
                      <p className="text-xs font-semibold" style={{ color: '#111827' }}>{model.tierTitle}</p>
                      {model.tiers.map(tier => (
                        <div key={tier.label} className="flex justify-between rounded px-2 py-1 text-xs" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#4B5563' }}>
                          <span>{tier.label}</span><span className="font-bold" style={{ color: '#DC2626' }}>{tier.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {model.decisions && (
                    <div className="space-y-0.5 text-xs" style={{ color: '#4B5563' }}>
                      <p className="font-semibold mb-1" style={{ color: '#111827' }}>{model.decTitle}</p>
                      {model.decisions.map(d => <p key={d}>• {d}</p>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. GTM Strategy */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <Megaphone size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('gtm_strat_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {t('gtm_strat_intro')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>{t('gtm_strat_pre')}</h3>
                <ul className="space-y-2 text-xs" style={{ color: '#4B5563' }}>
                  {[t('gtm_strat_pre_i1'), t('gtm_strat_pre_i2'), t('gtm_strat_pre_i3'), t('gtm_strat_pre_i4')].map(item => (
                    <li key={item} className="flex items-start gap-2"><span style={{ color: '#DC2626' }}>→</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>{t('gtm_strat_post')}</h3>
                <ul className="space-y-2 text-xs" style={{ color: '#4B5563' }}>
                  {[t('gtm_strat_post_i1'), t('gtm_strat_post_i2'), t('gtm_strat_post_i3'), t('gtm_strat_post_i4')].map(item => (
                    <li key={item} className="flex items-start gap-2"><span style={{ color: '#DC2626' }}>→</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Success Metrics */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <BarChart3 size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('gtm_metrics_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {t('gtm_metrics_intro')}
            </p>
            <div className="overflow-hidden border rounded-xl" style={{ borderColor: '#E5E7EB' }}>
              <table className="w-full text-sm text-left">
                <thead style={{ background: '#1F2937', color: '#FFFFFF' }}>
                  <tr>
                    <th className="px-4 py-3 font-semibold">{t('gtm_metrics_col_metric')}</th>
                    <th className="px-4 py-3 font-semibold">{t('gtm_metrics_col_def')}</th>
                    <th className="px-4 py-3 font-semibold">{t('gtm_metrics_col_target')}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: t('gtm_metrics_dau'), def: t('gtm_metrics_dau_def'), target: t('gtm_metrics_dau_target') },
                    { metric: t('gtm_metrics_act'), def: t('gtm_metrics_act_def'), target: t('gtm_metrics_act_target') },
                    { metric: t('gtm_metrics_ret'), def: t('gtm_metrics_ret_def'), target: t('gtm_metrics_ret_target') },
                    { metric: t('gtm_metrics_churn'), def: t('gtm_metrics_churn_def'), target: t('gtm_metrics_churn_target') },
                    { metric: t('gtm_metrics_cac'), def: t('gtm_metrics_cac_def'), target: t('gtm_metrics_cac_target') },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0" style={{ borderColor: '#E5E7EB' }}>
                      <td className="px-4 py-3 font-semibold whitespace-nowrap" style={{ color: '#111827' }}>{row.metric}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: '#6B7280' }}>{row.def}</td>
                      <td className="px-4 py-3 font-medium text-xs" style={{ color: '#DC2626' }}>{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/tech-strategy" className="btn-ghost">{t('back')}</Link>
        <Link href="/risk-management" className="btn-red">Maintenance & Risk <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
