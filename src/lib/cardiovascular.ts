export type CardioRiskQuestion = {
  id: number;
  title: string;
  subtitle?: string;
  score: number;
};

export const cardioRiskQuestions: CardioRiskQuestion[] = [
  { id: 1, title: "Pressão alta?", score: 1 },
  { id: 2, title: "Colesterol alto?", score: 1 },
  { id: 3, title: "Diabetes?", score: 1 },
  { id: 4, title: "Fumante?", score: 1 },
  {
    id: 5,
    title: "Histórico familiar de doenças cardíacas?",
    score: 1,
  },
  { id: 6, title: "Sobrepeso ou obesidade?", score: 1 },
  { id: 7, title: "Pratica exercícios físicos regularmente?", score: -1 },
  { id: 8, title: "Segue uma dieta equilibrada?", score: -1 },
];

export const CardioRiskResultMessage = (score: number): string => {
  if (score >= 4) return "Alto risco cardiovascular.";
  if (score >= 2) return "Risco moderado.";
  return "Baixo risco cardiovascular.";
};
