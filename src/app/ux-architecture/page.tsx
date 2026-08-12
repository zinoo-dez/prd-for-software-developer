'use client';

import Link from 'next/link';
import { ArrowRight, Route, Monitor, GitBranch, Database, Code2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function UxArchitecture() {
  const { t } = useLanguage();

  const sections = [
    {
      id: 'flows',
      icon: Route,
      title: t('ux_flow_title'),
      intro: t('ux_flow_intro'),
      grid: [
        { title: t('ux_flow_onboarding'), items: [t('ux_flow_onboarding_desc')] },
        { title: t('ux_flow_checkout'), items: [t('ux_flow_checkout_desc')] },
      ],
      delivery: {
        title: t('ux_flow_delivery_title'),
        items: [t('ux_flow_delivery_items_0'), t('ux_flow_delivery_items_1')],
      }
    },
    {
      id: 'uiux',
      icon: Monitor,
      title: t('ux_uiux_title'),
      intro: t('ux_uiux_intro'),
      grid: [
        { title: t('ux_uiux_lofi'), items: [t('ux_uiux_lofi_items_0'), t('ux_uiux_lofi_items_1'), t('ux_uiux_lofi_items_2')] },
        { title: t('ux_uiux_hifi'), items: [t('ux_uiux_hifi_items_0'), t('ux_uiux_hifi_items_1'), t('ux_uiux_hifi_items_2')] },
      ],
      delivery: {
        title: t('ux_uiux_delivery_title'),
        items: [t('ux_uiux_delivery_items_0'), t('ux_uiux_delivery_items_1'), t('ux_uiux_delivery_items_2'), t('ux_uiux_delivery_items_3')],
      }
    },
    {
      id: 'arch',
      icon: GitBranch,
      title: t('ux_arch_title'),
      intro: t('ux_arch_intro'),
      cards: [
        { label: t('ux_arch_front'), desc: t('ux_arch_front_desc') },
        { label: t('ux_arch_back'), desc: t('ux_arch_back_desc') },
        { label: t('ux_arch_cloud'), desc: t('ux_arch_cloud_desc') },
      ],
      delivery: {
        title: t('ux_arch_delivery_title'),
        items: [t('ux_arch_delivery_items_0'), t('ux_arch_delivery_items_1'), t('ux_arch_delivery_items_2'), t('ux_arch_delivery_items_3'), t('ux_arch_delivery_items_4')],
      }
    },
    {
      id: 'erd',
      icon: Database,
      title: t('ux_erd_title'),
      intro: t('ux_erd_intro'),
      table: [
        { entity: t('ux_erd_user'), rel: t('ux_erd_user_rel'), card: t('ux_erd_user_card') },
        { entity: t('ux_erd_order'), rel: t('ux_erd_order_rel'), card: t('ux_erd_order_card') },
        { entity: t('ux_erd_product'), rel: t('ux_erd_product_rel'), card: t('ux_erd_product_card') },
      ],
      tableHeaders: [t('ux_erd_col_entity'), t('ux_erd_col_rel'), t('ux_erd_col_card')],
      delivery: {
        title: t('ux_erd_delivery_title'),
        desc: t('ux_erd_delivery_desc'),
      }
    },
    {
      id: 'api',
      icon: Code2,
      title: t('ux_api_title'),
      intro: t('ux_api_intro'),
      grid: [
        { title: t('ux_api_endpoints'), items: [t('ux_api_endpoints_items_0'), t('ux_api_endpoints_items_1'), t('ux_api_endpoints_items_2'), t('ux_api_endpoints_items_3'), t('ux_api_endpoints_items_4')] },
        { title: t('ux_api_third'), items: [t('ux_api_third_items_0'), t('ux_api_third_items_1'), t('ux_api_third_items_2'), t('ux_api_third_items_3')] },
      ],
      delivery: {
        title: t('ux_api_delivery_title'),
        desc: t('ux_api_delivery_desc'),
      }
    }
  ];

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('ux_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('ux_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{t('ux_intro')}</p>
      </div>

      <div className="space-y-6">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <motion.div 
              key={sec.id} 
              whileHover={{ scale: 1.01, x: 4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="card"
            >
              {/* Dark Header */}
              <div className="card-header">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
                  <Icon size={16} className="text-white" />
                </div>
                <h2 className="font-bold">
                  {sec.title}
                </h2>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-6">
                <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{sec.intro}</p>

                {/* Grid format */}
                {sec.grid && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {sec.grid.map(g => (
                      <div key={g.title} className="p-4 rounded-xl" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                        <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>{g.title}</h3>
                        <ul className="space-y-2 text-xs">
                          {g.items.map(i => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <span style={{ color: '#DC2626' }}>•</span> {i}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Cards format */}
                {sec.cards && (
                  <div className="grid md:grid-cols-3 gap-3">
                    {sec.cards.map(c => (
                      <div key={c.label} className="p-4 rounded-xl" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                        <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: '#DC2626' }}>{c.label}</p>
                        <p className="text-xs" style={{ color: '#6B7280' }}>{c.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Table format */}
                {sec.table && (
                  <div className="overflow-hidden border rounded-xl" style={{ borderColor: '#E5E7EB' }}>
                    <table className="w-full text-sm text-left">
                      <thead style={{ background: '#1F2937', color: '#FFFFFF' }}>
                        <tr>
                          <th className="px-4 py-3 font-semibold">{sec.tableHeaders?.[0]}</th>
                          <th className="px-4 py-3 font-semibold">{sec.tableHeaders?.[1]}</th>
                          <th className="px-4 py-3 font-semibold">{sec.tableHeaders?.[2]}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.map((row, i) => (
                          <tr key={i} className="border-b last:border-0" style={{ borderColor: '#E5E7EB' }}>
                            <td className="px-4 py-3 font-medium" style={{ color: '#111827' }}>{row.entity}</td>
                            <td className="px-4 py-3" style={{ color: '#6B7280' }}>{row.rel}</td>
                            <td className="px-4 py-3 text-xs" style={{ color: '#374151' }}>{row.card}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Delivery block — red bordered */}
                <div className="p-4 rounded-xl border-l-4" style={{ background: '#FEF2F2', borderColor: '#DC2626' }}>
                  <h4 className="font-semibold text-sm mb-2" style={{ color: '#B91C1C' }}>{sec.delivery.title}</h4>
                  {sec.delivery.items ? (
                    <ul className="space-y-1.5 text-sm" style={{ color: '#7F1D1D' }}>
                      {sec.delivery.items.map(i => (
                        <li key={i} className="flex items-center gap-2"><span>→</span> {i}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-relaxed" style={{ color: '#7F1D1D' }}>{sec.delivery.desc}</p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/mistakes" className="btn-ghost">{t('back')}</Link>
        <Link href="/tech-strategy" className="btn-red">Tech & QA Strategy <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
