'use client';

import Link from 'next/link';
import { 
  BookOpen, HelpCircle, Layers, CheckCircle2, ArrowRight, Target, 
  CheckSquare, RotateCcw, Check, Sparkles, AlertTriangle, Calculator, 
  Copy, CheckCheck, Award, AlertCircle
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function NccGuide() {
  const { t } = useLanguage();
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [copiedGwt, setCopiedGwt] = useState(false);

  // Grade Predictor Sliders state
  const [scores, setScores] = useState({
    imp: 24, // max 30
    des: 16, // max 20
    test: 16, // max 20
    eval: 12, // max 15
    fmt: 12, // max 15
  });

  const totalScore = scores.imp + scores.des + scores.test + scores.eval + scores.fmt;

  const getGradeTier = (score: number) => {
    if (score >= 70) return { title: 'High Distinction', color: 'bg-purple-100 text-purple-900 border-purple-300', badge: '🏆 Distinction (70%+)' };
    if (score >= 60) return { title: 'Merit', color: 'bg-blue-100 text-blue-900 border-blue-300', badge: '🌟 Merit (60%-69%)' };
    if (score >= 40) return { title: 'Pass', color: 'bg-emerald-100 text-emerald-900 border-emerald-300', badge: '✅ Pass (40%-59%)' };
    return { title: 'Fail / Re-submit', color: 'bg-red-100 text-red-900 border-red-300', badge: '⚠️ Re-submit Required (<40%)' };
  };

  const gradeInfo = getGradeTier(totalScore);

  // Load state from localStorage on mount (SSR safe)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ncc_checklist_state');
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load checklist state', e);
    }
  }, []);

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev => {
      const updated = { ...prev, [idx]: !prev[idx] };
      try {
        localStorage.setItem('ncc_checklist_state', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save checklist state', e);
      }
      return updated;
    });
  };

  const selectAll = () => {
    const allChecked: Record<number, boolean> = { 0: true, 1: true, 2: true, 3: true };
    setCheckedItems(allChecked);
    try {
      localStorage.setItem('ncc_checklist_state', JSON.stringify(allChecked));
    } catch (e) {}
  };

  const resetAll = () => {
    setCheckedItems({});
    try {
      localStorage.removeItem('ncc_checklist_state');
    } catch (e) {}
  };

  const items = [
    { title: t('ncc_chk_1'), desc: t('ncc_chk_1_desc') },
    { title: t('ncc_chk_2'), desc: t('ncc_chk_2_desc') },
    { title: t('ncc_chk_3'), desc: t('ncc_chk_3_desc') },
    { title: t('ncc_chk_4'), desc: t('ncc_chk_4_desc') },
  ];
  const totalItems = items.length;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalItems) * 100);
  const isAllComplete = completedCount === totalItems;

  const handleCopyGwt = () => {
    const gwtMarkdown = `## Chapter 4: System Testing & Verification

### Test Suite Summary
| Test ID | Feature Scenario | Given (Preconditions) | When (Action) | Then (Expected Outcome) | Result | Screenshot Ref |
|---|---|---|---|---|---|---|
| **TC-001** | User Authentication | User is on \`/login\` with valid credentials | User enters correct email & password and clicks "Submit" | System returns 200 OK JWT token and redirects to \`/dashboard\` | **PASS** | Fig 4.1a |
| **TC-002** | Invalid Password Handling | User is on \`/login\` | User enters incorrect password and clicks "Submit" | System displays error alert "Invalid email or password" | **PASS** | Fig 4.1b |
| **TC-003** | ERD Foreign Key Integrity | Product record exists in database | Admin deletes product linked to pending order | Database blocks deletion via \`ON DELETE RESTRICT\` constraint | **PASS** | Fig 4.2 |
`;
    navigator.clipboard.writeText(gwtMarkdown);
    setCopiedGwt(true);
    setTimeout(() => setCopiedGwt(false), 2500);
  };

  return (
    <div className="space-y-8 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-red-600">
          <BookOpen size={240} />
        </div>
        <div className="badge-red mb-4">
          <BookOpen size={11} className="mr-1" />
          {t('ncc_badge')}
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
          {t('ncc_h1')}
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl">{t('ncc_intro')}</p>
      </div>

      <div className="space-y-6">

        {/* 1. Key Question: Why 70% Doc / 30% Code */}
        <motion.div 
          whileHover={{ scale: 1.005, y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-600">
              <HelpCircle size={16} className="text-white" />
            </div>
            <h2 className="font-bold text-gray-900">{t('ncc_q_title')}</h2>
          </div>
          <div className="p-6">
            <div className="callout-red shadow-none border-t border-r border-b rounded-r-xl border-gray-100">
              <p
                className="text-sm leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: t('ncc_q_body') }}
              />
            </div>
          </div>
        </motion.div>

        {/* 2. Marking Criteria Breakdown */}
        <motion.div 
          whileHover={{ scale: 1.005, y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-600">
              <Target size={16} className="text-white" />
            </div>
            <h2 className="font-bold text-gray-900">{t('ncc_rubric_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed text-gray-700">{t('ncc_rubric_intro')}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: t('ncc_rubric_c1_title'), body: t('ncc_rubric_c1_desc'), color: 'bg-red-50/80 border-red-200 text-red-950' },
                { title: t('ncc_rubric_c2_title'), body: t('ncc_rubric_c2_desc'), color: 'bg-blue-50/80 border-blue-200 text-blue-950' },
                { title: t('ncc_rubric_c3_title'), body: t('ncc_rubric_c3_desc'), color: 'bg-emerald-50/80 border-emerald-200 text-emerald-950' },
                { title: t('ncc_rubric_c4_title'), body: t('ncc_rubric_c4_desc'), color: 'bg-amber-50/80 border-amber-200 text-amber-950' },
                { title: t('ncc_rubric_c5_title'), body: t('ncc_rubric_c5_desc'), color: 'bg-purple-50/80 border-purple-200 text-purple-950' },
              ].map((c, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${c.color}`}>
                  <h3 className="font-bold text-sm mb-1">{c.title}</h3>
                  <p className="text-xs opacity-90 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. Interactive Grade Predictor & Rubric Estimator */}
        <motion.div 
          whileHover={{ scale: 1.005, y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card shadow-sm"
        >
          <div className="card-header flex justify-between items-center flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-600">
                <Calculator size={16} className="text-white" />
              </div>
              <h2 className="font-bold text-gray-900">{t('ncc_calc_title')}</h2>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${gradeInfo.color}`}>
              {gradeInfo.badge}
            </span>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-sm leading-relaxed text-gray-700">{t('ncc_calc_intro')}</p>

            <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-5 rounded-2xl border border-gray-200">
              
              {/* Left Column: Sliders */}
              <div className="space-y-4">
                {[
                  { label: t('ncc_calc_imp'), key: 'imp', max: 30 },
                  { label: t('ncc_calc_des'), key: 'des', max: 20 },
                  { label: t('ncc_calc_test'), key: 'test', max: 20 },
                  { label: t('ncc_calc_eval'), key: 'eval', max: 15 },
                  { label: t('ncc_calc_fmt'), key: 'fmt', max: 15 },
                ].map((s) => (
                  <div key={s.key} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-gray-800">
                      <span>{s.label}</span>
                      <span className="font-mono text-red-600">{scores[s.key as keyof typeof scores]} / {s.max}</span>
                    </div>
                    <input 
                      type="range" 
                      min={0} 
                      max={s.max} 
                      value={scores[s.key as keyof typeof scores]}
                      onChange={(e) => setScores({ ...scores, [s.key]: Number(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                    />
                  </div>
                ))}
              </div>

              {/* Right Column: Score Summary */}
              <div className="flex flex-col justify-between p-5 bg-white rounded-xl border border-gray-200 text-center space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('ncc_calc_score')}</span>
                  <div className="text-5xl font-black tracking-tight text-gray-900">
                    {totalScore}<span className="text-xl text-gray-400 font-normal"> / 100</span>
                  </div>
                </div>

                <div className={`p-3 rounded-lg border text-sm font-bold ${gradeInfo.color}`}>
                  Predicted Tier: {gradeInfo.title}
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">
                  Adjust sliders above to test target criteria. Aim for at least 70% total to secure a High Distinction mark!
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* 4. Top 5 Automatic Mark-Deduction Traps */}
        <motion.div 
          whileHover={{ scale: 1.005, y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-600">
              <AlertTriangle size={16} className="text-white" />
            </div>
            <h2 className="font-bold text-gray-900">{t('ncc_traps_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed text-gray-700">{t('ncc_traps_intro')}</p>

            <div className="space-y-4">
              {[
                { title: t('ncc_trap1_title'), bad: t('ncc_trap1_bad'), good: t('ncc_trap1_good') },
                { title: t('ncc_trap2_title'), bad: t('ncc_trap2_bad'), good: t('ncc_trap2_good') },
                { title: t('ncc_trap3_title'), bad: t('ncc_trap3_bad'), good: t('ncc_trap3_good') },
                { title: t('ncc_trap4_title'), bad: t('ncc_trap4_bad'), good: t('ncc_trap4_good') },
                { title: t('ncc_trap5_title'), bad: t('ncc_trap5_bad'), good: t('ncc_trap5_good') },
              ].map((trap, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                  <h3 className="font-bold text-sm text-gray-900 flex items-center gap-2">
                    <AlertCircle size={15} className="text-red-600 shrink-0" />
                    {trap.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-900 leading-relaxed font-mono">
                      {trap.bad}
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 leading-relaxed font-mono">
                      {trap.good}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 5. Given-When-Then Test Case Template */}
        <motion.div 
          whileHover={{ scale: 1.005, y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header flex justify-between items-center flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-600">
                <CheckCircle2 size={16} className="text-white" />
              </div>
              <h2 className="font-bold text-gray-900">{t('ncc_gwt_title')}</h2>
            </div>
            <button 
              onClick={handleCopyGwt}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              {copiedGwt ? <CheckCheck size={14} /> : <Copy size={14} />}
              {copiedGwt ? t('ncc_gwt_copied') : t('ncc_gwt_copy')}
            </button>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed text-gray-700">{t('ncc_gwt_intro')}</p>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-100 text-gray-700 font-bold uppercase tracking-wider border-b border-gray-200">
                  <tr>
                    <th className="p-3">Test ID</th>
                    <th className="p-3">Scenario</th>
                    <th className="p-3">Given (Precondition)</th>
                    <th className="p-3">When (Action)</th>
                    <th className="p-3">Then (Expected Result)</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-800 bg-white">
                  <tr>
                    <td className="p-3 font-mono font-bold">TC-001</td>
                    <td className="p-3 font-semibold">User Authentication</td>
                    <td className="p-3">User on login page with valid account</td>
                    <td className="p-3">Submits valid email & password</td>
                    <td className="p-3">Returns 200 OK & JWT, redirects to /dashboard</td>
                    <td className="p-3"><span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">PASS</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">TC-002</td>
                    <td className="p-3 font-semibold">Invalid Password</td>
                    <td className="p-3">User on login page</td>
                    <td className="p-3">Submits wrong password</td>
                    <td className="p-3">Displays "Invalid email or password" banner</td>
                    <td className="p-3"><span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">PASS</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold">TC-003</td>
                    <td className="p-3 font-semibold">FK Restrict Constraint</td>
                    <td className="p-3">Product record linked to active order</td>
                    <td className="p-3">Admin attempts to delete product</td>
                    <td className="p-3">Database blocks deletion via Foreign Key constraint</td>
                    <td className="p-3"><span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">PASS</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* 6. Step-by-Step Breakdown for Documentation */}
        <motion.div 
          whileHover={{ scale: 1.005, y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-600">
              <Layers size={16} className="text-white" />
            </div>
            <h2 className="font-bold text-gray-900">{t('ncc_step_title')}</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm leading-relaxed text-gray-700 mb-2">{t('ncc_step_intro')}</p>
            
            <div className="space-y-4">
              {[
                { title: t('ncc_ch1_title'), body: t('ncc_ch1_body'), words: '~500 words (10%)' },
                { title: t('ncc_ch2_title'), body: t('ncc_ch2_body'), words: '~1,200 words (25%)' },
                { title: t('ncc_ch3_title'), body: t('ncc_ch3_body'), words: '~1,000 words (20%)' },
                { title: t('ncc_ch4_title'), body: t('ncc_ch4_body'), words: '~1,000 words (20%)' },
                { title: t('ncc_ch5_title'), body: t('ncc_ch5_body'), words: '~800 words (15%)' },
              ].map((ch, idx) => (
                <div key={idx} className="p-5 rounded-xl transition-colors duration-150 bg-gray-50 border border-gray-200">
                  <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                    <h3 className="font-bold text-sm text-gray-900">{ch.title}</h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-200 text-gray-700">{ch.words}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">{ch.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 7. Pro Tips */}
        <motion.div 
          whileHover={{ scale: 1.005, y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card"
        >
          <div className="card-header">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-600">
              <Award size={16} className="text-white" />
            </div>
            <h2 className="font-bold text-gray-900">{t('ncc_tips_title')}</h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: t('ncc_tip1_title'), body: t('ncc_tip1_body') },
                { title: t('ncc_tip2_title'), body: t('ncc_tip2_body') },
                { title: t('ncc_tip3_title'), body: t('ncc_tip3_body') },
                { title: t('ncc_tip4_title'), body: t('ncc_tip4_body') },
              ].map((tip, idx) => (
                <div key={idx} className="p-5 rounded-xl border-t-4 bg-white border border-gray-200 border-t-red-600 shadow-2xs">
                  <h3 className="font-bold text-sm mb-2 text-gray-900">💡 {tip.title}</h3>
                  <p 
                    className="text-xs leading-relaxed text-gray-600" 
                    dangerouslySetInnerHTML={{ __html: tip.body }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 8. Interactive Submission Checklist */}
        <motion.div 
          whileHover={{ scale: 1.005, y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="card shadow-sm"
        >
          <div className="card-header flex justify-between items-center flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-600">
                <CheckSquare size={16} className="text-white" />
              </div>
              <h2 className="font-bold text-gray-900">{t('ncc_chk_title')}</h2>
            </div>
            
            {/* Quick Action Controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={selectAll}
                className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <CheckSquare size={13} />
                {t('ncc_chk_select_all')}
              </button>
              <button 
                onClick={resetAll}
                className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw size={13} />
                {t('ncc_chk_reset')}
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-sm leading-relaxed text-gray-700">{t('ncc_chk_intro')}</p>

            {/* Progress Meter & Bar */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('ncc_chk_progress')}</span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full transition-colors ${
                    isAllComplete ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-amber-100 text-amber-800 border border-amber-300'
                  }`}>
                    {isAllComplete ? `✓ ${t('ncc_chk_ready')}` : `${completedCount}/${totalItems} (${progressPercent}%)`}
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-800">{progressPercent}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden p-0.5">
                <motion.div 
                  className={`h-full rounded-full transition-colors duration-500 ${
                    isAllComplete ? 'bg-emerald-600' : progressPercent > 50 ? 'bg-amber-500' : 'bg-red-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                />
              </div>
            </div>

            {/* Completion Banner (Pops up when 100% complete) */}
            {isAllComplete && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-900 shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
                  <Sparkles size={16} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-emerald-950 flex items-center gap-1.5">
                    {t('ncc_chk_ready')}
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {t('ncc_chk_complete_banner')}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Checklist Items */}
            <div className="space-y-3">
              {items.map((item, idx) => {
                const isChecked = checkedItems[idx] || false;
                return (
                  <motion.div 
                    key={idx}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => toggleCheck(idx)}
                    className={`group flex items-start gap-4 p-4 rounded-xl cursor-pointer border transition-all duration-200 select-none ${
                      isChecked 
                        ? 'bg-emerald-50/70 border-emerald-300 shadow-xs' 
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                    }`}
                  >
                    {/* Custom Checkbox Indicator */}
                    <div className="mt-0.5 shrink-0 flex items-center justify-center">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 ${
                        isChecked 
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs' 
                          : 'border-gray-300 group-hover:border-red-400 bg-white'
                      }`}>
                        {isChecked && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                          >
                            <Check size={14} strokeWidth={3} />
                          </motion.div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold transition-colors duration-200 ${
                          isChecked ? 'text-emerald-900 line-through decoration-emerald-500/60' : 'text-gray-900 group-hover:text-red-700'
                        }`}>
                          {item.title}
                        </span>
                        {isChecked && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0 ml-2">
                            Done
                          </span>
                        )}
                      </div>
                      <p className={`text-xs leading-relaxed transition-colors duration-200 ${
                        isChecked ? 'text-emerald-700/80' : 'text-gray-500'
                      }`}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <Link href="/" className="btn-ghost">← {t('back_home')}</Link>
        <Link href="/core-components" className="btn-red">{t('nav_core')} <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
