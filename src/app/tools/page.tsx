'use client';

import Link from 'next/link';
import { PenTool, CheckSquare, ImageIcon, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Tools() {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'docs', icon: PenTool, label: '1. Documentation',
      tools: [
        { name: 'Confluence', desc: 'Enterprise standard — deeply integrated with Jira. Best for large engineering organizations.' },
        { name: 'Notion', desc: 'Favored by modern startups. Flexible database views, Kanban boards, and team wikis in one place.' },
        { name: 'Google Docs', desc: 'Simple entry point — excellent for real-time co-authoring and sharing with non-technical stakeholders.' },
      ],
    },
    {
      id: 'tickets', icon: CheckSquare, label: '2. Ticketing & Task Tracking',
      intro: 'Used to break PRD requirements into developer-ready tasks, epics, and sprints for Agile execution.',
      tools: [
        { name: 'Jira', desc: 'Industry-standard for Agile/Scrum teams. Supports sprints, epics, story points, and deep reporting.' },
        { name: 'Linear / Asana', desc: 'Modern alternatives with superior UX. Linear is popular at high-velocity startups for its speed.' },
      ],
    },
    {
      id: 'design', icon: ImageIcon, label: '3. Design & Wireframing',
      tools: [
        { name: 'Figma', desc: 'The #1 tool for UI/UX design. PRDs typically include Figma links for screen-by-screen designs and prototypes.' },
        { name: 'Miro / FigJam', desc: 'Digital whiteboards for user flows, system architecture diagrams, and collaborative brainstorming.' },
      ],
    },
  ];

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('tools_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('tools_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{t('tools_intro')}</p>
      </div>

      {/* Categories */}
      <div className="space-y-5">
        {categories.map(cat => {
          const Icon = cat.icon;
          return (
            <div key={cat.id} className="card">
              {/* Dark header */}
              <div className="card-header">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#DC2626' }}>
                  <Icon size={15} className="text-white" />
                </div>
                <h2 className="font-bold">{cat.label}</h2>
              </div>

              <div className="p-6">
                {cat.intro && (
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B7280' }}>{cat.intro}</p>
                )}
                <div className={`grid gap-4 ${cat.tools.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                  {cat.tools.map(tool => (
                    <motion.div
                      key={tool.name}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="p-4 rounded-xl cursor-pointer"
                      style={{ background: '#F9FAFB', border: '1px solid #E5E7EB' }}
                    >
                      <h3 className="font-bold text-sm mb-2" style={{ color: '#111827' }}>{tool.name}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{tool.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <Link href="/templates" className="btn-ghost">← {t('back')}</Link>
        <Link href="/mistakes" className="btn-red">Common Mistakes <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
