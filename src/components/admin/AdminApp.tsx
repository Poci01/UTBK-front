import { useState } from "react";
import { AppLogo, IcDashboard, IcFileText, IcHelp, IcBar, IcSettings, IcMenu, IcSearch, IcSun, IcMoon } from "@/components/icons";
import { NotifDropdown } from "@/components/common/NotifDropdown";
import { ProfileDropdown } from "@/components/common/ProfileDropdown";
import { ToastContainer, useToast } from "@/components/common/Toast";
import { AdminDashboard } from "./AdminDashboard";
import { AdminKelolaTryout } from "./AdminKelolaTryout";
import { AdminKelolaSoal } from "./AdminKelolaSoal";
import { AdminLaporan } from "./AdminLaporan";
import { AdminPengaturan } from "./AdminPengaturan";
import type { Role } from "@/types";

export function AdminApp({ dark, setDark, onSwitchRole, onLogout }: {
  dark: boolean;
  setDark: (v: boolean) => void;
  onSwitchRole: (r: Role) => void;
  onLogout: () => void;
}) {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [visibleAlerts, setVisibleAlerts] = useState([0,1,2]);
  const { toasts, push: toast, remove } = useToast();
  const dismissAlert = (i: number) => setVisibleAlerts(p=>p.filter(x=>x!==i));

  const navItems = [
    {id:"dashboard", label:"Dashboard",     icon:IcDashboard},
    {id:"tryout",    label:"Kelola Tryout",  icon:IcFileText, badge:3},
    {id:"soal",      label:"Kelola Soal",    icon:IcHelp},
    {id:"laporan",   label:"Laporan",        icon:IcBar},
  ];

  return (
    <div className="flex h-full bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      <aside className={`flex flex-col shrink-0 transition-all duration-300 overflow-hidden ${sidebarOpen?"w-60":"w-16"} bg-[#1e1b4b] dark:bg-[#0f0e2a]`}>
        <div className="flex items-center gap-3 px-4 py-5 border-b border-white/10">
          <div className="shrink-0"><AppLogo size={32}/></div>
          {sidebarOpen && <span className="font-bold text-white text-sm tracking-tight whitespace-nowrap">UTBK<span className="text-indigo-400">Pro</span></span>}
        </div>
        <nav className="flex-1 py-4 space-y-1 px-2">
          {navItems.map(item=>{const Icon=item.icon;return(
            <button key={item.id} onClick={()=>setActive(item.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group relative ${active===item.id?"nav-active":"text-slate-400 hover:text-white hover:bg-white/8"}`}>
              <Icon size={18} className={`shrink-0 ${active===item.id?"text-indigo-400":"text-slate-500 group-hover:text-white"}`}/>
              {sidebarOpen && <span className="truncate">{item.label}</span>}
              {sidebarOpen && item.badge && <span className="ml-auto bg-indigo-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">{item.badge}</span>}
              {!sidebarOpen && item.badge && <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full"/>}
            </button>
          );})}
        </nav>
        <div className="px-2 pb-4 border-t border-white/10 pt-4">
          <button onClick={()=>setActive("pengaturan")} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${active==="pengaturan"?"nav-active":"text-slate-500 hover:text-white hover:bg-white/8"}`}>
            <IcSettings size={18} className="shrink-0"/>{sidebarOpen && <span>Pengaturan</span>}
          </button>
        </div>
      </aside>
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <header className="flex items-center gap-4 px-6 py-3.5 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <button onClick={()=>setSidebarOpen(v=>!v)} className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"><IcMenu size={20}/></button>
          <div className="flex items-center gap-2 flex-1 max-w-sm bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2">
            <IcSearch size={15} className="text-slate-400 shrink-0"/>
            <input type="text" placeholder="Cari tryout, soal..." className="bg-transparent text-sm text-slate-700 dark:text-slate-300 placeholder-slate-400 outline-none w-full" onKeyDown={e=>{if(e.key==="Enter") toast("info","Fitur search global segera hadir!");}}/>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button onClick={()=>setDark(!dark)} className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" title={dark?"Light Mode":"Dark Mode"}>{dark?<IcSun size={17}/>:<IcMoon size={17}/>}</button>
            <NotifDropdown role="admin"/>
            <ProfileDropdown role="admin" onSettings={()=>setActive("pengaturan")} onSwitchRole={onSwitchRole} onLogout={onLogout}/>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto px-6 py-6">
          {active==="dashboard"   && <AdminDashboard alerts={visibleAlerts} dismissAlert={dismissAlert} setActive={setActive} toast={toast}/>}
          {active==="tryout"      && <AdminKelolaTryout toast={toast}/>}
          {active==="soal"        && <AdminKelolaSoal toast={toast}/>}
          {active==="laporan"     && <AdminLaporan toast={toast}/>}
          {active==="pengaturan"  && <AdminPengaturan dark={dark} setDark={setDark}/>}
        </main>
      </div>
      <ToastContainer toasts={toasts} remove={remove}/>
    </div>
  );
}
