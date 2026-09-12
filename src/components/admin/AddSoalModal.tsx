import { useState } from "react";
import { Modal } from "@/components/common/Modal";
import { IcCheckSm, IcPlus } from "@/components/icons";
import { tryouts } from "@/data/mockData";

export function AddSoalModal({ open, onClose, onSave }: { open: boolean; onClose: () => void; onSave: () => void }) {
  const [form, setForm] = useState({ pertanyaan:"", mapel:"Matematika", tingkat:"Sedang", tryout:"UTBK Saintek Batch 1", opsi:["","","","",""], jawaban:0, pembahasan:"" });
  return (
    <Modal open={open} onClose={onClose} title="Tambah Soal Baru" size="lg">
      <div className="space-y-4">
        <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Pertanyaan</label>
        <textarea value={form.pertanyaan} onChange={e=>setForm(p=>({...p,pertanyaan:e.target.value}))} rows={3} placeholder="Tuliskan pertanyaan di sini..." className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all resize-none"/></div>
        <div className="grid grid-cols-3 gap-4">
          {[{label:"Mata Pelajaran",key:"mapel",opts:["Matematika","Fisika","Kimia","Biologi","Bahasa Indonesia","Bahasa Inggris","Sejarah","Geografi"]},{label:"Tingkat",key:"tingkat",opts:["Mudah","Sedang","Sulit"]},{label:"Paket Tryout",key:"tryout",opts:tryouts.map(t=>t.nama)}].map(f=>(
            <div key={f.key}><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{f.label}</label>
            <select value={(form as Record<string,unknown>)[f.key] as string} onChange={e=>setForm(p=>({...p,[f.key]:e.target.value}))} className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all">
              {f.opts.map(o=><option key={o}>{o}</option>)}
            </select></div>
          ))}
        </div>
        <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Pilihan Jawaban <span className="text-slate-400 font-normal">(klik huruf untuk tandai jawaban benar)</span></label>
        {form.opsi.map((o,i)=>(
          <div key={i} className="flex items-center gap-2 mb-2">
            <span onClick={()=>setForm(p=>({...p,jawaban:i}))} className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 cursor-pointer transition-colors ${form.jawaban===i?"bg-emerald-500 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-600 hover:bg-slate-300"}`}>{String.fromCharCode(65+i)}</span>
            <input value={o} onChange={e=>{const opsi=[...form.opsi];opsi[i]=e.target.value;setForm(p=>({...p,opsi}));}} placeholder={`Pilihan ${String.fromCharCode(65+i)}`} className="flex-1 px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"/>
            {form.jawaban===i && <IcCheckSm size={15} className="text-emerald-600 shrink-0"/>}
          </div>
        ))}</div>
        <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Pembahasan</label>
        <textarea value={form.pembahasan} onChange={e=>setForm(p=>({...p,pembahasan:e.target.value}))} rows={2} placeholder="Tuliskan pembahasan jawaban..." className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all resize-none"/></div>
        <div className="flex gap-3 pt-1">
          <button onClick={onSave} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"><IcPlus size={14}/> Tambah Soal</button>
          <button onClick={onClose} className="px-4 py-2.5 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">Batal</button>
        </div>
      </div>
    </Modal>
  );
}
