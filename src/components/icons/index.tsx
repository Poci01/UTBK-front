type IP = { size?: number; className?: string };
const ic = (d: string) => ({ size = 16, className = "" }: IP) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d={d} /></svg>
);
const icM = (paths: string[]) => ({ size = 16, className = "" }: IP) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {paths.map((d, i) => <path key={i} d={d} />)}
  </svg>
);

export const IcDashboard = icM(["M3 3h7v7H3z","M14 3h7v7h-7z","M3 14h7v7H3z","M14 14h7v7h-7z"]);
export const IcFileText = icM(["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z","M14 2v6h6","M16 13H8","M16 17H8","M10 9H8"]);
export const IcHelp = icM(["M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z","M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3","M12 17h.01"]);
export const IcBar = icM(["M3 3v18h18","M18 17V9","M13 17V5","M8 17v-3"]);
export const IcSun = icM(["M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z","M12 1v2","M12 21v2","M4.22 4.22l1.42 1.42","M18.36 18.36l1.42 1.42","M1 12h2","M21 12h2","M4.22 19.78l1.42-1.42","M18.36 5.64l1.42-1.42"]);
export const IcMoon = ic("M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z");
export const IcBell = icM(["M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9","M13.73 21a2 2 0 0 1-3.46 0"]);
export const IcSearch = icM(["M21 21l-4.35-4.35","M11 19A8 8 0 1 0 11 3a8 8 0 0 0 0 16z"]);
export const IcChevronDown = ic("M6 9l6 6 6-6");
export const IcChevronRight = ic("M9 18l6-6-6-6");
export const IcMenu = icM(["M3 12h18","M3 6h18","M3 18h18"]);
export const IcX = ic("M18 6L6 18M6 6l12 12");
export const IcTrend = ic("M23 6l-9.5 9.5-5-5L1 18");
export const IcUsers = icM(["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2","M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z","M23 21v-2a4 4 0 0 0-3-3.87","M16 3.13a4 4 0 0 1 0 7.75"]);
export const IcBook = icM(["M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z","M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"]);
export const IcCheck = icM(["M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z","M9 12l2 2 4-4"]);
export const IcCheckSm = ic("M20 6L9 17l-5-5");
export const IcAlert = icM(["M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z","M12 8v4","M12 16h.01"]);
export const IcInfo = icM(["M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z","M12 16v-4","M12 8h.01"]);
export const IcArrow = ic("M7 17L17 7M7 7h10v10");
export const IcMore = icM(["M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z","M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z","M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"]);
export const IcEye = icM(["M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z","M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"]);
export const IcEdit = ic("M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z");
export const IcTrash = icM(["M3 6h18","M19 6l-1 14H6L5 6","M8 6V4h8v2","M10 11v6","M14 11v6"]);
export const IcPlus = ic("M12 5v14M5 12h14");
export const IcSettings = icM(["M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z","M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"]);
export const IcLogout = icM(["M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4","M16 17l5-5-5-5","M21 12H9"]);
export const IcUser = icM(["M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2","M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"]);
export const IcShield = icM(["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"]);
export const IcLock = icM(["M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z","M7 11V7a5 5 0 0 1 10 0v4"]);
export const IcClock = icM(["M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z","M12 6v6l4 2"]);
export const IcStar = ic("M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z");
export const IcAward = icM(["M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z","M8.21 13.89L7 23l5-3 5 3-1.21-9.12"]);
export const IcPlay = ic("M5 3l14 9-14 9V3z");
export const IcCheckSq = icM(["M9 11l3 3L22 4","M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"]);
export const IcArrowLeft = ic("M19 12H5M12 19l-7-7 7-7");
export const IcSave = icM(["M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z","M17 21v-8H7v8","M7 3v5h8"]);
export const IcFlag = icM(["M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z","M4 22v-7"]);
export const IcCopy = icM(["M20 9H11a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z","M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 1 2 2v1"]);
export const IcArchive = icM(["M21 8v13H3V8","M23 3H1v5h22V3z","M10 12h4"]);
export const IcGlobe = icM(["M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z","M2 12h20","M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"]);
export const IcTrophy = icM(["M8 21h8","M12 17v4","M7 4H4a1 1 0 0 0-1 1v3c0 2.21 1.79 4 4 4","M17 4h3a1 1 0 0 1 1 1v3c0 2.21-1.79 4-4 4","M7 4h10v7a5 5 0 0 1-10 0V4z"]);

export function AppLogo({ size = 36 }: { size?: number }) {
  const id = "utbk-grad";
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1"/><stop offset="1" stopColor="#7c3aed"/>
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill={`url(#${id})`}/>
      <path d="M20 11 L11 15.5 L11 29 L20 24.5 Z" fill="white" fillOpacity="0.95"/>
      <path d="M20 11 L29 15.5 L29 29 L20 24.5 Z" fill="white" fillOpacity="0.6"/>
      <line x1="20" y1="11" x2="20" y2="24.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.8"/>
      <circle cx="29" cy="11" r="5.5" fill="#10b981"/>
      <path d="M26.5 11 L28.2 12.8 L31.5 9.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
