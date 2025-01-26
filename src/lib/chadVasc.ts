import { Question } from "@/types/Question";

export const ChadVascQuestions: Question[] = [
  {
    id: 1,
    title: "Paciente tem ICC?",
    subtitle: "*sinais e sintomas ou FEVE menor ou igual a 40%?",
    score: 1,
  },
  {
    id: 2,
    title: "Paciente hipertenso?",
    subtitle: "",
    score: 1,
  },
  {
    id: 3,
    title: "Paciente tem mais de 75 anos?",
    subtitle: "",
    score: 2,
  },
  {
    id: 4,
    title: "Paciente é diabético?",
    subtitle: "DM1 ou DM2",
    score: 1,
  },
  {
    id: 5,
    title: "AVC/AIT prévio?",
    subtitle: "",
    score: 2,
  },
  {
    id: 6,
    title: "Doença vascular?",
    subtitle:
      "IAM prévio, doença vascular periférica arterial ou aterosclerose importante",
    score: 1,
  },
  {
    id: 7,
    title: "Idade entre 65 e 74 anos?",
    subtitle: "",
    score: 1,
  },
];

export const chadVascResultMessage = (score: number) => {
  if (score === 0) {
    return "Risco baixo, anticoagulação não indicada";
  } else if (score === 1) {
    return "Considerar anticoagulação oral após avaliação individualizada dos riscos e benefícios";
  } else {
    return "Anticoagulação oral recomendada";
  }
};
