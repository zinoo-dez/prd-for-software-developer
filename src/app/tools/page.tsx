import Link from 'next/link';
import { PenTool, CheckSquare, Image as ImageIcon } from 'lucide-react';

export default function Tools() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
          PRD ရေးသားရာတွင် အသုံးများသော Tools များ
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          PRD ကို ရေးသားဖို့နဲ့ အဖွဲ့သားတွေကြား မျှဝေဖို့အတွက် Product Management နယ်ပယ်မှာ အသုံးအများဆုံး Tools တွေကို အမျိုးအစားအလိုက် ခွဲခြားပြထားပါတယ်။
        </p>
      </div>

      <div className="space-y-6 mt-8">
        
        {/* Document Tools */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 px-6 py-4 flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800">
            <PenTool className="text-blue-600" size={24} />
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">၁။ စာရွက်စာတမ်း ဖန်တီးခြင်း (Documentation)</h2>
          </div>
          <div className="p-6 grid sm:grid-cols-2 gap-4">
            <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Confluence</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Jira နဲ့ အလွယ်တကူ ချိတ်ဆက်အသုံးပြုနိုင်ပြီး၊ Enterprise ကုမ္ပဏီကြီးတွေမှာ အသုံးအများဆုံး ဖြစ်ပါတယ်။</p>
            </div>
            <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Notion</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">ခေတ်ပေါ် Tech Company တွေနဲ့ Startup တွေမှာ အသုံးများပါတယ်။ Database ပုံစံ၊ Kanban board ပုံစံ မျိုးစုံ သုံးနိုင်ပါတယ်။</p>
            </div>
            <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Google Docs</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">အရိုးရှင်းဆုံးနဲ့ Real-time အတူတူဝင်ရေးဖို့၊ Comment ပေးဖို့ အလွယ်ကူဆုံး Tool ဖြစ်ပါတယ်။</p>
            </div>
          </div>
        </div>

        {/* Project Management Tools */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 px-6 py-4 flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800">
            <CheckSquare className="text-green-600" size={24} />
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">၂။ လုပ်ငန်းစဉ် စီမံခန့်ခွဲခြင်း (Ticketing & Tracking)</h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              PRD မှာရေးထားတဲ့ Requirements တွေကို Developer တွေအတွက် Task အဖြစ် ခွဲထုတ်တဲ့အခါ အသုံးပြုပါတယ်။
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Jira</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Agile/Scrum အဖွဲ့တွေအတွက် အဓိက သုံးတဲ့ Standard Tool တစ်ခုဖြစ်ပါတယ်။</p>
              </div>
              <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Linear / Asana</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">UI/UX ပိုကောင်းပြီး မြန်ဆန်တဲ့အတွက် ခေတ်သစ် Developer တွေကြား ရေပန်းစားပါတယ်။</p>
              </div>
            </div>
          </div>
        </div>

        {/* Design Tools */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 px-6 py-4 flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800">
            <ImageIcon className="text-purple-600" size={24} />
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">၃။ ဒီဇိုင်း နှင့် Mockup များ (Design & Wireframes)</h2>
          </div>
          <div className="p-6 grid sm:grid-cols-2 gap-4">
            <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Figma</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">UI/UX Design တွေဆွဲဖို့အတွက် နံပါတ် (၁) Tool ပါ။ PRD ထဲမှာ Figma Link ထည့်ပေးလေ့ ရှိပါတယ်။</p>
            </div>
            <div className="border border-zinc-200 dark:border-zinc-800 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Miro / FigJam</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">User Flow တွေ၊ Architecture တွေနဲ့ Brainstorming လုပ်တဲ့အခါ သုံးတဲ့ Whiteboard tools တွေပါ။</p>
            </div>
          </div>
        </div>

      </div>

      <div className="pt-8 flex justify-between items-center border-t border-zinc-200 dark:border-zinc-800 mt-12">
        <Link href="/templates" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
          &larr; အနောက်သို့
        </Link>
        <Link href="/mistakes" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          အဖြစ်များသော အမှားများ ဆက်ဖတ်ရန် &rarr;
        </Link>
      </div>
    </div>
  );
}
