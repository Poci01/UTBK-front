import { useState } from "react";
import { IcSearch, IcHelp, IcClock, IcUsers, IcChevronRight, IcCheckSq, IcStar } from "@/components/icons";
import { tryouts } from "@/data/mockData";
import type { Tryout } from "@/types";

export function UserHome({ onSelectTryout }: { onSelectTryout: (t: Tryout) => void }) {
  const [search, setSearch] = useState("");
  const [filterKat, setFilterKat] = useState("Semua");
  const available = tryouts.filter(t=>t.status==="Aktif").filter(t=>{
    const ms = t.nama.toLowerCase().includes(search.toLowerCase());
    const mk = filterKat==="Semua"||t.kategori===filterKat;
    return ms&&mk;
  });
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
      <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-7 text-white relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full"/>
        <div className="absolute -right-4 -bottom-10 w-56 h-56 bg-white/5 rounded-full"/>
        <p className="text-indigo-200 text-sm font-medium">Selamat datang kembali 👋</p>
        <h1 className="text-2xl font-bold mt-1">Budi Santoso</h1>
        <p className="text-indigo-200 text-sm mt-1">Terus latihan untuk capai skor impianmu!</p>
        <div className="flex items-center gap-6 mt-5">{[{label:"Tryout Selesai",value:"2"},{label:"Skor Terbaik",value:"698"},{label:"Persentil",value:"78%"}].map(s=><div key={s.label}><p className="text-xl font-bold">{s.value}</p><p className="text-indigo-200 text-xs">{s.label}</p></div>)}</div>
      </div>
      <div className="grid grid-cols-3 gap-4">{[{label:"Tryout Dikerjakan",value:"2",Icon:IcCheckSq,c:"indigo"},{label:"Soal Dijawab",value:"135",Icon:IcHelp,c:"violet"},{label:"Skor Rata-rata",value:"679",Icon:IcStar,c:"emerald"}].map(s=><div key={s.label} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800"><s.Icon size={20} className={`text-${s.c}-500 mb-3`}/><p className="text-xl font-bold text-slate-900 dark:text-white">{s.value}</p><p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.label}</p></div>)}</div>
      <div>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">Tryout Tersedia</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5">
              <IcSearch size={13} className="text-slate-400"/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Cari tryout..." className="bg-transparent text-xs text-slate-700 dark:text-slate-300 placeholder-slate-400 outline-none w-28"/>
            </div>
            {["Semua","Saintek","Soshum","Campuran"].map(k=><button key={k} onClick={()=>setFilterKat(k)} className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${filterKat===k?"bg-indigo-600 text-white":"bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-indigo-200"}`}>{k}</button>)}
          </div>
        </div>
        {available.length===0 && <p className="text-sm text-slate-400 text-center py-8">Tidak ada tryout ditemukan.</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{available.map(t=>(
          <div key={t.id} onClick={()=>onSelectTryout(t)} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-700 transition-all cursor-pointer group">
            <div className="flex items-start justify-between mb-3"><span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${t.kategori==="Saintek"?"bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400":t.kategori==="Soshum"?"bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400":"bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400"}`}>{t.kategori}</span><IcChevronRight size={16} className="text-slate-300 group-hover:text-indigo-500 transition-colors"/></div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug mb-1">{t.nama}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">{t.deskripsi}</p>
            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1"><IcHelp size={12}/> {t.soal} soal</span>
              <span className="flex items-center gap-1"><IcClock size={12}/> {t.durasi} mnt</span>
              <span className="flex items-center gap-1"><IcUsers size={12}/> {t.peserta.toLocaleString()} peserta</span>
            </div>
          </div>
        ))}</div>
      </div>
    </div>
  );
}
