import { useState } from "react";
import { IcArrowLeft, IcEdit, IcCheckSm, IcSave } from "@/components/icons";
import type { ToastItem } from "@/types";

export function UserProfile({ onBack, toast }: { onBack: () => void; toast: (t: ToastItem["type"], m: string) => void }) {
  const [form, setForm] = useState({ nama:"Budi Santoso", email:"budi@email.com", telepon:"+62 812-9876-5432", sekolah:"SMAN 4 Semarang", kelas:"XII IPA 2", targetPTN:"Universitas Indonesia" });
  const [saved, setSaved] = useState(false);
  const handleSave = () => { setSaved(true); toast("success","Profil berhasil disimpan!"); setTimeout(()=>setSaved(false),2000); };
  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"><IcArrowLeft size={16}/></button>
        <div><h1 className="text-xl font-bold text-slate-900 dark:text-white">Profil Saya</h1><p className="text-sm text-slate-500 dark:text-slate-400">Kelola informasi akun kamu</p></div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none">{form.nama[0]}</div>
            <button className="absolute -bottom-1.5 -right-1.5 w-7 h-7 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-500 hover:text-indigo-600 transition-colors shadow-sm"><IcEdit size={12}/></button>
          </div>
          <div>
            <p className="font-semibold text-slate-900 dark:text-white text-lg">{form.nama}</p>
            <p className="text-sm text-slate-500">{form.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full"><IcCheckSm size={10}/> Peserta Aktif</span>
              <span className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">Bergabung Jan 2025</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[{label:"Tryout Selesai",v:"2",c:"text-indigo-600 dark:text-indigo-400"},{label:"Skor Terbaik",v:"698",c:"text-emerald-600 dark:text-emerald-400"},{label:"Peringkat",v:"#5",c:"text-violet-600 dark:text-violet-400"}].map(s=>(
          <div key={s.label} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 text-center">
            <p className={`text-2xl font-bold ${s.c}`}>{s.v}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Informasi Pribadi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {([["nama","Nama Lengkap","text"],["email","Email","email"],["telepon","No. Telepon","text"],["sekolah","Asal Sekolah","text"],["kelas","Kelas","text"],["targetPTN","Target PTN","text"]] as const).map(([k,l,t])=>(
            <div key={k}>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{l}</label>
              <input type={t} value={form[k]} onChange={e=>setForm(p=>({...p,[k]:e.target.value}))} className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"/>
            </div>
          ))}
        </div>
        <div className="flex gap-3 pt-1">
          <button onClick={handleSave} className={`flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all ${saved?"bg-emerald-600 text-white":"bg-indigo-600 hover:bg-indigo-700 text-white"}`}>
            {saved?<><IcCheckSm size={14}/> Tersimpan!</>:<><IcSave size={14}/> Simpan Perubahan</>}
          </button>
          <button onClick={onBack} className="px-4 py-2.5 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">Kembali</button>
        </div>
      </div>
    </div>
  );
}
