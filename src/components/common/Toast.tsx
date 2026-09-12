import { useState, useCallback } from "react";
import { IcCheckSm, IcAlert, IcInfo, IcX } from "@/components/icons";
import type { ToastItem } from "@/types";

let toastId = 0;

export function ToastContainer({ toasts, remove }: { toasts: ToastItem[]; remove: (id: number) => void }) {
  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2 pointer-events-none">
      {toasts.map(t => {
        const s = {
          success: { wrap:"bg-emerald-600", icon:<IcCheckSm size={15} className="text-white"/> },
          error:   { wrap:"bg-red-600",     icon:<IcAlert size={15} className="text-white"/> },
          info:    { wrap:"bg-indigo-600",   icon:<IcInfo size={15} className="text-white"/> },
        }[t.type];
        return (
          <div key={t.id} className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg text-white text-sm font-medium pointer-events-auto ${s.wrap}`} style={{minWidth:260}}>
            {s.icon}<span className="flex-1">{t.message}</span>
            <button onClick={()=>remove(t.id)} className="opacity-70 hover:opacity-100"><IcX size={13}/></button>
          </div>
        );
      })}
    </div>
  );
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const push = useCallback((type: ToastItem["type"], message: string) => {
    const id = ++toastId;
    setToasts(p => [...p, { id, type, message }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3500);
  }, []);
  const remove = useCallback((id: number) => setToasts(p => p.filter(t => t.id !== id)), []);
  return { toasts, push, remove };
}
