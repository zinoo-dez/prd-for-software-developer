'use client';

import Link from 'next/link';
import { 
  Layers, FileText, BarChart3, Cpu, CheckSquare, ArrowRight, 
  CheckCircle2, AlertTriangle, Sparkles, HelpCircle, ArrowDown, 
  ChevronRight, Workflow, BookOpen, Scale, Compass, Check, Copy
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function RequirementsOverview() {
  const { t, language } = useLanguage();
  const [selectedProjectType, setSelectedProjectType] = useState<'enterprise' | 'startup' | 'regulated' | 'agency'>('enterprise');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const isMM = language === 'mm';

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const projectScenarios = {
    enterprise: {
      title: isMM ? 'Enterprise Product / Multi-Department Initiative' : 'Enterprise Scale / Multi-Department Initiative',
      desc: isMM 
        ? 'ဘတ်ဂျက် ဒေါ်လာ သန်းချီကုန်ကျနိုင်ပြီး ဌာနပေါင်းစုံ (Legal, Finance, Sales, Ops) ပါဝင်သော ပရောဂျက်များ။'
        : 'High-budget, cross-department initiatives requiring legal, compliance, and capital expenditure sign-off.',
      recommendation: isMM
        ? 'BRD ➔ PRD (with User Stories) ➔ SRS ➔ Sprint Execution စနစ်စုံ လိုအပ်ပါသည်။'
        : 'Full Triad Pipeline: BRD ➔ PRD (with User Stories) ➔ SRS ➔ Sprint Execution.',
      steps: [
        { doc: 'BRD', role: 'Business Analyst / VP', purpose: 'Financial ROI, CAPEX approval, stakeholder alignment' },
        { doc: 'PRD', role: 'Product Manager', purpose: 'Customer journeys, feature scope, User Stories & wireframes' },
        { doc: 'SRS', role: 'Solutions Architect', purpose: 'Microservices architecture, API contracts, ISO 25010 NFRs' },
      ],
      color: 'border-blue-200 bg-blue-50/50'
    },
    startup: {
      title: isMM ? 'Agile Startup / Fast Feature Iteration' : 'Agile Startup / Modern Feature Squad',
      desc: isMM
        ? 'လျင်မြန်စွာ စမ်းသပ်ထုတ်လုပ်ရသော Startup များနှင့် 2-week sprint လည်ပတ်နေသော အဖွဲ့ငယ်များ။'
        : 'Fast-paced product squads optimizing for speed to market, user feedback loops, and 2-week sprint cycles.',
      recommendation: isMM
        ? 'Lean PRD (with embedded Business Goals & User Stories) ➔ Tech Design Doc.'
        : 'Lean PRD (with embedded ROI & User Stories) ➔ Lightweight Tech Design Doc.',
      steps: [
        { doc: 'PRD + Stories', role: 'Product Manager', purpose: 'Objective, user persona, INVEST User Stories, Gherkin ACs' },
        { doc: 'Tech Spec', role: 'Tech Lead', purpose: 'DB schema diff, API endpoints, latency SLAs' },
      ],
      color: 'border-emerald-200 bg-emerald-50/50'
    },
    regulated: {
      title: isMM ? 'Regulated Industries (FinTech, MedTech, Gov)' : 'Regulated Industries (FinTech, MedTech, Gov)',
      desc: isMM
        ? 'ဥပဒေစည်းမျဉ်း၊ လုံခြုံရေးနှင့် Audit အထောက်အထားများ မဖြစ်မနေ လိုအပ်သော နယ်ပယ်များ (ISO, HIPAA, PCI-DSS)။'
        : 'Compliance-heavy systems where software failures trigger severe financial or legal liability.',
      recommendation: isMM
        ? 'Formal BRD + Formal IEEE 29148 SRS + Verification Traceability Matrix မဖြစ်မနေ လိုအပ်ပါသည်။'
        : 'Formal BRD + Formal IEEE-29148 SRS with strict Requirements Traceability Matrix (RTM).',
      steps: [
        { doc: 'Formal BRD', role: 'Compliance Officer & BA', purpose: 'Statutory rules, risk registers, audit boundaries' },
        { doc: 'PRD', role: 'Product Manager', purpose: 'Workflow permissions, verification steps, audit log specs' },
        { doc: 'Formal SRS', role: 'Lead Architect & QA', purpose: 'Cryptographic standards, deterministic failovers, penetration criteria' },
      ],
      color: 'border-purple-200 bg-purple-50/50'
    },
    agency: {
      title: isMM ? 'Software Agency / Client Contract Work' : 'Software Agency / Client Outsourcing',
      desc: isMM
        ? 'ပြင်ပ Client အတွက် စာချုပ်ချုပ်ဆို၍ Fixed-Price သို့မဟုတ် Time & Material တည်ဆောက်ပေးရသော ပရောဂျက်များ။'
        : 'Fixed-budget or milestone-based client contracts where scope ambiguity creates commercial dispute risks.',
      recommendation: isMM
        ? 'SOW-aligned BRD (Scope & Acceptance) ➔ PRD ➔ Binding SRS Deliverable.'
        : 'SOW-aligned BRD (Business deliverables) ➔ PRD ➔ Contractually Binding SRS.',
      steps: [
        { doc: 'BRD / SOW', role: 'Account Director & BA', purpose: 'Commercial deliverables, milestone payments, out-of-scope boundaries' },
        { doc: 'PRD & Wireframes', role: 'Product Strategist', purpose: 'Client-approved UX blueprints & user journeys' },
        { doc: 'SRS', role: 'Engineering Lead', purpose: 'Hosting environment, third-party API dependencies, SLA commitments' },
      ],
      color: 'border-amber-200 bg-amber-50/50'
    }
  };

  return (
    <div className="space-y-10 animate-in">

      {/* ── 1. Hero Header ── */}
      <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute -right-12 -top-12 opacity-5 pointer-events-none text-red-600">
          <Layers size={320} />
        </div>
        
        <div className="badge-red mb-4 inline-flex items-center gap-1.5">
          <Sparkles size={12} />
          {isMM ? 'စာရွက်စာတမ်း အဆင့်ဆင့် လမ်းညွှန်' : 'Requirements Framework'}
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 leading-[1.15]">
          {isMM ? 'BRD vs. PRD vs. SRS & User Stories' : 'The Requirements Spectrum: BRD vs. PRD vs. SRS'}
        </h1>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
          {isMM ? (
            <>
              Software တည်ဆောက်ရာတွင် <strong>စီးပွားရေးရည်မှန်းချက် (BRD)</strong> မှသည် <strong>ထုတ်ကုန်အသုံးပြုသူအတွေ့အကြုံ (PRD)</strong> နှင့် <strong>အင်ဂျင်နီယာနည်းပညာအသေးစိတ် (SRS)</strong> အထိ ချိတ်ဆက်ဆောင်ရွက်ပုံကို စနစ်တကျ လေ့လာပါ။
            </>
          ) : (
            <>
              High-performing engineering teams don't rely on guesswork. Discover how <strong>Business Requirements (BRD)</strong> flow into <strong>Product Requirements (PRD)</strong>, expand into <strong>User Stories</strong>, and crystallize into <strong>Software Requirements Specifications (SRS)</strong>.
            </>
          )}
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/brd-guide" className="btn-red flex items-center gap-2 text-xs md:text-sm">
            <BarChart3 size={15} />
            {isMM ? 'BRD စီးပွားရေး လမ်းညွှန်' : 'BRD Guide (Business)'}
          </Link>
          <Link href="/core-components" className="px-4 py-2.5 rounded-lg border border-gray-200 hover:border-red-300 bg-white text-gray-800 text-xs md:text-sm font-semibold flex items-center gap-1.5 transition-colors">
            <FileText size={15} className="text-red-600" />
            {isMM ? 'PRD ထုတ်ကုန် လမ်းညွှန်' : 'PRD Guide (Product)'}
          </Link>
          <Link href="/srs-guide" className="px-4 py-2.5 rounded-lg border border-gray-200 hover:border-red-300 bg-white text-gray-800 text-xs md:text-sm font-semibold flex items-center gap-1.5 transition-colors">
            <Cpu size={15} className="text-red-600" />
            {isMM ? 'SRS နည်းပညာ လမ်းညွှန်' : 'SRS Guide (Engineering)'}
          </Link>
          <Link href="/user-stories" className="btn-ghost flex items-center gap-1.5 text-xs md:text-sm">
            <CheckSquare size={15} />
            {isMM ? 'User Stories & AC' : 'User Stories & AC'} <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* ── 2. The Master Comparison Table ── */}
      <div className="card shadow-sm">
        <div className="card-header justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
              <Scale size={16} />
            </div>
            <h2 className="font-bold text-white text-base">
              {isMM ? 'အဓိက စာရွက်စာတမ်း ၃ မျိုး နှိုင်းယှဉ်ချက်' : 'Master Comparison: BRD vs. PRD vs. SRS'}
            </h2>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-800 text-gray-300 border border-gray-700">
            3-Tier Architecture
          </span>
        </div>

        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-3.5 rounded-tl-lg font-bold text-xs uppercase">Document</th>
                <th className="p-3.5 font-bold text-xs uppercase">Primary Question</th>
                <th className="p-3.5 font-bold text-xs uppercase">Core Focus</th>
                <th className="p-3.5 font-bold text-xs uppercase">Primary Audience</th>
                <th className="p-3.5 font-bold text-xs uppercase">Typical Owner</th>
                <th className="p-3.5 rounded-tr-lg font-bold text-xs uppercase">When Written</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="p-4 font-bold text-blue-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <div>
                    <div className="font-extrabold text-sm">BRD</div>
                    <div className="text-[11px] text-gray-500 font-normal">Business Requirements</div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 font-bold text-xs font-mono">
                    Why?
                  </span>
                </td>
                <td className="p-4 text-gray-700 text-xs leading-relaxed">
                  Market opportunity, ROI calculations, commercial justification, high-level business rules.
                </td>
                <td className="p-4 text-gray-700 text-xs">
                  C-Suite, Investors, Finance, Department Heads
                </td>
                <td className="p-4 text-gray-900 font-medium text-xs">
                  Business Analyst (BA) / VP Strategy
                </td>
                <td className="p-4 text-gray-600 text-xs">
                  Phase 0 (Before Budget Approval)
                </td>
              </tr>

              <tr className="hover:bg-red-50/40 transition-colors">
                <td className="p-4 font-bold text-red-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <div>
                    <div className="font-extrabold text-sm">PRD</div>
                    <div className="text-[11px] text-gray-500 font-normal">Product Requirements</div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-md bg-red-100 text-red-800 font-bold text-xs font-mono">
                    What?
                  </span>
                </td>
                <td className="p-4 text-gray-700 text-xs leading-relaxed">
                  User problems, product scope, user personas, UI wireframes, INVEST User Stories, acceptance criteria.
                </td>
                <td className="p-4 text-gray-700 text-xs">
                  Product Squad (Designers, Devs, QA, PMM)
                </td>
                <td className="p-4 text-gray-900 font-medium text-xs">
                  Product Manager (PM / TPM)
                </td>
                <td className="p-4 text-gray-600 text-xs">
                  Phase 1 (Product Discovery & Definition)
                </td>
              </tr>

              <tr className="hover:bg-purple-50/40 transition-colors">
                <td className="p-4 font-bold text-purple-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                  <div>
                    <div className="font-extrabold text-sm">SRS</div>
                    <div className="text-[11px] text-gray-500 font-normal">Software Specification</div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-800 font-bold text-xs font-mono">
                    How technically?
                  </span>
                </td>
                <td className="p-4 text-gray-700 text-xs leading-relaxed">
                  Functional system behavior, DB schema, REST/gRPC API payloads, Non-Functional Requirements (P99 latency, security, SLA).
                </td>
                <td className="p-4 text-gray-700 text-xs">
                  Software Engineers, Architects, QA Automation, DevOps
                </td>
                <td className="p-4 text-gray-900 font-medium text-xs">
                  Lead Engineer / System Architect
                </td>
                <td className="p-4 text-gray-600 text-xs">
                  Phase 2 (Technical Pre-Sprint Architecture)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 3. The Natural Document Flow ── */}
      <div className="card shadow-sm">
        <div className="card-header">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
            <Workflow size={16} />
          </div>
          <h2 className="font-bold text-white text-base">
            {isMM ? 'စာရွက်စာတမ်းများ အပြန်အလှန် ချိတ်ဆက်စီးဆင်းပုံ' : 'The Natural Flow: Business Vision to Engineering Code'}
          </h2>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            {isMM ? (
              'အောင်မြင်သော နည်းပညာအဖွဲ့များသည် အဆင့် ၃ ဆင့်ဖြင့် လိုအပ်ချက်များကို စနစ်တကျ ပြောင်းလဲအကောင်အထည်ဖော်ကြသည်:'
            ) : (
              'Information flows progressively through three distinct maturity gates, narrowing from strategic intent to deterministic engineering code:'
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            {/* Step 1 */}
            <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-600 text-white">Step 1</span>
                <span className="text-xs font-mono font-bold text-blue-700">BRD</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm">Strategic Justification</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                "We are losing $1.2M annually to chargebacks. We must automate refund disputes to save 65% in operational costs."
              </p>
              <div className="pt-2 text-[11px] font-semibold text-blue-700 border-t border-blue-200">
                ➔ Output: Budget & Stakeholder Sign-Off
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-xl border border-red-200 bg-red-50/40 space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-600 text-white">Step 2</span>
                <span className="text-xs font-mono font-bold text-red-700">PRD + User Stories</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm">Product Solution & UX</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                "As a customer, I want to submit return photos with one click so I get instant credit without calling support."
              </p>
              <div className="pt-2 text-[11px] font-semibold text-red-700 border-t border-red-200">
                ➔ Output: User Journeys & Gherkin ACs
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-xl border border-purple-200 bg-purple-50/40 space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-600 text-white">Step 3</span>
                <span className="text-xs font-mono font-bold text-purple-700">SRS & Engineering Spec</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm">Technical Contracts & NFRs</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                &ldquo;Endpoint `POST /v1/refunds` shall verify HMAC signatures, execute PostgreSQL `SERIALIZABLE` transactions, and respond in &lt;180ms.&rdquo;
              </p>
              <div className="pt-2 text-[11px] font-semibold text-purple-700 border-t border-purple-200">
                ➔ Output: Deployed APIs & Automated Test Suite
              </div>
            </div>
          </div>

          {/* Callout */}
          <div className="callout-red">
            <h4 className="font-bold text-sm text-red-700 mb-1 flex items-center gap-2">
              <Compass size={16} />
              Where do User Stories fit in this hierarchy?
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong>User Stories primarily live inside the PRD</strong> as the atomic unit of user value, and they directly <strong>feed the functional requirements of the SRS</strong>. A single User Story in the PRD often branches into 3–5 technical tasks and API contracts in the SRS and engineering backlog.
            </p>
          </div>
        </div>
      </div>

      {/* ── 4. Interactive Decision Matrix ── */}
      <div className="card shadow-sm">
        <div className="card-header justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
              <HelpCircle size={16} />
            </div>
            <h2 className="font-bold text-white text-base">
              {isMM ? 'သင့် Project အတွက် မည်သည့် Document ရေးသင့်သနည်း?' : 'Interactive Decision Matrix: Which Documents Do You Need?'}
            </h2>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            Select your current organization type and project constraints to view the recommended documentation strategy:
          </p>

          {/* Scenario Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { id: 'enterprise' as const, label: 'Enterprise / Scale', icon: BarChart3 },
              { id: 'startup' as const, label: 'Agile Startup / Squad', icon: Sparkles },
              { id: 'regulated' as const, label: 'Regulated / FinTech', icon: ShieldAlertIcon },
              { id: 'agency' as const, label: 'Agency / Outsourced', icon: FileText },
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setSelectedProjectType(btn.id)}
                className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between gap-2 ${
                  selectedProjectType === btn.id
                    ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                    : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200'
                }`}
              >
                <btn.icon size={18} className={selectedProjectType === btn.id ? 'text-red-400' : 'text-red-600'} />
                <span className="text-xs font-bold leading-snug">{btn.label}</span>
              </button>
            ))}
          </div>

          {/* Active Decision Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProjectType}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className={`p-6 rounded-2xl border ${projectScenarios[selectedProjectType].color} space-y-5`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-bold text-base text-gray-900">
                  {projectScenarios[selectedProjectType].title}
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-900 text-white shrink-0">
                  {projectScenarios[selectedProjectType].recommendation}
                </span>
              </div>

              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                {projectScenarios[selectedProjectType].desc}
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                {projectScenarios[selectedProjectType].steps.map((st, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-gray-200 space-y-1.5 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-red-600">{st.doc}</span>
                      <span className="text-[10px] text-gray-500 font-medium">{st.role}</span>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">{st.purpose}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── 5. Quick Links to Deep Dives ── */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/brd-guide" className="block group">
          <div className="card p-6 h-full flex flex-col justify-between hover:border-red-300 transition-all shadow-2xs group-hover:-translate-y-1">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <BarChart3 size={20} />
              </div>
              <h3 className="font-bold text-base text-gray-900 group-hover:text-red-600 transition-colors">
                BRD Mastery Guide
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Learn how to write executive business cases, ROI models, stakeholder RACI maps, and enterprise business rules.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-red-600 gap-1 pt-4 mt-2 border-t border-gray-100">
              Read BRD Guide <ChevronRight size={14} />
            </div>
          </div>
        </Link>

        <Link href="/srs-guide" className="block group">
          <div className="card p-6 h-full flex flex-col justify-between hover:border-red-300 transition-all shadow-2xs group-hover:-translate-y-1">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Cpu size={20} />
              </div>
              <h3 className="font-bold text-base text-gray-900 group-hover:text-red-600 transition-colors">
                SRS Technical Guide
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Functional vs Non-Functional specifications, ISO 25010 performance budgets, state machines, and API contracts.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-red-600 gap-1 pt-4 mt-2 border-t border-gray-100">
              Read SRS Guide <ChevronRight size={14} />
            </div>
          </div>
        </Link>

        <Link href="/user-stories" className="block group">
          <div className="card p-6 h-full flex flex-col justify-between hover:border-red-300 transition-all shadow-2xs group-hover:-translate-y-1">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckSquare size={20} />
              </div>
              <h3 className="font-bold text-base text-gray-900 group-hover:text-red-600 transition-colors">
                User Stories & Gherkin AC
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                INVEST principles, Given-When-Then scenarios, story slicing techniques, and live interactive story generator.
              </p>
            </div>
            <div className="flex items-center text-xs font-bold text-red-600 gap-1 pt-4 mt-2 border-t border-gray-100">
              Read User Stories Guide <ChevronRight size={14} />
            </div>
          </div>
        </Link>
      </div>

      {/* Nav footer */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <Link href="/" className="btn-ghost">{t('back')}</Link>
        <Link href="/brd-guide" className="btn-red">
          Next: BRD Guide <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
}

function ShieldAlertIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
      <path d="M12 8v4"/>
      <path d="M12 16h.01"/>
    </svg>
  );
}
