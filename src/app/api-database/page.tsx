'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Database, Server, Code, FileJson } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function ApiDatabase() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in pb-12">
      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">Core Deliverable</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
          {t('api_h1')}
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">{t('api_intro')}</p>
      </div>

      <div className="space-y-6">
        
        {/* API Design */}
        <div className="card">
          <div className="card-header bg-gray-50 border-b border-gray-100 px-6 py-4 flex gap-3 items-center">
            <div className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center">
              <Server size={16} />
            </div>
            <h2 className="font-bold text-gray-900">REST API Specifications</h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Define your API endpoints before writing any backend code. This allows frontend and backend teams to work in parallel.
            </p>
            
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden font-mono text-sm shadow-lg">
              <div className="bg-gray-800 text-gray-400 px-4 py-2 border-b border-gray-700 flex items-center gap-2">
                <FileJson size={14} /> <span>POST /api/v1/auth/reset-password</span>
              </div>
              <div className="p-4 overflow-x-auto">
<pre className="text-gray-300">
<span className="text-blue-400">Request Body:</span>
{`{
  "email": "user@example.com"
}`}

<span className="text-green-400">Response (200 OK):</span>
{`{
  "success": true,
  "message": "Password reset email sent."
}`}

<span className="text-red-400">Response (404 Not Found):</span>
{`{
  "error": "User not found."
}`}
</pre>
              </div>
            </div>
          </div>
        </div>

        {/* ERD Design */}
        <div className="card">
          <div className="card-header bg-gray-50 border-b border-gray-100 px-6 py-4 flex gap-3 items-center">
            <div className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center">
              <Database size={16} />
            </div>
            <h2 className="font-bold text-gray-900">Database Schema (ERD)</h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Design the relational data model. Document the tables, columns, types, and the relationships (1:1, 1:N, M:N) between them.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-xl overflow-x-auto shadow-sm">
                <div className="bg-gray-50 font-bold px-4 py-3 border-b text-sm text-gray-900">Users Table</div>
                <div className="p-0 overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[300px]">
                    <thead className="bg-gray-50/50">
                      <tr><th className="px-4 py-2 font-semibold">Column</th><th className="px-4 py-2 font-semibold">Type</th></tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr><td className="px-4 py-2 font-mono text-xs">id (PK)</td><td className="px-4 py-2">UUID</td></tr>
                      <tr><td className="px-4 py-2 font-mono text-xs">email</td><td className="px-4 py-2">VARCHAR(255)</td></tr>
                      <tr><td className="px-4 py-2 font-mono text-xs">password_hash</td><td className="px-4 py-2">VARCHAR(255)</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl overflow-x-auto shadow-sm">
                <div className="bg-gray-50 font-bold px-4 py-3 border-b text-sm text-gray-900">Password_Resets Table</div>
                <div className="p-0 overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[300px]">
                    <thead className="bg-gray-50/50">
                      <tr><th className="px-4 py-2 font-semibold">Column</th><th className="px-4 py-2 font-semibold">Type</th></tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr><td className="px-4 py-2 font-mono text-xs">id (PK)</td><td className="px-4 py-2">UUID</td></tr>
                      <tr><td className="px-4 py-2 font-mono text-xs text-blue-600">user_id (FK)</td><td className="px-4 py-2 text-blue-600">UUID</td></tr>
                      <tr><td className="px-4 py-2 font-mono text-xs">token</td><td className="px-4 py-2">VARCHAR(64)</td></tr>
                      <tr><td className="px-4 py-2 font-mono text-xs">expires_at</td><td className="px-4 py-2">TIMESTAMP</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <Link href="/ux-architecture" className="btn-ghost">{t('back')}</Link>
        <Link href="/gtm-plan" className="btn-red">{t('nav_gtm')} <ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}
