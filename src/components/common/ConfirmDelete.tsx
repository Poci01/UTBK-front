import { Modal } from "./Modal";
import { IcTrash } from "@/components/icons";

export function ConfirmDelete({ open, onClose, onConfirm, nama }: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  nama: string;
}) {
  return (
    <Modal open={open} onClose={onClose} title="Konfirmasi Hapus" size="sm">
      <div className="text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center mx-auto"><IcTrash size={24} className="text-red-600 dark:text-red-400"/></div>
        <div><p className="text-sm font-medium text-slate-900 dark:text-white">Hapus data ini?</p><p className="text-xs text-slate-500 dark:text-slate-400 mt-1">"{nama}" akan dihapus permanen.</p></div>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">Batal</button>
          <button onClick={onConfirm} className="flex-1 py-2.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors">Hapus</button>
        </div>
      </div>
    </Modal>
  );
}
