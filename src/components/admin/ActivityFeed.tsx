export function ActivityFeed() {
  const items = [
    {actor:"Budi Santoso",   action:"menambahkan 20 soal ke",    target:"Simulasi TPS Full-Day",       time:"2 mnt lalu",   color:"bg-indigo-500"},
    {actor:"Admin Utama",    action:"mempublikasikan paket",      target:"UTBK Soshum Intensif Mei",    time:"18 mnt lalu",  color:"bg-emerald-500"},
    {actor:"Rina Dewi",      action:"menghapus soal duplikat di", target:"UTBK Saintek Batch 1",        time:"1 jam lalu",   color:"bg-rose-500"},
    {actor:"Admin Utama",    action:"membuat paket baru",         target:"UTBK Saintek Batch 2 2025",   time:"3 jam lalu",   color:"bg-violet-500"},
    {actor:"Dian Pratiwi",   action:"mengubah durasi",            target:"Tryout Kilat SBMPTN",         time:"5 jam lalu",   color:"bg-amber-500"},
  ];
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
      <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Aktivitas Terbaru</h2>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">Log aksi admin 24 jam terakhir.</p>
      <div className="space-y-4">{items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className={`w-6 h-6 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5`}>{item.actor[0]}</span>
          <div className="flex-1 min-w-0"><p className="text-xs text-slate-700 dark:text-slate-300 leading-snug"><span className="font-semibold">{item.actor}</span> {item.action} <span className="font-medium text-indigo-600 dark:text-indigo-400">{item.target}</span></p><p className="text-xs text-slate-400 mt-0.5">{item.time}</p></div>
        </div>
      ))}</div>
    </div>
  );
}
