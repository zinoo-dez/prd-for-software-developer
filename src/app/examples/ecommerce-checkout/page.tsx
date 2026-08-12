'use client';

import Link from 'next/link';
import { CheckCircle2, AlertCircle, ShoppingCart, UserCircle, Truck, CreditCard, PartyPopper, Zap, BarChart2, ShieldAlert } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function EcommerceCheckoutCaseStudy() {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-8 animate-in max-w-4xl mx-auto">
      <Link href="/examples" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-4">
        {t('back')}
      </Link>

      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <div className="badge-blue mb-4">Case Study</div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
          {language === 'en' ? 'E-Commerce Checkout Revamp' : 'E-Commerce Checkout အဆင့်မြှင့်တင်ခြင်း'}
        </h1>
        <p className="text-lg leading-relaxed text-gray-600">
          {language === 'en' 
            ? 'A professional-grade Product Requirements Document (PRD) focusing on overhauling a checkout flow to reduce cart abandonment.'
            : 'Cart Abandonment ကို လျှော့ချရန် Checkout Flow အသစ်ရေးဆွဲခြင်းအတွက် ရေးသားထားသော အဆင့်မြင့် PRD ဥပမာ။'}
        </p>
      </div>

      {/* Document Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden text-gray-800">
        <div className="bg-gray-50 px-8 py-4 border-b border-gray-200 flex justify-between items-center text-sm">
          <span className="font-semibold text-gray-500">Document Status: <span className="text-green-600">Approved</span></span>
          <span className="text-gray-400">Last Updated: Oct 12, 2023</span>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          
          {/* Metadata */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">1. Metadata</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-500 font-medium">Project Name</p>
                <p className="font-semibold">Checkout V2</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Product Manager</p>
                <p className="font-semibold">Jane Doe</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Target Release</p>
                <p className="font-semibold">Q3 2024</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Engineering Lead</p>
                <p className="font-semibold">John Smith</p>
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">2. Problem Statement & Objective</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-gray-900">The Problem</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our current checkout flow requires users to create an account before completing a purchase. Analytics show a <strong>68% drop-off rate</strong> at the registration step. Furthermore, mobile users struggle with the multi-page layout, leading to frequent timeouts and abandoned carts.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">The Objective</h3>
                <p className="text-gray-600 leading-relaxed">
                  Redesign the checkout experience to be a seamless, single-page application (SPA) that supports Guest Checkout and localized payment methods (e.g., KPay, WavePay).
                </p>
              </div>
            </div>
          </section>

          {/* Scope */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">3. Scope Definition</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <h3 className="font-bold text-green-800 flex items-center mb-3">
                  <CheckCircle2 size={18} className="mr-2" /> In-Scope (Phase 1)
                </h3>
                <ul className="space-y-2 text-sm text-green-900 list-disc list-inside">
                  <li>Guest Checkout implementation.</li>
                  <li>Single-page accordion UI for Address, Shipping, and Payment.</li>
                  <li>Integration with Stripe (Credit Cards) and 2C2P (Local Wallets).</li>
                  <li>Auto-fill for shipping addresses via Google Maps API.</li>
                </ul>
              </div>
              <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h3 className="font-bold text-red-800 flex items-center mb-3">
                  <AlertCircle size={18} className="mr-2" /> Out-of-Scope
                </h3>
                <ul className="space-y-2 text-sm text-red-900 list-disc list-inside">
                  <li>Saved Credit Cards for guest users (requires vaulting).</li>
                  <li>Apple Pay / Google Pay integrations (deferred to Phase 2).</li>
                  <li>Multi-currency support (MMK and USD only for Phase 1).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Flow */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">4. Visual User Flow (SPA)</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 overflow-x-auto">
              <div className="flex items-center min-w-[700px] justify-between">
                <div className="flex flex-col items-center p-3 w-32 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 mb-2 shadow-sm text-gray-500">
                    <ShoppingCart size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-700">1. Cart</span>
                </div>
                <div className="h-0.5 bg-gray-300 w-full rounded"></div>
                
                <div className="flex flex-col items-center p-3 w-32 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-blue-400 mb-2 shadow-sm text-blue-500">
                    <UserCircle size={20} />
                  </div>
                  <span className="text-sm font-bold text-blue-700">2. Auth</span>
                  <span className="text-xs text-gray-500 mt-1">Guest or Login</span>
                </div>
                <div className="h-0.5 bg-gray-300 w-full rounded"></div>
                
                <div className="flex flex-col items-center p-3 w-32 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 mb-2 shadow-sm text-gray-500">
                    <Truck size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-700">3. Shipping</span>
                </div>
                <div className="h-0.5 bg-gray-300 w-full rounded"></div>

                <div className="flex flex-col items-center p-3 w-32 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 mb-2 shadow-sm text-gray-500">
                    <CreditCard size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-700">4. Payment</span>
                </div>
                <div className="h-0.5 bg-gray-300 w-full rounded"></div>

                <div className="flex flex-col items-center p-3 w-32 text-center">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center border-2 border-green-400 mb-2 shadow-sm text-green-600">
                    <PartyPopper size={20} />
                  </div>
                  <span className="text-sm font-bold text-green-700">5. Success</span>
                </div>
              </div>
            </div>
          </section>

          {/* Functional Requirements */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">5. Functional Requirements</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="p-3 border-b">ID</th>
                    <th className="p-3 border-b">User Story</th>
                    <th className="p-3 border-b">Acceptance Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3 font-mono text-gray-500">REQ-01</td>
                    <td className="p-3">As a <strong>shopper</strong>, I want to <strong>checkout as a guest</strong> so that I don't have to remember another password.</td>
                    <td className="p-3 text-gray-600">
                      - User can proceed by providing only an email address.<br/>
                      - System checks if email exists; if yes, subtly prompts for login but does not block.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-gray-500">REQ-02</td>
                    <td className="p-3">As a <strong>mobile user</strong>, I want to <strong>see a numeric keypad</strong> when entering my phone number so that I can type faster.</td>
                    <td className="p-3 text-gray-600">
                      - Input type must be `tel`.<br/>
                      - Format validation for local formats must trigger on blur.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-gray-500">REQ-03</td>
                    <td className="p-3">As a <strong>shopper</strong>, I want to <strong>pay via KPay</strong> so that I can use my preferred local wallet.</td>
                    <td className="p-3 text-gray-600">
                      - Selecting KPay generates a dynamic QR code on desktop.<br/>
                      - On mobile, it triggers a deep link to the KPay app.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Critical Edge Cases */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">6. Critical Edge Cases & Error Handling</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                <div className="flex items-center gap-2 font-bold text-orange-900 mb-2">
                  <ShieldAlert size={18} /> Out-of-Stock Mid-Checkout
                </div>
                <p className="text-sm text-orange-800">
                  <strong>Scenario:</strong> User stays on the payment page for 20 minutes, and the item sells out before they click "Pay".
                </p>
                <div className="mt-3 bg-white p-3 rounded text-sm text-gray-700 border border-orange-100">
                  <strong>Resolution:</strong> The backend API must perform a stock check at the exact moment of payment authorization. If out of stock, block the charge, redirect back to cart, and show an inline error message.
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <div className="flex items-center gap-2 font-bold text-red-900 mb-2">
                  <Zap size={18} /> Stripe API Timeout
                </div>
                <p className="text-sm text-red-800">
                  <strong>Scenario:</strong> User clicks "Pay", but the Stripe API takes longer than 15 seconds to respond.
                </p>
                <div className="mt-3 bg-white p-3 rounded text-sm text-gray-700 border border-red-100">
                  <strong>Resolution:</strong> Display a "Processing..." loading state (disable the button). If it exceeds 15 seconds, show a timeout modal asking them to retry, but <em>do not</em> clear their inputted card details.
                </div>
              </div>
            </div>
          </section>

          {/* Analytics & Event Tracking */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">7. Analytics & Event Tracking (Mixpanel)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="p-3 border-b">Event Name</th>
                    <th className="p-3 border-b">Trigger Condition</th>
                    <th className="p-3 border-b">Required Properties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3 font-mono text-purple-600 bg-purple-50 rounded">checkout_started</td>
                    <td className="p-3 text-gray-600">User lands on step 2 (Auth).</td>
                    <td className="p-3 font-mono text-xs text-gray-500">cart_value, item_count</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-purple-600 bg-purple-50 rounded">payment_failed</td>
                    <td className="p-3 text-gray-600">API returns a 400/500 error during charge.</td>
                    <td className="p-3 font-mono text-xs text-gray-500">error_code, payment_method</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-purple-600 bg-purple-50 rounded">order_completed</td>
                    <td className="p-3 text-gray-600">User successfully reaches the Success page.</td>
                    <td className="p-3 font-mono text-xs text-gray-500">order_id, revenue, currency</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Success Metrics */}
          <section>
            <h2 className="text-2xl font-bold border-b border-gray-100 pb-2 mb-4">8. Success Metrics (KPIs)</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="shrink-0 w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold text-xl">-30%</div>
                <div>
                  <h4 className="font-bold text-gray-900">Cart Abandonment Rate</h4>
                  <p className="text-sm text-gray-600">Reduce the drop-off between the "Cart" page and "Order Success" page from 68% down to 38%.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-16 h-16 bg-green-100 text-green-700 rounded-lg flex items-center justify-center font-bold text-xl">+15%</div>
                <div>
                  <h4 className="font-bold text-gray-900">Mobile Conversion</h4>
                  <p className="text-sm text-gray-600">Increase the percentage of successful checkouts initiated on mobile devices by 15%.</p>
                </div>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
