'use client';

import Link from 'next/link';
import { ShieldCheck, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
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
            <h2 className="font-bold">1. Security & Compliance Checklist</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              Security and compliance must be designed in — not bolted on after launch. Define your security posture upfront.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>🔐 Authentication & Auth</h3>
                <div className="space-y-2 text-xs">
                  {['OAuth 2.0 / OpenID Connect', 'JWT with short-lived access tokens', 'Multi-Factor Authentication (MFA)', 'Role-Based Access Control (RBAC)'].map(item => (
                    <label key={item} className="flex items-center gap-2" style={{ color: '#4B5563' }}>
                      <input type="checkbox" checked readOnly className="accent-red-600 rounded-sm" /> {item}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>🛡️ Data Protection</h3>
                <div className="space-y-2 text-xs">
                  {['HTTPS everywhere (TLS 1.3)', 'Passwords hashed with bcrypt', 'PII encrypted at rest', 'SQL injection & XSS prevention'].map(item => (
                    <label key={item} className="flex items-center gap-2" style={{ color: '#4B5563' }}>
                      <input type="checkbox" checked readOnly className="accent-red-600 rounded-sm" /> {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>📋 Regulatory Compliance</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { name: 'GDPR', region: '🇪🇺 Europe', reqs: ['Right to erasure', 'Cookie consent', 'Privacy policy'] },
                  { name: 'CCPA', region: '🇺🇸 California', reqs: ['Opt-out of data sale', 'Right to know', 'Non-discrimination'] },
                  { name: 'ISO 27001', region: '🌐 Global', reqs: ['Risk assessment', 'Incident procedures', 'Audit trails'] },
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
            <h2 className="font-bold">2. SLA & Support Plan</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              A Service Level Agreement (SLA) is a formal commitment to your users about availability and response times.
            </p>
            <div className="overflow-hidden border rounded-xl" style={{ borderColor: '#E5E7EB' }}>
              <table className="w-full text-sm text-left">
                <thead style={{ background: '#1F2937', color: '#FFFFFF' }}>
                  <tr>
                    <th className="px-4 py-3 font-semibold">Severity</th>
                    <th className="px-4 py-3 font-semibold">Definition</th>
                    <th className="px-4 py-3 font-semibold">Response</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { severity: 'P0 — Critical', def: 'Complete service outage, data loss', response: '< 15 min' },
                    { severity: 'P1 — High', def: 'Core feature broken for all users', response: '< 1 hour' },
                    { severity: 'P2 — Medium', def: 'Feature degraded, workaround exists', response: '< 4 hours' },
                    { severity: 'P3 — Low', def: 'Minor bug, cosmetic issues', response: '< 24 hours' },
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

        {/* 3. Incident Plan */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <AlertTriangle size={16} className="text-white" />
            </div>
            <h2 className="font-bold">3. Risk Mitigation Plan</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              Proactively identify risks before they become incidents.
            </p>
            <div className="space-y-3">
              {[
                { risk: 'Security Vulnerability (CVE / Breach)', impact: 'Critical',
                  mitigation: ['Automated dependency scanning', 'Regular penetration testing', 'WAF in front of APIs'] },
                { risk: 'Technical Debt Accumulation', impact: 'High',
                  mitigation: ['20% of sprint allocated to refactoring', 'Mandatory code review', 'SonarQube for code quality'] },
                { risk: 'Server Crash / Infrastructure Failure', impact: 'Critical',
                  mitigation: ['Multi-AZ deployment', 'Auto-scaling groups', 'Automated database failover'] },
              ].map(({ risk, impact, mitigation }) => (
                <div key={risk} className="border rounded-xl overflow-hidden" style={{ borderColor: '#E5E7EB' }}>
                  <div className="flex flex-wrap items-center gap-3 px-5 py-3" style={{ background: '#F9FAFB' }}>
                    <h3 className="font-semibold text-sm flex-1" style={{ color: '#111827' }}>{risk}</h3>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: '#FEE2E2', color: '#B91C1C' }}>
                      Impact: {impact}
                    </span>
                  </div>
                  <div className="px-5 py-3" style={{ background: '#FFFFFF' }}>
                    <p className="text-[10px] font-bold uppercase tracking-wide mb-2" style={{ color: '#9CA3AF' }}>Mitigation Strategy</p>
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
