import { useState, useEffect, useCallback } from "react";
import { IcClock, IcFlag, IcAlert, IcArrowLeft, IcChevronRight } from "@/components/icons";
import { Modal } from "@/components/common/Modal";
import { ReportModal } from "@/components/admin/ReportModal";
import { soalBank, statusColor } from "@/data/mockData";
import type { Tryout, ExamResult } from "@/types";

export function UserExam({ tryout, onFinish, onReport }: {
  tryout: Tryout;
  onFinish: (r: ExamResult) => void;
  onReport: () => void;
}) {
  const questions = soalBank.slice(0, Math.min(soalBank.length, 8));
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number,number>>({});
  const [timeLeft, setTimeLeft] = useState(tryout.durasi * 60);
  const [showConfirm, setShowConfirm] = useState(false);
  const [raguragu, setRaguragu] = useState<Set<number>>(new Set());
  const [reportOpen, setReportOpen] = useState(false);

  const handleFinish = useCallback(() => {
    const benar = questions.filter((q,i)=>answers[i]===q.jawaban).length;
    const kosong = questions.filter((_,i)=>answers[i]===undefined).length;
    const salah = questions.length - benar - kosong;
    const skor = Math.max(0, Math.round((benar*4-salah*1)/(questions.length*4)*1000));
    onFinish({skor,benar,salah,kosong,answers});
  }, [answers,questions,onFinish]);

  useEffect(() => {
    const t = setInterval(()=>setTimeLeft(p=>{if(p<=1){clearInterval(t);handleFinish();return 0;}return p-1;}),1000);
    return () => clearInterval(t);
  }, [handleFinish]);

  const mm = String(Math.floor(timeLeft/60)).padStart(2,"0");
  const ss = String(timeLeft%60).padStart(2,"0");
  const urgent = timeLeft < 300;
  const q = questions[current];

  const toggleRaguragu = (i: number) => setRaguragu(p=>{const n=new Set(p);n.has(i)?n.delete(i):n.add(i);return n;});

  const getStatus = (i: number) => {
    if (i===current) return "current";
    if (answers[i]!==undefined&&raguragu.has(i)) return "raguragu";
    if (answers[i]!==undefined) return "answered";
    if (raguragu.has(i)) return "raguragu_empty";
    return "empty";
  };
  const btnClass = (i: number) => {
    const s = getStatus(i);
    if (s==="current") return "bg-indigo-600 text-white ring-2 ring-indigo-400";
    if (s==="answered") return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400";
    if (s==="raguragu"||s==="raguragu_empty") return "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400";
    return "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700";
  };

  const answeredCount = Object.keys(answers).length;
  const raguraguCount = raguragu.size;
  const belumCount = questions.length - answeredCount;

  return (
    <div className="flex flex-col h-full">
      <div className={`px-6 py-3 flex items-center gap-4 border-b shrink-0 ${urgent?"bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800":"bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"}`}>
        <div className="flex-1 min-w-0"><p className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate">{tryout.nama}</p></div>
        <div className={`flex items-center gap-2 font-mono font-bold text-lg px-4 py-1.5 rounded-xl ${urgent?"bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400 animate-pulse":"bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"}`}>
          <IcClock size={16}/>{mm}:{ss}
        </div>
        <button onClick={()=>setShowConfirm(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">Selesai &amp; Kumpulkan</button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full">Soal {current+1} / {questions.length}</span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColor[q.tingkat]}`}>{q.tingkat}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">{q.mapel}</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={()=>toggleRaguragu(current)} className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all ${raguragu.has(current)?"bg-orange-100 border-orange-300 text-orange-700 dark:bg-orange-950/60 dark:border-orange-700 dark:text-orange-400":"border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-orange-300 hover:text-orange-600"}`}>
                <IcFlag size={13}/>{raguragu.has(current)?"✓ Ragu-ragu":"Tandai Ragu-ragu"}
              </button>
              <button onClick={()=>setReportOpen(true)} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 hover:border-red-300 hover:text-red-500 transition-all" title="Laporkan soal ini">
                <IcAlert size={13}/> Laporkan
              </button>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
            <p className="text-sm font-medium text-slate-900 dark:text-white leading-relaxed">{q.pertanyaan}</p>
          </div>

          <div className="space-y-3">{q.opsi.map((o,i)=>(
            <button key={i} onClick={()=>setAnswers(p=>({...p,[current]:i}))} className={`w-full flex items-start gap-4 px-5 py-4 rounded-xl border text-left transition-all ${answers[current]===i?"border-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 dark:border-indigo-600":"border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-700 hover:bg-slate-50 dark:hover:bg-slate-800/50"}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${answers[current]===i?"bg-indigo-600 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400"}`}>{String.fromCharCode(65+i)}</span>
              <p className={`text-sm ${answers[current]===i?"text-indigo-800 dark:text-indigo-200 font-medium":"text-slate-700 dark:text-slate-300"}`}>{o}</p>
            </button>
          ))}</div>

          <div className="flex items-center justify-between pt-2">
            <button onClick={()=>setCurrent(p=>Math.max(0,p-1))} disabled={current===0} className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl disabled:opacity-40 transition-colors"><IcArrowLeft size={15}/> Sebelumnya</button>
            <button onClick={()=>setCurrent(p=>Math.min(questions.length-1,p+1))} disabled={current===questions.length-1} className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl disabled:opacity-40 transition-colors">Berikutnya <IcChevronRight size={15}/></button>
          </div>
        </div>

        <div className="w-52 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 overflow-y-auto shrink-0">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Navigasi Soal</p>
          <div className="grid grid-cols-4 gap-1.5 mb-5">
            {questions.map((_,i)=>(
              <button key={i} onClick={()=>setCurrent(i)} className={`w-full aspect-square rounded-lg text-xs font-bold transition-all ${btnClass(i)}`}>{i+1}</button>
            ))}
          </div>
          <div className="space-y-2 text-xs border-t border-slate-100 dark:border-slate-800 pt-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Keterangan</p>
            {[
              {color:"bg-indigo-600",label:"Sedang dikerjakan"},
              {color:"bg-emerald-100 dark:bg-emerald-950",label:"Sudah dijawab"},
              {color:"bg-orange-100 dark:bg-orange-950",label:"Ragu-ragu"},
              {color:"bg-slate-100 dark:bg-slate-800",label:"Belum dijawab"},
            ].map(s=>(
              <div key={s.label} className="flex items-center gap-2"><span className={`w-4 h-4 rounded ${s.color} shrink-0 border border-slate-200/50`}/><span className="text-slate-500 dark:text-slate-400">{s.label}</span></div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs space-y-1.5">
            <div className="flex justify-between"><span className="text-slate-500">Dijawab</span><span className="font-semibold text-emerald-600">{answeredCount}/{questions.length}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Ragu-ragu</span><span className="font-semibold text-orange-500">{raguraguCount}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Belum</span><span className="font-semibold text-slate-700 dark:text-slate-300">{belumCount}</span></div>
          </div>
        </div>
      </div>

      <ReportModal open={reportOpen} onClose={()=>setReportOpen(false)} soalNum={current+1} onSubmit={onReport}/>

      <Modal open={showConfirm} onClose={()=>setShowConfirm(false)} title="Kumpulkan Jawaban?" size="sm">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2 text-center">
            {[{label:"Dijawab",value:answeredCount,cls:"text-emerald-600"},{label:"Ragu-ragu",value:raguraguCount,cls:"text-orange-500"},{label:"Belum",value:belumCount,cls:"text-amber-600"}].map(s=>(
              <div key={s.label} className="bg-slate-50 dark:bg-slate-800 rounded-xl py-3"><p className={`text-xl font-bold ${s.cls}`}>{s.value}</p><p className="text-xs text-slate-500 mt-0.5">{s.label}</p></div>
            ))}
          </div>
          {raguraguCount>0 && <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-xl px-4 py-3"><p className="text-xs text-orange-700 dark:text-orange-300 flex items-center gap-1.5"><IcFlag size={12}/> Masih ada {raguraguCount} soal yang kamu ragukan. Yakin ingin mengumpulkan?</p></div>}
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">Setelah dikumpulkan, jawaban tidak bisa diubah.</p>
          <div className="flex gap-3">
            <button onClick={()=>setShowConfirm(false)} className="flex-1 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">Lanjut Kerjakan</button>
            <button onClick={handleFinish} className="flex-1 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors">Ya, Kumpulkan</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
