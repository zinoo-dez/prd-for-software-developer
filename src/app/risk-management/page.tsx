'use client';

import Link from 'next/link';
import { ShieldCheck, Clock, AlertTriangle, ArrowRight, LifeBuoy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function RiskManagement() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('risk_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('risk_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{t('risk_intro')}</p>
      </div>

      <div className="space-y-6">

        {/* 1. Security Checklist */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <ShieldCheck size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('risk_sec_title')}</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {t('risk_sec_intro')}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>{t('risk_sec_auth')}</h3>
                <div className="space-y-2 text-xs">
                  {[t('risk_sec_auth_i1'), t('risk_sec_auth_i2'), t('risk_sec_auth_i3'), t('risk_sec_auth_i4')].map(item => (
                    <label key={item} className="flex items-center gap-2" style={{ color: '#4B5563' }}>
                      <input type="checkbox" checked readOnly className="accent-red-600 rounded-sm" /> {item}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>{t('risk_sec_data')}</h3>
                <div className="space-y-2 text-xs">
                  {[t('risk_sec_data_i1'), t('risk_sec_data_i2'), t('risk_sec_data_i3'), t('risk_sec_data_i4')].map(item => (
                    <label key={item} className="flex items-center gap-2" style={{ color: '#4B5563' }}>
                      <input type="checkbox" checked readOnly className="accent-red-600 rounded-sm" /> {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>{t('risk_sec_reg')}</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { name: 'GDPR', region: t('risk_sec_reg_eu'), reqs: [t('risk_sec_reg_eu_i1'), t('risk_sec_reg_eu_i2'), t('risk_sec_reg_eu_i3')] },
                  { name: 'CCPA', region: t('risk_sec_reg_us'), reqs: [t('risk_sec_reg_us_i1'), t('risk_sec_reg_us_i2'), t('risk_sec_reg_us_i3')] },
                  { name: 'ISO 27001', region: t('risk_sec_reg_gl'), reqs: [t('risk_sec_reg_gl_i1'), t('risk_sec_reg_gl_i2'), t('risk_sec_reg_gl_i3')] },
                ].map(({ name, region, reqs }) => (
                  <div key={name} className="p-4 rounded-xl border" style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}>
                    <p className="font-bold text-sm mb-0.5" style={{ color: '#111827' }}>{name}</p>
                    <p className="text-xs mb-2" style={{ color: '#6B7280' }}>{region}</p>
                    <ul className="space-y-1 text-xs" style={{ color: '#4B5563' }}>
                      {reqs.map(r => <li key={r}>• {r}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. SLA */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <Clock size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('risk_sla_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {t('risk_sla_intro')}
            </p>
            <div className="overflow-x-auto border rounded-xl" style={{ borderColor: '#E5E7EB' }}>
              <table className="w-full text-sm text-left min-w-[500px]">
                <thead style={{ background: '#1F2937', color: '#FFFFFF' }}>
                  <tr>
                    <th className="px-4 py-3 font-semibold">{t('risk_sla_col_sev')}</th>
                    <th className="px-4 py-3 font-semibold">{t('risk_sla_col_def')}</th>
                    <th className="px-4 py-3 font-semibold">{t('risk_sla_col_res')}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { severity: t('risk_sla_p0'), def: t('risk_sla_p0_def'), response: t('risk_sla_p0_res') },
                    { severity: t('risk_sla_p1'), def: t('risk_sla_p1_def'), response: t('risk_sla_p1_res') },
                    { severity: t('risk_sla_p2'), def: t('risk_sla_p2_def'), response: t('risk_sla_p2_res') },
                    { severity: t('risk_sla_p3'), def: t('risk_sla_p3_def'), response: t('risk_sla_p3_res') },
                  ].map((row, i) => (
                    <tr key={i} className="border-b last:border-0" style={{ borderColor: '#E5E7EB' }}>
                      <td className="px-4 py-3 font-semibold whitespace-nowrap" style={{ color: row.severity.includes('P0') ? '#DC2626' : '#111827' }}>{row.severity}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: '#6B7280' }}>{row.def}</td>
                      <td className="px-4 py-3 font-medium text-xs" style={{ color: '#374151' }}>{row.response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* 3. Incident Response / DR */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <LifeBuoy size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('risk_dr_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {t('risk_dr_intro')}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-red-100 bg-red-50 text-center">
                <h3 className="font-bold text-red-900 mb-1">{t('risk_dr_rto')}</h3>
                <p className="text-xs text-red-700">{t('risk_dr_rto_desc')}</p>
              </div>
              <div className="p-4 rounded-xl border border-red-100 bg-red-50 text-center">
                <h3 className="font-bold text-red-900 mb-1">{t('risk_dr_rpo')}</h3>
                <p className="text-xs text-red-700">{t('risk_dr_rpo_desc')}</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 text-center">
                <h3 className="font-bold text-gray-900 mb-1">{t('risk_dr_comm')}</h3>
                <p className="text-xs text-gray-600">{t('risk_dr_comm_desc')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Risk Mitigation Plan */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <AlertTriangle size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('risk_mit_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {t('risk_mit_intro')}
            </p>
            <div className="space-y-3">
              {[
                { risk: t('risk_mit_r1'), impact: t('risk_mit_r1_imp'),
                  mitigation: [t('risk_mit_r1_m1'), t('risk_mit_r1_m2'), t('risk_mit_r1_m3')] },
                { risk: t('risk_mit_r2'), impact: t('risk_mit_r2_imp'),
                  mitigation: [t('risk_mit_r2_m1'), t('risk_mit_r2_m2'), t('risk_mit_r2_m3')] },
                { risk: t('risk_mit_r3'), impact: t('risk_mit_r3_imp'),
                  mitigation: [t('risk_mit_r3_m1'), t('risk_mit_r3_m2'), t('risk_mit_r3_m3')] },
              ].map(({ risk, impact, mitigation }) => (
                <div key={risk} className="border rounded-xl overflow-hidden" style={{ borderColor: '#E5E7EB' }}>
                  <div className="flex flex-wrap items-center gap-3 px-5 py-3" style={{ background: '#F9FAFB' }}>
                    <h3 className="font-semibold text-sm flex-1" style={{ color: '#111827' }}>{risk}</h3>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: impact.includes('Critical') || impact.includes('အလွန်ပြင်းထန်') ? '#FEE2E2' : '#FEF3C7', color: impact.includes('Critical') || impact.includes('အလွန်ပြင်းထန်') ? '#B91C1C' : '#D97706' }}>
                      {t('risk_mit_lbl_impact')}: {impact}
                    </span>
                  </div>
                  <div className="px-5 py-3" style={{ background: '#FFFFFF' }}>
                    <p className="text-[10px] font-bold uppercase tracking-wide mb-2" style={{ color: '#9CA3AF' }}>{t('risk_mit_lbl_mit')}</p>
                    <ul className="grid md:grid-cols-2 gap-x-4 gap-y-1">
                      {mitigation.map(m => (
                        <li key={m} className="text-xs flex items-start gap-1.5" style={{ color: '#6B7280' }}>
                          <span style={{ color: '#DC2626' }}>✓</span>{m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/gtm-plan" className="btn-ghost">{t('back')}</Link>
        <Link href="/" className="btn-ghost">{t('back_home')} <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
