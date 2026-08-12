'use client';

import Link from 'next/link';
import { ArrowRight, DollarSign, Megaphone, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

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

        {/* 1. Monetization */}
        <div className="card">
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <DollarSign size={16} className="text-white" />
            </div>
            <h2 className="font-bold">1. Monetization & Pricing Strategy</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              Choose the right revenue model for your product&apos;s audience and value proposition. Document your rationale so stakeholders understand the business logic.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: '🔄', name: 'Subscription (SaaS)',
                  desc: 'Predictable MRR. Best for B2B tools and services with ongoing value.',
                  tiers: [{ label: 'Starter', price: '$9/mo' }, { label: 'Pro', price: '$29/mo' }, { label: 'Enterprise', price: 'Custom' }],
                },
                {
                  icon: '🆓', name: 'Freemium',
                  desc: 'Acquire users free, convert power users. Best for consumer apps.',
                  decisions: ['Which features are gated?', 'Usage limits', 'Target conversion: 2–5%'],
                },
                {
                  icon: '⚡', name: 'Pay-per-Use',
                  desc: 'Users pay only for what they consume. Best for APIs and AI tools.',
                  decisions: ['API calls per request', 'Storage per GB', 'Transactions completed'],
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
                      <p className="text-xs font-semibold" style={{ color: '#111827' }}>Tier Examples:</p>
                      {model.tiers.map(tier => (
                        <div key={tier.label} className="flex justify-between rounded px-2 py-1 text-xs" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#4B5563' }}>
                          <span>{tier.label}</span><span className="font-bold" style={{ color: '#DC2626' }}>{tier.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {model.decisions && (
                    <div className="space-y-0.5 text-xs" style={{ color: '#4B5563' }}>
                      <p className="font-semibold mb-1" style={{ color: '#111827' }}>Key Decisions:</p>
                      {model.decisions.map(d => <p key={d}>• {d}</p>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. GTM Strategy */}
        <div className="card">
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <Megaphone size={16} className="text-white" />
            </div>
            <h2 className="font-bold">2. Go-To-Market (GTM) Strategy</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              A GTM strategy is your coordinated plan to bring the product to market and win your first customers.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>📅 Pre-Launch (T-30 days)</h3>
                <ul className="space-y-2 text-xs" style={{ color: '#4B5563' }}>
                  {['Build waitlist or beta user list', 'Create launch landing page & SEO content', 'Partner outreach & influencer seeding', 'Prepare Product Hunt submission'].map(item => (
                    <li key={item} className="flex items-start gap-2"><span style={{ color: '#DC2626' }}>→</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>🚀 Launch & Post-Launch</h3>
                <ul className="space-y-2 text-xs" style={{ color: '#4B5563' }}>
                  {['Coordinated social media campaign', 'Email campaign to waitlist users', 'PR & media outreach', 'Paid ads (Google, LinkedIn)'].map(item => (
                    <li key={item} className="flex items-start gap-2"><span style={{ color: '#DC2626' }}>→</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Success Metrics */}
        <div className="card">
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <BarChart3 size={16} className="text-white" />
            </div>
            <h2 className="font-bold">3. Success Metrics & KPIs</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              Define your North Star Metric and supporting KPIs before launch.
            </p>
            <div className="overflow-hidden border rounded-xl" style={{ borderColor: '#E5E7EB' }}>
              <table className="w-full text-sm text-left">
                <thead style={{ background: '#1F2937', color: '#FFFFFF' }}>
                  <tr>
                    <th className="px-4 py-3 font-semibold">Metric</th>
                    <th className="px-4 py-3 font-semibold">Definition</th>
                    <th className="px-4 py-3 font-semibold">Target (Example)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'DAU / MAU', def: 'Daily / Monthly Active Users', target: '10K DAU within 60 days' },
                    { metric: 'Activation Rate', def: 'Users who complete key onboarding action', target: '≥ 60% within 7 days' },
                    { metric: 'Retention (D30)', def: 'Users still active 30 days after signup', target: '≥ 40%' },
                    { metric: 'Churn Rate', def: '% of subscribers who cancel per month', target: '< 3% MRR churn' },
                    { metric: 'CAC', def: 'Customer Acquisition Cost', target: '< $50 blended CAC' },
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
        </div>

      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/tech-strategy" className="btn-ghost">← {t('back')}</Link>
        <Link href="/risk-management" className="btn-red">Maintenance & Risk <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
