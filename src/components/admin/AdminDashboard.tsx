import { useState } from "react";
import { IcPlus, IcSearch, IcUsers, IcBook, IcHelp, IcTrend, IcArrow } from "@/components/icons";
import { AlertBanner } from "@/components/common/AlertBanner";
import { TryoutTable } from "./TryoutTable";
import { ViewTryoutModal } from "./ViewTryoutModal";
import { EditTryoutModal } from "./EditTryoutModal";
import { ConfirmDelete } from "@/components/common/ConfirmDelete";
import { AdminFormCard } from "./AdminFormCard";
import { ActivityFeed } from "./ActivityFeed";
import { tryouts, alertsData } from "@/data/mockData";
import type { Tryout, ToastItem } from "@/types";

export function AdminDashboard({ alerts, dismissAlert, setActive, toast }: {
  alerts: number[];
  dismissAlert: (i: number) => void;
  setActive: (s: string) => void;
  toast: (t: ToastItem["type"], m: string) => void;
}) {
  const [viewItem, setViewItem] = useState<Tryout|null>(null);
  const [editItem, setEditItem] = useState<Tryout|null>(null);
  const [deleteItem, setDeleteItem] = useState<Tryout|null>(null);
  const [rows, setRows] = useState(tryouts.slice(0,5));
  const [search, setSearch] = useState("");
  const filtered = rows.filter(r=>r.nama.toLowerCase().includes(search.toLowerCase())||r.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div><h1 className="text-xl font-bold text-slate-900 dark:text-white">Dashboard</h1><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Ringkasan aktivitas platform.</p></div>
        <button onClick={()=>setActive("tryout")} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"><IcPlus size={15}/> Buat Tryout</button>
      </div>
      {alerts.length > 0 && <div className="space-y-2">{alerts.map(i=><AlertBanner key={i} {...alertsData[i]} onClose={()=>dismissAlert(i)}/>)}</div>}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {[{label:"Total Peserta",value:"12.481",delta:"+8.2%",Icon:IcUsers,color:"indigo"},{label:"Paket Tryout",value:"64",delta:"+4",Icon:IcBook,color:"violet"},{label:"Soal Aktif",value:"3.290",delta:"+120",Icon:IcHelp,color:"sky"},{label:"Rata-rata Skor",value:"682",delta:"+12 pts",Icon:IcTrend,color:"emerald"}].map(s=>{
          const cmap: Record<string,string>={indigo:"bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400",violet:"bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400",sky:"bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-400",emerald:"bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"};
          return (
            <div key={s.label} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4"><span className={`w-10 h-10 rounded-xl flex items-center justify-center ${cmap[s.color]}`}><s.Icon size={20}/></span><span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-1 rounded-full"><IcArrow size={11}/>{s.delta}</span></div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{s.value}</p><p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.label}</p>
            </div>
          );
        })}
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div><h2 className="text-sm font-semibold text-slate-900 dark:text-white">Tryout Terbaru</h2></div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg px-2.5 py-1.5">
              <IcSearch size={13} className="text-slate-400"/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Cari..." className="bg-transparent text-xs text-slate-700 dark:text-slate-300 placeholder-slate-400 outline-none w-28"/>
            </div>
            <button onClick={()=>setActive("tryout")} className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Lihat semua</button>
          </div>
        </div>
        <TryoutTable rows={filtered} onView={setViewItem} onEdit={setEditItem} onDelete={setDeleteItem} onMore={(row,action)=>{const msgs:Record<string,string>={publish:`"${row.nama}" dipublikasikan`,duplicate:`"${row.nama}" berhasil diduplikat`,archive:`"${row.nama}" diarsipkan`};toast("success",msgs[action]||"Selesai");}}/>
        <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800"><p className="text-xs text-slate-500">Menampilkan {filtered.length} dari 64</p></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AdminFormCard onSubmit={()=>toast("success","Tryout berhasil disimpan!")}/>
        <ActivityFeed/>
      </div>
      <ViewTryoutModal item={viewItem} onClose={()=>setViewItem(null)}/>
      <EditTryoutModal item={editItem} onClose={()=>setEditItem(null)} onSave={(t)=>{setRows(p=>p.map(r=>r.id===t.id?t:r));setEditItem(null);toast("success","Tryout berhasil diperbarui!");}}/>
      <ConfirmDelete open={!!deleteItem} onClose={()=>setDeleteItem(null)} nama={deleteItem?.nama||""} onConfirm={()=>{setRows(p=>p.filter(r=>r.id!==deleteItem?.id));setDeleteItem(null);toast("success","Tryout berhasil dihapus!");}}/>
    </div>
  );
}
