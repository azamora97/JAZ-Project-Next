// ✅ Server Component — solo renderiza HTML
import type { CardStyle } from "@/features/tickets/interface";

interface PropsCard {
  className: string;
  cardStyle: CardStyle;
  children: React.ReactNode;
}

const CardColors: Record<CardStyle, string> = {
  default: "#e8e8e8",
  primary: "#3a547e",
  BACKLOG: "#a7a7a7",
  TODO: "#3a547e",
  "IN-PROGRESS": "#0a3f8f",
  DONE: "#22c55e",
};

export const Card: React.FC<PropsCard> = ({
  children,
  className,
  cardStyle,
}) => {
  return (
    <div
      className={`${className} transition-transform duration-300 hover:-translate-y-2 cursor-pointer`}
      style={{
        borderLeft: `3px solid ${CardColors[cardStyle ?? CardColors.default]}`,
      }}
    >
      {children}
    </div>
  );
};
