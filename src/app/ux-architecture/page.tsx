'use client';

import Link from 'next/link';
import { ArrowRight, Monitor, GitBranch, Database, Code2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function UxArchitecture() {
  const { t } = useLanguage();

  const sections = [
    {
      id: 'uiux',
      icon: Monitor,
      title: 'Wireframes & High-Fidelity UI/UX',
      intro: 'Visual designs give every stakeholder a shared mental model of the product before development begins. They dramatically reduce costly redesigns later.',
      grid: [
        { title: 'Low-Fidelity Wireframes', items: ['Simple sketches or grayscale mockups', 'Focus on layout and information hierarchy', 'Tools: Balsamiq, Whimsical, FigJam'] },
        { title: 'High-Fidelity UI Designs', items: ['Pixel-perfect, color-accurate screen designs', 'Interactive prototypes with click flows', 'Tools: Figma, Adobe XD'] },
      ],
      delivery: {
        title: 'What to Deliver',
        items: ['Screen-by-screen visual designs for all pages', 'User flow prototypes (Figma links)', 'Responsive breakpoints', 'Accessibility annotations'],
      }
    },
    {
      id: 'arch',
      icon: GitBranch,
      title: 'System Architecture Diagram',
      intro: 'A system architecture diagram maps out how all technical components interact. It gives engineers a blueprint for structuring the codebase.',
      cards: [
        { label: 'Frontend', desc: 'Client-side layer — Next.js, React, Vue. Renders the UI and calls APIs.' },
        { label: 'Backend', desc: 'Server-side logic — NestJS, Express, FastAPI. Processes business rules.' },
        { label: 'Cloud & Infra', desc: 'Hosting & scaling — AWS, GCP, Azure. Manages containers and deployments.' },
      ],
      delivery: {
        title: 'Patterns to Document',
        items: ['Monolith vs. Microservices', 'API gateways', 'Message queues (Kafka)', 'Caching (Redis)', 'Auth flow (OAuth2)'],
      }
    },
    {
      id: 'erd',
      icon: Database,
      title: 'ERD & Database Schema',
      intro: 'An Entity-Relationship Diagram (ERD) maps data entities. It is the blueprint database engineers use before writing SQL.',
      table: [
        { entity: 'User', rel: 'has many', card: 'Orders (1:N)' },
        { entity: 'Order', rel: 'contains many', card: 'Products (N:M)' },
        { entity: 'Product', rel: 'belongs to', card: 'Category (N:1)' },
      ],
      delivery: {
        title: 'Recommended ERD Tools',
        desc: 'dbdiagram.io, DrawSQL, Lucidchart, pgModeler, MySQL Workbench.',
      }
    },
    {
      id: 'api',
      icon: Code2,
      title: 'API Specifications',
      intro: 'API specs define the contract between frontend, backend, and third-party services, allowing teams to work in parallel.',
      grid: [
        { title: 'Endpoint Definitions', items: ['HTTP Method & Path', 'Request body schema', 'Response structure', 'Auth requirements', 'Rate limits'] },
        { title: 'Third-Party Specs', items: ['Payment gateways (Stripe)', 'SMS/Email (Twilio)', 'OAuth (Google/Meta)', 'Analytics (Mixpanel)'] },
      ],
      delivery: {
        title: 'Documentation Tools',
        desc: 'Swagger UI / OpenAPI (industry standard), Postman, Insomnia, Stoplight.',
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
        {sections.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <div key={sec.id} className="card">
              {/* Dark Header */}
              <div className="card-header">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
                  <Icon size={16} className="text-white" />
                </div>
                <h2 className="font-bold">
                  {idx + 1}. {sec.title}
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
                          <th className="px-4 py-3 font-semibold">Entity</th>
                          <th className="px-4 py-3 font-semibold">Relationship</th>
                          <th className="px-4 py-3 font-semibold">Cardinality</th>
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
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/mistakes" className="btn-ghost">← {t('back')}</Link>
        <Link href="/tech-strategy" className="btn-red">Tech & QA Strategy <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
