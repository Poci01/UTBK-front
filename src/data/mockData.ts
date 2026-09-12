import type { Tryout, Soal, RankingItem, LaporanItem } from "@/types";

export const statusColor: Record<string, string> = {
  Aktif: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  Draft: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  Selesai: "bg-slate-500/10 text-slate-600 border-slate-500/20",
};

export const tryouts: Tryout[] = [
  {
    id: "to-1",
    nama: "Tryout Akbar UTBK SNBT 2026 #1",
    peserta: 1420,
    soal: 155,
    durasi: 195,
    status: "Aktif",
    kategori: "Campuran",
    dibuat: "2026-03-01",
    deskripsi: "Simulasi penuh UTBK SNBT standar TPS, Literasi Bahasa Indonesia, Bahasa Inggris, dan Penalaran Matematika.",
  },
  {
    id: "to-2",
    nama: "Pemantapan Saintek Gelombang 2",
    peserta: 890,
    soal: 80,
    durasi: 120,
    status: "Aktif",
    kategori: "Saintek",
    dibuat: "2026-03-05",
    deskripsi: "Latihan intensif subtes Penalaran Matematika dan Pemahaman Bacaan.",
  },
  {
    id: "to-3",
    nama: "Tryout Khusus Soshum & Literasi",
    peserta: 650,
    soal: 75,
    durasi: 105,
    status: "Draft",
    kategori: "Soshum",
    dibuat: "2026-03-08",
    deskripsi: "Fokus peningkatan skor Literasi B. Indo & B. Inggris.",
  },
];

export const soalBank: Soal[] = [
  {
    id: "s-1",
    pertanyaan: "Jika x + 3 = 7 dan 2y - 1 = 9, berapa nilai dari x + y?",
    opsi: ["7", "8", "9", "10", "11"],
    jawaban: 2,
    mapel: "Penalaran Matematika",
    tipe: "Pilihan Ganda",
    tingkat: "Sedang",
    tryout: "Tryout Akbar UTBK SNBT 2026 #1",
    pembahasan: "x = 4, y = 5. Maka x + y = 4 + 5 = 9.",
  },
  {
    id: "s-2",
    pertanyaan: "Manakah sinonim kata 'Efiemer' dalam konteks literasi formal?",
    opsi: ["Abadi", "Sementara", "Kuat", "Nyata", "Penting"],
    jawaban: 1,
    mapel: "Literasi Bahasa Indonesia",
    tipe: "Pilihan Ganda",
    tingkat: "Mudah",
    tryout: "Tryout Akbar UTBK SNBT 2026 #1",
    pembahasan: "Efiemer berarti berlangsung sangat singkat atau sementara.",
  },
];

export const rankingData: RankingItem[] = [
  { rank: 1, nama: "Ahmad Zaki", asal: "SMA Negeri 1 Jakarta", skor: 742, tryout: "Tryout Akbar UTBK SNBT 2026 #1", badge: "🥇" },
  { rank: 2, nama: "Siti Rahma", asal: "SMA Negeri 3 Bandung", skor: 728, tryout: "Tryout Akbar UTBK SNBT 2026 #1", badge: "🥈" },
  { rank: 3, nama: "Budi Santoso", asal: "SMA Negeri 5 Surabaya", skor: 698, tryout: "Tryout Akbar UTBK SNBT 2026 #1", badge: "🥉" },
];

export const laporanData: LaporanItem[] = [
  { nama: "Budi Santoso", tryout: "Tryout Akbar UTBK SNBT 2026 #1", skor: 698, persentil: "78%", waktu: "180 mnt", tanggal: "2026-03-10" },
  { nama: "Siti Rahma", tryout: "Tryout Akbar UTBK SNBT 2026 #1", skor: 728, persentil: "92%", waktu: "175 mnt", tanggal: "2026-03-10" },
];

export const notifUser = [
  { title: "Tryout Baru Tersedia!", desc: "Tryout Akbar UTBK SNBT 2026 #1 sudah dapat dikerjakan.", time: "10 mnt lalu", unread: true },
  { title: "Hasil Skor Keluar", desc: "Skor Tryout Pemantapan Saintek kamu adalah 698.", time: "1 jam lalu", unread: false },
];

export const notifAdmin = [
  { title: "Pengguna Baru Berdaftar", desc: "50 siswa baru mendaftar hari ini.", time: "5 mnt lalu", unread: true },
  { title: "Sistem Backup Berhasil", desc: "Database bank soal telah di-backup otomatis.", time: "2 jam lalu", unread: false },
];