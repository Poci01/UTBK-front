import { useState } from "react";
import { IcPlus, IcSearch } from "@/components/icons";
import { TryoutTable } from "./TryoutTable";
import { ViewTryoutModal } from "./ViewTryoutModal";
import { EditTryoutModal } from "./EditTryoutModal";
import { ConfirmDelete } from "@/components/common/ConfirmDelete";
import { Pagination } from "@/components/common/Pagination";
import { AdminFormCard } from "./AdminFormCard";
import { tryouts } from "@/data/mockData";
import type { Tryout, ToastItem } from "@/types";

export function AdminKelolaTryout({ toast }: { toast: (t: ToastItem["type"], m: string) => void }) {
  const [rows, setRows] = useState<Tryout[]>(tryouts);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [viewItem, setViewItem] = useState<Tryout|null>(null);
  const [editItem, setEditItem] = useState<Tryout|null>(null);
  const [deleteItem, setDeleteItem] = useState<Tryout|null>(null);
  const perPage = 4;
  const filtered = rows.filter(r=>r.nama.toLowerCase().includes(search.toLowerCase())||r.id.toLowerCase().includes(search.toLowerCase())||r.kategori.toLowerCase().includes(search.toLowerCase()));
  const paged = filtered.slice((page-1)*perPage, page*perPage);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div><h1 className="text-xl font-bold text-slate-900 dark:text-white">Kelola Tryout</h1><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Kelola semua paket ujian dan peserta.</p></div>
        <button onClick={()=>setShowForm(v=>!v)} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"><IcPlus size={15}/>{showForm?"Tutup Form":"Buat Tryout"}</button>
      </div>
      {showForm && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Form Tambah Tryout</h2>
          <AdminFormCard onSubmit={()=>{setShowForm(false);toast("success","Tryout baru berhasil ditambahkan!");}}/>
        </div>
      )}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Semua Paket ({rows.length})</h2>
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg px-2.5 py-1.5">
            <IcSearch size={13} className="text-slate-400"/><input value={search} onChange={e=>{setSearch(e.target.value);setPage(1);}} placeholder="Cari tryout..." className="bg-transparent text-xs text-slate-700 dark:text-slate-300 placeholder-slate-400 outline-none w-36"/>
          </div>
        </div>
        <TryoutTable rows={paged} onView={setViewItem} onEdit={setEditItem} onDelete={setDeleteItem} onMore={(row,action)=>{const msgs:Record<string,string>={publish:`"${row.nama}" dipublikasikan`,duplicate:`"${row.nama}" berhasil diduplikat`,archive:`"${row.nama}" diarsipkan`};toast("success",msgs[action]);}}/>
        <Pagination total={filtered.length} page={page} perPage={perPage} setPage={setPage}/>
      </div>
      <ViewTryoutModal item={viewItem} onClose={()=>setViewItem(null)}/>
      <EditTryoutModal item={editItem} onClose={()=>setEditItem(null)} onSave={(t)=>{setRows(p=>p.map(r=>r.id===t.id?t:r));setEditItem(null);toast("success","Tryout berhasil diperbarui!");}}/>
      <ConfirmDelete open={!!deleteItem} onClose={()=>setDeleteItem(null)} nama={deleteItem?.nama||""} onConfirm={()=>{setRows(p=>p.filter(r=>r.id!==deleteItem?.id));setDeleteItem(null);toast("success","Tryout berhasil dihapus!");}}/>
    </div>
  );
}
