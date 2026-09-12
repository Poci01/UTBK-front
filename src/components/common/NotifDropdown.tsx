import { useState, useRef, useEffect } from "react";
import { IcBell } from "@/components/icons";
import { notifAdmin, notifUser } from "@/data/mockData";
import type { Role } from "@/types";

export function NotifDropdown({ role, onViewAll }: { role: Role; onViewAll?: () => void }) {
  const [open, setOpen] = useState(false);
  const [read, setRead] = useState<Set<number>>(new Set());
  const ref = useRef<HTMLDivElement>(null);
  const notifs = role === "admin" ? notifAdmin : notifUser;
  const unreadCount = notifs.filter((n, i) => n.unread && !read.has(i)).length;

  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button onClick={()=>setOpen(v=>!v)} className="w-9 h-9 rounded-lg relative flex items-center justify-center text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
        <IcBell size={17}/>
        {unreadCount > 0 && <span className="absolute top-1 right-1 w-4 h-4 bg-indigo-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">{unreadCount}</span>}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl z-50 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Notifikasi</p>
            <button onClick={()=>setRead(new Set(notifs.map((_,i)=>i)))} className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">Tandai semua dibaca</button>
          </div>
          <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
            {notifs.map((n, i) => (
              <button key={i} onClick={()=>setRead(p=>{const s=new Set(p);s.add(i);return s;})} className={`w-full flex items-start gap-3 px-4 py-3.5 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${n.unread&&!read.has(i)?"bg-indigo-50/50 dark:bg-indigo-950/20":""}`}>
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">{n.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">{n.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">{n.desc}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{n.time}</p>
                </div>
                {n.unread && !read.has(i) && <span className="w-2 h-2 bg-indigo-500 rounded-full mt-1 shrink-0"/>}
              </button>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-800">
            <button onClick={()=>{if(onViewAll){onViewAll();setOpen(false);}}} className="w-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 text-center hover:underline">Lihat semua notifikasi</button>
          </div>
        </div>
      )}
    </div>
  );
}
