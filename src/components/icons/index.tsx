import React from "react";
import * as LucideIcons from "lucide-react";
import {
  BookOpen,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Menu,
  MoreHorizontal,
  Search,
  Plus,
  Trash2,
  Edit,
  Save,
  Upload,
  Download,
  Eye,
  Copy,
  Archive,
  CheckCircle,
  Check,
  CheckSquare,
  AlertCircle,
  Info,
  X,
  Star,
  Flag,
  Play,
  Clock,
  Lock,
  Trophy,
  TrendingUp,
  Globe,
  LayoutDashboard,
  FileText,
  HelpCircle,
  BarChart2,
  Settings,
  Sun,
  Moon,
  Bell,
  User,
  Users,
  Shield,
  LogOut,
} from "lucide-react";

// 1. Re-export seluruh paket ikon Lucide (termasuk Objek Icons untuk LoginPage)
export * from "lucide-react";
export const Icons = LucideIcons;
export type Icon = keyof typeof LucideIcons;

// 2. Core / Custom Icons
export const AppLogo = ({ size = 24, className = "text-indigo-600", ...props }: { size?: number; className?: string } & React.SVGProps<SVGSVGElement>) => (
  <BookOpen size={size} className={className} {...props} />
);

// 3. Navigation & Actions
export const IcArrow = ArrowRight;
export const IcArrowLeft = ArrowLeft;
export const IcArrowRight = ArrowRight;
export const IcChevronRight = ChevronRight;
export const IcChevronLeft = ChevronLeft;
export const IcChevronDown = ChevronDown;
export const IcMenu = Menu;
export const IcMore = MoreHorizontal;
export const IcSearch = Search;
export const IcPlus = Plus;
export const IcTrash = Trash2;
export const IcEdit = Edit;
export const IcSave = Save;
export const IcUpload = Upload;
export const IcDownload = Download;
export const IcEye = Eye;
export const IcCopy = Copy;
export const IcArchive = Archive;

// 4. UI Status & Indicators
export const IcCheck = CheckCircle;
export const IcCheckSm = Check;
export const IcCheckSq = CheckSquare;
export const IcAlert = AlertCircle;
export const IcInfo = Info;
export const IcX = X;
export const IcStar = Star;
export const IcFlag = Flag;
export const IcPlay = Play;
export const IcClock = Clock;
export const IcLock = Lock;
export const IcTrophy = Trophy;
export const IcTrend = TrendingUp;
export const IcGlobe = Globe;

// 5. Content & Category Icons
export const IcBook = BookOpen;
export const IcBookOpen = BookOpen;

// 6. Admin & User Pages
export const IcDashboard = LayoutDashboard;
export const IcFileText = FileText;
export const IcHelp = HelpCircle;
export const IcBar = BarChart2;
export const IcSettings = Settings;
export const IcSun = Sun;
export const IcMoon = Moon;
export const IcBell = Bell;
export const IcUser = User;
export const IcUsers = Users;
export const IcShield = Shield;
export const IcLogout = LogOut;