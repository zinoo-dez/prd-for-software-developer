'use client';

import Link from 'next/link';
import { 
  ExternalLink, ArrowRight, Copy, Check, FileText, 
  BarChart3, Cpu, CheckSquare, Sparkles, Download, Layers 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Templates() {
  const { t, language } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeDocTab, setActiveDocTab] = useState<'prd' | 'brd' | 'srs' | 'stories'>('prd');

  const isMM = language === 'mm';

  const docTemplates = {
    prd: {
      id: 'prd',
      title: 'Standard Product Requirements Document (PRD)',
      badge: 'Product & UX',
      icon: FileText,
      color: 'border-red-200 bg-red-50/30',
      markdown: `# Product Requirements Document (PRD)
## Project Name: [Project Name]
- **Author:** [Author / Product Manager Name]
- **Target Release Date:** [Target Date / Sprint]
- **Document Status:** Draft / In Review / Approved
- **Associated BRD:** [Link to BRD if applicable]

---

## 1. Objective & Problem Statement
### 1.1 Problem
[Clearly state the user pain point or business friction being solved.]

### 1.2 Objective & Vision
[Describe what success looks like and the desired outcome.]

---

## 2. Target Audience & User Personas
- **Primary Persona:** [e.g., Returning shopper seeking fast reorder]
- **Secondary Persona:** [e.g., Customer support agent handling queries]

---

## 3. Scope Boundaries
### 3.1 In-Scope (Phase 1)
- [Feature 1]
- [Feature 2]

### 3.2 Out-of-Scope (Deferred / Excluded)
- [Feature 3]

---

## 4. User Stories & Acceptance Criteria
### User Story 1
> **As a** [Persona]  
> **I want to** [Action]  
> **So that** [Benefit]  

**Acceptance Criteria (Given-When-Then):**
\`\`\`gherkin
Given [Precondition]
When [User Action]
Then [Observable Outcome]
\`\`\`

---

## 5. Success Metrics & Telemetry KPIs
- **Adoption Metric:** [e.g., 40% of active users utilize feature in first 30 days]
- **Performance Metric:** [e.g., Page load latency P95 < 1.2s]
- **Business Impact:** [e.g., +15% checkout conversion lift]
`
    },
    brd: {
      id: 'brd',
      title: 'Enterprise Business Requirements Document (BRD)',
      badge: 'Business Strategy & ROI',
      icon: BarChart3,
      color: 'border-blue-200 bg-blue-50/30',
      markdown: `# Business Requirements Document (BRD)
## Project Name: [Project Name]
- **Document Version:** 1.0
- **Document Author / Owner:** [Business Analyst / VP Strategy]
- **Executive Sponsor:** [COO / VP Sponsor]
- **Target Release:** [Fiscal Quarter / Launch Date]
- **Status:** Approved for Product Scoping

---

### 1. Executive Summary & Problem Statement
#### 1.1 Business Context
[Describe the market opportunity, cost leak, or operational inefficiency.]

#### 1.2 Proposed Business Solution
[High-level summary of the initiative and strategic alignment.]

---

### 2. Business Objectives & ROI Financial Model
| Objective ID | Key Business Metric | Current Baseline | Target Milestone | Financial & Strategic Impact |
| :--- | :--- | :--- | :--- | :--- |
| **OBJ-01** | [e.g., Processing Cost] | $5.20 / unit | < $1.80 / unit | $350,000 annual Opex savings |
| **OBJ-02** | [e.g., User Churn Rate] | 8.5% | < 4.0% | +$1.1M retained ARR |

**Payback Period:** Estimated capital expenditure of $[Amount] amortized within [X] months of launch.

---

### 3. Stakeholder RACI Matrix
- **Accountable (A):** [Department Head / Sponsor]
- **Responsible (R):** [Lead BA & Product Manager]
- **Consulted (C):** [Legal, Finance Controller, InfoSec, Operations]
- **Informed (I):** [Sales, Customer Support, Marketing]

---

### 4. Scope Boundaries
#### 4.1 In-Scope (Phase 1)
- [Commercial Requirement 1]
- [Commercial Requirement 2]

#### 4.2 Out-of-Scope
- [Excluded region, currency, or deferred feature]

---

### 5. Business Rules & Regulatory Governance
- **\`BR-01\`:** [e.g., Transactions over $10,000 require AML KYC Level 2 compliance.]
- **\`BR-02\`:** [e.g., Automated refunds capped at $250 without managerial 2FA override.]

---

### 6. Risks, Assumptions & Dependencies
- **Risks:** [e.g., Third-party API provider pricing changes.]
- **Assumptions:** [e.g., Existing warehouse bandwidth supports real-time scan events.]
- **Dependencies:** [e.g., Legal team sign-off by May 15.]
`
    },
    srs: {
      id: 'srs',
      title: 'Technical Software Requirements Specification (SRS)',
      badge: 'Engineering & Architecture',
      icon: Cpu,
      color: 'border-purple-200 bg-purple-50/30',
      markdown: `# Software Requirements Specification (SRS)
## System Module: [System / Subsystem Name]
- **Document Version:** 1.0.0
- **Technical Author:** [Lead Software Engineer / Solutions Architect]
- **Associated PRD:** [Link to PRD]
- **Status:** Approved for Sprint Planning

---

### 1. System Architecture Overview
[Provide an architectural context summary or embed a Mermaid C4 architecture diagram.]

---

### 2. Functional Requirements (FR)
| Requirement ID | System Feature | Input / Trigger | Processing Logic & Constraints | Expected Output / State Change |
| :--- | :--- | :--- | :--- | :--- |
| **\`FR-01\`** | [Feature Name] | [Endpoint or Event] | [Logic, Cryptographic rules, DB transactions] | [Response payload / State] |
| **\`FR-02\`** | Token Verification | \`Authorization\` Header | Verify HMAC-SHA256 signature in Redis | Return 200 with JWT or 401 |

---

### 3. Non-Functional Requirements (NFR) — ISO 25010
#### 3.1 Performance & Latency (P99)
- **\`NFR-PERF-01\`:** Ingestion endpoint must respond in $\le$ 150ms at P99 under 3,000 RPS load.
- **\`NFR-PERF-02\`:** Database query budget $\le$ 20ms for indexed lookups.

#### 3.2 Security & Compliance
- **\`NFR-SEC-01\`:** Transport security must enforce TLS 1.3 with HSTS enabled.
- **\`NFR-SEC-02\`:** Sensitive PII columns encrypted at rest with AES-256-GCM.

#### 3.3 Reliability & Availability
- **\`NFR-REL-01\`:** Monthly uptime SLA of 99.99% with automated multi-AZ pod failover.

---

### 4. Data Dictionary & API Contract
\`\`\`json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "id": { "type": "string", "format": "uuid" },
    "status": { "type": "string", "enum": ["pending", "processed"] }
  },
  "required": ["id", "status"]
}
\`\`\`
`
    },
    stories: {
      id: 'stories',
      title: 'User Story & Acceptance Criteria (Gherkin) Template',
      badge: 'Agile Delivery',
      icon: CheckSquare,
      color: 'border-emerald-200 bg-emerald-50/30',
      markdown: `# User Story & Acceptance Criteria Spec
## Epic: [Parent Epic Name]
- **Story Points:** [1 / 2 / 3 / 5 / 8]
- **Priority:** [P0 - Must Have / P1 - Should Have / P2 - Nice to Have]
- **Assigned Squad:** [Sprint Team / Tech Lead]

---

### 1. User Story Narrative
> **As a** [Target User Persona]  
> **I want to** [Perform a specific capability or action]  
> **So that** [I achieve a measurable benefit or outcome]  

---

### 2. Acceptance Criteria (Given-When-Then / Gherkin)

#### Scenario 1: Primary Happy Path
\`\`\`gherkin
Scenario: Successful completion of primary workflow
  Given the user is logged in with active permissions
  And the system is in an initialized state
  When the user triggers the primary action
  Then the system updates state successfully
  And displays confirmation notification.
\`\`\`

#### Scenario 2: Error Handling & Validation
\`\`\`gherkin
Scenario: Handling invalid inputs gracefully
  Given the user submits invalid or missing parameters
  When the user clicks "Submit"
  Then the system blocks submission
  And highlights the invalid field with an inline error message.
\`\`\`

---

### 3. Technical Constraints & Design References
- **Figma Mockup Frame:** [Link to UI frame]
- **Analytics Telemetry Event:** \`analytics.track("feature_completed", { id })\`
`
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const externalTemplates = [
    {
      id: 'notion', name: t('tpl_notion_name'),
      desc: t('tpl_notion_desc'),
      href: 'https://www.notion.so/templates/product-requirements-document',
      label: t('tpl_notion_btn'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round">
          <rect x="20" y="10" width="60" height="80" rx="4" />
          <path d="M35 35 L65 35 M35 50 L65 50 M35 65 L50 65" />
        </svg>
      ),
    },
    {
      id: 'gdocs', name: t('tpl_gdocs_name'),
      desc: t('tpl_gdocs_desc'),
      href: 'https://docs.google.com/document/d/1Xy_JpXb04x63d0-wYg_Q0Vv97YvWwD-0_w2uO4Xw9w/template/preview',
      label: t('tpl_gdocs_btn'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#4285F4" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"/>
          <path fill="#90CAF9" d="M40 13L30 13 30 3z"/>
          <path fill="#1976D2" d="M30 13H40L30 3z"/>
          <path fill="#E3F2FD" d="M15 23H33V27H15zM15 31H33V35H15zM15 15H25V19H15z"/>
        </svg>
      ),
    },
    {
      id: 'confluence', name: t('tpl_conf_name'),
      desc: t('tpl_conf_desc'),
      href: 'https://www.atlassian.com/software/confluence/templates/product-requirements',
      label: t('tpl_conf_btn'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="#0052CC">
          <path d="M1.2 16.5c-.3.4-.1 1 .4 1.2l6.2 2.8c.4.2 1 0 1.2-.5.5-1.2 1.5-2.3 2.9-3.1 1.5-.8 3.1-1.1 4.5-.8.5.1 1-.2 1.1-.7l1.2-6.5c.1-.5-.2-1-.7-1.1-4.6-1-9.6 1.3-12 5.7-.3.3-.5.6-.8 1z"/>
          <path d="M22.8 7.5c.3-.4.1-1-.4-1.2L16.2 3.5c-.4-.2-1 0-1.2.5-.5 1.2-1.5 2.3-2.9 3.1-1.5.8-3.1 1.1-4.5.8-.5-.1-1 .2-1.1.7L5.3 14.1c-.1.5.2 1 .7 1.1 4.6 1 9.6-1.3 12-5.7.3-.3.5-.6.8-1z"/>
        </svg>
      ),
    },
    {
      id: 'linear', name: t('tpl_linear_name'),
      desc: t('tpl_linear_desc'),
      href: 'https://linear.app',
      label: t('tpl_linear_btn'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="#5E6AD2">
          <path d="M3.95 14.52L9.48 20.05a9.3 9.3 0 01-5.53-5.53zm-.54-1.47L14.05 3.41A9.32 9.32 0 004.41 13.05zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-10 animate-in">

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="badge-red mb-4">{t('templates_badge')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
          {t('templates_h1')} & Requirements Suite
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl">
          Production-grade Markdown templates for <strong>PRD</strong>, <strong>BRD</strong>, <strong>SRS</strong>, and <strong>User Stories</strong>. Copy with one click or export directly to Notion, Google Docs, Confluence, and Linear.
        </p>
      </div>

      {/* ── 1. Interactive 1-Click Copyable Markdown Suite ── */}
      <div className="card shadow-sm">
        <div className="card-header justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
              <Layers size={16} />
            </div>
            <h2 className="font-bold text-white text-base">
              The Complete Requirements Template Suite
            </h2>
          </div>
          <button
            onClick={() => handleCopy(activeDocTab, docTemplates[activeDocTab].markdown)}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors cursor-pointer"
          >
            {copiedId === activeDocTab ? <Check size={13} /> : <Copy size={13} />}
            {copiedId === activeDocTab ? 'Template Copied!' : 'Copy Active Template'}
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Doc Type Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { id: 'prd' as const, label: 'PRD Template', icon: FileText },
              { id: 'brd' as const, label: 'BRD Template', icon: BarChart3 },
              { id: 'srs' as const, label: 'SRS Template', icon: Cpu },
              { id: 'stories' as const, label: 'User Story & AC', icon: CheckSquare },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveDocTab(tab.id)}
                className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-150 flex flex-col justify-between gap-1.5 ${
                  activeDocTab === tab.id
                    ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                    : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200'
                }`}
              >
                <tab.icon size={18} className={activeDocTab === tab.id ? 'text-red-400' : 'text-red-600'} />
                <span className="text-xs font-bold leading-tight">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active Template Preview */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-800">
                {docTemplates[activeDocTab].title}
              </span>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
                {docTemplates[activeDocTab].badge}
              </span>
            </div>
            <pre className="p-5 rounded-xl bg-gray-900 text-gray-100 text-xs font-mono overflow-x-auto leading-relaxed max-h-96 border border-gray-800">
              {docTemplates[activeDocTab].markdown}
            </pre>
          </div>
        </div>
      </div>

      {/* ── 2. External Platform Template Cards ── */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 rounded-full bg-red-600" />
          <h2 className="text-2xl font-bold text-gray-900">
            Export to Industry Platforms
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {externalTemplates.map((tpl, i) => (
            <motion.div 
              key={tpl.id} 
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="card group bg-white"
            >
              <div className="card-header justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: '#374151' }}
                  >
                    {tpl.icon}
                  </div>
                  <h2 className="font-bold text-white text-sm">{tpl.name}</h2>
                </div>
                <span className="text-xs font-bold text-red-500">
                  0{i + 1}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed mb-5 text-gray-600">{tpl.desc}</p>
                <div className="flex items-center gap-4 mt-2">
                  <a
                    href={tpl.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold gap-1 text-red-600 hover:text-red-700 transition-colors"
                  >
                    {tpl.label} <ExternalLink size={13} />
                  </a>
                  <button
                    onClick={() => handleCopy(tpl.id, docTemplates.prd.markdown)}
                    className="inline-flex items-center text-sm font-semibold gap-1 transition-colors text-gray-500 hover:text-gray-900 cursor-pointer"
                  >
                    {copiedId === tpl.id ? <Check size={13} className="text-green-600" /> : <Copy size={13} />}
                    {copiedId === tpl.id ? t('b_copied') : t('tpl_btn_copy')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pro tip — dark strip */}
      <div className="rounded-xl p-6 bg-gray-900 text-white space-y-2">
        <p className="font-semibold text-white flex items-center gap-2">
          <Sparkles size={16} className="text-red-400" /> {t('tpl_tip_title')}
        </p>
        <p className="text-xs md:text-sm leading-relaxed text-gray-400">
          {t('tpl_tip_desc')}
        </p>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <Link href="/user-stories" className="btn-ghost">Back to User Stories</Link>
        <Link href="/tools" className="btn-red">{t('tpl_nav_tools')} <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
