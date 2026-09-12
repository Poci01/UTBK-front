import { useState, useRef, useEffect } from "react";
import { IcMore } from "@/components/icons";

export function MoreMenu({ actions }: { actions: { label: string; icon: React.ReactNode; onClick: () => void; danger?: boolean }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button onClick={()=>setOpen(v=>!v)} className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><IcMore size={14}/></button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-44 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg z-40 py-1">
          {actions.map((a, i) => (
            <button key={i} onClick={()=>{a.onClick();setOpen(false);}} className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-medium transition-colors ${a.danger?"text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40":"text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"}`}>
              {a.icon}{a.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
