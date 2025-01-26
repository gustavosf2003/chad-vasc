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
      <p>{`Score: ${score}`}</p>
      <p>{getAnticoagulationRecommendation()}</p>
      <Button
        variant="secondary"
        className="flex gap-2 mt-10 text-xs"
        onClick={restartQuestions}
      >
        <RefreshCcw width={12} strokeWidth={2.5} className="animate-spin" />
        Refazer teste
      </Button>
    </div>
  );
};

export default ResultComponent;
