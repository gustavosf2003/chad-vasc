import clsx from "clsx";

export type PossibleColors =
  | "green"
  | "lightGreen"
  | "yellow"
  | "orange"
  | "red";

const ResultCKDComponent = ({
  text,
  color,
}: {
  restartTest: () => void;
  text: string;
  color: PossibleColors;
}) => {
  const colorMap = {
    green: "border-green-900",
    lightGreen: "border-green-600",
    yellow: "border-yellow-400",
    orange: "border-orange-500",
    red: "border-red-600",
  };

  return (
    <div className="w-80 lg:w-[420px]">
      <div
        className={clsx(`p-3 border-4 rounded-lg shadow-md ${colorMap[color]}`)}
      >
        <p
          className=""
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></p>
      </div>
    </div>
  );
};

export default ResultCKDComponent;
