'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, TestTube2, GitMerge, ShieldCheck, Network } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function TechStrategy() {
  const { t } = useLanguage();

  const techStack = [
    { cat: t('tech_matrix_frontend'), opts: ['Next.js 14', 'React 18', 'Tailwind CSS'], reason: t('tech_matrix_frontend_reason') },
    { cat: t('tech_matrix_backend'), opts: ['NestJS', 'Express.js', 'FastAPI'], reason: t('tech_matrix_backend_reason') },
    { cat: t('tech_matrix_db'), opts: ['PostgreSQL', 'MongoDB'], reason: t('tech_matrix_db_reason') },
    { cat: t('tech_matrix_cache'), opts: ['Redis', 'Memcached'], reason: t('tech_matrix_cache_reason') },
    { cat: t('tech_matrix_search'), opts: ['Elasticsearch', 'Algolia'], reason: t('tech_matrix_search_reason') },
  ];

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('tech_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('tech_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{t('tech_intro')}</p>
      </div>

      <div className="space-y-6">

        {/* 1. Tech Stack Decision Matrix */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <Cpu size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('tech_matrix_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }} dangerouslySetInnerHTML={{ __html: t('tech_matrix_desc') }} />
            <div className="overflow-hidden border rounded-xl" style={{ borderColor: '#E5E7EB' }}>
              <table className="w-full text-sm text-left">
                <thead style={{ background: '#1F2937', color: '#FFFFFF' }}>
                  <tr>
                    <th className="px-4 py-3 font-semibold">{t('tech_matrix_cat')}</th>
                    <th className="px-4 py-3 font-semibold">{t('tech_matrix_cand')}</th>
                    <th className="px-4 py-3 font-semibold">{t('tech_matrix_rationale')}</th>
                  </tr>
                </thead>
                <tbody>
                  {techStack.map((row, i) => (
                    <tr key={i} className="border-b last:border-0" style={{ borderColor: '#E5E7EB' }}>
                      <td className="px-4 py-3 font-medium whitespace-nowrap" style={{ color: '#111827' }}>{row.cat}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {row.opts.map(o => (
                            <span key={o} className="px-2 py-0.5 rounded text-xs" style={{ background: '#F3F4F6', color: '#4B5563' }}>{o}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: '#6B7280' }}>{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 rounded-lg border" style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}>
              <p className="text-xs" style={{ color: '#374151' }}>
                <strong style={{ color: '#DC2626' }}>Pro Tip:</strong> <span dangerouslySetInnerHTML={{ __html: t('tech_pro_tip') }} />
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2. QA Test Cases */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <TestTube2 size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('tech_qa_title')}</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {t('tech_qa_desc')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>{t('tech_qa_pyramid')}</h3>
                <div className="space-y-2">
                  {[
                    { level: t('tech_qa_e2e'), pct: '10%', desc: t('tech_qa_e2e_desc') },
                    { level: t('tech_qa_integration'), pct: '20%', desc: t('tech_qa_integration_desc') },
                    { level: t('tech_qa_unit'), pct: '70%', desc: t('tech_qa_unit_desc') },
                  ].map(({ level, pct, desc }) => (
                    <div key={level} className="flex justify-between items-center p-3 rounded-xl border" style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: '#111827' }}>{level}</p>
                        <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{desc}</p>
                      </div>
                      <span className="text-xs font-bold rounded-full px-2 py-1" style={{ background: '#FEE2E2', color: '#B91C1C' }}>{pct}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>{t('tech_qa_ac')}</h3>
                <div className="p-4 rounded-xl border font-mono text-xs leading-relaxed" style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}>
                  <p style={{ color: '#9CA3AF' }} className="mb-2">{t('tech_qa_ac_format')}</p>
                  <p><span className="font-bold" style={{ color: '#111827' }}>GIVEN</span> <span style={{ color: '#4B5563' }}>{t('tech_qa_given')}</span></p>
                  <p><span className="font-bold" style={{ color: '#111827' }}>WHEN</span> <span style={{ color: '#4B5563' }}>{t('tech_qa_when')}</span></p>
                  <p><span className="font-bold" style={{ color: '#111827' }}>THEN</span> <span style={{ color: '#4B5563' }}>{t('tech_qa_then')}</span></p>
                  <p className="mt-2"><span className="font-bold" style={{ color: '#111827' }}>AND</span> <span style={{ color: '#4B5563' }}>{t('tech_qa_and')}</span></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. DevOps & Deployment */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <GitMerge size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('tech_devops_title')}</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {t('tech_devops_desc')}
            </p>
            <div>
              <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>{t('tech_devops_stages')}</h3>
              <div className="flex flex-wrap gap-2 items-center">
                {[
                  t('tech_devops_stage_push'), t('tech_devops_stage_lint'), 
                  t('tech_devops_stage_test'), t('tech_devops_stage_build'), 
                  t('tech_devops_stage_integration'), t('tech_devops_stage_deploy_stg'), 
                  t('tech_devops_stage_deploy_prod')
                ].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap border" style={{ background: '#FFFFFF', borderColor: '#E5E7EB', color: '#374151' }}>
                      {step}
                    </div>
                    {i < arr.length - 1 && <span className="text-xs" style={{ color: '#9CA3AF' }}>→</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: t('tech_devops_container'), items: [t('tech_devops_docker'), t('tech_devops_compose'), t('tech_devops_k8s')] },
                { title: t('tech_devops_cloud'), items: [t('tech_devops_aws'), t('tech_devops_vercel'), t('tech_devops_terraform')] },
                { title: t('tech_devops_env'), items: [t('tech_devops_dev'), t('tech_devops_stg'), t('tech_devops_prod')] },
              ].map(section => (
                <div key={section.title} className="p-4 rounded-xl border" style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}>
                  <h4 className="font-semibold text-xs mb-2" style={{ color: '#111827' }}>{section.title}</h4>
                  <ul className="space-y-1 text-xs" style={{ color: '#6B7280' }}>
                    {section.items.map(i => <li key={i} className="flex items-start gap-1.5"><span style={{ color: '#DC2626' }}>•</span>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* 4. Security & Compliance */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <ShieldCheck size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('tech_sec_title')}</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {t('tech_sec_desc')}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: t('tech_sec_auth'), desc: t('tech_sec_auth_desc') },
                { title: t('tech_sec_data'), desc: t('tech_sec_data_desc') },
                { title: t('tech_sec_vuln'), desc: t('tech_sec_vuln_desc') },
              ].map(section => (
                <div key={section.title} className="p-4 rounded-xl border" style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}>
                  <h4 className="font-semibold text-xs mb-2" style={{ color: '#111827' }}>{section.title}</h4>
                  <p className="text-xs" style={{ color: '#6B7280' }}>{section.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 5. System Architecture & Data Flow */}
        <motion.div 
          whileHover={{ scale: 1.01, x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <Network size={16} className="text-white" />
            </div>
            <h2 className="font-bold">{t('tech_arch_title')}</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {t('tech_arch_desc')}
            </p>
            
            <div className="relative p-6 rounded-xl border flex flex-col items-center gap-6" style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}>
              {/* Client Layer */}
              <div className="w-full max-w-sm p-4 rounded-lg border bg-white shadow-sm text-center" style={{ borderColor: '#E5E7EB' }}>
                <h4 className="font-semibold text-sm" style={{ color: '#111827' }}>{t('tech_arch_client')}</h4>
                <p className="text-xs mt-1" style={{ color: '#6B7280' }}>{t('tech_arch_client_desc')}</p>
              </div>
              
              <div className="h-6 w-px" style={{ background: '#E5E7EB' }}></div>
              
              {/* Gateway */}
              <div className="w-full max-w-sm p-4 rounded-lg border shadow-sm text-center" style={{ background: '#EFF6FF', borderColor: '#BFDBFE' }}>
                <h4 className="font-semibold text-sm" style={{ color: '#1E3A8A' }}>{t('tech_arch_gateway')}</h4>
                <p className="text-xs mt-1" style={{ color: '#3B82F6' }}>{t('tech_arch_gateway_desc')}</p>
              </div>

              <div className="h-6 w-px" style={{ background: '#E5E7EB' }}></div>
              
              {/* Services */}
              <div className="w-full max-w-sm p-4 rounded-lg border shadow-sm text-center" style={{ background: '#FEF2F2', borderColor: '#FECACA' }}>
                <h4 className="font-semibold text-sm" style={{ color: '#991B1B' }}>{t('tech_arch_services')}</h4>
                <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{t('tech_arch_services_desc')}</p>
              </div>

              <div className="h-6 w-px" style={{ background: '#E5E7EB' }}></div>
              
              {/* Data Layer */}
              <div className="w-full max-w-sm p-4 rounded-lg border shadow-sm text-center" style={{ background: '#ECFCCB', borderColor: '#D9F99D' }}>
                <h4 className="font-semibold text-sm" style={{ color: '#3F6212' }}>{t('tech_arch_data')}</h4>
                <p className="text-xs mt-1" style={{ color: '#84CC16' }}>{t('tech_arch_data_desc')}</p>
              </div>
            </div>
            
          </div>
        </motion.div>

      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/ux-architecture" className="btn-ghost">{t('back')}</Link>
        <Link href="/gtm-plan" className="btn-red">GTM & Business Plan <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
