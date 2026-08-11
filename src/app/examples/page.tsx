import Link from 'next/link';

export default function Examples() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white">
          လက်တွေ့ ဥပမာများ (Examples)
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          PRD မှာ အပိုင်းတစ်ပိုင်းချင်းစီကို ဘယ်လိုရေးလေ့ရှိလဲဆိုတာ လက်တွေ့ ဥပမာလေးတွေနဲ့ လေ့လာကြည့်ရအောင်။
        </p>
      </div>

      <div className="space-y-8">
        
        {/* User Story Example */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">၁။ User Story ရေးသားခြင်း ဥပမာ</h2>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-zinc-600 dark:text-zinc-400">
              User Story ဆိုတာ Feature တစ်ခုကို User ရဲ့ ရှုထောင့်ကနေ ရေးသားတာဖြစ်ပါတယ်။ ပုံသေနည်းကတော့ <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-pink-600 dark:text-pink-400">As a [user type], I want to [action] so that [benefit/value].</code> ဖြစ်ပါတယ်။
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-900/30 p-4 rounded-lg">
                <h3 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                  <span className="text-xl">❌</span> မကောင်းသော ရေးသားနည်း
                </h3>
                <p className="text-sm text-red-900/80 dark:text-red-200/80">"System မှာ Password reset လုပ်တဲ့ ခလုတ် ထည့်ပေးပါ။"</p>
                <p className="text-xs text-red-600/70 dark:text-red-400/70 mt-2">(ဘာကြောင့်ထည့်ရလဲ၊ ဘယ်သူ့အတွက်လဲ မပါဝင်ပါ)</p>
              </div>
              
              <div className="border border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-900/30 p-4 rounded-lg">
                <h3 className="font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                  <span className="text-xl">✅</span> ကောင်းမွန်သော ရေးသားနည်း
                </h3>
                <p className="text-sm text-green-900/80 dark:text-green-200/80">"As a <strong>User</strong>, I want to <strong>reset my password via email</strong> so that <strong>I can regain access to my account if I forget it.</strong>"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics Example */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">၂။ Success Metrics တိုင်းတာခြင်း ဥပမာ</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-zinc-600 dark:text-zinc-400">
              E-commerce Website တစ်ခုမှာ "Add to Cart" ပုံစံအသစ် (Feature) ထည့်လိုက်တယ် ဆိုပါစို့။ အဲဒီ Feature အောင်မြင်သလားဆိုတာ တိုင်းတာဖို့ အောက်ပါ Metrics တွေကို PRD မှာ ကြိုရေးထားရပါမယ်။
            </p>
            <ul className="list-disc list-inside space-y-3 text-zinc-700 dark:text-zinc-300">
              <li><strong>Conversion Rate:</strong> Add to cart နှိပ်တဲ့သူ အရေအတွက်ဟာ ယခင်ကထက် <span className="text-blue-600 font-semibold">15% တက်လာရမည်။</span></li>
              <li><strong>Task Success Rate:</strong> User သစ်တွေရဲ့ <span className="text-blue-600 font-semibold">90%</span> ဟာ အကူအညီမပါဘဲ ပစ္စည်းဝယ်ယူခြင်း (Checkout) ကို အောင်မြင်စွာ လုပ်ဆောင်နိုင်ရမည်။</li>
              <li><strong>System Performance:</strong> Add to Cart ခလုတ်နှိပ်ပြီး <span className="text-blue-600 font-semibold">၁ စက္ကန့်အတွင်း</span> Cart ထဲရောက်ကြောင်း Notification ပြရမည်။</li>
            </ul>
          </div>
        </div>

        {/* Out of Scope Example */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          <div className="bg-zinc-50 dark:bg-zinc-800/50 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">၃။ Scope ကန့်သတ်ခြင်း ဥပမာ (In-scope vs Out-of-scope)</h2>
          </div>
          <div className="p-6">
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              "Chat Application" တစ်ခုရဲ့ ပထမဆုံး Version (V1) ကို ထုတ်မယ်ဆိုရင်...
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-600 mb-2 border-b border-blue-100 pb-2">🎯 In-Scope (ဒီ Version မှာ ပါမည့်အရာများ)</h3>
                <ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                  <li>1-to-1 Text Messaging (စာပို့ခြင်း)</li>
                  <li>Image ပို့ခြင်း</li>
                  <li>Read Receipts (စာဖတ်ပြီးကြောင်းပြခြင်း)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-500 mb-2 border-b border-zinc-100 dark:border-zinc-800 pb-2">🚫 Out-of-Scope (နောက်မှ လုပ်မည့်အရာများ)</h3>
                <ul className="list-disc list-inside text-sm text-zinc-500 space-y-1">
                  <li>Group Chat ဖန်တီးခြင်း</li>
                  <li>Voice & Video Call ခေါ်ခြင်း</li>
                  <li>Stickers & GIFs များ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="pt-8 flex justify-between items-center border-t border-zinc-200 dark:border-zinc-800 mt-12">
        <Link href="/core-components" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
          &larr; အနောက်သို့
        </Link>
        <Link href="/templates" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          နမူနာ ပုံစံခွက်များ ဆက်ဖတ်ရန် &rarr;
        </Link>
      </div>
    </div>
  );
}
