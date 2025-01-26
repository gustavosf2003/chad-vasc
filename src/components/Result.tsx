import { RefreshCcw } from "react-feather";
import { Button } from "./ui/button";

const ResultComponent = ({
  score,
  restartTest,
  text,
}: {
  score: number;
  restartTest: () => void;
  text: string;
}) => {
  return (
    <div className="w-80">
      <div className="p-3 border rounded-lg shadow-md">
        <div className="flex items-center gap-1">
          <p>Score final:</p>{" "}
          <span className="text-2xl font-medium">{score}</span>
        </div>
        <p className="mt-5">{text}</p>
        <Button
          variant="secondary"
          className="flex w-full gap-2 mt-8 text-xs"
          onClick={restartTest}
        >
          <RefreshCcw width={12} strokeWidth={2.5} className="animate-spin" />
          Refazer teste
        </Button>
      </div>
    </div>
  );
};

export default ResultComponent;
