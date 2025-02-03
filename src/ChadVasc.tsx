import { useCallback, useState } from "react";
import "./App.css";
import QuestionComponent from "./components/ChadVasc/Question";

import Layout from "./components/Layout";
import { ChadVascQuestions, chadVascResultMessage } from "./lib/chadVasc";
import ResultComponent from "./components/Result";

function ChadVasc() {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextQuestion = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const onYes = useCallback(() => {
    if (currentIndex < ChadVascQuestions.length) {
      setScore((prev) => prev + (ChadVascQuestions[currentIndex].score ?? 0));
      goToNextQuestion();
    }
  }, [currentIndex, goToNextQuestion]);

  const restartQuestions = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
  }, []);

  return (
    <Layout
      className="flex flex-col items-center justify-center"
      currentPageName="ChadVasc"
    >
      {currentIndex >= ChadVascQuestions.length ? (
        <ResultComponent
          restartTest={restartQuestions}
          score={score}
          text={chadVascResultMessage(score)}
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
