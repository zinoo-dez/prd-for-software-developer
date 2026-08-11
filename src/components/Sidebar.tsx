"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, LayoutTemplate, PenTool, AlertTriangle, Lightbulb, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'PRD ဆိုတာ ဘာလဲ?', path: '/', icon: BookOpen },
  { name: 'အဓိက ပါဝင်ရမည့် အချက်များ', path: '/core-components', icon: FileText },
  { name: 'လက်တွေ့ ဥပမာများ', path: '/examples', icon: Lightbulb },
  { name: 'နမူနာ ပုံစံခွက်များ (Templates)', path: '/templates', icon: LayoutTemplate },
  { name: 'အသုံးများသော Tools များ', path: '/tools', icon: PenTool },
  { name: 'အဖြစ်များသော အမှားများ', path: '/mistakes', icon: AlertTriangle },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 h-screen sticky top-0 overflow-y-auto hidden md:block">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <FileText size={18} className="text-white" />
          </div>
          <h1 className="font-bold text-lg text-zinc-900 dark:text-white">PRD Guide (MM)</h1>
        </div>
        
        <nav className="space-y-1.5 relative">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link key={item.path} href={item.path} className="block relative">
                {isActive && (
                  <motion.div 
                    layoutId="sidebar-active"
                    className="absolute left-0 w-1 h-8 top-1/2 -translate-y-1/2 bg-blue-600 dark:bg-blue-400 rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium ml-1' 
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-400'} />
                  <span className="text-sm">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
