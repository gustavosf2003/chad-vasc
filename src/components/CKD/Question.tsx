import { CKDQuestion, Sex } from "@/types/Question";
import { Button } from "../ui/button";
import { RefreshCcw } from "react-feather";
import { ckdEpiQuestions } from "@/lib/ckd";
import { useEffect, useRef } from "react";
import { CustomCheckbox } from "../ui/custom-checkbox";
import { Input } from "../ui/input";

type QuestionProps = {
  question: CKDQuestion;
  goToNextQuestion: () => void;
  restartQuestions: () => void;
  setCreatinine: (value: number) => void;
  setIsBlack: (value: boolean) => void;
  setHeight: (value: number) => void;
  setAge: (value: number) => void;
  setSex: (value: Sex) => void;
};

const Question = ({
  question,
  goToNextQuestion,
  restartQuestions,
  setCreatinine,
  setIsBlack,
  setHeight,
  setAge,
  setSex,
}: QuestionProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (question.id === 3) {
      setCreatinine(parseFloat(event.target.value));
    } else if (question.id === 1) {
      setAge(parseInt(event.target.value, 10));
    } else if (question.id === 2) {
      if (event.target.value === "Masculino") {
        setSex("Masculino");
      } else {
        setSex("Feminino");
      }
    } else if (question.id === 4) {
      setHeight(parseFloat(event.target.value));
    } else if (question.id === 5) {
      setIsBlack(event.target.value === "Sim");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [question.id]);

  return (
    <div className="w-80">
      <div className="p-3 border rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <p className="text-sm text-black/60">
            {question.id}/{ckdEpiQuestions.length}
          </p>
          {question.id > 1 && (
            <Button
              variant="secondary"
              className="flex gap-2 text-xs"
              onClick={restartQuestions}
            >
              <RefreshCcw width={12} strokeWidth={2.5} />
              Recomeçar teste
            </Button>
          )}
        </div>
        <div className="mt-5 min-h-10">
          <p>{question.title}</p>
          <p className="text-sm text-black/80">{question.subtitle}</p>
        </div>
        {question.type === "number" && (
          <Input
            ref={inputRef}
            type="number"
            className="p-2 mt-2 border rounded"
            onChange={handleInputChange}
            min={0}
            placeholder={question.id === 4 ? "ex. 185" : ""}
          />
        )}
        {question.type === "checkbox" && question?.options && (
          <div className="flex flex-col gap-4 mt-2">
            {question.options.map((option, index) => (
              <label key={index} className="flex text-sm gap-x-2 text-black/80">
                <CustomCheckbox
                  type="checkbox"
                  className="p-2 border rounded"
                  name={`question-${question.id}`} // Garante que apenas um seja selecionado
                  onChange={(event) => {
                    // Quando um checkbox for selecionado, desmarca os outros
                    document
                      .querySelectorAll(`input[name="question-${question.id}"]`)
                      .forEach((input) => {
                        if (input !== event.target) {
                          (input as HTMLInputElement).checked = false;
                        }
                      });

                    handleInputChange(event);
                  }}
                  value={option}
                />
                <span className="">{option}</span>
              </label>
            ))}
          </div>
        )}

        <div className="flex gap-2 mt-10">
          <Button
            onClick={() => {
              // don't let user presss proceed without answering
              if (question.type === "number" && !inputRef.current?.value) {
                return;
              }
              if (
                question.type === "checkbox" &&
                !document.querySelector(
                  `input[name="question-${question.id}"]:checked`
                )
              )
                return;
              goToNextQuestion();
            }}
            className="w-full"
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
