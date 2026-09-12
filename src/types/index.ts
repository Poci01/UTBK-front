import type React from "react";

export type Role = "admin" | "user";
export type LoginMode = "admin" | "user";
export type UserPage = "home" | "mytryout" | "ranking" | "detail" | "exam" | "result" | "profile" | "settings" | "notif";
export type ToastItem = { id: number; type: "success" | "error" | "info"; message: string };

export interface Tryout {
  id: string;
  nama: string;
  peserta: number;
  soal: number;
  durasi: number;
  status: string;
  kategori: string;
  dibuat: string;
  deskripsi: string;
}

export interface Soal {
  id: string;
  pertanyaan: string;
  opsi: string[];
  jawaban: number;
  mapel: string;
  tipe: string;
  tingkat: string;
  tryout: string;
  pembahasan: string;
}

export interface LaporanItem {
  nama: string;
  tryout: string;
  skor: number;
  persentil: string;
  waktu: string;
  tanggal: string;
}

export interface RankingItem {
  rank: number;
  nama: string;
  asal: string;
  skor: number;
  tryout: string;
  badge: string;
}

export interface NotifItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  time: string;
  unread: boolean;
}

export interface AlertItem {
  type: "success" | "error" | "info";
  message: string;
}

export interface ExamResult {
  skor: number;
  benar: number;
  salah: number;
  kosong: number;
  answers: Record<number, number>;
}