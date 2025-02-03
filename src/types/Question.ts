export type Question = {
  id: number;
  title: string;
  subtitle: string;
  score?: number;
  type?: "number" | "select";
  options?: string[];
};

export type CKDQuestion = {
  id: number;
  title: string;
  subtitle: string;
  type: "number" | "checkbox";
  options?: string[] | undefined;
};

export type Sex = "Masculino" | "Feminino";
