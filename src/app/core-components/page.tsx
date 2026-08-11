import Link from 'next/link';

export default function CoreComponents() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
          Standard PRD တစ်ခုမှာ အဓိက ပါဝင်ရမည့် အချက်များ
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          ပုံမှန်အားဖြင့် PRD တစ်ခုကို ရေးတဲ့အခါ အောက်ပါ အဓိက (၈) ချက်ကို မဖြစ်မနေ ထည့်သွင်းရေးသားလေ့ ရှိပါတယ်။
        </p>
      </div>

      <div className="space-y-6">
        {/* 1. Metadata */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">၁။ Metadata (အခြေခံ အချက်အလက်များ)</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li><strong>Project Name:</strong> ပရောဂျက် နာမည်</li>
            <li><strong>Author:</strong> ရေးသားသူ (များသောအားဖြင့် Product Manager)</li>
            <li><strong>Status:</strong> လက်ရှိ အခြေအနေ (ဥပမာ - Draft, In Review, Approved)</li>
            <li><strong>Target Release Date:</strong> ဖြန့်ချိမယ့် ခန့်မှန်းရက်</li>
          </ul>
        </div>

        {/* 2. Objective */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">၂။ Objective & Problem Statement (ရည်ရွယ်ချက်)</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li><strong>Problem Statement:</strong> User တွေကြုံတွေ့နေရတဲ့ ဘယ်လို ပြဿနာကို ဖြေရှင်းပေးမှာလဲ။</li>
            <li><strong>Objective/Goal:</strong> ဒီ Product/Feature ကို လုပ်ခြင်းအားဖြင့် ဘာရလဒ် (Business Goal / User Goal) ကို မျှော်မှန်းထားတာလဲ။</li>
          </ul>
        </div>

        {/* 3. Target Audience */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">၃။ Target Audience (သုံးစွဲသူများ)</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            ဘယ်သူတွေက ဒီ Product ကို အသုံးပြုမှာလဲ။ User Personas တွေကို သေချာ ထည့်သွင်းဖော်ပြလေ့ရှိပါတယ်။ 
            <br />
            <span className="text-sm text-zinc-500 mt-2 block">(ဥပမာ - အသက် ၂၀ ကနေ ၃၀ ကြား အွန်လိုင်းမှ ဈေးဝယ်သူများ)</span>
          </p>
        </div>

        {/* 4. Scope */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">၄။ Scope (လုပ်ဆောင်မည့် နယ်ပယ်)</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li><strong>In-Scope:</strong> ဒီ Release (Version) မှာ ဘာတွေ အတိအကျ ပါဝင်မလဲ။</li>
            <li><strong>Out-of-Scope:</strong> ဘာတွေ မပါဝင်သေးဘူးလဲ (နောက်မှ ဆက်လုပ်မယ့် အရာတွေ) ဆိုတာကို သေချာ သတ်မှတ်ထားရပါတယ်။</li>
          </ul>
        </div>

        {/* 5. Requirements */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">၅။ Requirements (လိုအပ်ချက်များ) - <span className="text-zinc-500 text-sm">အရေးကြီးဆုံး အပိုင်း</span></h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li><strong>Functional Requirements:</strong> System က ဘာတွေ လုပ်ဆောင်နိုင်ရမလဲ။ (ဥပမာ - Email နဲ့ Login ဝင်နိုင်ရမယ်၊ Password Reset လုပ်နိုင်ရမယ်)</li>
            <li><strong>Non-functional Requirements:</strong> Performance (ဘယ်လောက် မြန်ရမလဲ)၊ Security (လုံခြုံရေး)၊ Scalability စတဲ့ နည်းပညာပိုင်းဆိုင်ရာ သတ်မှတ်ချက်များ။</li>
          </ul>
        </div>

        {/* 6. UX/UI */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">၆။ User Experience & Design (UX/UI)</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li><strong>User Journey / User Flow:</strong> User က ဘယ်လို အဆင့်ဆင့် အသုံးပြုသွားမလဲ ဆိုတဲ့ အစီအစဉ်။</li>
            <li>Wireframes တွေ၊ Mockups တွေ ဒါမှမဟုတ် Design link (Figma) တွေကို ထည့်သွင်းထားလေ့ရှိပါတယ်။</li>
          </ul>
        </div>

        {/* 7. Success Metrics */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">၇။ Success Metrics (အောင်မြင်မှု တိုင်းတာခြင်း)</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            ဒီ Product/Feature အောင်မြင်တယ်ဆိုတာကို ဘယ်လို တိုင်းတာမလဲ။ <br/>
            <span className="text-sm text-zinc-500 mt-2 block">(ဥပမာ - Daily Active Users 20% တက်လာရမယ်၊ Conversion rate 5% တက်လာရမယ် စတဲ့ KPIs တွေ)</span>
          </p>
        </div>

        {/* 8. Assumptions */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-blue-600 mb-3">၈။ Assumptions & Constraints</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li><strong>Assumptions:</strong> ဒီ Project ကို စလုပ်တုန်းက မှန်ကန်တယ်လို့ ယူဆထားတဲ့ အချက်များ။</li>
            <li><strong>Constraints:</strong> အချိန်၊ ငွေကြေး၊ ဒါမှမဟုတ် နည်းပညာပိုင်းဆိုင်ရာ ကန့်သတ်ချက်များ။</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 flex justify-between items-center border-t border-zinc-200 dark:border-zinc-800 mt-12">
        <Link href="/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
          &larr; အနောက်သို့
        </Link>
        <Link href="/examples" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          လက်တွေ့ ဥပမာများ ဆက်ဖတ်ရန် &rarr;
        </Link>
      </div>
    </div>
  );
}
