'use client';

import Link from 'next/link';
import { Database, Users, ShieldAlert, AlertCircle, Activity, Server, Network } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SaaSChartCaseStudy() {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-8 animate-in max-w-4xl mx-auto">
      <Link href="/examples" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-4">
        {t('back')}
      </Link>

      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-green mb-4">Case Study</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
          {language === 'en' ? 'B2B SaaS Analytics Dashboard' : 'B2B SaaS Analytics Dashboard အကြောင်း ရေးသားထားသည့် PRD'}
        </h1>
        <p className="text-lg leading-relaxed text-gray-600">
          {language === 'en' 
            ? 'A PRD focusing on data visualization, multi-tenant architecture, and Role-Based Access Control (RBAC) for a B2B application.'
            : 'Multi-tenant architecture နှင့် Role-Based Access Control (RBAC) ကို အဓိကထားရေးသားထားသော SaaS Dashboard PRD ဥပမာ။'}
        </p>
      </div>

      {/* Document Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden text-gray-800">
        <div className="bg-gray-50 px-8 py-4 border-b border-gray-200 flex justify-between items-center text-sm">
          <span className="font-semibold text-gray-500">Document Status: <span className="text-blue-600">In Review</span></span>
          <span className="text-gray-400">Version 1.2</span>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          
          {/* Metadata */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">1. Metadata</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-500 font-medium">Project Name</p>
                <p className="font-semibold">Analytics Dashboard V1</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Product Manager</p>
                <p className="font-semibold">Sarah Lee</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Target Release</p>
                <p className="font-semibold">Q4 2024</p>
              </div>
            </div>
          </section>

          {/* User Personas */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">2. User Personas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-5 rounded-xl bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center">
                    <ShieldAlert size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">Workspace Admin</h3>
                </div>
                <p className="text-sm text-gray-600">Can view all organization data, invite users, and manage billing. Needs a high-level summary of active users and revenue.</p>
              </div>
              <div className="border border-gray-200 p-5 rounded-xl bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">Analyst (Viewer)</h3>
                </div>
                <p className="text-sm text-gray-600">Can only view specific projects assigned to them. Cannot see billing or invite new users.</p>
              </div>
            </div>
          </section>

          {/* Technical Constraints */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">3. Technical Constraints</h2>
            <ul className="space-y-4">
              <li>
                <h4 className="font-bold text-gray-900">Multi-Tenancy Security</h4>
                <p className="text-sm text-gray-600">All database queries MUST include the <code>tenant_id</code> to prevent cross-workspace data leaks. This is a P0 security requirement.</p>
              </li>
              <li>
                <h4 className="font-bold text-gray-900">Performance (NFR)</h4>
                <p className="text-sm text-gray-600">Dashboard widgets must load within <strong>800ms</strong> at the 95th percentile. Aggregation queries should be cached using Redis.</p>
              </li>
            </ul>

            <div className="mt-8 bg-red-50 p-5 rounded-lg border border-red-100">
              <h3 className="font-bold text-red-800 flex items-center mb-3">
                <AlertCircle size={18} className="mr-2" /> Out-of-Scope (V1)
              </h3>
              <ul className="space-y-2 text-sm text-red-900 list-disc list-inside">
                <li>Custom widget builder / drag-and-drop dashboard editing.</li>
                <li>PDF / CSV Export functionality (Deferred to V2).</li>
                <li>Real-time websocket updates (Data refreshes on page load only).</li>
              </ul>
            </div>
          </section>

          {/* Functional Requirements */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">4. Functional Requirements</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="p-3 border-b w-24">ID</th>
                    <th className="p-3 border-b">Requirement</th>
                    <th className="p-3 border-b">Acceptance Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3 font-mono text-gray-500">REQ-01</td>
                    <td className="p-3"><strong>MRR Line Chart</strong><br/>Display Monthly Recurring Revenue over the last 12 months.</td>
                    <td className="p-3 text-gray-600">
                      - Chart library: Recharts or Chart.js.<br/>
                      - X-axis: Month (e.g., Jan 2024).<br/>
                      - Hover tooltip shows exact MRR value.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-gray-500">REQ-02</td>
                    <td className="p-3"><strong>Role-Based Navigation</strong><br/>Hide restricted features from Viewers.</td>
                    <td className="p-3 text-gray-600">
                      - "Settings" and "Billing" tabs are hidden for the Analyst role.<br/>
                      - Server-side redirect (403) if an Analyst tries to access <code>/billing</code> directly.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Data Model Snippet */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">5. Data Architecture Notes</h2>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <Database size={16} /> Table: Users
              </div>
              <code>
                id: uuid (PK)<br/>
                tenant_id: uuid (FK - Tenants)<br/>
                email: varchar<br/>
                role: enum('ADMIN', 'VIEWER')<br/>
              </code>
            </div>
          </section>

          {/* API Endpoints */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">6. API Contracts (Endpoints)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="p-3 border-b">Method</th>
                    <th className="p-3 border-b">Endpoint</th>
                    <th className="p-3 border-b">Description</th>
                    <th className="p-3 border-b">Response</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3"><span className="bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded text-xs">GET</span></td>
                    <td className="p-3 font-mono text-gray-600">/api/v1/workspaces/:id/mrr</td>
                    <td className="p-3">Fetches monthly recurring revenue aggregated by month.</td>
                    <td className="p-3 font-mono text-xs text-gray-500">[{'{'} month: 'Jan', value: 5000 {'}'}]</td>
                  </tr>
                  <tr>
                    <td className="p-3"><span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-xs">POST</span></td>
                    <td className="p-3 font-mono text-gray-600">/api/v1/workspaces/:id/invites</td>
                    <td className="p-3">Invites a new user. <strong>Admin only.</strong></td>
                    <td className="p-3 font-mono text-xs text-gray-500">{'{'} status: 'success' {'}'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* System Architecture */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">7. System Architecture</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center w-full md:w-1/3">
                <Network className="text-blue-500 mb-2" size={24} />
                <span className="font-bold text-gray-800 text-sm">Next.js Frontend</span>
                <span className="text-xs text-gray-500 mt-1">Dashboard UI</span>
              </div>
              
              <div className="text-gray-400 hidden md:block">→</div>
              <div className="text-gray-400 md:hidden">↓</div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center w-full md:w-1/3 border-t-4 border-t-indigo-500">
                <Server className="text-indigo-500 mb-2" size={24} />
                <span className="font-bold text-gray-800 text-sm">Node.js API Gateway</span>
                <span className="text-xs text-gray-500 mt-1">Auth & Rate Limiting</span>
              </div>

              <div className="text-gray-400 hidden md:block">→</div>
              <div className="text-gray-400 md:hidden">↓</div>

              <div className="flex flex-col gap-2 w-full md:w-1/3">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex items-center gap-3">
                  <Database className="text-green-500" size={16} />
                  <span className="font-bold text-gray-800 text-xs">PostgreSQL (Primary)</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex items-center gap-3">
                  <Activity className="text-red-500" size={16} />
                  <span className="font-bold text-gray-800 text-xs">Redis (Cache)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Success Metrics */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">8. Success Metrics (KPIs)</h2>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center font-bold text-lg">{'<'}500</div>
                <div>
                  <h4 className="font-bold text-gray-900">Query Latency (ms)</h4>
                  <p className="text-sm text-gray-600">The 95th percentile (P95) load time for the dashboard must be under 500 milliseconds.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold text-lg">80%</div>
                <div>
                  <h4 className="font-bold text-gray-900">Daily Active Users (DAU) Engagement</h4>
                  <p className="text-sm text-gray-600">80% of active admins should interact with the new MRR chart at least once a week.</p>
                </div>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
