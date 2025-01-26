import { useCallback, useState } from "react";
import QuestionComponent from "./components/Glasgow/Question";
import ResultComponent from "./components/Result";
import { glasgowQuestions, GlasgowResultMessage } from "./lib/glasgow";
import Layout from "./components/Layout";

function GlasgowTest() {
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
      currentPageName="Glasgow"
    >
      {currentIndex >= glasgowQuestions.length ? (
        <ResultComponent
          score={totalScore}
          restartTest={restartTest}
          text={GlasgowResultMessage(totalScore)}
        />
      ) : (
        <QuestionComponent
          question={glasgowQuestions[currentIndex]}
          onSelectOption={handleOptionSelect}
          restartTest={restartTest}
        />
      )}
    </Layout>
  );
}

export default GlasgowTest;
