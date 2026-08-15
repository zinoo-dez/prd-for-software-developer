'use client';

import Link from 'next/link';
import { 
  BarChart3, ArrowRight, CheckCircle2, AlertTriangle, Copy, 
  Check, DollarSign, Users, ShieldAlert, Sparkles, FileText, 
  Layers, ChevronRight, HelpCircle, Briefcase, TrendingUp
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BrdGuide() {
  const { t, language } = useLanguage();
  const [copiedExample, setCopiedExample] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [activeSectionTab, setActiveSectionTab] = useState<number>(1);

  const isMM = language === 'mm';

  const brdTemplateMarkdown = `# Business Requirements Document (BRD)
## Project Name: Automated Self-Service Returns & Refund Protocol
- **Document Version:** 1.0
- **Document Author / Owner:** Senior Business Analyst / VP Operations
- **Executive Sponsor:** Chief Operating Officer (COO)
- **Target Launch:** Q3 FY2026
- **Status:** Approved for Product Scoping

---

### 1. Executive Summary & Problem Statement
#### 1.1 Business Context
Customer returns currently cost $4.80 per ticket in manual triage labor, averaging 72 hours turnaround time. High friction in return authorization leads to a 14% cart abandonment rate on high-value SKUs and $864,000 in avoidable operational expenses.

#### 1.2 Proposed Business Solution
Deploy an automated self-service returns portal with instant digital wallet refund capability for verified low-risk customers, reducing human ticket volume by 60%.

---

### 2. Business Objectives & ROI Financial Model
| Objective ID | Key Business Metric | Current Baseline | Target Milestone | Financial & Strategic Impact |
| :--- | :--- | :--- | :--- | :--- |
| **OBJ-01** | Return Triage Cost | $4.80 / return | < $1.50 / return | $594,000 net annual Opex saving |
| **OBJ-02** | Turnaround Time | 72 hours | < 4 minutes | +22 points CSAT score increase |
| **OBJ-03** | Repeat Purchase Retention | 28% after return | 44% after return | +$1.2M in salvaged Lifetime Value (LTV) |

**Payback Period:** Estimated total implementation investment of $175,000 amortized within 3.5 months of full rollout.

---

### 3. Stakeholder RACI Matrix
- **Accountable (A):** VP of Customer Experience & VP of Logistics
- **Responsible (R):** Lead Business Analyst & Product Manager
- **Consulted (C):** Legal / Compliance, Fraud & Risk Team, Finance Controller
- **Informed (I):** Customer Support Agents, Warehouse Fulfillment Supervisors

---

### 4. High-Level Scope Boundaries
#### 4.1 In-Scope (Phase 1)
- Automated return label generation for domestic orders within 30 days of delivery.
- Instant store credit refund for orders under $200 with return abuse score < 0.20.
- Integration with Tier-1 3PL courier drop-off network.

#### 4.2 Out-of-Scope (Deferred to Phase 2)
- International cross-border customs return declarations.
- In-store point-of-sale (POS) physical cash refunds.
- Freight courier scheduling for bulky items (>30kg).

---

### 5. Business Rules & Regulatory Governance
- **\`BR-RET-01\` Abuse Threshold:** Accounts with >3 return requests in 30 days require manual supervisor inspection.
- **\`BR-RET-02\` Maximum Instant Credit:** Automated refunds cannot exceed $250 per transaction without secondary 2FA managerial override.
- **\`BR-RET-03\` Consumer Rights:** Return window policy must strictly comply with regional statutory cooling-off legislation (14-day mandatory right of withdrawal).

---

### 6. Risks, Assumptions & Dependencies
- **Risk:** Courier API downtime during Black Friday surge. *Mitigation: Offline barcode buffer queue with 4-hour retry cycle.*
- **Assumption:** Warehouse 3PL APIs support real-time webhook scan events upon package arrival.
- **Dependency:** Merchant acquirer approval for automated wallet reversal API thresholds by June 15.
`;

  const brdSections = [
    {
      id: 1,
      title: '1. Executive Summary & Problem Statement',
      badge: 'Strategic Context',
      desc: 'Articulates the market friction, customer pain points, and why this initiative is critical for company objectives right now.',
      keyQuestion: 'What business problem are we solving, and why must we solve it now?'
    },
    {
      id: 2,
      title: '2. Business Objectives & ROI Analysis',
      badge: 'Financial Model',
      desc: 'Defines quantifiable financial benchmarks: cost reduction, revenue expansion, customer retention, and investment payback period.',
      keyQuestion: 'How much money will this make or save, and what is the return on investment?'
    },
    {
      id: 3,
      title: '3. Stakeholder RACI Matrix',
      badge: 'Governance',
      desc: 'Identifies who is Responsible (R), Accountable (A), Consulted (C), and Informed (I) across business, legal, and operational units.',
      keyQuestion: 'Who owns sign-off authority and who must be kept in the loop?'
    },
    {
      id: 4,
      title: '4. Scope Boundaries (In vs Out of Scope)',
      badge: 'Commercial Scope',
      desc: 'Strictly establishes what the budget covers and explicitly lists what will NOT be delivered to prevent commercial disputes.',
      keyQuestion: 'What are the hard commercial boundaries of this investment?'
    },
    {
      id: 5,
      title: '5. Current State vs Future State (Gap Analysis)',
      badge: 'Process Mapping',
      desc: 'Compares existing manual/inefficient business workflows against the proposed automated target operating model.',
      keyQuestion: 'How does the business workflow transform from today to tomorrow?'
    },
    {
      id: 6,
      title: '6. Business Rules & Compliance Policies',
      badge: 'Legal & Policy',
      desc: 'Non-negotiable operational constraints, regulatory statutory compliance, fraud thresholds, and authorization caps.',
      keyQuestion: 'What statutory laws and company policies must the system enforce?'
    },
    {
      id: 7,
      title: '7. Risks, Assumptions & Dependencies',
      badge: 'Risk Management',
      desc: 'Identifies critical business vulnerabilities, vendor dependencies, and fallback mitigation strategies.',
      keyQuestion: 'What could derail the business case, and how do we de-risk it?'
    }
  ];

  const handleCopyExample = () => {
    navigator.clipboard.writeText(brdTemplateMarkdown);
    setCopiedExample(true);
    setTimeout(() => setCopiedExample(false), 2000);
  };

  return (
    <div className="space-y-10 animate-in">

      {/* ── 1. Hero Header ── */}
      <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-blue-600">
          <BarChart3 size={300} />
        </div>

        <div className="badge-red mb-4 inline-flex items-center gap-1.5">
          <Briefcase size={12} />
          {isMM ? 'စီးပွားရေး စာရွက်စာတမ်း လမ်းညွှန်' : 'Strategic Business Documentation'}
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 leading-[1.15]">
          {isMM ? 'BRD (Business Requirements Document) မာစတာလမ်းညွှန်' : 'Business Requirements Document (BRD) Mastery'}
        </h1>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
          {isMM ? (
            <>
              <strong>BRD</strong> သည် ပရောဂျက်တစ်ခုအတွက် <strong>စီးပွားရေးအရ တန်ဖိုးရှိပုံ (ROI)</strong>၊ အရင်းအနှီး ရင်းနှီးမြှုပ်နှံမှု အကျိုးအမြတ်နှင့် စည်းမျဉ်းဥပဒေ မူဝါဒများကို C-Suite နှင့် အဓိက Stakeholder များထံ တင်ပြအတည်ပြုချက် ရယူသော စာရွက်စာတမ်း ဖြစ်သည်။
            </>
          ) : (
            <>
              A <strong>Business Requirements Document (BRD)</strong> establishes the commercial justification for a project. It defines <strong>what the business wants to achieve</strong>, why the investment is sound, and the non-negotiable business rules before design and engineering begin.
            </>
          )}
        </p>

        <div className="flex flex-wrap gap-3 items-center">
          <button 
            onClick={handleCopyExample}
            className="btn-red flex items-center gap-2 text-xs md:text-sm cursor-pointer"
          >
            {copiedExample ? <Check size={16} /> : <Copy size={16} />}
            {copiedExample ? 'BRD Copied to Clipboard!' : 'Copy Full BRD Template'}
          </button>
          <Link href="/requirements-overview" className="btn-ghost flex items-center gap-1.5 text-xs md:text-sm">
            <Layers size={15} />
            Compare with PRD & SRS <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* ── 2. Why & When to Write a BRD ── */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-base">When to Write a Dedicated BRD</h2>
              <p className="text-xs text-gray-500">Enterprise & Multi-Department Initiatives</p>
            </div>
          </div>
          <ul className="space-y-3 text-xs text-gray-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Capital Expenditure Sign-Off:</strong> When budget allocation requires finance and board approval before assembling product teams.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Multi-Departmental Impact:</strong> Operations, Supply Chain, Legal, and Marketing all have interdependent business processes.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Vendor & Agency Procurement:</strong> Third-party software procurement or RFP contracting where commercial scope must be fixed.</span>
            </li>
          </ul>
        </div>

        <div className="card p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-base">When to Skip Straight to PRD</h2>
              <p className="text-xs text-gray-500">Agile Squads & Modern Startups</p>
            </div>
          </div>
          <ul className="space-y-3 text-xs text-gray-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Internal Feature Iteration:</strong> The squad already has headcount and budget; you are building features on an existing core product.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Fast Discovery Loops:</strong> The business justification is straightforward and can be captured in Section 1 of a standard PRD.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>No External Contractual Dependencies:</strong> No third-party RFPs, SLA penalties, or formal PMO gating stages.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── 3. The 7 Core Sections of a World-Class BRD ── */}
      <div className="card shadow-sm">
        <div className="card-header justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
              <FileText size={16} />
            </div>
            <h2 className="font-bold text-white text-base">
              The 7 Essential Sections of a Production BRD
            </h2>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-800 text-gray-300">
            Click Tabs to Inspect
          </span>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Section Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {brdSections.map((sec) => {
              const isActive = activeSectionTab === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSectionTab(sec.id)}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-150 flex flex-col justify-between gap-1.5 ${
                    isActive 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                      : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-blue-200' : 'text-gray-400'}`}>
                    Section 0{sec.id}
                  </span>
                  <span className="text-xs font-bold line-clamp-1">{sec.badge}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Preview */}
          {brdSections.map((sec) => {
            if (sec.id !== activeSectionTab) return null;
            return (
              <motion.div 
                key={sec.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-gray-900">{sec.title}</h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-600 text-white">
                    {sec.badge}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{sec.desc}</p>
                <div className="p-3.5 rounded-xl bg-white border border-blue-200 text-xs text-blue-900 font-mono">
                  🎯 <strong>Core Objective:</strong> {sec.keyQuestion}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── 4. Common BRD Mistakes & Best Practices ── */}
      <div className="card">
        <div className="card-header">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
            <AlertTriangle size={16} />
          </div>
          <h2 className="font-bold text-white text-base">
            5 Critical BRD Anti-Patterns & Best Practices
          </h2>
        </div>

        <div className="p-6 md:p-8 space-y-4">
          {[
            {
              title: '1. Dictating Tech Architecture or UI in the BRD',
              bad: '❌ Bad: "The business requires a React frontend with GraphQL connecting to AWS DynamoDB."',
              good: '✅ Good: "The return portal must allow customers to submit return claims in under 2 minutes across mobile and desktop devices."',
              why: 'BRDs define business outcomes. Specifying frameworks limits the engineering team from choosing the optimal technical architecture.'
            },
            {
              title: '2. Unquantified "Fluff" ROI Statements',
              bad: '❌ Bad: "The goal is to dramatically improve customer satisfaction and modernize our brand image."',
              good: '✅ Good: "Targeting a 22-point CSAT increase and $594,000 annual reduction in support triage labor within 6 months of launch."',
              why: 'Finance will not sign off on vague optimism. All business objectives must include baseline numbers and measurable financial targets.'
            },
            {
              title: '3. Omitting the Out-of-Scope Section',
              bad: '❌ Bad: Listing 20 in-scope features with no explicit exclusions.',
              good: '✅ Good: Explicitly demarcating: "Out of Scope for Phase 1: International customs returns and in-store cash payouts."',
              why: 'Without clear out-of-scope boundaries, stakeholders assume every edge case is included, leading to massive scope creep.'
            },
            {
              title: '4. Ignoring Regulatory & Statutory Policy Constraints',
              bad: '❌ Bad: Assuming legal and compliance will approve terms at launch day.',
              good: '✅ Good: Specifying mandatory business rules like 14-day statutory return cooling-off laws and PCI-DSS compliance upfront.',
              why: 'Retrofitting legal compliance during the QA stage often causes multi-month project delays or regulatory fines.'
            },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-gray-200 bg-white space-y-2">
              <h3 className="font-bold text-sm text-gray-900">{item.title}</h3>
              <div className="grid md:grid-cols-2 gap-2 pt-1 text-xs">
                <div className="p-3 rounded-lg bg-red-50 text-red-900 border border-red-200">
                  {item.bad}
                </div>
                <div className="p-3 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">
                  {item.good}
                </div>
              </div>
              <p className="text-[11px] text-gray-500 pt-1">💡 <strong>Why it matters:</strong> {item.why}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. Full Real-World Example (Copyable) ── */}
      <div className="card shadow-sm">
        <div className="card-header justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
              <DollarSign size={16} />
            </div>
            <h2 className="font-bold text-white text-base">
              Real-World Enterprise BRD Example
            </h2>
          </div>
          <button
            onClick={handleCopyExample}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors cursor-pointer"
          >
            {copiedExample ? <Check size={13} /> : <Copy size={13} />}
            {copiedExample ? 'Copied!' : 'Copy Markdown'}
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-4">
          <p className="text-xs text-gray-600">
            This production example demonstrates how an enterprise e-commerce company documents an automated return protocol to secure budget approval:
          </p>
          <pre className="p-5 rounded-xl bg-gray-900 text-gray-100 text-xs font-mono overflow-x-auto leading-relaxed max-h-96 border border-gray-800">
            {brdTemplateMarkdown}
          </pre>
        </div>
      </div>

      {/* Nav footer */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <Link href="/requirements-overview" className="btn-ghost">
          Back to Overview
        </Link>
        <Link href="/core-components" className="btn-red">
          Next: PRD Guide <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
}
