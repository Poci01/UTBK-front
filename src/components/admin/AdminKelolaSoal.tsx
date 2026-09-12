import { useState } from "react";
import { IcPlus, IcSearch, IcEye, IcEdit, IcTrash, IcCheckSm } from "@/components/icons";
import { Modal } from "@/components/common/Modal";
import { ConfirmDelete } from "@/components/common/ConfirmDelete";
import { Pagination } from "@/components/common/Pagination";
import { AddSoalModal } from "./AddSoalModal";
import { PDFImportModal } from "./PDFImportModal";
import { soalBank, statusColor } from "@/data/mockData";
import type { Soal, ToastItem } from "@/types";

export function AdminKelolaSoal({ toast }: { toast: (t: ToastItem["type"], m: string) => void }) {
  const [rows, setRows] = useState<Soal[]>(soalBank);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filterMapel, setFilterMapel] = useState("Semua");
  const [filterTingkat, setFilterTingkat] = useState("Semua");
  const [addOpen, setAddOpen] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [viewItem, setViewItem] = useState<Soal|null>(null);
  const [editItem, setEditItem] = useState<Soal|null>(null);
  const [editForm, setEditForm] = useState<Soal|null>(null);
  const [deleteItem, setDeleteItem] = useState<Soal|null>(null);
  const perPage = 4;
  const mapels = ["Semua",...Array.from(new Set(soalBank.map(s=>s.mapel)))];
  const filtered = rows.filter(r=>{
    const matchSearch = r.pertanyaan.toLowerCase().includes(search.toLowerCase())||r.id.toLowerCase().includes(search.toLowerCase());
    const matchMapel = filterMapel==="Semua"||r.mapel===filterMapel;
    const matchTingkat = filterTingkat==="Semua"||r.tingkat===filterTingkat;
    return matchSearch&&matchMapel&&matchTingkat;
  });
  const paged = filtered.slice((page-1)*perPage, page*perPage);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div><h1 className="text-xl font-bold text-slate-900 dark:text-white">Kelola Soal</h1><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Tambah, edit, dan hapus bank soal.</p></div>
        <div className="flex items-center gap-2">
          <button onClick={()=>setPdfOpen(true)} className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="M9 15l3-3 3 3"/></svg>
            Import PDF
          </button>
          <button onClick={()=>setAddOpen(true)} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"><IcPlus size={15}/> Tambah Soal</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[{label:"Total Soal",value:rows.length.toLocaleString(),cls:"text-indigo-600 dark:text-indigo-400"},{label:"Soal Aktif",value:(rows.length-3).toLocaleString(),cls:"text-emerald-600 dark:text-emerald-400"},{label:"Soal Draft",value:"3",cls:"text-amber-600 dark:text-amber-400"}].map(s=>(
          <div key={s.label} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800"><p className={`text-2xl font-bold ${s.cls}`}>{s.value}</p><p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</p></div>
        ))}
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex-wrap">
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg px-2.5 py-1.5 flex-1 min-w-40">
            <IcSearch size={13} className="text-slate-400"/><input value={search} onChange={e=>{setSearch(e.target.value);setPage(1);}} placeholder="Cari soal..." className="bg-transparent text-xs text-slate-700 dark:text-slate-300 placeholder-slate-400 outline-none w-full"/>
          </div>
          <select value={filterMapel} onChange={e=>{setFilterMapel(e.target.value);setPage(1);}} className="text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 outline-none">
            {mapels.map(m=><option key={m}>{m}</option>)}
          </select>
          <select value={filterTingkat} onChange={e=>{setFilterTingkat(e.target.value);setPage(1);}} className="text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 outline-none">
            {["Semua","Mudah","Sedang","Sulit"].map(t=><option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-slate-50 dark:bg-slate-800/50">{["ID","Pertanyaan","Mapel","Tingkat","Tryout","Aksi"].map(h=><th key={h} className="px-5 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}</tr></thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {paged.length===0 && <tr><td colSpan={6} className="px-5 py-8 text-center text-sm text-slate-400">Tidak ada soal ditemukan</td></tr>}
              {paged.map(row=>(
                <tr key={row.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="px-5 py-3.5"><span className="font-mono text-xs text-slate-400">{row.id}</span></td>
                  <td className="px-5 py-3.5 max-w-xs"><span className="text-slate-800 dark:text-slate-200 line-clamp-2 text-xs leading-relaxed">{row.pertanyaan}</span></td>
                  <td className="px-5 py-3.5 text-slate-600 dark:text-slate-400 whitespace-nowrap text-xs">{row.mapel}</td>
                  <td className="px-5 py-3.5"><span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColor[row.tingkat]}`}>{row.tingkat}</span></td>
                  <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400 text-xs whitespace-nowrap">{row.tryout}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1">
                      <button onClick={()=>setViewItem(row)} className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"><IcEye size={14}/></button>
                      <button onClick={()=>{setEditItem(row);setEditForm({...row});}} className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><IcEdit size={14}/></button>
                      <button onClick={()=>setDeleteItem(row)} className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"><IcTrash size={14}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination total={filtered.length} page={page} perPage={perPage} setPage={setPage}/>
      </div>

      <AddSoalModal open={addOpen} onClose={()=>setAddOpen(false)} onSave={()=>{setAddOpen(false);toast("success","Soal baru berhasil ditambahkan!");}}/>
      <PDFImportModal open={pdfOpen} onClose={()=>setPdfOpen(false)} onImport={(n)=>toast("success",`${n} soal berhasil ditambahkan dari PDF!`)}/>

      <Modal open={!!viewItem} onClose={()=>setViewItem(null)} title="Detail Soal" size="lg">
        {viewItem && <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColor[viewItem.tingkat]}`}>{viewItem.tingkat}</span>
            <span className="text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">{viewItem.mapel}</span>
            <span className="font-mono text-xs text-slate-400">{viewItem.id}</span>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4"><p className="text-sm font-medium text-slate-900 dark:text-white leading-relaxed">{viewItem.pertanyaan}</p></div>
          <div className="space-y-2">{viewItem.opsi.map((o,i)=>(
            <div key={i} className={`flex items-start gap-3 px-4 py-3 rounded-xl border ${i===viewItem.jawaban?"border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 dark:border-emerald-700":"border-slate-200 dark:border-slate-700"}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i===viewItem.jawaban?"bg-emerald-500 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-600"}`}>{String.fromCharCode(65+i)}</span>
              <p className={`text-sm ${i===viewItem.jawaban?"text-emerald-800 dark:text-emerald-300 font-medium":"text-slate-700 dark:text-slate-300"}`}>{o}</p>
              {i===viewItem.jawaban && <IcCheckSm size={14} className="text-emerald-600 ml-auto"/>}
            </div>
          ))}</div>
          <div className="bg-indigo-50 dark:bg-indigo-950/40 rounded-xl p-4 border border-indigo-100 dark:border-indigo-800">
            <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Pembahasan</p>
            <p className="text-sm text-indigo-800 dark:text-indigo-200">{viewItem.pembahasan}</p>
          </div>
        </div>}
      </Modal>

      <Modal open={!!editItem} onClose={()=>setEditItem(null)} title="Edit Soal" size="lg">
        {editForm && <div className="space-y-4">
          <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Pertanyaan</label>
          <textarea value={editForm.pertanyaan} onChange={e=>setEditForm(p=>p?{...p,pertanyaan:e.target.value}:p)} rows={3} className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all resize-none"/></div>
          <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Pilihan Jawaban</label>
          {editForm.opsi.map((o,i)=>(
            <div key={i} className="flex items-center gap-2 mb-2">
              <span onClick={()=>setEditForm(p=>p?{...p,jawaban:i}:p)} className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 cursor-pointer ${editForm.jawaban===i?"bg-emerald-500 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-600 hover:bg-slate-300"}`}>{String.fromCharCode(65+i)}</span>
              <input value={o} onChange={e=>{const opsi=[...editForm.opsi];opsi[i]=e.target.value;setEditForm(p=>p?{...p,opsi}:p);}} className="flex-1 px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all"/>
            </div>
          ))}</div>
          <div><label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Pembahasan</label>
          <textarea value={editForm.pembahasan} onChange={e=>setEditForm(p=>p?{...p,pembahasan:e.target.value}:p)} rows={2} className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all resize-none"/></div>
          <div className="flex gap-3">
            <button onClick={()=>{setRows(p=>p.map(r=>r.id===editForm.id?editForm:r));setEditItem(null);toast("success","Soal berhasil diperbarui!");}} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">Simpan</button>
            <button onClick={()=>setEditItem(null)} className="px-4 py-2.5 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors">Batal</button>
          </div>
        </div>}
      </Modal>
      <ConfirmDelete open={!!deleteItem} onClose={()=>setDeleteItem(null)} nama={deleteItem?.id||""} onConfirm={()=>{setRows(p=>p.filter(r=>r.id!==deleteItem?.id));setDeleteItem(null);toast("success","Soal berhasil dihapus!");}}/>
    </div>
  );
}
