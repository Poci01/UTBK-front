import React from "react";
import * as LucideIcons from "lucide-react";

// Re-export semua ikon lucide standar
export * from "lucide-react";

// 1. Core / Custom Icons
export const AppLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <LucideIcons.BookOpen className="w-6 h-6 text-blue-600" {...props} />
);

// 2. Navigation & Actions
export const IcArrowLeft = LucideIcons.ArrowLeft;
export const IcArrowRight = LucideIcons.ArrowRight;
export const IcChevronRight = LucideIcons.ChevronRight;
export const IcChevronLeft = LucideIcons.ChevronLeft;
export const IcChevronDown = LucideIcons.ChevronDown;
export const IcMenu = LucideIcons.Menu;
export const IcSearch = LucideIcons.Search;
export const IcPlus = LucideIcons.Plus;
export const IcTrash = LucideIcons.Trash2;
export const IcEdit = LucideIcons.Edit;
export const IcUpload = LucideIcons.Upload;
export const IcDownload = LucideIcons.Download;
export const IcEye = LucideIcons.Eye;

// 3. UI Status & Indicators
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

// 4. Admin & User Pages
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

// Universal Object & Type Export
export const Icons = LucideIcons;
export type Icon = keyof typeof LucideIcons;