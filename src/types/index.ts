export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer?: number;
}

export interface Tryout {
  id: number;
  title: string;
  category: string;
  durationMinutes: number;
  totalQuestions: number;
}