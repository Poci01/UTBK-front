import { useState } from "react";
import { AppLogo, IcSun, IcMoon } from "@/components/icons";
import { NotifDropdown } from "@/components/common/NotifDropdown";
import { ProfileDropdown } from "@/components/common/ProfileDropdown";
import { ToastContainer, useToast } from "@/components/common/Toast";
import { UserHome } from "./UserHome";
import { UserMyTryout } from "./UserMyTryout";
import { UserRanking } from "./UserRanking";
import { UserDetail } from "./UserDetail";
import { UserExam } from "./UserExam";
import { UserResult } from "./UserResult";
import { UserProfile } from "./UserProfile";
import { UserPengaturan } from "./UserPengaturan";
import { UserAllNotif } from "./UserAllNotif";
import type { Role, UserPage, Tryout, ExamResult } from "@/types";

export function UserApp({ dark, setDark, onSwitchRole, onLogout }: {
  dark: boolean;
  setDark: (v: boolean) => void;
  onSwitchRole: (r: Role) => void;
  onLogout: () => void;
}) {
  const { toasts, push: toast, remove } = useToast();
  const [page, setPage] = useState<UserPage>("home");
  const [navPage, setNavPage] = useState<"home"|"mytryout"|"ranking">("home");
  const [selectedTryout, setSelectedTryout] = useState<Tryout|null>(null);
  const [examResult, setExamResult] = useState<ExamResult|null>(null);

  const goDetail = (t: Tryout) => { setSelectedTryout(t); setPage("detail"); };
  const goExam = () => setPage("exam");
  const goResult = (r: ExamResult) => { setExamResult(r); setPage("result"); };
  const goHome = () => { setPage("home"); setNavPage("home"); };
  const goProfile = () => setPage("profile");
  const goSettings = () => setPage("settings");
  const goNotif = () => setPage("notif");

  const isInExam = page === "exam";

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <header className="flex items-center gap-4 px-6 py-3.5 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="flex items-center gap-2 cursor-pointer" onClick={goHome}>
          <AppLogo size={28}/>
          <span className="font-bold text-slate-900 dark:text-white text-sm">UTBK<span className="text-indigo-500">Pro</span></span>
        </div>
        {!isInExam && (
          <nav className="hidden md:flex items-center gap-1 ml-4">
            {([["home","Beranda"],["mytryout","Tryout Saya"],["ranking","Ranking"]] as const).map(([id,label])=>(
              <button key={id} onClick={()=>{setNavPage(id);setPage(id);}} className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${navPage===id&&(page===id||page==="home"&&id==="home")?"bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-medium":"text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`}>{label}</button>
            ))}
          </nav>
        )}
        <div className="ml-auto flex items-center gap-3">
          <button onClick={()=>setDark(!dark)} className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">{dark?<IcSun size={17}/>:<IcMoon size={17}/>}</button>
          {!isInExam && <NotifDropdown role="user" onViewAll={goNotif}/>}
          <ProfileDropdown role="user" onProfile={goProfile} onSettings={goSettings} onSwitchRole={onSwitchRole} onLogout={onLogout}/>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <ToastContainer toasts={toasts} remove={remove}/>
        {page==="home"     && <UserHome onSelectTryout={goDetail}/>}
        {page==="mytryout" && <UserMyTryout/>}
        {page==="ranking"  && <UserRanking/>}
        {page==="detail"   && selectedTryout && <UserDetail tryout={selectedTryout} onBack={goHome} onStart={goExam}/>}
        {page==="exam"     && selectedTryout && <UserExam tryout={selectedTryout} onFinish={goResult} onReport={()=>toast("success","Laporan berhasil dikirim. Terima kasih!")}/>}
        {page==="result"   && examResult && selectedTryout && <UserResult result={examResult} tryout={selectedTryout} onBack={goHome}/>}
        {page==="profile"  && <UserProfile onBack={goHome} toast={toast}/>}
        {page==="settings" && <UserPengaturan onBack={goHome} dark={dark} setDark={setDark} toast={toast}/>}
        {page==="notif"    && <UserAllNotif onBack={goHome}/>}
      </main>
    </div>
  );
}
