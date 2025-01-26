type CardProps = {
  title: string;
  rightText: string;
  description: string;
};

const Card = ({ title, rightText, description }: CardProps) => {
  return (
    <div className="w-full p-3 border border-l-8 border-l-[#ce2772] rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <p>{title}</p>
        <p className="text-xs text-black/60">{rightText}</p>
      </div>
      <p className="mt-1 text-xs text-black/70">{description}</p>
    </div>
  );
};

export default Card;
