import { useCallback, useState } from "react";
import Layout from "./components/Layout";
import Question from "./components/CKD/Question";
import {
  CKD_EPI_ResultMessage,
  ckdEpiQuestions,
  getDiagnosis,
  getResult,
} from "./lib/ckd";
import { Sex } from "./types/Question";
import { Button } from "./components/ui/button";
import { RefreshCcw } from "react-feather";
import ResultCKDComponent, { PossibleColors } from "./components/CKD/Result";

function CKDTest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [creatinine, setCreatinine] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [sex, setSex] = useState<"Masculino" | "Feminino">("Masculino");
  const [height, setHeight] = useState<number>(0);
  const [isBlack, setIsBlack] = useState<boolean>(false);
  const handleCreatinineChange = (value: number) => {
    setCreatinine(value);
  };

  const handleAgeChange = (value: number) => {
    setAge(value);
  };

  const handleSexChange = (value: Sex) => {
    setSex(value);
  };

  const restartTest = useCallback(() => {
    setCurrentIndex(0);
    setCreatinine(0);
    setAge(0);
    setHeight(0);
    setIsBlack(false);
    setSex("Masculino");
  }, []);

  const getColor = (
    type: "ckd-epi" | "cockcroftGault" | "mdrd"
  ): PossibleColors => {
    const result = getDiagnosis(
      getResult({
        creatinine,
        age,
        height,
        isBlack,
        sex,
        type,
      })
    );
    if (result.includes("1 -")) {
      return "green";
    } else if (result.includes("2 -")) {
      return "lightGreen";
    } else if (result.includes("3 -")) {
      return "yellow";
    } else if (result.includes("4 -")) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <Layout
      className="flex flex-col items-center justify-center"
      currentPageName="CKD-EPI"
    >
      {currentIndex >= ckdEpiQuestions.length ? (
        <div className="flex flex-col items-center justify-center gap-8">
          <div>
            <p className="mb-2 text-xl">CKD Epi</p>
            <ResultCKDComponent
              color={getColor("ckd-epi")}
              restartTest={restartTest}
              text={CKD_EPI_ResultMessage({
                creatinine,
                age,
                height,
                isBlack,
                sex,
                type: "ckd-epi",
              })}
            />
          </div>
          <div>
            <p className="mb-2 text-xl">Cockcroft-Gault</p>
            <ResultCKDComponent
              color={getColor("cockcroftGault")}
              restartTest={restartTest}
              text={CKD_EPI_ResultMessage({
                creatinine,
                age,
                height,
                isBlack,
                sex,
                type: "cockcroftGault",
              })}
            />
          </div>
          <div>
            <p className="mb-2 text-xl">MDRD</p>
            <ResultCKDComponent
              color={getColor("mdrd")}
              restartTest={restartTest}
              text={CKD_EPI_ResultMessage({
                creatinine,
                age,
                height,
                isBlack,
                sex,
                type: "mdrd",
              })}
            />
          </div>
          <Button
            variant="secondary"
            className="flex w-full gap-2 mt-8 text-xs"
            onClick={restartTest}
          >
            <RefreshCcw width={12} strokeWidth={2.5} className="animate-spin" />
            Refazer teste
          </Button>
        </div>
      ) : (
        <Question
          question={ckdEpiQuestions[currentIndex]}
          goToNextQuestion={() => setCurrentIndex((prev) => prev + 1)}
          restartQuestions={restartTest}
          setHeight={setHeight}
          setIsBlack={setIsBlack}
          setCreatinine={handleCreatinineChange}
          setAge={handleAgeChange}
          setSex={handleSexChange}
        />
      )}
    </Layout>
  );
}

export default CKDTest;
