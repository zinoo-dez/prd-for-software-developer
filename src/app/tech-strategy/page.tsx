'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, TestTube2, GitMerge } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function TechStrategy() {
  const { t } = useLanguage();

  const techStack = [
    { cat: 'Frontend', opts: ['Next.js 14', 'React 18', 'Tailwind CSS'], reason: 'SSR, SEO, and strong typing' },
    { cat: 'Backend', opts: ['NestJS', 'Express.js', 'FastAPI'], reason: 'Type-safe APIs, modular architecture' },
    { cat: 'Database', opts: ['PostgreSQL', 'MongoDB'], reason: 'ACID compliance, complex queries' },
    { cat: 'Caching', opts: ['Redis', 'Memcached'], reason: 'Sub-millisecond reads, session storage' },
    { cat: 'Search', opts: ['Elasticsearch', 'Algolia'], reason: 'Full-text search, faceted filtering' },
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
        <div className="card">
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <Cpu size={16} className="text-white" />
            </div>
            <h2 className="font-bold">1. Tech Stack Decision Matrix</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              The tech stack decision matrix documents <em>which technologies were chosen</em> and <em>why</em>. It gives stakeholders clear rationale and prevents re-evaluation of settled decisions.
            </p>
            <div className="overflow-hidden border rounded-xl" style={{ borderColor: '#E5E7EB' }}>
              <table className="w-full text-sm text-left">
                <thead style={{ background: '#1F2937', color: '#FFFFFF' }}>
                  <tr>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Candidates</th>
                    <th className="px-4 py-3 font-semibold">Selection Rationale</th>
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
                <strong style={{ color: '#DC2626' }}>Pro Tip:</strong> Also document what was <em>not chosen</em> and why. This prevents future team members from re-opening the same debates.
              </p>
            </div>
          </div>
        </div>

        {/* 2. QA Test Cases */}
        <div className="card">
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <TestTube2 size={16} className="text-white" />
            </div>
            <h2 className="font-bold">2. QA Test Cases & Acceptance Criteria</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              Acceptance criteria define conditions that must be met for a feature to be considered &quot;done.&quot; Test cases operationalize these into reproducible steps.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>Testing Pyramid</h3>
                <div className="space-y-2">
                  {[
                    { level: 'E2E Tests', pct: '10%', desc: 'Cypress, Playwright — full user flows' },
                    { level: 'Integration Tests', pct: '20%', desc: 'API endpoint contracts, service boundaries' },
                    { level: 'Unit Tests', pct: '70%', desc: 'Jest, Vitest — individual functions' },
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
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>Acceptance Criteria Format</h3>
                <div className="p-4 rounded-xl border font-mono text-xs leading-relaxed" style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}>
                  <p style={{ color: '#9CA3AF' }} className="mb-2">// Given-When-Then format</p>
                  <p><span className="font-bold" style={{ color: '#111827' }}>GIVEN</span> <span style={{ color: '#4B5563' }}>a registered user is on the login page</span></p>
                  <p><span className="font-bold" style={{ color: '#111827' }}>WHEN</span> <span style={{ color: '#4B5563' }}>they enter a valid email + password</span></p>
                  <p><span className="font-bold" style={{ color: '#111827' }}>THEN</span> <span style={{ color: '#4B5563' }}>they are redirected to /dashboard</span></p>
                  <p className="mt-2"><span className="font-bold" style={{ color: '#111827' }}>AND</span> <span style={{ color: '#4B5563' }}>a session cookie is set</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. DevOps */}
        <div className="card">
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
              <GitMerge size={16} className="text-white" />
            </div>
            <h2 className="font-bold">3. DevOps & Deployment Pipeline</h2>
          </div>
          <div className="p-6 space-y-5">
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              A well-designed deployment pipeline automates the path from commit to production with guardrails at every stage.
            </p>
            <div>
              <h3 className="font-semibold text-sm mb-3" style={{ color: '#111827' }}>CI/CD Pipeline Stages</h3>
              <div className="flex flex-wrap gap-2 items-center">
                {['Code Push', 'Lint & Format', 'Unit Tests', 'Build', 'Integration', 'Deploy Staging', 'Deploy Prod'].map((step, i, arr) => (
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
                { title: 'Containerization', items: ['Docker for consistency', 'Docker Compose', 'Kubernetes (K8s)'] },
                { title: 'Cloud Infrastructure', items: ['AWS / GCP / Azure', 'Vercel / Railway', 'Terraform (IaC)'] },
                { title: 'Environments', items: ['Development (local)', 'Staging (mirror)', 'Production (live)'] },
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
        </div>

      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/ux-architecture" className="btn-ghost">← {t('back')}</Link>
        <Link href="/gtm-plan" className="btn-red">GTM & Business Plan <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
