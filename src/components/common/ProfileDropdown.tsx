import { useState, useRef, useEffect } from "react";
import { IcChevronDown, IcShield, IcUser, IcSettings, IcUsers, IcLogout } from "@/components/icons";
import type { Role } from "@/types";

export function ProfileDropdown({ role, onProfile, onSettings, onSwitchRole, onLogout }: {
  role: Role;
  onProfile?: () => void;
  onSettings: () => void;
  onSwitchRole: (r: Role) => void;
  onLogout: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const name = role === "admin" ? "Admin Utama" : "Budi Santoso";
  const email = role === "admin" ? "admin@utbkpro.id" : "budi@email.com";

  return (
    <div className="relative" ref={ref}>
      <button onClick={()=>setOpen(v=>!v)} className="flex items-center gap-2.5 pl-3 pr-2 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold ${role==="admin"?"bg-indigo-600":"bg-emerald-600"}`}>{name[0]}</div>
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 hidden sm:block">{name.split(" ")[0]}</span>
        <IcChevronDown size={14} className={`text-slate-400 transition-transform ${open?"rotate-180":""}`}/>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl z-50 py-1.5">
          <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{name}</p>
            <p className="text-xs text-slate-500">{email}</p>
            <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full mt-1.5 ${role==="admin"?"bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400":"bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"}`}>
              <IcShield size={10}/>{role==="admin"?"Super Admin":"Peserta"}
            </span>
          </div>
          <button onClick={()=>{(onProfile??onSettings)();setOpen(false);}} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"><IcUser size={15} className="text-slate-400"/> Profil Saya</button>
          <button onClick={()=>{onSettings();setOpen(false);}} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"><IcSettings size={15} className="text-slate-400"/> Pengaturan</button>
          <div className="border-t border-slate-100 dark:border-slate-800 mt-1 pt-1">
            <button onClick={()=>{onSwitchRole(role==="admin"?"user":"admin");setOpen(false);}} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"><IcUsers size={15}/> Ganti ke {role==="admin"?"Tampilan User":"Tampilan Admin"}</button>
            <button onClick={()=>{onLogout();setOpen(false);}} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"><IcLogout size={15}/> Keluar</button>
          </div>
        </div>
      )}
    </div>
  );
}
