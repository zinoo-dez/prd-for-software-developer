import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Templates() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
          နမူနာ ပုံစံခွက်များ (PRD Templates)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          PRD ကို အစကနေ (From Scratch) ရေးစရာမလိုပါဘူး။ Product Manager အများစု အသုံးပြုလေ့ရှိတဲ့ Standard Template တွေကို အောက်မှာ မျှဝေပေးထားပါတယ်။ မိမိ Project နဲ့ ကိုက်ညီမယ့် Template ကို ရွေးချယ် အသုံးပြုနိုင်ပါတယ်။
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-8">
        
        {/* Notion Template */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-blue-500 hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-6 h-6 fill-zinc-900 dark:fill-white">
              <path d="M22.5 10 L77.5 10 L82.5 20 L82.5 90 L27.5 90 L22.5 80 Z" opacity="0.1"/>
              <path d="M25 15 L75 15 L75 85 L25 85 Z" fill="none" stroke="currentColor" strokeWidth="6"/>
              <path d="M40 35 L60 35 M40 50 L60 50 M40 65 L50 65" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Notion PRD Template</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            Tech Company အများစုမှာ လက်ရှိ ရေပန်းအစားဆုံး အသုံးပြုနေတဲ့ PRD ပုံစံဖြစ်ပါတယ်။ Database, Tags တွေနဲ့ အလွယ်တကူ ချိတ်ဆက် အသုံးပြုနိုင်ပါတယ်။
          </p>
          <a 
            href="https://www.notion.so/templates/product-requirements-document" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline"
          >
            Template ရယူရန် <ExternalLink size={14} className="ml-1" />
          </a>
        </div>

        {/* Google Docs Template */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-blue-500 hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
              <path fill="#4285F4" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"/>
              <path fill="#90CAF9" d="M40 13L30 13 30 3z"/>
              <path fill="#1976D2" d="M30 13H40L30 3z"/>
              <path fill="#E3F2FD" d="M15 23H33V27H15zM15 31H33V35H15zM15 15H25V19H15z"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Google Docs Template</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            ရိုးရှင်းလွယ်ကူပြီး အဖွဲ့သားတွေနဲ့ အတူတူ (Real-time collaboration) ဝင်ရေးဖို့၊ Comment ပေးဖို့အတွက် အသင့်တော်ဆုံး ပုံစံဖြစ်ပါတယ်။
          </p>
          <a 
            href="https://docs.google.com/document/d/1Xy_JpXb04x63d0-wYg_Q0Vv97YvWwD-0_w2uO4Xw9w/template/preview" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline"
          >
            Template ရယူရန် <ExternalLink size={14} className="ml-1" />
          </a>
        </div>

      </div>

      <div className="bg-zinc-100 dark:bg-zinc-800/50 p-6 rounded-xl mt-8">
        <h3 className="font-semibold mb-2">💡 အကြံပြုချက်</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Template တွေကို အသုံးပြုတဲ့အခါ ကိုယ့် Project ရဲ့ အရွယ်အစားနဲ့ လိုအပ်ချက်ပေါ်မူတည်ပြီး လိုအပ်တဲ့ အပိုင်းတွေကို ထပ်ဖြည့်တာ၊ မလိုတဲ့ အပိုင်းတွေကို ဖျက်တာမျိုး စိတ်ကြိုက် ပြင်ဆင် (Customize) အသုံးပြုသင့်ပါတယ်။
        </p>
      </div>

      <div className="pt-8 flex justify-between items-center border-t border-zinc-200 dark:border-zinc-800 mt-12">
        <Link href="/examples" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
          &larr; အနောက်သို့
        </Link>
        <Link href="/tools" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          အသုံးများသော Tools များ ဆက်ဖတ်ရန် &rarr;
        </Link>
      </div>
    </div>
  );
}
