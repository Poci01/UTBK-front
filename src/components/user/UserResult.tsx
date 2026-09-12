import { useState } from "react";
import { IcArrowLeft, IcBook, IcChevronDown } from "@/components/icons";
import { soalBank } from "@/data/mockData";
import type { Tryout, ExamResult } from "@/types";

export function UserResult({ result, tryout, onBack }: { result: ExamResult; tryout: Tryout; onBack: () => void }) {
  const questions = soalBank.slice(0, Math.min(soalBank.length, 8));
  const [showPembahasan, setShowPembahasan] = useState(false);
  const grade = result.skor>=750?"A":result.skor>=680?"B":result.skor>=600?"C":"D";
  const gradeColor = {A:"text-emerald-600",B:"text-indigo-600",C:"text-amber-600",D:"text-red-600"}[grade];
  return (
    <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors"><IcArrowLeft size={15}/> Kembali ke Beranda</button>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-center text-white">
          <p className="text-indigo-200 text-sm mb-2">Hasil Ujian</p>
          <h2 className="text-base font-semibold mb-4">{tryout.nama}</h2>
          <div className={`text-6xl font-bold ${gradeColor} bg-white rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-4`}>{grade}</div>
          <p className="text-4xl font-bold">{result.skor}</p><p className="text-indigo-200 text-sm mt-1">Skor Akhir</p>
        </div>
        <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-800">
          {[{label:"Benar",value:result.benar,cls:"text-emerald-600"},{label:"Salah",value:result.salah,cls:"text-red-500"},{label:"Kosong",value:result.kosong,cls:"text-slate-500"}].map(s=><div key={s.label} className="text-center py-5"><p className={`text-2xl font-bold ${s.cls}`}>{s.value}</p><p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.label}</p></div>)}
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
        <div className="flex items-center justify-between mb-2"><p className="text-sm font-medium text-slate-700 dark:text-slate-300">Akurasi Jawaban</p><p className="text-sm font-bold text-slate-900 dark:text-white">{Math.round(result.benar/questions.length*100)}%</p></div>
        <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
          <div className="h-full bg-emerald-500 rounded-full transition-all" style={{width:`${result.benar/questions.length*100}%`}}/>
          <div className="h-full bg-red-400" style={{width:`${result.salah/questions.length*100}%`}}/>
        </div>
        <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"/>Benar {result.benar}</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400"/>Salah {result.salah}</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-300"/>Kosong {result.kosong}</span>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <button onClick={()=>setShowPembahasan(v=>!v)} className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <span className="flex items-center gap-2"><IcBook size={15} className="text-indigo-500"/> Lihat Pembahasan Soal ({questions.length} soal)</span>
          <IcChevronDown size={15} className={`text-slate-400 transition-transform ${showPembahasan?"rotate-180":""}`}/>
        </button>
        {showPembahasan && <div className="border-t border-slate-100 dark:border-slate-800 p-6 space-y-4">
          {questions.map((q,i)=>{
            const userAns = result.answers[i];
            const correct = userAns===q.jawaban;
            const unanswered = userAns===undefined;
            return (
              <div key={i} className={`rounded-xl border p-4 ${correct?"border-emerald-200 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-800":unanswered?"border-slate-200 dark:border-slate-700":"border-red-200 bg-red-50 dark:bg-red-950/30 dark:border-red-800"}`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${correct?"bg-emerald-500 text-white":unanswered?"bg-slate-300 dark:bg-slate-700 text-slate-600":"bg-red-500 text-white"}`}>{i+1}</span>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed">{q.pertanyaan}</p>
                </div>
                <div className="flex items-center gap-3 ml-9 mb-2 text-xs">
                  {!unanswered && <span className={correct?"text-emerald-700 dark:text-emerald-400":"text-red-600 dark:text-red-400"}>Jawabanmu: <strong>{String.fromCharCode(65+userAns)}</strong></span>}
                  {!correct && <span className="text-emerald-700 dark:text-emerald-400">Jawaban benar: <strong>{String.fromCharCode(65+q.jawaban)}</strong></span>}
                  {unanswered && <span className="text-slate-500">Tidak dijawab</span>}
                </div>
                <div className="ml-9 bg-white/60 dark:bg-slate-800/60 rounded-lg p-3"><p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-0.5">Pembahasan</p><p className="text-xs text-slate-600 dark:text-slate-400">{q.pembahasan}</p></div>
              </div>
            );
          })}
        </div>}
      </div>
      <button onClick={onBack} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm">Kembali ke Beranda</button>
    </div>
  );
}
