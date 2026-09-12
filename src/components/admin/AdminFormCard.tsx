import { useState } from "react";

export function AdminFormCard({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({nama:"",soal:"",durasi:"",kategori:"Saintek"});
  const handleSubmit = () => {
    if (!form.nama||!form.soal||!form.durasi) { alert("Semua field wajib diisi!"); return; }
    onSubmit();
    setForm({nama:"",soal:"",durasi:"",kategori:"Saintek"});
  };
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
      <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Tambah Tryout Cepat</h2>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">Isi informasi dasar paket tryout.</p>
      <div className="space-y-4">
        <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Nama Paket</label><input value={form.nama} onChange={e=>setForm(p=>({...p,nama:e.target.value}))} placeholder="cth. UTBK Saintek Batch 3" className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"/></div>
        <div className="grid grid-cols-2 gap-3">
          <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Jumlah Soal</label><input type="number" value={form.soal} onChange={e=>setForm(p=>({...p,soal:e.target.value}))} placeholder="80" className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"/></div>
          <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Durasi (menit)</label><input type="number" value={form.durasi} onChange={e=>setForm(p=>({...p,durasi:e.target.value}))} placeholder="105" className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"/></div>
        </div>
        <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Kategori</label><select value={form.kategori} onChange={e=>setForm(p=>({...p,kategori:e.target.value}))} className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"><option>Saintek</option><option>Soshum</option><option>Campuran</option></select></div>
        <div className="flex gap-3 pt-1">
          <button onClick={handleSubmit} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">Simpan Tryout</button>
          <button onClick={()=>setForm({nama:"",soal:"",durasi:"",kategori:"Saintek"})} className="px-4 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">Reset</button>
        </div>
      </div>
    </div>
  );
}
