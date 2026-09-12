export function Pagination({ total, page, perPage, setPage }: { total: number; page: number; perPage: number; setPage: (p: number) => void }) {
  const totalPages = Math.ceil(total / perPage);
  const shown = Math.min(perPage, total - (page - 1) * perPage);
  const pages = Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-100 dark:border-slate-800">
      <p className="text-xs text-slate-500 dark:text-slate-400">Menampilkan {shown} dari {total.toLocaleString()}</p>
      <div className="flex items-center gap-1">
        <button onClick={()=>setPage(Math.max(1, page-1))} disabled={page===1} className="w-7 h-7 rounded-md text-xs text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-colors">‹</button>
        {pages.map(p => <button key={p} onClick={()=>setPage(p)} className={`w-7 h-7 rounded-md text-xs font-semibold transition-colors ${p===page?"bg-indigo-600 text-white":"text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`}>{p}</button>)}
        <button onClick={()=>setPage(Math.min(totalPages, page+1))} disabled={page===totalPages} className="w-7 h-7 rounded-md text-xs text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-colors">›</button>
      </div>
    </div>
  );
}
