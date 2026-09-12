import { IcUser, IcShield, IcSun, IcLock } from "@/components/icons";

export function AdminPengaturan({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  return (
    <div className="space-y-6">
      <div><h1 className="text-xl font-bold text-slate-900 dark:text-white">Pengaturan</h1><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Kelola preferensi dan keamanan akun.</p></div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2"><IcUser size={15} className="text-slate-400"/> Profil Admin</h2>
        <div className="flex items-center gap-4"><div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl font-bold">A</div><div><p className="font-semibold text-slate-900 dark:text-white">Admin Utama</p><p className="text-sm text-slate-500">admin@utbkpro.id</p><span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded-full mt-1"><IcShield size={10}/> Super Admin</span></div></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">{[{label:"Nama Lengkap",val:"Admin Utama"},{label:"Email",val:"admin@utbkpro.id"},{label:"No. Telepon",val:"+62 812-3456-7890"},{label:"Institusi",val:"UTBKPro Platform"}].map(f=>(
          <div key={f.label}><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{f.label}</label><input defaultValue={f.val} className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"/></div>
        ))}</div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">Simpan Perubahan</button>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2"><IcSun size={15} className="text-slate-400"/> Tampilan</h2>
        <div className="flex items-center justify-between"><div><p className="text-sm font-medium text-slate-800 dark:text-slate-200">Mode Gelap</p><p className="text-xs text-slate-500">Aktifkan tampilan dark mode</p></div>
        <button onClick={()=>setDark(!dark)} className={`relative w-11 h-6 rounded-full transition-colors ${dark?"bg-indigo-600":"bg-slate-200"}`}><span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${dark?"translate-x-5":"translate-x-0"}`}/></button></div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2"><IcLock size={15} className="text-slate-400"/> Keamanan</h2>
        {[{label:"Password Lama",ph:"Masukkan password lama"},{label:"Password Baru",ph:"Minimal 8 karakter"},{label:"Konfirmasi Password",ph:"Ulangi password baru"}].map(f=>(
          <div key={f.label}><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{f.label}</label><input type="password" placeholder={f.ph} className="w-full max-w-sm px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"/></div>
        ))}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">Ubah Password</button>
      </div>
    </div>
  );
}
