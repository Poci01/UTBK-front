import React from "react";
import {
  LayoutDashboard,
  FileText,
  HelpCircle,
  BarChart2,
  Settings,
  Menu,
  Search,
  Sun,
  Moon,
  BookOpen,
  Users,
  CheckCircle,
  Clock,
  Award,
  LogOut,
  Plus,
  Trash2,
  Edit,
  Upload,
  Download,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Shield,
  User,
  AlertCircle,
  X,
  Check,
  Eye,
  ArrowRight,
  Sparkles,
  FileUp,
  BrainCircuit,
  Bell,
  Info
} from "lucide-react";

// Named Exports komponen ikon untuk Admin & UI Components
export const AppLogo = (props: React.SVGProps<SVGSVGElement>) => <BookOpen className="w-6 h-6 text-blue-600" {...props} />;
export const IcDashboard = LayoutDashboard;
export const IcFileText = FileText;
export const IcHelp = HelpCircle;
export const IcBar = BarChart2;
export const IcSettings = Settings;
export const IcMenu = Menu;
export const IcSearch = Search;
export const IcSun = Sun;
export const IcMoon = Moon;
export const IcBell = Bell;
export const IcUser = User;
export const IcUsers = Users;
export const IcShield = Shield;
export const IcLogout = LogOut;
export const IcChevronDown = ChevronDown;
export const IcChevronRight = ChevronRight;
export const IcChevronLeft = ChevronLeft;
export const IcCheckSm = Check;
export const IcCheck = CheckCircle;
export const IcAlert = AlertCircle;
export const IcInfo = Info;
export const IcX = X;
export const IcPlus = Plus;
export const IcTrash = Trash2;
export const IcEdit = Edit;
export const IcUpload = Upload;
export const IcDownload = Download;
export const IcEye = Eye;

// Named Exports Objek Icons Universal
export const Icons = {
  BookOpen,
  Users,
  CheckCircle,
  FileText,
  Clock,
  Award,
  BarChart2,
  Settings,
  Bell,
  LogOut,
  Plus,
  Trash2,
  Edit,
  Upload,
  Download,
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Sun,
  Moon,
  Shield,
  User,
  AlertCircle,
  X,
  Check,
  Eye,
  ArrowRight,
  Sparkles,
  HelpCircle,
  FileUp,
  BrainCircuit,
  Info,
};

export type Icon = keyof typeof Icons;