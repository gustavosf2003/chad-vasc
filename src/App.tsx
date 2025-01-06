import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

type Question = {
  title: string;
  subtitle: string;
  score: number;
};

function App() {
  const [pontuacao, setPontuacao] = useState(0);
  const [pergunta, setPergunta] = useState(0);

  function getQuestion(): Question {
    if (pergunta === 0) {
      return {
        title: "Paciente tem ICC?",
        subtitle: "*sinais e sintomas ou FEVE menor ou igual a 40%?",
        score: 1,
      };
    }
    if (pergunta === 1) {
      return {
        title: "Paciente hipertenso?",
        subtitle: "",
        score: 1,
      };
    }
    if (pergunta === 2) {
      return {
        title: "Paciente tem mais de 75 anos?",
        subtitle: "",
        score: 2,
      };
    }
    if (pergunta === 3) {
      return {
        title: "Paciente é diabético?",
        subtitle: "DM1 ou DM2",
        score: 1,
      };
    }
    if (pergunta === 4) {
      return {
        title: "AVC/AIT prévio?",
        subtitle: "",
        score: 2,
      };
    }
    if (pergunta === 5) {
      return {
        title: "Doença vascular?",
        subtitle:
          "IAM prévio, doença vascular periférica arterial ou aterosclerose importante",
        score: 1,
      };
    }

    return {
      title: "Idade entre 65 e 74 anos?",
      subtitle: "",
      score: 1,
    };
  }

  function goToNextQuestion() {
    setPergunta(pergunta + 1);
  }

  function onYes() {
    setPontuacao(pontuacao + getQuestion().score);
    goToNextQuestion();
  }

  return (
    <div
      className="
    flex justify-center items-center min-h-screen
    "
    >
      <div>
        <p>
          {getQuestion()?.title} (Pontuação: {getQuestion()?.score})
        </p>
        <p>{getQuestion()?.subtitle}</p>
        <div className="flex justify-around items-center mt-20 gap-2">
          <Button className="!bg-pink-400 w-full" onClick={goToNextQuestion}>
            Não
          </Button>
          <Button className="!bg-green-600 w-full" onClick={onYes}>
            Sim
          </Button>
        </div>
        <p className="text-3xl text-green-600">{pontuacao}</p>
      </div>
    </div>
  );
}

export default App;
