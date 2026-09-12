import { useState } from "react";
import { IcArrowLeft, IcBook, IcTrophy, IcStar, IcCheckSm, IcClock } from "@/components/icons";
import { notifUser } from "@/data/mockData";

export function UserAllNotif({ onBack }: { onBack: () => void }) {
  const allNotifs = [
    ...notifUser,
    { icon:<IcBook size={15} className="text-indigo-500"/>,    title:"Tryout Saintek Batch 2 Dibuka",  desc:"Daftarkan diri sekarang sebelum kuota penuh",          time:"1 hari lalu",  unread:false },
    { icon:<IcTrophy size={15} className="text-amber-500"/>,   title:"Kamu masuk Top 10 Nasional!",   desc:"Pertahankan posisimu di leaderboard",                  time:"2 hari lalu",  unread:false },
    { icon:<IcStar size={15} className="text-violet-500"/>,    title:"Streak 7 Hari!",                desc:"Kamu sudah latihan 7 hari berturut-turut",             time:"3 hari lalu",  unread:false },
    { icon:<IcCheckSm size={15} className="text-emerald-500"/>,title:"Verifikasi Email Berhasil",     desc:"Akun kamu sudah aktif dan siap digunakan",             time:"10 hari lalu", unread:false },
  ];
  const [read, setRead] = useState<Set<number>>(new Set([2,3,4,5]));
  const unreadCount = allNotifs.filter((n,i)=>n.unread&&!read.has(i)).length;
  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"><IcArrowLeft size={16}/></button>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Semua Notifikasi</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">{unreadCount>0?`${unreadCount} belum dibaca`:"Semua sudah dibaca"}</p>
          </div>
        </div>
        {unreadCount>0 && <button onClick={()=>setRead(new Set(allNotifs.map((_,i)=>i)))} className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Tandai semua dibaca</button>}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
        {allNotifs.map((n,i)=>(
          <button key={i} onClick={()=>setRead(p=>{const s=new Set(p);s.add(i);return s;})} className={`w-full flex items-start gap-4 px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${n.unread&&!read.has(i)?"bg-indigo-50/60 dark:bg-indigo-950/20":""}`}>
            <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${n.unread&&!read.has(i)?"bg-indigo-100 dark:bg-indigo-900":"bg-slate-100 dark:bg-slate-800"}`}>{n.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className={`text-sm font-semibold ${n.unread&&!read.has(i)?"text-indigo-900 dark:text-indigo-200":"text-slate-900 dark:text-white"}`}>{n.title}</p>
                {n.unread&&!read.has(i) && <span className="w-2 h-2 bg-indigo-500 rounded-full shrink-0 mt-1.5"/>}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{n.desc}</p>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><IcClock size={10}/>{n.time}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
