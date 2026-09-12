import { useState } from "react";
import { Modal } from "@/components/common/Modal";
import { IcAlert, IcFlag } from "@/components/icons";

export function ReportModal({ open, onClose, soalNum, onSubmit }: { open: boolean; onClose: () => void; soalNum: number; onSubmit: () => void }) {
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const categories = ["Teks soal salah ketik / typo","Pilihan jawaban tidak lengkap","Kunci jawaban salah","Gambar/grafik tidak muncul","Soal tidak jelas / ambigu","Pembahasan tidak sesuai","Lainnya"];
  return (
    <Modal open={open} onClose={onClose} title={`Laporkan Soal No. ${soalNum}`} size="sm">
      <div className="space-y-4">
        <div className="flex items-start gap-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-800 rounded-xl p-3">
          <IcAlert size={15} className="text-amber-500 shrink-0 mt-0.5"/>
          <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">Laporan akan diteruskan ke tim admin untuk ditindaklanjuti. Terima kasih sudah membantu meningkatkan kualitas soal!</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Jenis Masalah</label>
          <div className="space-y-2">
            {categories.map(c=>(
              <label key={c} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border cursor-pointer transition-all ${category===c?"border-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 dark:border-indigo-700":"border-slate-200 dark:border-slate-700 hover:border-slate-300"}`}>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${category===c?"border-indigo-500 bg-indigo-500":"border-slate-300 dark:border-slate-600"}`}>
                  {category===c&&<div className="w-1.5 h-1.5 rounded-full bg-white"/>}
                </div>
                <span className="text-xs text-slate-700 dark:text-slate-300">{c}</span>
                <input type="radio" className="hidden" checked={category===c} onChange={()=>setCategory(c)}/>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Keterangan Tambahan <span className="font-normal text-slate-400">(opsional)</span></label>
          <textarea value={note} onChange={e=>setNote(e.target.value)} rows={2} placeholder="Jelaskan masalah lebih detail..." className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all resize-none"/>
        </div>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">Batal</button>
          <button onClick={()=>{if(!category){alert("Pilih jenis masalah terlebih dahulu");return;}onSubmit();onClose();}} className="flex-1 py-2.5 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-xl transition-colors flex items-center justify-center gap-2"><IcFlag size={13}/> Kirim Laporan</button>
        </div>
      </div>
    </Modal>
  );
}
