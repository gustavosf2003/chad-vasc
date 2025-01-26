import { Question } from "../types/Question";
import { Button } from "./ui/button";

const QuestionComponent = ({
  getQuestion,
  goToNextQuestion,
  onYes,
  pontuacao,
}: {
  getQuestion: () => Question;
  goToNextQuestion: () => void;
  onYes: () => void;
  pontuacao: number;
}) => {
  const question = getQuestion();
  console.log(pontuacao);
  return (
    <div className="w-80">
      <p className="text-sm text-black/60">{question.id}/6</p>
      <div className="min-h-10">
        <p className="mt-2">{question.title}</p>
        <p className="text-sm text-black/80">{question.subtitle}</p>
      </div>
      <div className="flex gap-2 mt-10">
        <Button onClick={goToNextQuestion} className="w-full" variant="outline">
          Não
        </Button>
        <Button onClick={onYes} className="w-full">
          Sim
        </Button>
      </div>
      {/* <p className="mt-10">{pontuacao}</p> */}
    </div>
  );
};

export default QuestionComponent;
