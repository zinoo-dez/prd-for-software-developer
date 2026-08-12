'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, User, Mail, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SimpleFeature() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in pb-12">
      {/* Back link */}
      <Link href="/examples" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
        <ArrowLeft size={16} className="mr-1.5" /> {t('back')}
      </Link>

      {/* Hero */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-red mb-4">{t('ex_sf_title')}</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: '#111827' }}>
          {t('sf_h1')}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>{t('sf_intro')}</p>
      </div>

      <div className="space-y-6">
        
        {/* 1. Metadata */}
        <div className="card">
          <div className="card-header bg-gray-50 border-b border-gray-100 px-6 py-4">
            <h2 className="font-bold text-gray-900">{t('sf_metadata_title')}</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div><span className="text-gray-500 block mb-1">Project:</span> <strong className="text-gray-900">Auth Overhaul v1.2</strong></div>
              <div><span className="text-gray-500 block mb-1">Feature:</span> <strong className="text-gray-900">Password Reset Flow</strong></div>
              <div><span className="text-gray-500 block mb-1">Author:</span> <strong className="text-gray-900">John Doe (PM)</strong></div>
              <div><span className="text-gray-500 block mb-1">Status:</span> <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-bold border border-green-200">Approved</span></div>
            </div>
          </div>
        </div>

        {/* 2. Objective */}
        <div className="card">
          <div className="card-header bg-gray-50 border-b border-gray-100 px-6 py-4">
            <h2 className="font-bold text-gray-900">{t('sf_obj_title')}</h2>
          </div>
          <div className="p-6 space-y-4 text-sm text-gray-700 leading-relaxed">
            <p><strong>Problem:</strong> Currently, users who forget their passwords must contact support to get a temporary password. This is causing a high volume of support tickets (accounting for 30% of all queries) and frustrating users with long wait times.</p>
            <p><strong>Goal:</strong> Implement a secure, self-serve password reset flow via email so users can regain access to their accounts within 2 minutes, without human intervention.</p>
          </div>
        </div>

        {/* 3. Scope */}
        <div className="card">
          <div className="card-header bg-gray-50 border-b border-gray-100 px-6 py-4">
            <h2 className="font-bold text-gray-900">{t('sf_scope_title')}</h2>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6 text-sm">
            <div className="p-5 rounded-xl bg-green-50/50 border border-green-100">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2"><CheckCircle size={16} className="text-green-600"/> In-Scope</h3>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>"Forgot Password" link on Login screen.</li>
                <li>Email generation with secure, time-limited token link.</li>
                <li>New password entry screen with strength validation.</li>
                <li>Confirmation email upon successful reset.</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-red-50/50 border border-red-100">
              <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2"><span className="text-lg leading-none text-red-600">×</span> Out-of-Scope</h3>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>SMS-based password reset (planned for v2).</li>
                <li>Security questions.</li>
                <li>Forced password reset for expired accounts.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Flow */}
        <div className="card overflow-hidden">
          <div className="card-header bg-gray-50 border-b border-gray-100 px-6 py-4">
            <h2 className="font-bold text-gray-900">{t('sf_flow_title')}</h2>
          </div>
          <div className="p-8 overflow-x-auto bg-gray-50/30">
            {/* CSS Flowchart */}
            <div className="flex flex-col md:flex-row items-center gap-4 min-w-150 justify-center py-4">
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm text-gray-600 mb-3 relative z-10">
                  <User size={24} />
                </div>
                <span className="text-xs font-bold text-gray-700 text-center">1. Click "Forgot<br/>Password"</span>
              </div>
              
              <ArrowRight className="hidden md:block text-gray-300 -mt-8" />
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm text-gray-600 mb-3 relative z-10">
                  <Mail size={24} />
                </div>
                <span className="text-xs font-bold text-gray-700 text-center">2. Enter Email</span>
              </div>
              
              <ArrowRight className="hidden md:block text-gray-300 -mt-8" />
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center border border-red-100 shadow-sm text-red-600 mb-3 relative z-10">
                  <Shield size={24} />
                </div>
                <span className="text-xs font-bold text-gray-700 text-center">3. Secure Link<br/><span className="text-[10px] font-normal text-gray-500">(Valid 15 mins)</span></span>
              </div>

              <ArrowRight className="hidden md:block text-gray-300 -mt-8" />
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center border border-green-100 shadow-sm text-green-600 mb-3 relative z-10">
                  <CheckCircle size={24} />
                </div>
                <span className="text-xs font-bold text-gray-700 text-center">4. Set Password</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
