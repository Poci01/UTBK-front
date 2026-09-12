import { useState, useRef, useEffect } from "react";
import { Modal } from "@/components/common/Modal";
import { IcInfo, IcCheckSm, IcPlus } from "@/components/icons";
import { pdfExtractedSample, statusColor } from "@/data/mockData";

export function PDFImportModal({ open, onClose, onImport }: { open: boolean; onClose: () => void; onImport: (n: number) => void }) {
  const [step, setStep] = useState<"upload"|"processing"|"review">("upload");
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const [stage, setStage] = useState("");
  const [selected, setSelected] = useState<Set<number>>(new Set([0,1,2]));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) { setTimeout(()=>{setStep("upload");setProgress(0);setFileName("");setSelected(new Set([0,1,2]));}, 300); }
  }, [open]);

  const startProcess = (name: string) => {
    setFileName(name);
    setStep("processing");
    setProgress(0);
    const stages: [number, string][] = [
      [300,"Membaca struktur PDF..."],
      [1000,"Mendeteksi soal dan pilihan jawaban..."],
      [1800,"Menganalisis konteks dengan AI..."],
      [2600,"Memvalidasi kunci jawaban..."],
      [3200,"Selesai — 3 soal ditemukan"],
    ];
    stages.forEach(([delay, msg], idx) => {
      setTimeout(()=>{ setStage(msg); setProgress(Math.round(((idx+1)/stages.length)*100)); }, delay);
    });
    setTimeout(()=>setStep("review"), 3500);
  };

  const toggleSelect = (i: number) => setSelected(p=>{const n=new Set(p);n.has(i)?n.delete(i):n.add(i);return n;});

  return (
    <Modal open={open} onClose={onClose} title="Import Soal dari PDF via AI" size="lg">
      {step==="upload" && (
        <div className="space-y-5">
          <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-800 rounded-xl p-4 flex items-start gap-3">
            <IcInfo size={16} className="text-indigo-500 shrink-0 mt-0.5"/>
            <div className="text-xs text-indigo-700 dark:text-indigo-300 leading-relaxed">
              <strong>AI akan otomatis mengekstrak soal</strong> dari PDF kamu — pertanyaan, pilihan jawaban, dan kunci jawaban akan terdeteksi secara cerdas. Format yang didukung: PDF soal UTBK, naskah tryout, atau dokumen bank soal standar.
            </div>
          </div>
          <input ref={inputRef} type="file" accept=".pdf" className="hidden" onChange={e=>{ const f=e.target.files?.[0]; if(f) startProcess(f.name); }}/>
          <button onClick={()=>inputRef.current?.click()}
            className="w-full border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl py-12 flex flex-col items-center gap-3 hover:border-indigo-400 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 transition-all cursor-pointer group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-indigo-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15l3-3 3 3"/></svg>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Klik untuk upload PDF</p>
              <p className="text-xs text-slate-400 mt-0.5">atau drag &amp; drop file ke sini</p>
            </div>
            <span className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">PDF hingga 50MB</span>
          </button>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[{n:"Deteksi Otomatis",d:"Soal, pilihan, & jawaban"},{n:"Multi-format",d:"Teks, tabel, list"},{n:"Review Dulu",d:"Cek sebelum simpan"}].map(s=>(
              <div key={s.n} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{s.n}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {step==="processing" && (
        <div className="py-8 space-y-6 text-center">
          <div className="relative w-20 h-20 mx-auto">
            <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" strokeWidth="6"/>
              <circle cx="40" cy="40" r="34" fill="none" stroke="#6366f1" strokeWidth="6" strokeLinecap="round"
                strokeDasharray={`${2*Math.PI*34}`} strokeDashoffset={`${2*Math.PI*34*(1-progress/100)}`} style={{transition:"stroke-dashoffset 0.4s ease"}}/>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{progress}%</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-white">{fileName}</p>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-2 animate-pulse">{stage||"Memulai analisis..."}</p>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500" style={{width:`${progress}%`}}/>
          </div>
          <p className="text-xs text-slate-400">Mohon tunggu, AI sedang memproses dokumen kamu...</p>
        </div>
      )}

      {step==="review" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Soal Berhasil Diekstrak</p>
              <p className="text-xs text-slate-500 mt-0.5">Dari: <span className="font-medium">{fileName}</span> · {pdfExtractedSample.length} soal ditemukan</p>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400 px-2.5 py-1 rounded-full flex items-center gap-1"><IcCheckSm size={12}/> AI Selesai</span>
          </div>
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {pdfExtractedSample.map((s, i) => (
              <div key={i} onClick={()=>toggleSelect(i)} className={`rounded-xl border p-4 cursor-pointer transition-all ${selected.has(i)?"border-indigo-300 bg-indigo-50/60 dark:bg-indigo-950/30 dark:border-indigo-700":"border-slate-200 dark:border-slate-700 opacity-60"}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${selected.has(i)?"border-indigo-500 bg-indigo-500":"border-slate-300 dark:border-slate-600"}`}>
                    {selected.has(i)&&<IcCheckSm size={11} className="text-white"/>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColor[s.tingkat]}`}>{s.tingkat}</span>
                      <span className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">{s.mapel}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed line-clamp-2">{s.pertanyaan}</p>
                    <p className="text-xs text-slate-400 mt-1">Jawaban: <strong className="text-emerald-600">{String.fromCharCode(65+s.jawaban)}</strong> — {s.opsi[s.jawaban]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 pt-1">
            <button onClick={()=>setStep("upload")} className="px-4 py-2.5 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">Upload Ulang</button>
            <button onClick={()=>{onImport(selected.size);onClose();}} disabled={selected.size===0} className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"><IcPlus size={14}/> Tambahkan {selected.size} Soal ke Bank</button>
          </div>
        </div>
      )}
    </Modal>
  );
}
