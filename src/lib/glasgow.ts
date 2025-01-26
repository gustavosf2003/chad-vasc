export const glasgowQuestions = [
  {
    id: 1,
    category: "Abertura Ocular",
    options: [
      { label: "Espontânea", score: 4 },
      { label: "Ao comando verbal", score: 3 },
      { label: "Ao estímulo doloroso", score: 2 },
      { label: "Nenhuma resposta", score: 1 },
    ],
  },
  {
    id: 2,
    category: "Resposta Verbal",
    options: [
      { label: "Orientada", score: 5 },
      { label: "Confusa", score: 4 },
      { label: "Palavras inapropriadas", score: 3 },
      { label: "Sons incompreensíveis", score: 2 },
      { label: "Nenhuma resposta", score: 1 },
    ],
  },
  {
    id: 3,
    category: "Resposta Motora",
    options: [
      { label: "Obedece comandos", score: 6 },
      { label: "Localiza dor", score: 5 },
      { label: "Retirada à dor", score: 4 },
      { label: "Flexão anormal (decorticação)", score: 3 },
      { label: "Extensão anormal (descerebração)", score: 2 },
      { label: "Nenhuma resposta", score: 1 },
    ],
  },
  {
    id: 4,
    category: "Resposta Pupilar (GCS-P)",
    options: [
      { label: "Reatividade pupilar bilateral", score: 0 },
      { label: "Reatividade pupilar unilateral", score: -1 },
      { label: "Sem reatividade pupilar", score: -2 },
    ],
  },
];

export const GlasgowResultMessage = (score: number) => {
  if (score <= 8) return "Lesão grave (coma).";
  if (score <= 12) return "Lesão moderada.";
  return "Lesão leve ou estado normal.";
};
