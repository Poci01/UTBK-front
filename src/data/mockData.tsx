import { IcAlert, IcUsers, IcCheck, IcInfo, IcBook, IcAward, IcCheckSm } from "@/components/icons";
import type { Tryout, Soal, LaporanItem, RankingItem, NotifItem, AlertItem } from "@/types";

export const tryouts: Tryout[] = [
  { id:"TRY-001", nama:"UTBK Saintek Batch 1 2025", peserta:1240, soal:80, durasi:105, status:"Aktif", kategori:"Saintek", dibuat:"2 Jan 2025", deskripsi:"Paket simulasi UTBK lengkap untuk jalur Saintek. Mencakup Matematika, Fisika, Kimia, Biologi, dan TPS." },
  { id:"TRY-002", nama:"UTBK Soshum Intensif Mei", peserta:870, soal:75, durasi:105, status:"Aktif", kategori:"Soshum", dibuat:"10 Jan 2025", deskripsi:"Simulasi intensif untuk jalur Soshum. Mencakup Ekonomi, Geografi, Sejarah, Sosiologi, dan TPS." },
  { id:"TRY-003", nama:"Simulasi TPS Full-Day", peserta:520, soal:120, durasi:150, status:"Draft", kategori:"Campuran", dibuat:"14 Jan 2025", deskripsi:"Simulasi TPS penuh dengan soal-soal level tinggi untuk persiapan maksimal." },
  { id:"TRY-004", nama:"UTBK Saintek Batch 2 2025", peserta:0, soal:80, durasi:105, status:"Draft", kategori:"Saintek", dibuat:"20 Jan 2025", deskripsi:"Paket batch kedua untuk jalur Saintek 2025." },
  { id:"TRY-005", nama:"Tryout Kilat SBMPTN", peserta:3100, soal:60, durasi:75, status:"Selesai", kategori:"Campuran", dibuat:"5 Des 2024", deskripsi:"Tryout singkat padat untuk review cepat materi SBMPTN." },
];

export const soalBank: Soal[] = [
  { id:"SL-001", pertanyaan:"Jika f(x) = 2x² + 3x − 5, maka nilai dari f(3) adalah...", opsi:["16","22","28","34","40"], jawaban:1, mapel:"Matematika", tipe:"Pilihan Ganda", tingkat:"Sedang", tryout:"UTBK Saintek Batch 1", pembahasan:"f(3) = 2(9) + 3(3) − 5 = 18 + 9 − 5 = 22" },
  { id:"SL-002", pertanyaan:"Berapakah nilai lim(x→2) dari (x² − 4) / (x − 2)?", opsi:["0","2","4","8","Tidak ada"], jawaban:2, mapel:"Matematika", tipe:"Pilihan Ganda", tingkat:"Mudah", tryout:"Simulasi TPS", pembahasan:"(x²−4)/(x−2) = (x+2)(x−2)/(x−2) = x+2. Saat x=2, hasilnya 4." },
  { id:"SL-003", pertanyaan:"Bacaan berikut mengandung gagasan utama tentang perubahan iklim global. Kalimat yang paling mencerminkan gagasan utama tersebut adalah...", opsi:["Suhu bumi meningkat rata-rata 1,5°C","Banjir terjadi di banyak kota besar","Emisi karbon dioksida terus bertambah","Hutan hujan semakin berkurang luasnya","Polusi udara meningkat di kota industri"], jawaban:0, mapel:"Bahasa Indonesia", tipe:"Pilihan Ganda", tingkat:"Mudah", tryout:"UTBK Soshum", pembahasan:"Gagasan utama bacaan berfokus pada peningkatan suhu bumi secara global." },
  { id:"SL-004", pertanyaan:"Choose the correct verb form: 'She ___ to the library every day last week.'", opsi:["goes","go","went","had gone","has gone"], jawaban:2, mapel:"Bahasa Inggris", tipe:"Pilihan Ganda", tingkat:"Sulit", tryout:"UTBK Saintek Batch 1", pembahasan:"Kalimat ini menggunakan keterangan waktu 'last week' (lampau), sehingga menggunakan Simple Past Tense: 'went'." },
  { id:"SL-005", pertanyaan:"Peristiwa Rengasdengklok terjadi pada tanggal berapa?", opsi:["15 Agustus 1945","16 Agustus 1945","17 Agustus 1945","18 Agustus 1945","19 Agustus 1945"], jawaban:1, mapel:"Sejarah", tipe:"Pilihan Ganda", tingkat:"Mudah", tryout:"UTBK Soshum", pembahasan:"Peristiwa Rengasdengklok terjadi pada 16 Agustus 1945, sehari sebelum proklamasi kemerdekaan." },
  { id:"SL-006", pertanyaan:"Unsur kimia dengan nomor atom 6 adalah...", opsi:["Boron","Karbon","Nitrogen","Oksigen","Neon"], jawaban:1, mapel:"Kimia", tipe:"Pilihan Ganda", tingkat:"Mudah", tryout:"UTBK Saintek Batch 1", pembahasan:"Nomor atom 6 adalah Karbon (C), yang berada di periode 2 golongan IVA." },
  { id:"SL-007", pertanyaan:"Sebuah benda bermassa 2 kg dilempar vertikal ke atas dengan kecepatan awal 20 m/s. Tinggi maksimum yang dicapai adalah... (g = 10 m/s²)", opsi:["10 m","15 m","20 m","25 m","30 m"], jawaban:2, mapel:"Fisika", tipe:"Pilihan Ganda", tingkat:"Sedang", tryout:"UTBK Saintek Batch 1", pembahasan:"h = v²/2g = 400/20 = 20 m" },
  { id:"SL-008", pertanyaan:"Organ yang berfungsi sebagai tempat pertukaran gas O₂ dan CO₂ dalam sistem pernapasan manusia adalah...", opsi:["Trakea","Bronkus","Bronkiolus","Alveolus","Diafragma"], jawaban:3, mapel:"Biologi", tipe:"Pilihan Ganda", tingkat:"Mudah", tryout:"UTBK Saintek Batch 1", pembahasan:"Pertukaran gas terjadi di alveolus, kantung udara kecil di ujung bronkiolus." },
];

export const laporanData: LaporanItem[] = [
  { nama:"Andi Pratama", tryout:"UTBK Saintek Batch 1", skor:742, persentil:"92%", waktu:"98 mnt", tanggal:"5 Jan 2025" },
  { nama:"Siti Rahayu", tryout:"UTBK Soshum Intensif Mei", skor:698, persentil:"78%", waktu:"105 mnt", tanggal:"12 Jan 2025" },
  { nama:"Budi Santoso", tryout:"Simulasi TPS Full-Day", skor:615, persentil:"54%", waktu:"115 mnt", tanggal:"15 Jan 2025" },
  { nama:"Dewi Lestari", tryout:"UTBK Saintek Batch 1", skor:780, persentil:"97%", waktu:"89 mnt", tanggal:"5 Jan 2025" },
  { nama:"Rizky Maulana", tryout:"Tryout Kilat SBMPTN", skor:660, persentil:"68%", waktu:"58 mnt", tanggal:"8 Des 2024" },
];

export const rankingData: RankingItem[] = [
  { rank:1, nama:"Dewi Lestari", asal:"SMAN 1 Jakarta", skor:780, tryout:"UTBK Saintek Batch 1", badge:"gold" },
  { rank:2, nama:"Andi Pratama", asal:"SMAN 3 Bandung", skor:742, tryout:"UTBK Saintek Batch 1", badge:"silver" },
  { rank:3, nama:"Farah Aulia", asal:"SMAN 5 Surabaya", skor:731, tryout:"UTBK Soshum Intensif", badge:"bronze" },
  { rank:4, nama:"Rizky Maulana", asal:"SMAN 2 Yogyakarta", skor:718, tryout:"Tryout Kilat SBMPTN", badge:"" },
  { rank:5, nama:"Siti Rahayu", asal:"SMAN 8 Medan", skor:698, tryout:"UTBK Soshum Intensif", badge:"" },
  { rank:6, nama:"Budi Santoso", asal:"SMAN 4 Semarang", skor:660, tryout:"Simulasi TPS Full-Day", badge:"" },
  { rank:7, nama:"Rina Dewi", asal:"SMAN 7 Makassar", skor:641, tryout:"UTBK Saintek Batch 1", badge:"" },
  { rank:8, nama:"Ahmad Fauzi", asal:"SMAN 2 Palembang", skor:628, tryout:"UTBK Soshum Intensif", badge:"" },
];

export const notifAdmin: NotifItem[] = [
  { icon:<IcAlert size={15} className="text-amber-500"/>, title:"3 Tryout Menunggu Review", desc:"TRY-003, TRY-004 siap dipublikasikan", time:"5 mnt lalu", unread:true },
  { icon:<IcUsers size={15} className="text-indigo-500"/>, title:"Peserta Baru Bergabung", desc:"120 peserta baru mendaftar hari ini", time:"1 jam lalu", unread:true },
  { icon:<IcCheck size={15} className="text-emerald-500"/>, title:"Backup Database Selesai", desc:"Backup otomatis berhasil disimpan", time:"3 jam lalu", unread:false },
  { icon:<IcInfo size={15} className="text-sky-500"/>, title:"Update Sistem Tersedia", desc:"Versi 2.4.1 siap diinstall", time:"1 hari lalu", unread:false },
];

export const notifUser: NotifItem[] = [
  { icon:<IcBook size={15} className="text-indigo-500"/>, title:"Tryout Baru Tersedia", desc:"UTBK Saintek Batch 2 sudah dibuka", time:"2 jam lalu", unread:true },
  { icon:<IcAward size={15} className="text-amber-500"/>, title:"Peringkatmu Naik!", desc:"Kamu naik ke peringkat 5 nasional", time:"5 jam lalu", unread:true },
  { icon:<IcCheckSm size={15} className="text-emerald-500"/>, title:"Hasil Tryout Keluar", desc:"Lihat pembahasan UTBK Soshum", time:"1 hari lalu", unread:false },
];

export const statusColor: Record<string, string> = {
  Aktif:"bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  Draft:"bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  Selesai:"bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
  Mudah:"bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  Sedang:"bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  Sulit:"bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

export const alertsData: AlertItem[] = [
  { type:"success", message:"Tryout berhasil dipublikasikan dan tersedia untuk peserta." },
  { type:"error", message:"Gagal menyimpan soal. Pastikan semua field terisi dengan benar." },
  { type:"info", message:"Pembaruan sistem dijadwalkan pada 15 Februari 2025 pukul 02.00 WIB." },
];

export const pdfExtractedSample = [
  { pertanyaan:"Jika diketahui barisan aritmetika dengan suku pertama 3 dan beda 4, maka suku ke-10 adalah...", opsi:["35","39","43","47","51"], jawaban:1, mapel:"Matematika", tingkat:"Mudah", pembahasan:"U₁₀ = a + (n-1)d = 3 + 9×4 = 39" },
  { pertanyaan:"Sebuah larutan NaCl 0,1 M memiliki tekanan osmotik sebesar... (R=0,082, T=300K)", opsi:["0,82 atm","1,64 atm","2,46 atm","3,28 atm","4,10 atm"], jawaban:1, mapel:"Kimia", tingkat:"Sedang", pembahasan:"π = iMRT = 2×0,1×0,082×300 = 4,92 atm... (soal perlu koreksi)" },
  { pertanyaan:"Tokoh yang pertama kali mencetuskan konsep 'Pancasila' sebagai dasar negara adalah...", opsi:["Moh. Hatta","Soekarno","Soepomo","Moh. Yamin","Tan Malaka"], jawaban:1, mapel:"Sejarah", tingkat:"Mudah", pembahasan:"Soekarno menyampaikan pidato tentang Pancasila pada 1 Juni 1945." },
];
