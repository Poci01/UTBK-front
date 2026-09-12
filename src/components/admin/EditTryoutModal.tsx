import { useState, useEffect } from "react";
import { Modal } from "@/components/common/Modal";
import { IcSave } from "@/components/icons";
import type { Tryout } from "@/types";

export function EditTryoutModal({ item, onClose, onSave }: { item: Tryout | null; onClose: () => void; onSave: (t: Tryout) => void }) {
  const [form, setForm] = useState<Tryout | null>(null);
  useEffect(() => { if (item) setForm({...item}); }, [item]);
  if (!form) return null;
  return (
    <Modal open={!!item} onClose={onClose} title="Edit Tryout" size="md">
      <div className="space-y-4">
        {[{label:"Nama Paket",key:"nama",type:"text"},{label:"Jumlah Soal",key:"soal",type:"number"},{label:"Durasi (menit)",key:"durasi",type:"number"}].map(f=>(
          <div key={f.key}><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{f.label}</label>
          <input type={f.type} value={(form as unknown as Record<string,unknown>)[f.key] as string} onChange={e=>setForm(p=>p?{...p,[f.key]:f.type==="number"?Number(e.target.value):e.target.value}:p)} className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"/></div>
        ))}
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Status</label>
          <select value={form.status} onChange={e=>setForm(p=>p?{...p,status:e.target.value}:p)} className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"><option>Aktif</option><option>Draft</option><option>Selesai</option></select></div>
          <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Kategori</label>
          <select value={form.kategori} onChange={e=>setForm(p=>p?{...p,kategori:e.target.value}:p)} className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"><option>Saintek</option><option>Soshum</option><option>Campuran</option></select></div>
        </div>
        <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Deskripsi</label>
        <textarea value={form.deskripsi} onChange={e=>setForm(p=>p?{...p,deskripsi:e.target.value}:p)} rows={3} className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all resize-none"/></div>
        <div className="flex gap-3 pt-1">
          <button onClick={()=>onSave(form)} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"><IcSave size={14}/> Simpan</button>
          <button onClick={onClose} className="px-4 py-2.5 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">Batal</button>
        </div>
      </div>
    </Modal>
  );
}
