import { Question as QuestionType } from "@/types/Question";
import { Button } from "../ui/button";
import { ChadVascQuestions } from "@/lib/chadVasc";
import { RefreshCcw } from "react-feather";

const Question = ({
  question,
  goToNextQuestion,
  restartQuestions,
  onYes,
}: {
  question: QuestionType;
  goToNextQuestion: () => void;
  restartQuestions: () => void;
  onYes: () => void;
}) => (
  <div className="w-80">
    <div className="p-3 border rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm text-black/60">
          {question.id}/{ChadVascQuestions.length}
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
        <p className="">{question.title}</p>
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
    </div>
  </div>
);

export default Question;
