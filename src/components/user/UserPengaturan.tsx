import { useState } from "react";
import { IcArrowLeft, IcSun, IcBell, IcLock, IcAlert } from "@/components/icons";
import type { ToastItem } from "@/types";

export function UserPengaturan({ onBack, dark, setDark, toast }: { onBack: () => void; dark: boolean; setDark: (v: boolean) => void; toast: (t: ToastItem["type"], m: string) => void }) {
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifPush, setNotifPush] = useState(true);
  const [notifHasil, setNotifHasil] = useState(true);
  const [lang, setLang] = useState("id");
  return (
    <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"><IcArrowLeft size={16}/></button>
        <div><h1 className="text-xl font-bold text-slate-900 dark:text-white">Pengaturan</h1><p className="text-sm text-slate-500 dark:text-slate-400">Atur preferensi akun kamu</p></div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2"><IcSun size={15} className="text-slate-400"/> Tampilan</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <div><p className="text-sm font-medium text-slate-800 dark:text-slate-200">Mode Gelap</p><p className="text-xs text-slate-500">Aktifkan tampilan dark mode</p></div>
            <button onClick={()=>setDark(!dark)} className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${dark?"bg-indigo-600":"bg-slate-200"}`}><span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${dark?"translate-x-5":"translate-x-0"}`}/></button>
          </div>
          <div className="h-px bg-slate-100 dark:bg-slate-800"/>
          <div className="flex items-center justify-between py-2">
            <div><p className="text-sm font-medium text-slate-800 dark:text-slate-200">Bahasa</p><p className="text-xs text-slate-500">Pilih bahasa antarmuka</p></div>
            <select value={lang} onChange={e=>setLang(e.target.value)} className="text-sm px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 outline-none">
              <option value="id">Bahasa Indonesia</option><option value="en">English</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2"><IcBell size={15} className="text-slate-400"/> Notifikasi</h2>
        <div className="space-y-3">
          {[
            {label:"Notifikasi Email",desc:"Kirim ringkasan via email",val:notifEmail,set:setNotifEmail},
            {label:"Notifikasi Push",desc:"Pemberitahuan di browser",val:notifPush,set:setNotifPush},
            {label:"Hasil Tryout",desc:"Notif saat hasil keluar",val:notifHasil,set:setNotifHasil},
          ].map((s,i)=>(
            <div key={i}>
              {i>0 && <div className="h-px bg-slate-100 dark:bg-slate-800 mb-3"/>}
              <div className="flex items-center justify-between">
                <div><p className="text-sm font-medium text-slate-800 dark:text-slate-200">{s.label}</p><p className="text-xs text-slate-500">{s.desc}</p></div>
                <button onClick={()=>s.set(!s.val)} className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${s.val?"bg-indigo-600":"bg-slate-200"}`}><span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${s.val?"translate-x-5":"translate-x-0"}`}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2"><IcLock size={15} className="text-slate-400"/> Keamanan</h2>
        {[{label:"Password Lama",ph:"Masukkan password lama"},{label:"Password Baru",ph:"Minimal 8 karakter"},{label:"Konfirmasi Password",ph:"Ulangi password baru"}].map(f=>(
          <div key={f.label}><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{f.label}</label><input type="password" placeholder={f.ph} className="w-full max-w-sm px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"/></div>
        ))}
        <button onClick={()=>toast("success","Password berhasil diubah!")} className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">Ubah Password</button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-red-100 dark:border-red-900/40 p-6 space-y-3">
        <h2 className="text-sm font-semibold text-red-600 dark:text-red-400 flex items-center gap-2"><IcAlert size={15}/> Zona Bahaya</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">Tindakan berikut bersifat permanen dan tidak dapat dibatalkan.</p>
        <button onClick={()=>toast("error","Fitur hapus akun memerlukan konfirmasi via email.")} className="text-sm font-semibold text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 px-4 py-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors">Hapus Akun Saya</button>
      </div>
    </div>
  );
}
