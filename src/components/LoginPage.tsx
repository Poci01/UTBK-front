import { useState } from "react";
import { AppLogo, IcCheckSm, IcAlert, IcSun, IcMoon, IcEye, IcLock } from "@/components/icons";
import type { Role, LoginMode } from "@/types";

export function LoginPage({ onLogin, dark, setDark }: { onLogin: (role: Role) => void; dark: boolean; setDark: (v: boolean) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<LoginMode>("admin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const demoAccounts: Record<LoginMode,{email:string;pass:string}> = {
    admin: { email:"admin@utbkpro.id", pass:"admin123" },
    user:  { email:"budi@email.com",   pass:"budi123"  },
  };

  const handleLogin = () => {
    setError("");
    if (!email||!password) { setError("Email dan password wajib diisi."); return; }
    const demo = demoAccounts[mode];
    if (email!==demo.email||password!==demo.pass) { setError("Email atau password salah. Coba akun demo di bawah."); return; }
    setLoading(true);
    setTimeout(()=>{ setLoading(false); onLogin(mode as Role); }, 1000);
  };

  const fillDemo = () => { setEmail(demoAccounts[mode].email); setPassword(demoAccounts[mode].pass); setError(""); };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="hidden lg:flex flex-col justify-between w-[420px] shrink-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 p-10 text-white relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full"/>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/5 rounded-full"/>
        <div className="absolute top-1/2 -right-10 w-40 h-40 bg-indigo-400/20 rounded-full"/>
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <AppLogo size={40}/>
            <span className="text-xl font-bold tracking-tight">UTBK<span className="text-indigo-300">Pro</span></span>
          </div>
        </div>
        <div className="relative z-10 space-y-6">
          <div>
            <h2 className="text-3xl font-bold leading-snug">Platform Tryout<br/>UTBK Terpercaya</h2>
            <p className="text-indigo-200 text-sm mt-3 leading-relaxed">Latihan intensif dengan ribuan soal berkualitas, analitik performa real-time, dan pembahasan mendalam oleh pengajar terbaik.</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[{n:"12.481",l:"Peserta Aktif"},{n:"3.290",l:"Bank Soal"},{n:"98%",l:"Kepuasan"}].map(s=>(
              <div key={s.l} className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                <p className="text-2xl font-bold">{s.n}</p>
                <p className="text-indigo-200 text-xs mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {[{icon:<IcCheckSm size={14}/>,text:"Soal UTBK sesuai standar resmi"},{icon:<IcCheckSm size={14}/>,text:"Timer ujian realistis & anti-curang"},{icon:<IcCheckSm size={14}/>,text:"Pembahasan lengkap setiap soal"}].map((f,i)=>(
              <div key={i} className="flex items-center gap-2.5 text-sm text-indigo-100"><span className="w-5 h-5 rounded-full bg-emerald-500/80 flex items-center justify-center shrink-0">{f.icon}</span>{f.text}</div>
            ))}
          </div>
        </div>
        <div className="relative z-10 text-xs text-indigo-300">© 2025 UTBKPro. Hak cipta dilindungi.</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md space-y-7">
          <div className="flex items-center justify-between lg:hidden">
            <div className="flex items-center gap-2">
              <AppLogo size={32}/>
              <span className="font-bold text-slate-900 dark:text-white">UTBK<span className="text-indigo-500">Pro</span></span>
            </div>
            <button onClick={()=>setDark(!dark)} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">{dark?<IcSun size={16}/>:<IcMoon size={16}/>}</button>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Selamat Datang</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Masuk ke akun UTBKPro kamu</p>
          </div>

          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            {([["admin","Admin Panel"],["user","Peserta"]] as const).map(([r,l])=>(
              <button key={r} onClick={()=>{setMode(r);setError("");setEmail("");setPassword("");}} className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${mode===r?"bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm":"text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"}`}>{l}</button>
            ))}
          </div>

          <div className="space-y-4">
            {error && (
              <div className="flex items-center gap-2.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3">
                <IcAlert size={14} className="text-red-500 shrink-0"/>
                <p className="text-xs text-red-700 dark:text-red-300">{error}</p>
              </div>
            )}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleLogin()} placeholder={demoAccounts[mode].email} className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-300 outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"/>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
              <div className="relative">
                <input type={showPass?"text":"password"} value={password} onChange={e=>setPassword(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleLogin()} placeholder="••••••••" className="w-full px-4 py-3 pr-11 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-300 outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"/>
                <button type="button" onClick={()=>setShowPass(v=>!v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">{showPass?<IcEye size={16}/>:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>}</button>
              </div>
            </div>
            <button onClick={handleLogin} disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-md shadow-indigo-200 dark:shadow-none">
              {loading?<><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Memverifikasi...</>:<><IcLock size={15}/>Masuk ke {mode==="admin"?"Admin Panel":"Akun Saya"}</>}
            </button>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">Akun Demo {mode==="admin"?"Admin":"Peserta"}</p>
              <button onClick={fillDemo} className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Isi Otomatis</button>
            </div>
            <div className="space-y-1 font-mono text-xs text-slate-500 dark:text-slate-400">
              <p>Email: <span className="text-slate-700 dark:text-slate-300">{demoAccounts[mode].email}</span></p>
              <p>Password: <span className="text-slate-700 dark:text-slate-300">{demoAccounts[mode].pass}</span></p>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-between">
            <p className="text-xs text-slate-400">Tampilan</p>
            <button onClick={()=>setDark(!dark)} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors">
              {dark?<IcSun size={14}/>:<IcMoon size={14}/>}{dark?"Light Mode":"Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
