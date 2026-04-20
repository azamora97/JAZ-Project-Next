// ✅ Server Component — solo renderiza HTML
interface PropsButton {
  children: React.ReactNode;
  className: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  type = "button",
  onClick,
}: PropsButton) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
