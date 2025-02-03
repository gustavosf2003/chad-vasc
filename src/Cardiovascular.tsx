import { useCallback, useState } from "react";
import ResultComponent from "./components/Result";

import Layout from "./components/Layout";
import {
  cardioRiskQuestions,
  CardioRiskResultMessage,
} from "./lib/cardiovascular";
import Question from "./components/Cardiovascular/Question";

function CardiovascularRiskTest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handleOptionSelect = useCallback((score: number) => {
    setTotalScore((prev) => prev + score);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const restartTest = useCallback(() => {
    setCurrentIndex(0);
    setTotalScore(0);
  }, []);

  return (
    <Layout
      className="flex flex-col items-center justify-center"
      currentPageName="Risco Cardiovascular"
    >
      {currentIndex >= cardioRiskQuestions.length ? (
        <ResultComponent
          score={totalScore}
          restartTest={restartTest}
          text={CardioRiskResultMessage(totalScore)}
        />
      ) : (
        <Question
          question={cardioRiskQuestions[currentIndex]}
          goToNextQuestion={() => setCurrentIndex((prev) => prev + 1)}
          restartQuestions={restartTest}
          onYes={() => handleOptionSelect(1)}
        />
      )}
    </Layout>
  );
}

export default CardiovascularRiskTest;
