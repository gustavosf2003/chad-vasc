import { RefreshCcw } from "react-feather";
import { Button } from "../ui/button";
import { glasgowQuestions } from "@/lib/glasgow";

const QuestionComponent = ({
  question,
  onSelectOption,
  restartTest,
}: {
  question: {
    id: number;
    category: string;
    options: { label: string; score: number }[];
  };
  onSelectOption: (score: number) => void;
  restartTest: () => void;
}) => (
  <div className="w-80">
    <div className="p-3 border rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm text-black/60">
          {question.id}/{glasgowQuestions.length}
        </p>
        {question.id > 1 && (
          <Button
            variant="secondary"
            className="flex gap-2 text-xs"
            onClick={restartTest}
          >
            <RefreshCcw width={12} strokeWidth={2.5} />
            Recomeçar teste
          </Button>
        )}
      </div>
      <div className="mt-5 min-h-10">
        <p className="text-xl font-medium">{question.category}</p>
        <ul className="mt-5 space-y-4">
          {question.options.map((option, index) => (
            <li key={index}>
              <Button
                onClick={() => onSelectOption(option.score)}
                className="w-full py-6 text-left"
                variant="outline"
              >
                {option.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default QuestionComponent;
