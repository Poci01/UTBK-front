import { IcArrowLeft, IcHelp, IcClock, IcUsers, IcFlag, IcPlay } from "@/components/icons";
import type { Tryout } from "@/types";

export function UserDetail({ tryout, onBack, onStart }: { tryout: Tryout; onBack: () => void; onStart: () => void }) {
  const mapel = ["Matematika","Fisika","Kimia","Biologi","TPS"].slice(0, tryout.kategori==="Saintek"?5:4);
  return (
    <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors"><IcArrowLeft size={15}/> Kembali</button>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 px-6 py-8 text-white">
          <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">{tryout.kategori}</span>
          <h1 className="text-xl font-bold mt-3">{tryout.nama}</h1>
          <p className="text-indigo-200 text-sm mt-2">{tryout.deskripsi}</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-3 gap-4">{[{label:"Jumlah Soal",value:`${tryout.soal} soal`,Icon:IcHelp},{label:"Durasi",value:`${tryout.durasi} menit`,Icon:IcClock},{label:"Peserta",value:tryout.peserta.toLocaleString(),Icon:IcUsers}].map(s=>(
            <div key={s.label} className="text-center bg-slate-50 dark:bg-slate-800 rounded-xl py-4"><s.Icon size={20} className="text-indigo-500 mx-auto mb-2"/><p className="text-lg font-bold text-slate-900 dark:text-white">{s.value}</p><p className="text-xs text-slate-500">{s.label}</p></div>
          ))}</div>
          <div><h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Mata Pelajaran</h3><div className="flex flex-wrap gap-2">{mapel.map(m=><span key={m} className="text-xs font-medium bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-3 py-1.5 rounded-full">{m}</span>)}</div></div>
          <div className="bg-amber-50 dark:bg-amber-950/40 rounded-xl p-4 border border-amber-100 dark:border-amber-800">
            <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1 flex items-center gap-1"><IcFlag size={12}/> Perhatian</p>
            <ul className="text-xs text-amber-700 dark:text-amber-300 space-y-1"><li>• Pastikan koneksi internet stabil sebelum mulai</li><li>• Ujian tidak bisa dijeda setelah dimulai</li><li>• Klik "Selesai" untuk mengumpulkan jawaban</li></ul>
          </div>
          <button onClick={onStart} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-md shadow-indigo-200 dark:shadow-none"><IcPlay size={16}/> Mulai Ujian Sekarang</button>
        </div>
      </div>
    </div>
  );
}
