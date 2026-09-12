import { IcEye, IcEdit, IcTrash, IcGlobe, IcCopy, IcArchive } from "@/components/icons";
import { MoreMenu } from "@/components/common/MoreMenu";
import { statusColor } from "@/data/mockData";
import type { Tryout } from "@/types";

export function TryoutTable({ rows, onView, onEdit, onDelete, onMore }: {
  rows: Tryout[];
  onView: (t: Tryout) => void;
  onEdit: (t: Tryout) => void;
  onDelete: (t: Tryout) => void;
  onMore: (t: Tryout, action: string) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead><tr className="bg-slate-50 dark:bg-slate-800/50">
          {["ID","Nama Tryout","Kategori","Peserta","Soal","Status","Dibuat","Aksi"].map(h=><th key={h} className="px-5 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">{h}</th>)}
        </tr></thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {rows.map(row=>(
            <tr key={row.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
              <td className="px-5 py-3.5"><span className="font-mono text-xs text-slate-400">{row.id}</span></td>
              <td className="px-5 py-3.5 font-medium text-slate-800 dark:text-slate-200 max-w-xs">{row.nama}</td>
              <td className="px-5 py-3.5"><span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">{row.kategori}</span></td>
              <td className="px-5 py-3.5 text-slate-600 dark:text-slate-400">{row.peserta.toLocaleString()}</td>
              <td className="px-5 py-3.5 text-slate-600 dark:text-slate-400">{row.soal}</td>
              <td className="px-5 py-3.5"><span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColor[row.status]}`}>{row.status}</span></td>
              <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400 whitespace-nowrap text-xs">{row.dibuat}</td>
              <td className="px-5 py-3.5">
                <div className="flex items-center gap-1">
                  <button onClick={()=>onView(row)} className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors" title="Lihat Detail"><IcEye size={14}/></button>
                  <button onClick={()=>onEdit(row)} className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Edit"><IcEdit size={14}/></button>
                  <button onClick={()=>onDelete(row)} className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors" title="Hapus"><IcTrash size={14}/></button>
                  <MoreMenu actions={[
                    {label:"Publikasikan", icon:<IcGlobe size={13}/>,   onClick:()=>onMore(row,"publish")},
                    {label:"Duplikat",     icon:<IcCopy size={13}/>,    onClick:()=>onMore(row,"duplicate")},
                    {label:"Arsipkan",     icon:<IcArchive size={13}/>, onClick:()=>onMore(row,"archive")},
                    {label:"Hapus",        icon:<IcTrash size={13}/>,   onClick:()=>onDelete(row), danger:true},
                  ]}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
