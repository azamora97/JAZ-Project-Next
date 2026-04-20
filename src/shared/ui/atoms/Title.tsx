// ✅ Server Component — solo renderiza HTML
export const Title = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="subTitle">{children}</h2>;
};
