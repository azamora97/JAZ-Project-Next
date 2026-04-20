// ✅ Server Component — solo renderiza HTML

type InputVariant = "default" | "error" | "success";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
}

const variantStyles: Record<InputVariant, React.CSSProperties> = {
  default: {
    border: "1px solid #ccc",
  },
  error: {
    border: "1px solid #dc2626",
    backgroundColor: "#fee2e2",
  },
  success: {
    border: "1px solid #16a34a",
    backgroundColor: "#dcfce7",
  },
};

// ✅ Server Component — solo renderiza HTML
export const Input = ({ variant = "default", ...props }: InputProps) => {
  return (
    <input
      {...props}
      style={{
        borderRadius: "6px",
        outline: "none",
        width: "100%",
        ...variantStyles[variant],
      }}
    />
  );
};
