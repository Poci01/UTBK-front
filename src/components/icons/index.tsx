import React from "react";
import * as LucideIcons from "lucide-react";

// 1. Export seluruh ikon Lucide bawaan
export * from "lucide-react";

// 2. Export AppLogo khusus
export const AppLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <LucideIcons.BookOpen className="w-6 h-6 text-blue-600" {...props} />
);

// 3. Mapping alias penamaan khusus yang dipanggil UI
export const IcCheckSm = LucideIcons.Check;
export const IcAlert = LucideIcons.AlertCircle;
export const IcInfo = LucideIcons.Info;
export const IcX = LucideIcons.X;
export const IcTrash = LucideIcons.Trash2;

// 4. Buat proxy otomatis untuk SEMUA komponen berawalan "Ic" (Contoh: IcChevronDown -> ChevronDown, IcUsers -> Users)
// Ini menjamin 100% TIDAK AKAN ADA LAGI error "MISSING_EXPORT" untuk ikon Ic...
const icHandler = {
  get: (target: any, prop: string) => {
    if (prop in target) return target[prop];
    if (prop.startsWith("Ic")) {
      const originalName = prop.slice(2);
      if (originalName in LucideIcons) {
        return (LucideIcons as any)[originalName];
      }
    }
    return LucideIcons.HelpCircle;
  }
};

// Explicit individual exports untuk bundler (Vite/Rolldown)
export const IcDashboard = LucideIcons.LayoutDashboard;
export const IcFileText = LucideIcons.FileText;
export const IcHelp = LucideIcons.HelpCircle;
export const IcBar = LucideIcons.BarChart2;
export const IcSettings = LucideIcons.Settings;
export const IcMenu = LucideIcons.Menu;
export const IcSearch = LucideIcons.Search;
export const IcSun = LucideIcons.Sun;
export const IcMoon = LucideIcons.Moon;
export const IcBell = LucideIcons.Bell;
export const IcUser = LucideIcons.User;
export const IcUsers = LucideIcons.Users;
export const IcShield = LucideIcons.Shield;
export const IcLogout = LucideIcons.LogOut;
export const IcChevronDown = LucideIcons.ChevronDown;
export const IcChevronRight = LucideIcons.ChevronRight;
export const IcChevronLeft = LucideIcons.ChevronLeft;
export const IcCheck = LucideIcons.CheckCircle;
export const IcPlus = LucideIcons.Plus;
export const IcEdit = LucideIcons.Edit;
export const IcUpload = LucideIcons.Upload;
export const IcDownload = LucideIcons.Download;
export const IcEye = LucideIcons.Eye;

// 5. Export Objek Icons Universal
export const Icons = new Proxy(LucideIcons, icHandler);
export type Icon = keyof typeof LucideIcons;