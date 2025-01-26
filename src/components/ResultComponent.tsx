import { RefreshCcw } from "react-feather";
import { Button } from "./ui/button";

const ResultComponent = ({
  score,
  restartQuestions,
}: {
  score: number;
  restartQuestions: () => void;
}) => {
  const getAnticoagulationRecommendation = () => {
    if (score === 0) {
      return "Risco baixo, anticoagulação não indicada";
    } else if (score === 1) {
      return "Considerar anticoagulação oral após avaliação individualizada dos riscos e benefícios";
    } else {
      return "Anticoagulação oral recomendada";
    }
  };

  return (
    <div className="w-80">
      <div className="p-3 border rounded-lg shadow-md">
        <div className="flex items-center gap-1">
          <p>Score final:</p>{" "}
          <span className="text-2xl font-medium">{score}</span>
        </div>
        <p className="mt-5">{getAnticoagulationRecommendation()}</p>
        <Button
          variant="secondary"
          className="flex w-full gap-2 mt-8 text-xs"
          onClick={restartQuestions}
        >
          <RefreshCcw width={12} strokeWidth={2.5} className="animate-spin" />
          Refazer teste
        </Button>
      </div>
    </div>
  );
};

export default ResultComponent;
