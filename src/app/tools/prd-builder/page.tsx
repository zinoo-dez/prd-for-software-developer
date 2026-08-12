'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Copy, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PRDBuilder() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);

  // Form State
  const [data, setData] = useState({
    name: '',
    author: '',
    problem: '',
    goal: '',
    inScope: '',
    outScope: '',
    metrics: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const generateMarkdown = () => {
    return `# Product Requirements Document: ${data.name || '[Project Name]'}

## 1. Metadata
- **Author:** ${data.author || '[Author Name]'}
- **Date:** ${new Date().toLocaleDateString()}
- **Status:** Draft

## 2. Objective & Problem Statement
### Problem
${data.problem || '[Describe the user problem here]'}

### Goal
${data.goal || '[Describe the business or user outcome]'}

## 3. Scope
### In-Scope
${data.inScope ? data.inScope.split('\n').map(line => `- ${line}`).join('\n') : '- [Feature 1]'}

### Out-of-Scope
${data.outScope ? data.outScope.split('\n').map(line => `- ${line}`).join('\n') : '- [Feature 2]'}

## 4. Success Metrics
${data.metrics ? data.metrics.split('\n').map(line => `- ${line}`).join('\n') : '- [Metric 1]'}
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in pb-12">
      <Link href="/tools" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
        <ArrowLeft size={16} className="mr-1.5" /> {t('back')}
      </Link>

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('builder_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
          {t('builder_h1')}
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">{t('builder_intro')}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Editor Form */}
        <div className="card h-150 flex flex-col">
          <div className="card-header bg-gray-50 border-b border-gray-100 px-6 py-4 flex justify-between items-center">
            <h2 className="font-bold text-gray-900">
              {step === 1 && t('b_step1')}
              {step === 2 && t('b_step2')}
              {step === 3 && t('b_step3')}
            </h2>
            <div className="flex gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${step >= 1 ? 'bg-red-600' : 'bg-gray-200'}`} />
              <span className={`w-2.5 h-2.5 rounded-full ${step >= 2 ? 'bg-red-600' : 'bg-gray-200'}`} />
              <span className={`w-2.5 h-2.5 rounded-full ${step >= 3 ? 'bg-red-600' : 'bg-gray-200'}`} />
            </div>
          </div>
          <div className="p-6 grow overflow-y-auto bg-white">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">{t('b_lbl_name')}</label>
                    <input type="text" name="name" value={data.name} onChange={handleChange} className="w-full p-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-sm" placeholder="e.g. Auth Overhaul v1.2" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">{t('b_lbl_author')}</label>
                    <input type="text" name="author" value={data.author} onChange={handleChange} className="w-full p-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-sm" placeholder="e.g. John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">{t('b_lbl_problem')}</label>
                    <textarea name="problem" value={data.problem} onChange={handleChange} rows={4} className="w-full p-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-sm resize-none" placeholder="What pain point does this solve?" />
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">{t('b_lbl_goal')}</label>
                    <textarea name="goal" value={data.goal} onChange={handleChange} rows={3} className="w-full p-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-sm resize-none" placeholder="What is the desired outcome?" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">{t('b_lbl_in_scope')}</label>
                    <textarea name="inScope" value={data.inScope} onChange={handleChange} rows={3} className="w-full p-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-sm resize-none" placeholder="List items line by line..." />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">{t('b_lbl_out_scope')}</label>
                    <textarea name="outScope" value={data.outScope} onChange={handleChange} rows={3} className="w-full p-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-sm resize-none" placeholder="List items line by line..." />
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">{t('b_lbl_metrics')}</label>
                    <textarea name="metrics" value={data.metrics} onChange={handleChange} rows={6} className="w-full p-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all text-sm resize-none" placeholder="e.g. Daily Active Users increases by 10%..." />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="bg-gray-50 border-t border-gray-100 p-4 flex justify-between items-center rounded-b-2xl">
            <button 
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="px-4 py-2 text-sm font-semibold text-gray-600 disabled:opacity-30 transition-opacity"
            >
              {t('b_btn_prev')}
            </button>
            {step < 3 ? (
              <button 
                onClick={() => setStep(Math.min(3, step + 1))}
                className="px-5 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold transition-opacity hover:bg-gray-800"
              >
                {t('b_btn_next')}
              </button>
            ) : (
              <button 
                onClick={handleCopy}
                className="px-5 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold transition-colors hover:bg-red-700 flex items-center gap-1.5"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? t('b_copied') : t('b_btn_copy')}
              </button>
            )}
          </div>
        </div>

        {/* Live Preview */}
        <div className="card h-150 flex flex-col bg-gray-900 border-gray-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <button 
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-xs font-semibold transition-colors border border-gray-700"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              {copied ? t('b_copied') : t('b_btn_copy')}
            </button>
          </div>
          <div className="p-6 pt-16 grow overflow-y-auto">
            <pre className="text-[13px] text-gray-300 font-mono whitespace-pre-wrap leading-relaxed">
              {generateMarkdown()}
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
}
