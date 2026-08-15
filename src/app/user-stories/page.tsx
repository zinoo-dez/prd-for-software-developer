'use client';

import Link from 'next/link';
import { 
  CheckSquare, ArrowRight, CheckCircle2, AlertTriangle, Copy, 
  Check, Sparkles, FileText, Layers, ChevronRight, HelpCircle, 
  Target, Zap, Edit3, Code, Terminal, Eye, BookmarkCheck, Split
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function UserStoriesGuide() {
  const { t, language } = useLanguage();
  const [activeInvestPrinciple, setActiveInvestPrinciple] = useState<string>('I');
  const [copiedExampleIndex, setCopiedExampleIndex] = useState<number | null>(null);

  // Interactive Generator State
  const [generatorData, setGeneratorData] = useState({
    persona: 'authenticated customer',
    action: 'save multiple shipping addresses to my account',
    benefit: 'I can select home or work delivery with a single click during checkout',
    givenHappy: 'the customer is logged in on the checkout payment page',
    whenHappy: 'the customer selects a saved "Work" address from the dropdown',
    thenHappy: 'the shipping fee and estimated delivery date recalculate immediately without page refresh',
    givenEdge: 'the customer enters an invalid postal code during address creation',
    whenEdge: 'the customer clicks "Save Address"',
    thenEdge: 'the system displays inline validation error "Invalid postal code for selected region" and prevents form submission',
  });
  const [copiedGeneratorStory, setCopiedGeneratorStory] = useState(false);

  const isMM = language === 'mm';

  const investPrinciples = [
    {
      id: 'I',
      letter: 'I',
      name: 'Independent',
      desc: 'Stories should be self-contained so they can be prioritized, developed, and deployed in any order without blocking dependencies.',
      bad: '❌ Bad: "Build database tables for checkout" (blocks all frontend UI stories until next sprint).',
      good: '✅ Good: "Checkout with single saved credit card" (vertical slice with UI and mock/stubbed API).',
    },
    {
      id: 'N',
      letter: 'N',
      name: 'Negotiable',
      desc: 'Stories capture intent and user outcome, leaving room for engineers and designers to co-create the most elegant technical solution.',
      bad: '❌ Bad: "Create a 3-column SQL table with foreign keys X and Y and React dropdown."',
      good: '✅ Good: "Allow returning customers to quickly select recent delivery addresses."',
    },
    {
      id: 'V',
      letter: 'V',
      name: 'Valuable',
      desc: 'Must deliver tangible value to the end user or the business. Pure technical refactors should be framed as subtasks or architectural enablers.',
      bad: '❌ Bad: "Migrate auth service to TypeScript."',
      good: '✅ Good: "Reduce auth token validation latency by 60% to eliminate checkout drop-offs."',
    },
    {
      id: 'E',
      letter: 'E',
      name: 'Estimable',
      desc: 'The squad understands the scope, complexity, and boundaries well enough to estimate story points accurately during planning.',
      bad: '❌ Bad: "Add AI machine learning to customer recommendations."',
      good: '✅ Good: "Display top 5 category bestseller products on the search empty state page."',
    },
    {
      id: 'S',
      letter: 'S',
      name: 'Small',
      desc: 'Should be sized to complete within a single sprint (ideally 1–3 development days). Large stories ("Epics") must be sliced.',
      bad: '❌ Bad: "Build complete multi-currency international billing system."',
      good: '✅ Good: "Allow workspace admin to upgrade from Free to Pro tier via Stripe USD."',
    },
    {
      id: 'T',
      letter: 'T',
      name: 'Testable',
      desc: 'Has unambiguous, objective acceptance criteria that QA or automated test suites can verify as PASS or FAIL without debate.',
      bad: '❌ Bad: "The dashboard should load fast and look intuitive."',
      good: '✅ Good: "Dashboard initial load time <= 1.2s at P95; all financial metrics render above the fold."',
    },
  ];

  const storyExamples = [
    {
      id: 1,
      title: 'E-Commerce: One-Click Reorder',
      epic: 'Customer Retention & Reorder Flow',
      persona: 'returning customer',
      action: 'reorder items from my past orders with a single click',
      benefit: 'I do not have to search for the same household essentials each month',
      gherkin: `Scenario: Successful one-click reorder with in-stock items
  Given the customer is logged in and viewing fulfilled order #1042
  And all items in order #1042 are currently in-stock
  When the customer clicks "Reorder All" on the order details page
  Then all items from order #1042 are added to the active cart
  And the customer is redirected directly to the final checkout review step.

Scenario: Handling out-of-stock items gracefully
  Given order #1042 contains 3 items, but Item B is out-of-stock
  When the customer clicks "Reorder All"
  Then the 2 available items are added to the cart
  And a warning alert displays: "Item B is currently out of stock and was skipped."`
    },
    {
      id: 2,
      title: 'SaaS B2B: Team Invitations & RBAC',
      epic: 'Workspace Management & Access Control',
      persona: 'workspace administrator',
      action: 'invite team members via email and assign them a role (Admin, Editor, Viewer)',
      benefit: 'our squad can collaborate securely with appropriate permission boundaries',
      gherkin: `Scenario: Send invite to new valid business email
  Given the administrator is on the "Team Settings" page
  When the administrator inputs "colleague@company.com" and selects role "Editor"
  And clicks "Send Invitation"
  Then an invitation record is created with status "Pending" and a 7-day expiration token
  And an email containing the signup link is dispatched within 30 seconds.

Scenario: Prevent duplicate pending invitations
  Given "colleague@company.com" already has an active pending invitation
  When the administrator attempts to send another invitation to the same email
  Then the form displays: "An active invitation already exists for this email address."
  And no duplicate invitation record is created.`
    },
    {
      id: 3,
      title: 'FinTech: Export Transaction History (CSV)',
      epic: 'Financial Reporting & Reconciliation',
      persona: 'financial controller',
      action: 'export transaction history for a custom date range as a formatted CSV file',
      benefit: 'I can perform end-of-month accounting reconciliations in Excel',
      gherkin: `Scenario: Async export generation for large datasets (>10,000 rows)
  Given the selected date range contains 45,000 transactions
  When the user clicks "Download CSV"
  Then the system displays: "Your export is being generated. We will email the download link shortly."
  And the CSV background job completes within 3 minutes
  And an email with an authenticated signed S3 download URL is delivered to the user.`
    },
    {
      id: 4,
      title: 'Productivity: Document Auto-Save & Offline Mode',
      epic: 'Document Editor Reliability',
      persona: 'student writing a project draft',
      action: 'have the editor automatically save my changes locally every 10 seconds',
      benefit: 'I never lose my work if my internet connection drops unexpectedly',
      gherkin: `Scenario: Local caching during network disconnection
  Given the student is editing a document with unsaved changes
  When the device loses network connectivity
  Then the document changes are saved to browser IndexedDB
  And a status badge displays: "Offline — Saved locally".

Scenario: Conflict-free background sync upon reconnection
  Given the student has local changes saved while offline
  When internet connectivity is restored
  Then the system pushes local changes to the server API
  And updates the status badge to: "All changes saved to cloud".`
    },
  ];

  const generateInteractiveStoryMarkdown = () => {
    return `### User Story: ${generatorData.action}
**Story Narrative:**
> **As a** ${generatorData.persona}  
> **I want to** ${generatorData.action}  
> **So that** ${generatorData.benefit}  

---

### Acceptance Criteria (Given-When-Then)

#### Scenario 1: Primary Happy Path
\`\`\`gherkin
Given ${generatorData.givenHappy}
When ${generatorData.whenHappy}
Then ${generatorData.thenHappy}
\`\`\`

#### Scenario 2: Error Handling & Validation
\`\`\`gherkin
Given ${generatorData.givenEdge}
When ${generatorData.whenEdge}
Then ${generatorData.thenEdge}
\`\`\`
`;
  };

  const handleCopyGeneratedStory = () => {
    navigator.clipboard.writeText(generateInteractiveStoryMarkdown());
    setCopiedGeneratorStory(true);
    setTimeout(() => setCopiedGeneratorStory(false), 2000);
  };

  const handleCopyExampleStory = (idx: number, story: typeof storyExamples[0]) => {
    const md = `### User Story: ${story.title}
**Epic:** ${story.epic}

> **As a** ${story.persona}  
> **I want to** ${story.action}  
> **So that** ${story.benefit}  

**Acceptance Criteria (Gherkin):**
\`\`\`gherkin
${story.gherkin}
\`\`\`
`;
    navigator.clipboard.writeText(md);
    setCopiedExampleIndex(idx);
    setTimeout(() => setCopiedExampleIndex(null), 2000);
  };

  return (
    <div className="space-y-10 animate-in">

      {/* ── 1. Hero Header ── */}
      <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-emerald-600">
          <CheckSquare size={300} />
        </div>

        <div className="badge-red mb-4 inline-flex items-center gap-1.5">
          <BookmarkCheck size={12} />
          {isMM ? 'Agile လိုအပ်ချက်များ လမ်းညွှန်' : 'Agile Requirements Masterclass'}
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 leading-[1.15]">
          {isMM ? 'User Stories & Acceptance Criteria (Gherkin) လမ်းညွှန်' : 'User Stories & Acceptance Criteria Masterclass'}
        </h1>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
          {isMM ? (
            <>
              <strong>User Story</strong> သည် အသုံးပြုသူ၏ လိုလားချက်နှင့် တန်ဖိုးကို အခြေခံ၍ ရေးသားသော Agile လိုအပ်ချက်ယူနစ် ဖြစ်ပြီး၊ <strong>Given-When-Then (Gherkin) Acceptance Criteria</strong> သည် QA နှင့် Developer များအတွက် အောင်မြင်မှု စံနှုန်းကို တိကျစွာ သတ်မှတ်ပေးသည်။
            </>
          ) : (
            <>
              A <strong>User Story</strong> is the atomic currency of user value in modern product development. Paired with <strong>Given-When-Then (Gherkin) Acceptance Criteria</strong> and the <strong>INVEST framework</strong>, it bridges PRD product strategy into testable engineering sprint tasks.
            </>
          )}
        </p>

        <div className="flex flex-wrap gap-3 items-center">
          <a href="#interactive-generator" className="btn-red flex items-center gap-2 text-xs md:text-sm">
            <Edit3 size={15} />
            Try Interactive Story Generator
          </a>
          <Link href="/requirements-overview" className="btn-ghost flex items-center gap-1.5 text-xs md:text-sm">
            <Layers size={15} />
            View Document Hierarchy <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* ── 2. The Standard Format & Anatomy ── */}
      <div className="card shadow-sm">
        <div className="card-header">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
            <Target size={16} />
          </div>
          <h2 className="font-bold text-white text-base">
            Anatomy of a High-Impact User Story
          </h2>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Formula Display */}
          <div className="p-5 rounded-2xl bg-gray-900 text-white font-mono text-xs md:text-sm space-y-2 border border-gray-800">
            <div className="text-gray-400 text-xs">// Standard 3-Part User Story Formula</div>
            <div>
              <span className="text-red-400 font-bold">As a</span> <span className="text-amber-300 font-bold">[Target Persona / User Role]</span>,
            </div>
            <div>
              <span className="text-red-400 font-bold">I want to</span> <span className="text-blue-300 font-bold">[Perform an Action / Capability]</span>,
            </div>
            <div>
              <span className="text-red-400 font-bold">So that</span> <span className="text-emerald-300 font-bold">[Achieve a Measurable Benefit / Value]</span>.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-xs text-gray-700">
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-1.5">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">1. The Persona ("Who")</span>
              <p className="leading-relaxed">
                Avoid generic terms like "user". Use specific personas with context (e.g., <em>"returning customer"</em>, <em>"workspace admin"</em>, <em>"first-time buyer"</em>).
              </p>
            </div>
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-1.5">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">2. The Action ("What")</span>
              <p className="leading-relaxed">
                Describe the user capability or intent, not the internal code implementation or button color (e.g., <em>"filter products by delivery time"</em>).
              </p>
            </div>
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-1.5">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">3. The Benefit ("Why")</span>
              <p className="leading-relaxed">
                <strong>The most critical clause!</strong> Explaining the user outcome empowers engineers to suggest simpler, more cost-effective solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. The INVEST Quality Framework ── */}
      <div className="card shadow-sm">
        <div className="card-header justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
              <Zap size={16} />
            </div>
            <h2 className="font-bold text-white text-base">
              The INVEST Quality Framework
            </h2>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-800 text-gray-300">
            Click Letters to Inspect
          </span>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            Every User Story must pass the 6 INVEST quality criteria before being accepted into sprint planning:
          </p>

          {/* Letter Selectors */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {investPrinciples.map(p => {
              const isActive = activeInvestPrinciple === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveInvestPrinciple(p.id)}
                  className={`p-3.5 rounded-xl border text-center cursor-pointer transition-all duration-150 flex flex-col items-center gap-1 ${
                    isActive 
                      ? 'bg-red-600 text-white border-red-600 shadow-sm' 
                      : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200'
                  }`}
                >
                  <span className="text-2xl font-black">{p.letter}</span>
                  <span className="text-[11px] font-bold truncate w-full">{p.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active INVEST Detail */}
          {investPrinciples.map(p => {
            if (p.id !== activeInvestPrinciple) return null;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                    {p.letter}
                  </span>
                  <h3 className="font-bold text-base text-gray-900">{p.name}</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{p.desc}</p>
                <div className="grid md:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="p-3.5 rounded-xl bg-red-50 text-red-900 border border-red-200">
                    {p.bad}
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                    {p.good}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── 4. Agile Hierarchy: Theme to Task ── */}
      <div className="card shadow-sm">
        <div className="card-header">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
            <Split size={16} />
          </div>
          <h2 className="font-bold text-white text-base">
            Agile Requirements Hierarchy: From Strategy to Subtask
          </h2>
        </div>

        <div className="p-6 md:p-8 space-y-4">
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            How strategic company themes decompose step-by-step into actionable development tasks:
          </p>

          <div className="space-y-3">
            {[
              { level: '1. Strategic Theme', badge: 'Company Goal', color: 'bg-purple-100 text-purple-900 border-purple-200', example: '🏆 Enterprise Trust & Identity Compliance (Annual Objective)' },
              { level: '2. Product Epic', badge: 'PRD Level', color: 'bg-blue-100 text-blue-900 border-blue-200', example: '📦 Multi-Factor Authentication (MFA) & SSO Integration (Multi-Sprint)' },
              { level: '3. Feature Capability', badge: 'PRD Feature', color: 'bg-amber-100 text-amber-900 border-amber-200', example: '✨ Time-Based One-Time Password (TOTP) Authenticator App Setup' },
              { level: '4. User Story', badge: 'Sprint Backlog', color: 'bg-emerald-100 text-emerald-900 border-emerald-200', example: '📝 "As a security lead, I want to scan a QR code with Google Authenticator so I can set up 2FA in under 30s"' },
              { level: '5. Technical Subtasks', badge: 'SRS & Jira', color: 'bg-gray-100 text-gray-900 border-gray-200', example: '⚙️ Task A: Implement RFC 6238 TOTP library • Task B: Build 6-box auto-advance PIN UI • Task C: Integration tests' },
            ].map((st, idx) => (
              <div key={idx} className={`p-4 rounded-xl border ${st.color} flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs`}>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-70">{st.level}</div>
                  <div className="text-xs font-semibold">{st.example}</div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white text-gray-800 border border-gray-200 shrink-0 self-start sm:self-center">
                  {st.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. Real-World Production Examples with Gherkin AC ── */}
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 rounded-full bg-red-600" />
          <h2 className="text-2xl font-bold text-gray-900">
            4 Production-Grade User Story Examples
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {storyExamples.map((story, idx) => (
            <div key={story.id} className="card p-6 flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
                    {story.epic}
                  </span>
                  <button
                    onClick={() => handleCopyExampleStory(idx, story)}
                    className="text-xs font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-1 cursor-pointer"
                  >
                    {copiedExampleIndex === idx ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                    {copiedExampleIndex === idx ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <h3 className="font-bold text-sm text-gray-900">{story.title}</h3>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-800 space-y-1">
                  <p><strong>As a</strong> {story.persona},</p>
                  <p><strong>I want to</strong> {story.action},</p>
                  <p><strong>So that</strong> {story.benefit}.</p>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Acceptance Criteria (Gherkin)</div>
                  <pre className="p-3.5 rounded-xl bg-gray-900 text-emerald-300 text-[11px] font-mono overflow-x-auto leading-relaxed max-h-48 border border-gray-800">
                    {story.gherkin}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 6. Interactive User Story & Gherkin Generator ── */}
      <div id="interactive-generator" className="card shadow-md border-red-200">
        <div className="card-header justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
              <Edit3 size={16} />
            </div>
            <h2 className="font-bold text-white text-base">
              Interactive User Story & Gherkin AC Generator
            </h2>
          </div>
          <button
            onClick={handleCopyGeneratedStory}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors cursor-pointer"
          >
            {copiedGeneratorStory ? <Check size={13} /> : <Copy size={13} />}
            {copiedGeneratorStory ? 'Story Copied!' : 'Copy to Jira / Markdown'}
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            Customize the fields below to dynamically generate a formatted User Story with Given-When-Then test cases:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">1. As a [Persona]:</label>
              <input
                type="text"
                value={generatorData.persona}
                onChange={e => setGeneratorData({ ...generatorData, persona: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-red-500 bg-white"
                placeholder="e.g. store manager"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">2. I want to [Action]:</label>
              <input
                type="text"
                value={generatorData.action}
                onChange={e => setGeneratorData({ ...generatorData, action: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-red-500 bg-white"
                placeholder="e.g. bulk update inventory counts"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700">3. So that [Benefit]:</label>
              <input
                type="text"
                value={generatorData.benefit}
                onChange={e => setGeneratorData({ ...generatorData, benefit: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:outline-red-500 bg-white"
                placeholder="e.g. I save 3 hours during inventory count days"
              />
            </div>
          </div>

          {/* Gherkin Scenarios Editor */}
          <div className="grid md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 space-y-3">
              <span className="text-xs font-bold text-emerald-900">Scenario 1: Happy Path (Success Case)</span>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-mono text-[10px] text-gray-500">GIVEN:</span>
                  <input
                    type="text"
                    value={generatorData.givenHappy}
                    onChange={e => setGeneratorData({ ...generatorData, givenHappy: e.target.value })}
                    className="w-full p-2 rounded-lg border border-emerald-200 bg-white text-xs"
                  />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gray-500">WHEN:</span>
                  <input
                    type="text"
                    value={generatorData.whenHappy}
                    onChange={e => setGeneratorData({ ...generatorData, whenHappy: e.target.value })}
                    className="w-full p-2 rounded-lg border border-emerald-200 bg-white text-xs"
                  />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gray-500">THEN:</span>
                  <input
                    type="text"
                    value={generatorData.thenHappy}
                    onChange={e => setGeneratorData({ ...generatorData, thenHappy: e.target.value })}
                    className="w-full p-2 rounded-lg border border-emerald-200 bg-white text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-50/40 border border-red-200 space-y-3">
              <span className="text-xs font-bold text-red-900">Scenario 2: Edge Case (Validation / Error)</span>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-mono text-[10px] text-gray-500">GIVEN:</span>
                  <input
                    type="text"
                    value={generatorData.givenEdge}
                    onChange={e => setGeneratorData({ ...generatorData, givenEdge: e.target.value })}
                    className="w-full p-2 rounded-lg border border-red-200 bg-white text-xs"
                  />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gray-500">WHEN:</span>
                  <input
                    type="text"
                    value={generatorData.whenEdge}
                    onChange={e => setGeneratorData({ ...generatorData, whenEdge: e.target.value })}
                    className="w-full p-2 rounded-lg border border-red-200 bg-white text-xs"
                  />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gray-500">THEN:</span>
                  <input
                    type="text"
                    value={generatorData.thenEdge}
                    onChange={e => setGeneratorData({ ...generatorData, thenEdge: e.target.value })}
                    className="w-full p-2 rounded-lg border border-red-200 bg-white text-xs"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Live Markdown Preview */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                <Eye size={14} /> Live Formatted Markdown Preview
              </span>
            </div>
            <pre className="p-5 rounded-xl bg-gray-900 text-gray-100 text-xs font-mono overflow-x-auto leading-relaxed border border-gray-800 max-h-72">
              {generateInteractiveStoryMarkdown()}
            </pre>
          </div>
        </div>
      </div>

      {/* Nav footer */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <Link href="/srs-guide" className="btn-ghost">
          Back to SRS Guide
        </Link>
        <Link href="/templates" className="btn-red">
          View All Templates <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
}
