import React from "react";
import * as LucideIcons from "lucide-react";

// 1. Export langsung semua ikon dari lucide-react (menjamin tidak ada yang undefined)
export * from "lucide-react";

// 2. Map ikon dengan awalan "Ic" secara dinamis dan aman
const iconProxy = new Proxy(LucideIcons, {
  get(target: any, prop: string) {
    if (prop in target) return target[prop];
    // Jika dipanggil dengan nama Ic... (misal IcArrowLeft -> ArrowLeft)
    if (prop.startsWith("Ic")) {
      const cleanName = prop.slice(2);
      if (cleanName in target) return target[cleanName];
      // Pemetaan khusus/fallback jika nama berbeda
      if (cleanName === "CheckSm") return target.Check;
      if (cleanName === "CheckSq") return target.CheckSquare;
      if (cleanName === "Trend") return target.TrendingUp;
      if (cleanName === "More") return target.MoreHorizontal;
      if (cleanName === "Arrow") return target.ArrowRight;
    }
    // Default fallback agar komponen tidak bernilai 'undefined' (mencegah layar putih)
    return target.HelpCircle || (() => null);
  },
});

// Alias export untuk kompatibilitas seluruh komponen
export const AppLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <LucideIcons.BookOpen className="w-6 h-6 text-blue-600" {...props} />
);

// Named exports yang sering dipanggil langsung
export const IcArrowLeft = LucideIcons.ArrowLeft;
export const IcArrowRight = LucideIcons.ArrowRight;
export const IcChevronRight = LucideIcons.ChevronRight;
export const IcChevronLeft = LucideIcons.ChevronLeft;
export const IcChevronDown = LucideIcons.ChevronDown;
export const IcMenu = LucideIcons.Menu;
export const IcMore = LucideIcons.MoreHorizontal;
export const IcSearch = LucideIcons.Search;
export const IcPlus = LucideIcons.Plus;
export const IcTrash = LucideIcons.Trash2;
export const IcEdit = LucideIcons.Edit;
export const IcSave = LucideIcons.Save;
export const IcUpload = LucideIcons.Upload;
export const IcDownload = LucideIcons.Download;
export const IcEye = LucideIcons.Eye;
export const IcCopy = LucideIcons.Copy;
export const IcArchive = LucideIcons.Archive;
export const IcCheck = LucideIcons.CheckCircle;
export const IcCheckSm = LucideIcons.Check;
export const IcCheckSq = LucideIcons.CheckSquare;
export const IcAlert = LucideIcons.AlertCircle;
export const IcInfo = LucideIcons.Info;
export const IcX = LucideIcons.X;
export const IcStar = LucideIcons.Star;
export const IcFlag = LucideIcons.Flag;
export const IcPlay = LucideIcons.Play;
export const IcClock = LucideIcons.Clock;
export const IcLock = LucideIcons.Lock;
export const IcTrophy = LucideIcons.Trophy;
export const IcTrend = LucideIcons.TrendingUp;
export const IcGlobe = LucideIcons.Globe;
export const IcBook = LucideIcons.BookOpen;
export const IcBookOpen = LucideIcons.BookOpen;
export const IcDashboard = LucideIcons.LayoutDashboard;
export const IcFileText = LucideIcons.FileText;
export const IcHelp = LucideIcons.HelpCircle;
export const IcBar = LucideIcons.BarChart2;
export const IcSettings = LucideIcons.Settings;
export const IcSun = LucideIcons.Sun;
export const IcMoon = LucideIcons.Moon;
export const IcBell = LucideIcons.Bell;
export const IcUser = LucideIcons.User;
export const IcUsers = LucideIcons.Users;
export const IcShield = LucideIcons.Shield;
export const IcLogout = LucideIcons.LogOut;
export const IcArrow = LucideIcons.ArrowRight;

export const Icons = iconProxy;
export type Icon = keyof typeof LucideIcons;