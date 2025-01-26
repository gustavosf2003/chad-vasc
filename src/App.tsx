import { useState } from "react";
import "./App.css";
import { Question } from "./types/Question";
import QuestionComponent from "./components/QuestionComponent";
import ResultComponent from "./components/ResultComponent";
import Layout from "./components/Layout";

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
    if (pergunta === 6) {
      return;
    }
    setPontuacao(pontuacao + getQuestion().score);
    goToNextQuestion();
  }

  function restartQuestions() {
    setPergunta(0);
    setPontuacao(0);
  }
  return (
    <Layout className="items-center justify-center">
      {pergunta === 6 ? (
        <ResultComponent
          score={pontuacao}
          restartQuestions={restartQuestions}
        />
      ) : (
        <QuestionComponent
          getQuestion={getQuestion}
          goToNextQuestion={goToNextQuestion}
          onYes={onYes}
          pontuacao={pontuacao}
        />
      )}
    </Layout>
  );
}

export default App;
