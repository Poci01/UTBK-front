import { Modal } from "@/components/common/Modal";
import { IcBook } from "@/components/icons";
import type { Tryout } from "@/types";

export function ViewTryoutModal({ item, onClose }: { item: Tryout | null; onClose: () => void }) {
  return (
    <Modal open={!!item} onClose={onClose} title="Detail Tryout" size="md">
      {item && <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center shrink-0"><IcBook size={22} className="text-indigo-600 dark:text-indigo-400"/></div>
          <div><p className="font-semibold text-slate-900 dark:text-white">{item.nama}</p><p className="text-xs text-slate-500 mt-0.5">{item.id} · Dibuat {item.dibuat}</p></div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.deskripsi}</p>
        <div className="grid grid-cols-2 gap-3">
          {[["Status",item.status],["Kategori",item.kategori],["Jumlah Soal",`${item.soal} soal`],["Durasi",`${item.durasi} menit`],["Total Peserta",item.peserta.toLocaleString()],["Tanggal Dibuat",item.dibuat]].map(([k,v])=>(
            <div key={k} className="bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3"><p className="text-xs text-slate-500">{k}</p><p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{v}</p></div>
          ))}
        </div>
      </div>}
    </Modal>
  );
}
