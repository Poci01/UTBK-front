import React, { useState } from "react";
import { Role } from "@/types";
import { Icons } from "@/components/icons";

interface LoginPageProps {
  onLogin: (role: Role) => void;
  dark: boolean;
  setDark: (val: boolean) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin, dark, setDark }) => {
  const [selectedRole, setSelectedRole] = useState<Role>("user");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col justify-center items-center p-4 transition-colors">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:opacity-80 transition"
        >
          {dark ? <Icons.Sun className="w-5 h-5" /> : <Icons.Moon className="w-5 h-5" />}
        </button>
      </div>

      <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-600 rounded-xl text-white">
            <Icons.BookOpen className="w-8 h-8" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">Simulasi UTBK SNBT 2026</h2>
        <p className="text-sm text-center text-slate-500 dark:text-slate-400 mb-6">
          Pilih role untuk masuk ke platform simulasi
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setSelectedRole("user")}
            className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition ${
              selectedRole === "user"
                ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
                : "border-slate-200 dark:border-slate-700 hover:border-slate-300"
            }`}
          >
            <Icons.User className="w-6 h-6" />
            <span className="font-semibold text-sm">Siswa / Peserta</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedRole("admin")}
            className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition ${
              selectedRole === "admin"
                ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
                : "border-slate-200 dark:border-slate-700 hover:border-slate-300"
            }`}
          >
            <Icons.Shield className="w-6 h-6" />
            <span className="font-semibold text-sm">Administrator</span>
          </button>
        </div>

        <button
          onClick={() => onLogin(selectedRole)}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
        >
          Masuk Sekarang <Icons.ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};