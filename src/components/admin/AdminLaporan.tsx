import { useState } from "react";
import { IcSearch, IcSave, IcEye } from "@/components/icons";
import { Modal } from "@/components/common/Modal";
import { Pagination } from "@/components/common/Pagination";
import { laporanData } from "@/data/mockData";
import type { LaporanItem, ToastItem } from "@/types";

export function AdminLaporan({ toast }: { toast: (t: ToastItem["type"], m: string) => void }) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [viewItem, setViewItem] = useState<LaporanItem|null>(null);
  const perPage = 4;
  const filtered = laporanData.filter(r=>r.nama.toLowerCase().includes(search.toLowerCase())||r.tryout.toLowerCase().includes(search.toLowerCase()));
  const paged = filtered.slice((page-1)*perPage, page*perPage);
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div><h1 className="text-xl font-bold text-slate-900 dark:text-white">Laporan</h1><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Analitik performa peserta dan tryout.</p></div>
        <button onClick={()=>toast("info","Mengekspor laporan ke CSV...")} className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"><IcSave size={15}/> Export CSV</button>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {[{label:"Ujian Selesai",value:"8.421",sub:"bulan ini"},{label:"Rata-rata Skor",value:"682",sub:"+12 dari bulan lalu"},{label:"Pass Rate",value:"67%",sub:"skor ≥ 600"},{label:"Waktu Rata-rata",value:"98 mnt",sub:"per sesi"}].map(s=>(
          <div key={s.label} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800"><p className="text-2xl font-bold text-slate-900 dark:text-white">{s.value}</p><p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">{s.label}</p><p className="text-xs text-slate-400">{s.sub}</p></div>
        ))}
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Hasil Peserta</h2>
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg px-2.5 py-1.5">
            <IcSearch size={13} className="text-slate-400"/><input value={search} onChange={e=>{setSearch(e.target.value);setPage(1);}} placeholder="Cari peserta..." className="bg-transparent text-xs text-slate-700 dark:text-slate-300 placeholder-slate-400 outline-none w-32"/>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-slate-50 dark:bg-slate-800/50">{["Peserta","Paket Tryout","Skor","Persentil","Waktu","Tanggal","Aksi"].map(h=><th key={h} className="px-5 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {paged.map((row,i)=>(
                <tr key={i} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="px-5 py-3.5 font-medium text-slate-800 dark:text-slate-200">{row.nama}</td>
                  <td className="px-5 py-3.5 text-slate-600 dark:text-slate-400 text-xs whitespace-nowrap">{row.tryout}</td>
                  <td className="px-5 py-3.5"><span className={`font-mono font-bold ${row.skor>=700?"text-emerald-600 dark:text-emerald-400":row.skor>=650?"text-amber-600 dark:text-amber-400":"text-slate-700 dark:text-slate-300"}`}>{row.skor}</span></td>
                  <td className="px-5 py-3.5 text-slate-600 dark:text-slate-400">{row.persentil}</td>
                  <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400">{row.waktu}</td>
                  <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400 whitespace-nowrap">{row.tanggal}</td>
                  <td className="px-5 py-3.5"><button onClick={()=>setViewItem(row)} className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"><IcEye size={14}/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination total={filtered.length} page={page} perPage={perPage} setPage={setPage}/>
      </div>
      <Modal open={!!viewItem} onClose={()=>setViewItem(null)} title="Detail Hasil" size="md">
        {viewItem && <div className="space-y-4">
          <div className="text-center py-4"><div className={`text-4xl font-bold mb-1 ${viewItem.skor>=700?"text-emerald-600":viewItem.skor>=650?"text-amber-600":"text-slate-700"}`}>{viewItem.skor}</div><p className="text-sm text-slate-500">Skor Final</p></div>
          <div className="grid grid-cols-2 gap-3">{[["Peserta",viewItem.nama],["Paket",viewItem.tryout],["Persentil",viewItem.persentil],["Waktu",viewItem.waktu],["Tanggal",viewItem.tanggal],["Status",viewItem.skor>=600?"Lulus":"Di Bawah Target"]].map(([k,v])=>(
            <div key={k} className="bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3"><p className="text-xs text-slate-500">{k}</p><p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{v}</p></div>
          ))}</div>
        </div>}
      </Modal>
    </div>
  );
}
