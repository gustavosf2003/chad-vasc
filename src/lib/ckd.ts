import { CKDQuestion, Sex } from "@/types/Question";

// lib/ckdEpi.ts
export const ckdEpiQuestions: CKDQuestion[] = [
  {
    id: 1,
    title: "Idade do paciente",
    subtitle: "Insira a idade em anos.",
    type: "number",
  },
  {
    id: 2,
    title: "Sexo do paciente",
    subtitle: "Por favor, selecione o sexo.",
    type: "checkbox",
    options: ["Masculino", "Feminino"],
  },
  {
    id: 3,
    title: "Creatinina sérica",
    subtitle: "Por favor, insira o valor da creatinina.",
    type: "number",
  },
  {
    id: 4,
    title: "Altura do paciente",
    subtitle: "Insira a altura em centimetros(cm).",
    type: "number",
  },
  {
    id: 5,
    title: "Paciente é de raça negra?",
    subtitle: "",
    type: "checkbox",
    options: ["Sim", "Não"],
  },
];

export function getDiagnosis(tfg: number) {
  if (tfg >= 90) return "Estágio 1 - Normal";
  if (tfg >= 60) return "Estágio 2 - Leve redução";
  if (tfg >= 30) return "Estágio 3 - Moderada redução";
  if (tfg >= 15) return "Estágio 4 - Severa redução";
  return "Estágio 5 - Falência renal - Diálise";
}
type Variables = {
  creatinine: number;
  age: number;
  sex: Sex;
  height: number;
  isBlack: boolean;
  type?: "ckd-epi" | "cockcroftGault" | "mdrd";
};

function calculateCkdEpi(creatinine: number, age: number, sex: Sex): number {
  // Definição dos parâmetros baseados no sexo
  const kappa = sex === "Feminino" ? 0.7 : 0.9;
  const alpha = sex === "Feminino" ? -0.241 : -0.302;
  const sexAdjustment = sex === "Feminino" ? 1.012 : 1;

  // Cálculo da CKD-EPI
  const minScr = Math.min(creatinine / kappa, 1) ** alpha;
  const maxScr = Math.max(creatinine / kappa, 1) ** -1.2;
  const ageFactor = 0.9938 ** age;

  const eGFR = 142 * minScr * maxScr * ageFactor * sexAdjustment;
  return parseFloat(eGFR.toFixed(2)); // Retorna com duas casas decimais
}

function idealBodyWeight(height: number, sex: Sex): number {
  const weight = sex === "Feminino" ? 45.5 : 50;
  const ibw = weight + 0.91 * (height - 152.4);
  return Number(ibw.toFixed(2));
}

function calculateCockcroftGault(
  creatinine: number,
  age: number,
  height: number,
  sex: Sex
): number {
  const ibw = idealBodyWeight(height, sex);
  console.log(ibw);
  const factor = sex === "Feminino" ? 0.85 : 1.0;

  // Cockcroft-Gault formula
  const crcl = ((140 - age) * ibw * factor) / (creatinine * 72);
  return Number(crcl.toFixed(2));
}
function calculateMdrd(
  creatinine: number,
  age: number,
  sex: Sex,
  isBlack: boolean
): number {
  // Constants for the MDRD formula
  const creatinineExponent = -1.154;
  const ageExponent = -0.203;
  const sexMultiplier = sex === "Feminino" ? 0.742 : 1;
  const raceMultiplier = isBlack ? 1.212 : 1;

  // Calculate the eGFR using the MDRD formula
  const eGFR =
    186 *
    Math.pow(creatinine, creatinineExponent) *
    Math.pow(age, ageExponent) *
    sexMultiplier *
    raceMultiplier;

  // Round the result to 2 decimal places
  return Math.round(eGFR * 100) / 100;
}

export function getResult(variables: Variables) {
  if (variables.type === "ckd-epi") {
    return calculateCkdEpi(variables.creatinine, variables.age, variables.sex);
  } else if (variables.type === "cockcroftGault") {
    return calculateCockcroftGault(
      variables.creatinine,
      variables.age,
      variables.height,
      variables.sex
    );
  } else {
    return calculateMdrd(
      variables.creatinine,
      variables.age,
      variables.sex,
      variables.isBlack
    );
  }
}

export const CKD_EPI_ResultMessage = (variables: Variables) => {
  return `TFG: <b><span style="font-size:20px">${getResult(variables).toFixed(2)}</span> ml/min/1.73m²</b>. <br/>
   O diagnóstico é: <br/>  <span style="font-weight:700">${getDiagnosis(getResult(variables))}</span>.`;
};
