'use client';

import Link from 'next/link';
import { 
  Cpu, ArrowRight, CheckCircle2, AlertTriangle, Copy, 
  Check, Code, ShieldCheck, Sparkles, FileText, 
  Layers, ChevronRight, Activity, Terminal, Database, Lock, Server
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SrsGuide() {
  const { t, language } = useLanguage();
  const [copiedExample, setCopiedExample] = useState(false);
  const [activeNfrCategory, setActiveNfrCategory] = useState<'perf' | 'sec' | 'rel' | 'scale'>('perf');

  const isMM = language === 'mm';

  const srsTemplateMarkdown = `# Software Requirements Specification (SRS)
## System Module: Payment Gateway Webhook Dispatcher & Idempotent Event Processor
- **Document Version:** 2.1.0
- **Technical Author:** Lead Systems Architect / Tech Lead
- **Related PRD:** [PRD-PAY-2026-03](https://learnprd.vercel.app/core-components)
- **Target Release:** Sprint 42 (v2.4.0)
- **Status:** Approved for Sprint Backlog

---

### 1. System Architecture & Context
The Payment Webhook Dispatcher is an asynchronous ingestion microservice responsible for receiving raw HTTP webhooks from external Payment Service Providers (Stripe, Adyen, PromptPay), verifying cryptographic authenticity, deduplicating payloads via distributed caching, and publishing canonical domain events to Apache Kafka.

---

### 2. Functional Requirements (FR)
| Requirement ID | System Feature | Input / Trigger | Processing Logic & Constraints | Expected Output / State Change |
| :--- | :--- | :--- | :--- | :--- |
| **\`FR-WH-01\`** | Webhook Ingestion | \`POST /v1/webhooks/{provider}\` | Ingest raw JSON payload (max body size: 1MB). | Return \`HTTP 202 Accepted\` within 120ms. |
| **\`FR-WH-02\`** | Signature Verification | HTTP Header \`Stripe-Signature\` | Compute HMAC-SHA256 hash using provider secret key in HashiCorp Vault. | If hash mismatch, reject with \`HTTP 401 Unauthorized\`. |
| **\`FR-WH-03\`** | Idempotency Check | Extracted \`event_id\` | Query Redis cluster key \`idemp:{provider}:{event_id}\` (TTL = 48h). | If key exists, log duplicate and return \`HTTP 200 OK\` without dispatch. |
| **\`FR-WH-04\`** | Event Publishing | Validated Webhook Event | Transform to Protobuf schema \`PaymentSucceededEvent\` and publish to Kafka topic \`payments.incoming.v1\`. | Kafka message partition key = \`customer_uuid\`. |

---

### 3. Non-Functional Requirements (NFR) — ISO 25010 Quality Model
#### 3.1 Performance & Latency (P99)
- **\`NFR-PERF-01\` Ingestion Latency:** The webhook listener endpoint must respond with \`HTTP 202\` in $\le$ 150ms at P99 under 3,500 requests/second load.
- **\`NFR-PERF-02\` Database Query Budget:** PostgreSQL index lookup for order reconciliation must execute in $\le$ 15ms.

#### 3.2 Security & Data Protection
- **\`NFR-SEC-01\` Transport Security:** All inbound HTTP traffic must enforce TLS 1.3 with HSTS enabled.
- **\`NFR-SEC-02\` Encryption at Rest:** Webhook raw payloads stored in cold storage (AWS S3) must use AES-256-GCM server-side encryption.
- **\`NFR-SEC-03\` Zero PII Logging:** Credit card tokens and account holder names must be stripped before emitting to Datadog log sinks.

#### 3.3 Reliability, Availability & Fault-Tolerance
- **\`NFR-REL-01\` Availability SLA:** Ingestion microservice must achieve 99.99% monthly uptime (~4.38 minutes allowed downtime/month).
- **\`NFR-REL-02\` Dead Letter Queue (DLQ):** Messages failing Kafka publishing after 3 exponential backoff retries (100ms, 400ms, 1600ms) must be routed to \`payments.dlq\` with error metadata.

---

### 4. Interface & Schema Contract
\`\`\`json
// Schema Definition: POST /v1/webhooks/stripe Response
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "status": { "type": "string", "enum": ["accepted", "duplicate"] },
    "event_id": { "type": "string", "pattern": "^evt_[a-zA-Z0-9]+$" },
    "ingested_at": { "type": "string", "format": "date-time" }
  },
  "required": ["status", "event_id", "ingested_at"]
}
\`\`\`
`;

  const nfrData = {
    perf: {
      title: 'Performance & Latency (P95 / P99)',
      icon: Activity,
      badge: 'Speed & Throughput',
      metrics: [
        { label: 'P99 Ingestion Latency', val: '< 150ms', desc: 'Maximum response time for 99% of all incoming API calls under peak load.' },
        { label: 'Peak Throughput', val: '5,000 RPS', desc: 'Sustained requests-per-second without CPU throttling or queue backup.' },
        { label: 'DB Query Execution', val: '< 20ms', desc: 'Maximum latency budget for indexed database reads.' },
      ],
      testMethod: 'Load testing via k6 or Locust simulating 10,000 virtual users.'
    },
    sec: {
      title: 'Security & Data Privacy (InfoSec)',
      icon: Lock,
      badge: 'Compliance & Auth',
      metrics: [
        { label: 'Transport Encryption', val: 'TLS 1.3', desc: 'Mandatory cryptographic handshake for all ingress & egress communication.' },
        { label: 'At-Rest Encryption', val: 'AES-256-GCM', desc: 'Database columns and object storage encrypted with KMS key rotation.' },
        { label: 'Auth Token Expiry', val: '900s (15m)', desc: 'Short-lived JWT tokens signed with asymmetric RS256 private keys.' },
      ],
      testMethod: 'Automated SAST/DAST pipeline scan and third-party penetration testing.'
    },
    rel: {
      title: 'Reliability & Availability (SLA/SLO)',
      icon: Server,
      badge: 'Fault Tolerance',
      metrics: [
        { label: 'Uptime Commitment', val: '99.99%', desc: 'Less than 4.38 minutes of unscheduled service downtime per calendar month.' },
        { label: 'RPO (Recovery Point)', val: '< 1 second', desc: 'Maximum acceptable data loss window during multi-AZ datacenter failover.' },
        { label: 'RTO (Recovery Time)', val: '< 30 seconds', desc: 'Automated pod restart and health check probe recovery threshold.' },
      ],
      testMethod: 'Chaos engineering (Chaos Mesh / Gremlin) simulating sudden zone terminations.'
    },
    scale: {
      title: 'Scalability & Maintainability',
      icon: Database,
      badge: 'Elastic Capacity',
      metrics: [
        { label: 'Horizontal Autoscaling', val: '10s to 50 pods', desc: 'Kubernetes HPA triggers when mean CPU exceeds 70% threshold.' },
        { label: 'Code Test Coverage', val: '> 85%', desc: 'Unit & integration branch coverage enforced via CI pipeline quality gates.' },
        { label: 'Mean Time to Repair', val: '< 15 mins', desc: 'Automated zero-downtime canary rollback upon 5xx error rate spike.' },
      ],
      testMethod: 'Stress testing cluster elasticity and automated canary rollback verification.'
    }
  };

  const handleCopyExample = () => {
    navigator.clipboard.writeText(srsTemplateMarkdown);
    setCopiedExample(true);
    setTimeout(() => setCopiedExample(false), 2000);
  };

  return (
    <div className="space-y-10 animate-in">

      {/* ── 1. Hero Header ── */}
      <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-purple-600">
          <Cpu size={300} />
        </div>

        <div className="badge-red mb-4 inline-flex items-center gap-1.5">
          <Terminal size={12} />
          {isMM ? 'အင်ဂျင်နီယာ နည်းပညာ စာရွက်စာတမ်း' : 'Engineering Specifications'}
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 leading-[1.15]">
          {isMM ? 'SRS (Software Requirements Specification) နည်းပညာလမ်းညွှန်' : 'Software Requirements Specification (SRS)'}
        </h1>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
          {isMM ? (
            <>
              <strong>SRS</strong> သည် Software ၏ <strong>နည်းပညာဆိုင်ရာ တည်ဆောက်ပုံ၊ လုပ်ဆောင်ချက်များ (Functional Requirements)</strong> နှင့် <strong>အရည်အသွေး စံနှုန်းများ (Non-Functional Requirements)</strong> ကို အင်ဂျင်နီယာများနှင့် QA အဖွဲ့များအတွက် တိကျခိုင်မာစွာ သတ်မှတ်ပေးသော စာချုပ်ဖြစ်ပါသည်။
            </>
          ) : (
            <>
              A <strong>Software Requirements Specification (SRS)</strong> is the definitive technical contract describing the software system's behaviors, API schemas, database state machines, and quantitative performance budgets (P99 latency, security protocols, SLAs).
            </>
          )}
        </p>

        <div className="flex flex-wrap gap-3 items-center">
          <button 
            onClick={handleCopyExample}
            className="btn-red flex items-center gap-2 text-xs md:text-sm cursor-pointer"
          >
            {copiedExample ? <Check size={16} /> : <Copy size={16} />}
            {copiedExample ? 'SRS Copied to Clipboard!' : 'Copy Full SRS Template'}
          </button>
          <Link href="/user-stories" className="btn-ghost flex items-center gap-1.5 text-xs md:text-sm">
            <CheckCircle2 size={15} />
            User Stories & Acceptance Criteria <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* ── 2. PRD vs. SRS Distinction ── */}
      <div className="card shadow-sm">
        <div className="card-header">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
            <Layers size={16} />
          </div>
          <h2 className="font-bold text-white text-base">
            PRD vs. SRS: Side-by-Side Architectural Breakdown
          </h2>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            Understanding the distinct boundary between a <strong>Product Requirements Document (PRD)</strong> and a <strong>Software Requirements Specification (SRS)</strong> prevents endless back-and-forth debates between Product and Engineering:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {/* PRD Column */}
            <div className="p-6 rounded-2xl border border-red-200 bg-red-50/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-red-600 text-white">PRD (Product Focus)</span>
                <span className="text-xs text-red-700 font-mono font-bold">"What & Why"</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm">User Experience & Problem Space</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Target Audience:</strong> Cross-functional squad (Designers, Devs, QA, Marketing).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Example Requirement:</strong> "Users must be able to log in securely with their Google Workspace account and automatically sync profile avatars."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Artifacts:</strong> Figma wireframes, user journeys, INVEST User Stories, success KPIs.</span>
                </li>
              </ul>
            </div>

            {/* SRS Column */}
            <div className="p-6 rounded-2xl border border-purple-200 bg-purple-50/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-purple-600 text-white">SRS (Engineering Focus)</span>
                <span className="text-xs text-purple-700 font-mono font-bold">"How Technically"</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm">System Contracts & Execution Space</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>Target Audience:</strong> Software Engineers, QA Automation, DevOps, InfoSec.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>Example Requirement:</strong> "Auth service shall exchange Google OAuth authorization codes via RFC 7636 PKCE, issuing RS256 signed JWTs with 900s TTL and \`roles\` claim array."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>Artifacts:</strong> JSON Schemas, ERD relational constraints, state machines, P99 latency budgets.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Functional vs Non-Functional Requirements (ISO 25010) ── */}
      <div className="card shadow-sm">
        <div className="card-header justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
              <ShieldCheck size={16} />
            </div>
            <h2 className="font-bold text-white text-base">
              Non-Functional Requirements (NFR) Masterclass (ISO 25010)
            </h2>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-800 text-gray-300">
            Quantitative Quality Model
          </span>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            Non-Functional Requirements define <em>how well</em> the system behaves under pressure. Vague phrases like "the system must be fast" fail engineering reviews. Use quantitative, measurable metrics:
          </p>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { id: 'perf' as const, label: 'Performance & Latency', icon: Activity },
              { id: 'sec' as const, label: 'Security & Auth', icon: Lock },
              { id: 'rel' as const, label: 'Reliability & SLA', icon: Server },
              { id: 'scale' as const, label: 'Scalability & Testing', icon: Database },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveNfrCategory(tab.id)}
                className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-150 flex flex-col justify-between gap-1.5 ${
                  activeNfrCategory === tab.id
                    ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                }`}
              >
                <tab.icon size={18} className={activeNfrCategory === tab.id ? 'text-purple-200' : 'text-purple-600'} />
                <span className="text-xs font-bold leading-tight">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active NFR Panel */}
          <motion.div
            key={activeNfrCategory}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-2xl bg-purple-50/40 border border-purple-200 space-y-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-bold text-base text-gray-900 flex items-center gap-2">
                {nfrData[activeNfrCategory].title}
              </h3>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-600 text-white shrink-0">
                {nfrData[activeNfrCategory].badge}
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {nfrData[activeNfrCategory].metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-purple-100 space-y-1.5 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-purple-700">{m.label}</div>
                  <div className="text-xl font-extrabold text-gray-900 font-mono">{m.val}</div>
                  <p className="text-[11px] text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-purple-200 text-xs text-purple-950 font-mono">
              🔬 <strong>Verification / Testing Method:</strong> {nfrData[activeNfrCategory].testMethod}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── 4. When an SRS is Mandatory ── */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-6 space-y-3">
          <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">
            01
          </div>
          <h3 className="font-bold text-sm text-gray-900">Regulated & Safety-Critical</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            FinTech payment processors, medical devices (FDA / ISO 13485), and government defense contracts requiring strict requirements traceability matrices (RTM).
          </p>
        </div>

        <div className="card p-6 space-y-3">
          <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">
            02
          </div>
          <h3 className="font-bold text-sm text-gray-900">Outsourced & Vendor Contracts</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Offshore engineering teams or software agencies where contractual acceptance requires deterministic, mathematically verifiable criteria.
          </p>
        </div>

        <div className="card p-6 space-y-3">
          <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">
            03
          </div>
          <h3 className="font-bold text-sm text-gray-900">Complex Distributed Microservices</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Multi-squad distributed architectures where async message protocols (Kafka / gRPC / Protobuf) and database transaction locks must be documented.
          </p>
        </div>
      </div>

      {/* ── 5. Full Real-World Example (Copyable) ── */}
      <div className="card shadow-sm">
        <div className="card-header justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-600 text-white">
              <Code size={16} />
            </div>
            <h2 className="font-bold text-white text-base">
              Real-World Technical SRS Example
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
            This production-grade specification models a high-throughput webhook dispatcher with cryptographic signature validation and idempotency caching:
          </p>
          <pre className="p-5 rounded-xl bg-gray-900 text-gray-100 text-xs font-mono overflow-x-auto leading-relaxed max-h-96 border border-gray-800">
            {srsTemplateMarkdown}
          </pre>
        </div>
      </div>

      {/* Nav footer */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <Link href="/core-components" className="btn-ghost">
          Back to PRD Core
        </Link>
        <Link href="/user-stories" className="btn-red">
          Next: User Stories & AC <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
}
