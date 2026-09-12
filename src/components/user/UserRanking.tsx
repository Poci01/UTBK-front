import { useState } from "react";
import { rankingData } from "@/data/mockData";

export function UserRanking() {
  const [filter, setFilter] = useState("Semua");
  const badgeEmoji: Record<string,string> = {gold:"🥇",silver:"🥈",bronze:"🥉","":" "};
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div><h1 className="text-xl font-bold text-slate-900 dark:text-white">Papan Peringkat</h1><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Peringkat nasional berdasarkan skor tertinggi.</p></div>
        <div className="flex gap-2">{["Semua","Saintek","Soshum"].map(f=><button key={f} onClick={()=>setFilter(f)} className={`text-xs font-medium px-3 py-2 rounded-lg transition-colors ${filter===f?"bg-indigo-600 text-white":"bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"}`}>{f}</button>)}</div>
      </div>
      <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-700 rounded-2xl p-4 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">#5</div>
        <div className="flex-1"><p className="text-sm font-semibold text-indigo-900 dark:text-indigo-200">Peringkat kamu saat ini</p><p className="text-xs text-indigo-600 dark:text-indigo-400">Skor 698 · Persentil 78%</p></div>
        <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded-full">Budi Santoso</span>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {rankingData.map((r,i)=>(
            <div key={i} className={`flex items-center gap-4 px-6 py-4 ${r.nama==="Budi Santoso"?"bg-indigo-50/50 dark:bg-indigo-950/20":""}`}>
              <div className="w-8 text-center shrink-0">
                {r.badge?<span className="text-xl">{badgeEmoji[r.badge]}</span>:<span className="text-sm font-bold text-slate-400">#{r.rank}</span>}
              </div>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${["bg-amber-500","bg-slate-400","bg-amber-700"][i]||"bg-indigo-400"}`}>{r.nama[0]}</div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold ${r.nama==="Budi Santoso"?"text-indigo-700 dark:text-indigo-300":"text-slate-900 dark:text-white"}`}>{r.nama} {r.nama==="Budi Santoso"&&<span className="text-xs font-normal text-indigo-500">(Kamu)</span>}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{r.asal}</p>
              </div>
              <div className="text-right shrink-0">
                <p className={`text-lg font-bold ${r.badge==="gold"?"text-amber-500":r.badge==="silver"?"text-slate-500":r.badge==="bronze"?"text-amber-700":"text-slate-700 dark:text-slate-300"}`}>{r.skor}</p>
                <p className="text-xs text-slate-400">{r.tryout}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
