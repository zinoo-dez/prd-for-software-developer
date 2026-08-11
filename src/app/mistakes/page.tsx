import Link from 'next/link';

export default function Mistakes() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
          PRD ရေးသားရာတွင် အဖြစ်များသော အမှားများ
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          PRD ဟာ Project ရဲ့ အောင်မြင်မှုအတွက် အရေးပါပေမယ့် အောက်ပါအမှားတွေကို ကျူးလွန်မိရင်တော့ ဆန့်ကျင်ဘက် အကျိုးသက်ရောက်မှု (Negative Impact) တွေ ဖြစ်လာနိုင်ပါတယ်။
        </p>
      </div>

      <div className="space-y-6 mt-8">
        
        {/* Mistake 1 */}
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-2xl mt-1">❌</div>
            <div>
              <h2 className="text-xl font-bold text-red-900 dark:text-red-400 mb-2">
                ၁။ နည်းပညာပိုင်း (Technical Info) တွေ အရမ်း ထည့်ရေးမိခြင်း
              </h2>
              <p className="text-red-900/80 dark:text-red-200/80 leading-relaxed mb-4">
                "Database မှာ Column အသစ် ၃ ခု ထည့်ရမယ်"၊ "API ကနေ JSON Response ပြန်ရမယ်" စတဲ့ <strong>ဘယ်လို (How)</strong> လုပ်ရမလဲ ဆိုတဲ့ အပိုင်းက PRD မှာ ထည့်ရေးစရာ မလိုပါဘူး။ အဲဒါက Developer တွေ စဉ်းစားရမယ့် Technical Design Document အပိုင်းပါ။
              </p>
              <div className="bg-white/60 dark:bg-black/20 p-4 rounded-lg">
                <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                  💡 အကြံပြုချက် - PRD မှာ System က <strong>"ဘာလုပ်ပေးရမလဲ (What)"</strong> နဲ့ <strong>"ဘာကြောင့်လုပ်တာလဲ (Why)"</strong> ကိုသာ အဓိကထား ရေးပါ။
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mistake 2 */}
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-2xl mt-1">❌</div>
            <div>
              <h2 className="text-xl font-bold text-red-900 dark:text-red-400 mb-2">
                ၂။ Scope ရှင်းလင်းမှု မရှိခြင်း (Scope Creep ဖြစ်ခြင်း)
              </h2>
              <p className="text-red-900/80 dark:text-red-200/80 leading-relaxed mb-4">
                ဒီ Release မှာ ဘာတွေ မပါဘူး (Out-of-scope) လဲဆိုတာ သေချာ မရေးထားရင်၊ လုပ်နေရင်းနဲ့ Feature သစ်တွေ ထပ်တောင်းလာတာ (Scope Creep) မျိုး ဖြစ်တတ်ပါတယ်။ ဒါဟာ Project ကို အချိန်မီ မပြီးစေတဲ့ အဓိက အကြောင်းရင်းပါ။
              </p>
              <div className="bg-white/60 dark:bg-black/20 p-4 rounded-lg">
                <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                  💡 အကြံပြုချက် - Out-of-scope List ကို In-scope နည်းတူ အရေးတယူ စဉ်းစားပြီး သေချာချရေးထားပါ။
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mistake 3 */}
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-2xl mt-1">❌</div>
            <div>
              <h2 className="text-xl font-bold text-red-900 dark:text-red-400 mb-2">
                ၃။ အောင်မြင်မှုကို တိုင်းတာမည့် အချက်များ (Success Metrics) မပါဝင်ခြင်း
              </h2>
              <p className="text-red-900/80 dark:text-red-200/80 leading-relaxed mb-4">
                Feature တစ်ခုကို ရေးဆွဲဖြန့်ချိပြီးတဲ့အခါ ဒီ Feature အလုပ်ဖြစ်သလား၊ တကယ်ပဲ User တွေ အသုံးပြုသလား ဆိုတာကို တိုင်းတာဖို့ မေ့နေတတ်ကြပါတယ်။ Success Metrics မရှိရင် အလကားပါပဲ။
              </p>
              <div className="bg-white/60 dark:bg-black/20 p-4 rounded-lg">
                <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                  💡 အကြံပြုချက် - Project မစခင်ကတည်းက တိုင်းတာမယ့် Data တွေကို သတ်မှတ်ထားပြီး Analytics Tools တွေနဲ့ အမြဲ စောင့်ကြည့်ပါ။
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mistake 4 */}
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="text-2xl mt-1">❌</div>
            <div>
              <h2 className="text-xl font-bold text-red-900 dark:text-red-400 mb-2">
                ၄။ စာတွေ အရမ်းရှည်ပြီး ဖတ်ရခက်ခြင်း
              </h2>
              <p className="text-red-900/80 dark:text-red-200/80 leading-relaxed mb-4">
                စာမျက်နှာ ၃၀, ၄၀ လောက်ရှိတဲ့ စာသားချည်းပဲသက်သက် PRD တွေကို ဘယ်သူမှ အဆုံးထိ မဖတ်ကြပါဘူး။ ဒါဆိုရင် နားလည်မှုလွဲမှားတာတွေ (Miscommunication) ဖြစ်လာနိုင်ပါတယ်။
              </p>
              <div className="bg-white/60 dark:bg-black/20 p-4 rounded-lg">
                <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                  💡 အကြံပြုချက် - စာသားချည်းပဲ အရှည်ကြီး ရေးမယ့်အစား Bullet Points တွေ၊ ဇယား (Tables) တွေ၊ Mockups တွေနဲ့ Flow Charts တွေကို များများ အသုံးပြုပါ။
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="pt-8 flex justify-between items-center border-t border-zinc-200 dark:border-zinc-800 mt-12">
        <Link href="/tools" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
          &larr; အနောက်သို့
        </Link>
        <Link href="/" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-zinc-900 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 rounded-lg transition-colors">
          ပင်မစာမျက်နှာသို့ ပြန်သွားရန် &uarr;
        </Link>
      </div>
    </div>
  );
}
