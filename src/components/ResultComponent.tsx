import { Button } from "./Button";

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
    <div>
      <p>{`Score: ${score}`}</p>
      <p>{getAnticoagulationRecommendation()}</p>
      <Button onClick={restartQuestions}>Refazer teste</Button>
    </div>
  );
};

export default ResultComponent;
