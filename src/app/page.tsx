import { BookOpen, Target, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
          PRD (Product Requirements Document) ဆိုတာ ဘာလဲ?
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          **PRD (Product Requirements Document)** ဆိုတာ Software Development နဲ့ Product Management နယ်ပယ်မှာ Product (သို့) Feature တစ်ခုကို မဖန်တီးခင်မှာ အဲဒီ Product က ဘာလုပ်ပေးနိုင်ရမယ်၊ ဘယ်လိုအလုပ်လုပ်ရမယ်၊ ဘာရည်ရွယ်ချက်နဲ့ လုပ်တာလဲ ဆိုတာတွေကို အသေးစိတ်ရေးသားထားတဲ့ **စံသတ်မှတ်ချက် စာတမ်း (Standard Document)** တစ်ခုဖြစ်ပါတယ်။
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-xl">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 text-lg mb-2">💡 အလွယ်ဆုံး မှတ်သားရန်</h3>
        <p className="text-blue-800 dark:text-blue-200">
          PRD ဆိုတာ အိမ်တစ်လုံးဆောက်တဲ့အခါ အင်ဂျင်နီယာတွေအတွက် လိုအပ်တဲ့ <strong className="font-bold">"ပုံစံတူ (Blueprint)"</strong> နဲ့ တူပါတယ်။ PRD သေချာရေးထားမှသာ Developer တွေက လိုချင်တဲ့ အရာကို အတိအကျ ဖန်တီးပေးနိုင်မှာ ဖြစ်ပါတယ်။
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2">
          ဘာကြောင့် PRD ကို ရေးရတာလဲ? (ရည်ရွယ်ချက်)
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center mb-3">
              <Users size={20} />
            </div>
            <h3 className="font-semibold mb-2">နားလည်မှု တစ်ပြေးညီဖြစ်စေရန်</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Product Manager (PM), Developer တွေ၊ Designer တွေနဲ့ QA အဖွဲ့တွေအားလုံး ဘာကို တည်ဆောက်ရမလဲဆိုတာကို ရှင်းရှင်းလင်းလင်း သိရှိစေဖို့ ဖြစ်ပါတယ်။
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center mb-3">
              <Target size={20} />
            </div>
            <h3 className="font-semibold mb-2">ပန်းတိုင် ပျောက်မသွားစေရန်</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              လုပ်ဆောင်နေရင်းနဲ့ မလိုအပ်တဲ့ Feature တွေ အလွန်အကျွံ ပါလာတာမျိုး (Scope Creep) မဖြစ်စေဖို့နဲ့ မူလရည်ရွယ်ချက်အတိုင်း ပြီးမြောက်စေဖို့ ဖြစ်ပါတယ်။
            </p>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <Link href="/core-components" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          အဓိက ပါဝင်ရမည့် အချက်များ ဆက်ဖတ်ရန် &rarr;
        </Link>
      </div>
    </div>
  );
}
