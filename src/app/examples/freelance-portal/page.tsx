'use client';

import Link from 'next/link';
import { Clock, Banknote, ShieldCheck, AlertCircle, Calendar, CreditCard, CheckSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function FreelancePortalCaseStudy() {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-8 animate-in max-w-4xl mx-auto">
      <Link href="/examples" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-4">
        {t('back')}
      </Link>

      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-purple mb-4">Case Study</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
          {language === 'en' ? 'Freelance Client Portal' : 'Freelance Client Portal'}
        </h1>
        <p className="text-lg leading-relaxed text-gray-600">
          {language === 'en' 
            ? 'A PRD focusing on scope containment, simple authentication, and secure file uploads for a freelance web development agency.'
            : 'Scope Containment, Simple Auth နှင့် Secure File Uploads များကို အဓိကထားရေးသားထားသော Freelance Client Portal PRD ဥပမာ။'}
        </p>
      </div>

      {/* Document Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden text-gray-800">
        <div className="bg-gray-50 px-8 py-4 border-b border-gray-200 flex justify-between items-center text-sm">
          <span className="font-semibold text-gray-500">Document Status: <span className="text-purple-600">Draft</span></span>
          <span className="text-gray-400">Author: Alex (Freelancer)</span>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          
          {/* Objective */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">1. Objective</h2>
            <p className="text-gray-600 leading-relaxed">
              To build a secure, branded portal where clients can log in to view project progress, download invoices, and upload requested assets (images, copy). This reduces endless email threads and centralizes client communication.
            </p>
          </section>

          {/* Constraints & Scope Management */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">2. Constraints & Scope</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-purple-100 bg-purple-50 p-5 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="text-purple-600" size={20} />
                  <h3 className="font-bold text-gray-900">Time Constraint</h3>
                </div>
                <p className="text-sm text-gray-700">Must be completed in exactly 2 weeks (40 hours of billable work). Therefore, no custom chat system will be built. All communication defaults back to email.</p>
              </div>
              <div className="border border-purple-100 bg-purple-50 p-5 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Banknote className="text-purple-600" size={20} />
                  <h3 className="font-bold text-gray-900">Budget Constraint</h3>
                </div>
                <p className="text-sm text-gray-700">Client is on a tight budget. We will use Firebase Authentication (free tier) instead of building a custom auth solution from scratch.</p>
              </div>
            </div>

            <div className="mt-8 bg-red-50 p-5 rounded-lg border border-red-100">
              <h3 className="font-bold text-red-800 flex items-center mb-3">
                <AlertCircle size={18} className="mr-2" /> Out-of-Scope Explicitly
              </h3>
              <ul className="space-y-2 text-sm text-red-900 list-disc list-inside">
                <li>In-app messaging or chat (communication stays in email).</li>
                <li>Email notifications for every file upload.</li>
                <li>Complex permission levels (everyone who logs in has full access to the portal).</li>
              </ul>
            </div>
          </section>

          {/* Milestones & Deliverables */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">3. Milestones & Deliverables Schedule</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="p-3 border-b">Milestone</th>
                    <th className="p-3 border-b">Deliverable</th>
                    <th className="p-3 border-b">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3 font-semibold text-gray-800 flex items-center gap-2">
                      <Calendar size={16} className="text-gray-500" /> Week 1
                    </td>
                    <td className="p-3 text-gray-600">UI Design Approval & Firebase Auth Integration</td>
                    <td className="p-3 text-gray-500">Day 1 - 7</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-gray-800 flex items-center gap-2">
                      <Calendar size={16} className="text-gray-500" /> Week 2
                    </td>
                    <td className="p-3 text-gray-600">AWS S3 Uploads, Final Testing, & Handoff</td>
                    <td className="p-3 text-gray-500">Day 8 - 14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Functional Requirements */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">4. Core Features (User Stories)</h2>
            <div className="space-y-6">
              
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Auth & Access</h4>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Story:</strong> As a client, I want to log in with a magic link sent to my email so I don't have to remember a password.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 border border-gray-100">
                  <strong>Acceptance Criteria:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Magic link expires in 15 minutes.</li>
                    <li>Session persists for 7 days.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Asset Uploads</h4>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Story:</strong> As a client, I want to drag-and-drop zip files and images into the portal.
                </p>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 border border-gray-100">
                  <strong>Acceptance Criteria:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Max file size is 50MB.</li>
                    <li>Only .png, .jpg, .pdf, and .zip files are allowed.</li>
                    <li>Files are uploaded directly to AWS S3 using presigned URLs.</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* Third-Party Services & Budgeting */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">5. Third-Party Services & Budgeting</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                  <CreditCard size={18} className="text-blue-500" /> Firebase Auth
                </div>
                <p className="text-sm text-gray-600 mb-2">Used for passwordless magic link logins.</p>
                <div className="text-xs font-mono bg-white p-2 border border-gray-100 rounded text-gray-500">Cost: $0/mo (Free Tier)</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                  <CreditCard size={18} className="text-orange-500" /> AWS S3
                </div>
                <p className="text-sm text-gray-600 mb-2">Used for secure asset uploads & storage.</p>
                <div className="text-xs font-mono bg-white p-2 border border-gray-100 rounded text-gray-500">Cost: ~$1-2/mo (Usage)</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                  <CreditCard size={18} className="text-black" /> Vercel
                </div>
                <p className="text-sm text-gray-600 mb-2">Frontend and Serverless API hosting.</p>
                <div className="text-xs font-mono bg-white p-2 border border-gray-100 rounded text-gray-500">Cost: $0/mo (Hobby)</div>
              </div>
            </div>
          </section>

          {/* Client Sign-Off Criteria */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">6. Client Sign-Off Criteria</h2>
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-bold text-green-900 flex items-center mb-4">
                <CheckSquare size={20} className="mr-2" /> Acceptance Testing
              </h3>
              <p className="text-sm text-green-800 mb-4">
                The project is considered complete and final payment is due when the following actions are successfully performed by the client on the live URL:
              </p>
              <ul className="space-y-3 text-sm text-green-900">
                <li className="flex gap-3"><span className="font-bold">1.</span> Client successfully logs in using an email magic link.</li>
                <li className="flex gap-3"><span className="font-bold">2.</span> Client successfully uploads a 10MB .zip file and sees it appear in the dashboard.</li>
                <li className="flex gap-3"><span className="font-bold">3.</span> Client successfully downloads a sample invoice from the dashboard.</li>
              </ul>
            </div>
          </section>

          {/* SLA */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">7. Maintenance & Support (SLA)</h2>
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
              <ShieldCheck className="text-gray-500 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Post-Launch Agreement</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The portal will be hosted on Vercel. Up to 2 hours of bug fixes per month are included for the first 3 months. Any feature requests (like adding a chat module or connecting to a CRM) will require a new Statement of Work (SOW) and will be billed at standard hourly rates.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
