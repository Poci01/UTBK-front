import { useState } from "react";
import { Modal } from "@/components/common/Modal";

export function UserMyTryout() {
  const history = [
    {id:"TRY-002",tryout:"UTBK Soshum Intensif Mei",skor:698,benar:52,salah:13,kosong:10,persentil:"78%",waktu:"105 mnt",tanggal:"12 Jan 2025",status:"Lulus"},
    {id:"TRY-005",tryout:"Tryout Kilat SBMPTN",skor:660,benar:38,salah:12,kosong:10,persentil:"68%",waktu:"58 mnt",tanggal:"8 Des 2024",status:"Lulus"},
  ];
  const [viewItem, setViewItem] = useState<typeof history[0]|null>(null);
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">Tryout Saya</h1>
      <div className="grid grid-cols-3 gap-4">{[{label:"Total Dikerjakan",value:"2",c:"indigo"},{label:"Lulus",value:"2",c:"emerald"},{label:"Skor Terbaik",value:"698",c:"violet"}].map(s=><div key={s.label} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800"><p className={`text-2xl font-bold text-${s.c}-600 dark:text-${s.c}-400`}>{s.value}</p><p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</p></div>)}</div>
      <div className="space-y-4">{history.map((h,i)=>(
        <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
          <div className="flex items-start justify-between mb-4">
            <div><p className="font-semibold text-slate-900 dark:text-white">{h.tryout}</p><p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{h.tanggal} · {h.waktu}</p></div>
            <div className="text-right"><p className={`text-2xl font-bold ${h.skor>=700?"text-emerald-600":"text-amber-600"}`}>{h.skor}</p><span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full">{h.status}</span></div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-emerald-600"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"/> Benar: <strong>{h.benar}</strong></span>
            <span className="flex items-center gap-1.5 text-red-500"><span className="w-2 h-2 rounded-full bg-red-400 inline-block"/> Salah: <strong>{h.salah}</strong></span>
            <span className="flex items-center gap-1.5 text-slate-400"><span className="w-2 h-2 rounded-full bg-slate-300 inline-block"/> Kosong: <strong>{h.kosong}</strong></span>
            <span className="ml-auto text-slate-500">Persentil {h.persentil}</span>
          </div>
          <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full mt-3 overflow-hidden flex">
            <div className="h-full bg-emerald-500" style={{width:`${h.benar/(h.benar+h.salah+h.kosong)*100}%`}}/>
            <div className="h-full bg-red-400" style={{width:`${h.salah/(h.benar+h.salah+h.kosong)*100}%`}}/>
          </div>
          <button onClick={()=>setViewItem(h)} className="mt-3 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Lihat Detail Hasil →</button>
        </div>
      ))}</div>
      <Modal open={!!viewItem} onClose={()=>setViewItem(null)} title="Detail Hasil Tryout" size="md">
        {viewItem && <div className="space-y-4">
          <p className="font-semibold text-slate-900 dark:text-white">{viewItem.tryout}</p>
          <div className="text-center py-4"><p className={`text-5xl font-bold ${viewItem.skor>=700?"text-emerald-600":"text-amber-600"}`}>{viewItem.skor}</p><p className="text-sm text-slate-500 mt-1">Skor Final · Persentil {viewItem.persentil}</p></div>
          <div className="grid grid-cols-3 gap-3 text-center">{[{label:"Benar",v:viewItem.benar,c:"text-emerald-600"},{label:"Salah",v:viewItem.salah,c:"text-red-500"},{label:"Kosong",v:viewItem.kosong,c:"text-slate-500"}].map(s=><div key={s.label} className="bg-slate-50 dark:bg-slate-800 rounded-xl py-4"><p className={`text-2xl font-bold ${s.c}`}>{s.v}</p><p className="text-xs text-slate-500 mt-0.5">{s.label}</p></div>)}</div>
          <div className="grid grid-cols-2 gap-3">{[["Tanggal",viewItem.tanggal],["Waktu",viewItem.waktu],["Status",viewItem.status],["ID Tryout",viewItem.id]].map(([k,v])=><div key={k} className="bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3"><p className="text-xs text-slate-500">{k}</p><p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{v}</p></div>)}</div>
        </div>}
      </Modal>
    </div>
  );
}
