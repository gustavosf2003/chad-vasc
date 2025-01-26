import { useCallback, useState } from "react";
import "./App.css";
import QuestionComponent from "./components/QuestionComponent";
import ResultComponent from "./components/ResultComponent";
import Layout from "./components/Layout";
import { ChadVascQuestions } from "./lib/chadVasc";

function ChadVasc() {
  const [pontuacao, setPontuacao] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextQuestion = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const onYes = useCallback(() => {
    if (currentIndex < ChadVascQuestions.length) {
      setPontuacao((prev) => prev + ChadVascQuestions[currentIndex].score);
      goToNextQuestion();
    }
  }, [currentIndex, goToNextQuestion]);

  const restartQuestions = useCallback(() => {
    setCurrentIndex(0);
    setPontuacao(0);
  }, []);

  return (
    <Layout
      className="flex flex-col items-center justify-center"
      currentPageName="ChadVasc"
    >
      {currentIndex >= ChadVascQuestions.length ? (
        <ResultComponent
          score={pontuacao}
          restartQuestions={restartQuestions}
        />
      ) : (
        <QuestionComponent
          question={ChadVascQuestions[currentIndex]}
          restartQuestions={restartQuestions}
          goToNextQuestion={goToNextQuestion}
          onYes={onYes}
        />
      )}
    </Layout>
  );
}

export default ChadVasc;
