import { IcCheck, IcAlert, IcInfo, IcX } from "@/components/icons";

export function AlertBanner({ type, message, onClose }: { type: "success" | "error" | "info"; message: string; onClose: () => void }) {
  const s = {
    success: { wrap:"bg-emerald-50 border-emerald-200 dark:bg-emerald-950/50 dark:border-emerald-800", icon:<IcCheck size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"/>, text:"text-emerald-800 dark:text-emerald-300" },
    error:   { wrap:"bg-red-50 border-red-200 dark:bg-red-950/50 dark:border-red-800",                icon:<IcAlert size={15} className="text-red-600 dark:text-red-400 shrink-0 mt-0.5"/>,       text:"text-red-800 dark:text-red-300" },
    info:    { wrap:"bg-sky-50 border-sky-200 dark:bg-sky-950/50 dark:border-sky-800",               icon:<IcInfo size={15} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5"/>,         text:"text-sky-800 dark:text-sky-300" },
  }[type];
  return (
    <div className={`flex items-start gap-2.5 px-4 py-3 rounded-xl border text-sm ${s.wrap}`}>
      {s.icon}<p className={`flex-1 leading-snug ${s.text}`}>{message}</p>
      <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"><IcX size={13}/></button>
    </div>
  );
}
